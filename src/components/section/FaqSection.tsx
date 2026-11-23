import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { modulesData } from "@/data/modulesData";

type Faq = {
    question: string;
    /** Texto simples: usado na tela e no JSON-LD. */
    answer: string;
    /** Link interno opcional exibido abaixo da resposta. */
    link?: { href: string; label: string };
};

export default function FaqSection() {
    const count = (level: string) => modulesData.filter((m) => m.level === level).length;
    const firstModule = modulesData.find((m) => m.level === "basico") ?? modulesData[0];

    /**
     * Revise cada resposta para que reflita exatamente como o site funciona hoje.
     */
    const faqs: Faq[] = [
        {
            question: "O English Study Hub é gratuito?",
            // TODO: confirme e ajuste se algo mudar (por exemplo, quando os anúncios forem ativados).
            answer:
                "Sim. Os módulos e as lições podem ser acessados gratuitamente. O site pode exibir anúncios para ajudar a manter o projeto.",
        },
        {
            question: "Por onde começar a estudar inglês aqui?",
            answer: firstModule
                ? `Se você está começando, o melhor caminho é o nível Básico. Comece pelo módulo "${firstModule.title}" e avance na ordem em que os módulos aparecem.`
                : "Se você está começando, o melhor caminho é o nível Básico, seguindo os módulos na ordem em que aparecem.",
            link: firstModule
                ? { href: firstModule.link, label: `Começar: ${firstModule.title}` }
                : undefined,
        },
        {
            question: "Como os módulos estão organizados?",
            answer: `Os módulos são divididos em três níveis: Básico (${count("basico")} módulos), Intermediário (${count("intermediario")}) e Avançado (${count("avancado")}). Você pode seguir a ordem ou escolher uma trilha por objetivo, como viagem, trabalho ou conversação.`,
            link: { href: "#ver-modulos", label: "Ver todos os módulos" },
        },
        {
            question: "Não sei meu nível. O que faço?",
            answer:
                "Abra o primeiro módulo do nível Básico. Se o conteúdo parecer fácil demais, passe para o Intermediário, e depois para o Avançado. Você pode estudar no seu ritmo e voltar a qualquer módulo quando quiser.",
            link: { href: "#ver-modulos", label: "Escolher meu nível" },
        },
        {
            question: "Meu progresso fica salvo?",
            answer:
                "O site guarda a última página de estudo que você visitou apenas no seu próprio aparelho, para você continuar de onde parou. Nada disso é enviado a um servidor, e limpar os dados do navegador apaga esse registro.",
        },
        {
            question: "O que é o Countries Game e preciso dele para estudar?",
            answer:
                "O Countries Game é um jogo para celular que ajuda a memorizar os nomes dos países em inglês e a treinar a ortografia. Ele é um complemento opcional: os estudos principais acontecem nos módulos do site. O jogo é gratuito, não pede cadastro e funciona sem internet.",
            link: { href: "/countries-game", label: "Conhecer o Countries Game" },
        },
        {
            question: "Qual a melhor frequência para estudar?",
            answer:
                "Estudar um pouco todos os dias costuma render mais do que estudar muito de vez em quando. Sessões curtas e regulares ajudam a fixar vocabulário e estruturas.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
    };

    return (
        <section
            aria-labelledby="faq-title"
            className="max-w-3xl mx-auto mt-24 px-4"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />

            <header className="mb-8 text-center">
                <h2 id="faq-title" className="text-3xl font-bold text-blue-900">
                    Perguntas frequentes
                </h2>
                <p className="mt-2 text-gray-600">
                    Dúvidas comuns de quem está começando a estudar inglês aqui.
                </p>
            </header>

            <div className="space-y-3">
                {faqs.map((faq) => (
                    <details
                        key={faq.question}
                        className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm open:shadow-md"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-blue-900 [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
                            {faq.question}
                            <ChevronDown
                                className="h-5 w-5 shrink-0 text-blue-500 transition group-open:rotate-180"
                                aria-hidden="true"
                            />
                        </summary>

                        <p className="mt-3 text-sm text-gray-700">{faq.answer}</p>

                        {faq.link && (
                            <Link
                                href={faq.link.href}
                                className="mt-3 inline-block text-sm font-semibold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            >
                                {faq.link.label} →
                            </Link>
                        )}
                    </details>
                ))}
            </div>
        </section>
    );
}