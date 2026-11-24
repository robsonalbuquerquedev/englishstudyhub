import Image from "next/image";
import Link from "next/link";
import { Target, Languages, Gamepad2, ArrowRight } from "lucide-react";

/**
 * TODO: confira os hrefs e, se possível, mova para lib/routes.ts.
 */
const METHOD_STEPS = [
    {
        icon: Target,
        title: "1. Escolha o seu nível",
        description:
            "Comece pelo módulo certo para o seu momento, sem pular etapas e sem repetir o que você já sabe.",
        href: "#ver-modulos",
        cta: "Ver módulos",
    },
    {
        icon: Languages,
        title: "2. Amplie o vocabulário",
        description:
            "Consulte os glossários por tema e aprenda as palavras em contexto, com exemplos de uso.",
        href: "/glossario",
        cta: "Abrir glossários",
    },
    {
        icon: Gamepad2,
        title: "3. Fixe praticando",
        description:
            "Treine a memória e a ortografia com o Countries Game, direto no navegador ou no app.",
        href: "/countries-game",
        cta: "Jogar agora",
    },
] as const;

export default function InspirationSection() {
    return (
        <section
            aria-labelledby="inspiration-title"
            className="mt-24 bg-blue-50 py-16"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Missão */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2
                        id="inspiration-title"
                        className="text-3xl font-bold text-blue-900 mb-4"
                    >
                        Aprender inglês é uma jornada, e você não precisa fazê-la sozinho
                    </h2>

                    <p className="text-gray-700 mb-3">
                        O English Study Hub nasceu para organizar o estudo de inglês de quem
                        é brasileiro: conteúdo claro, em português, na ordem certa e sem
                        custo. Comece no seu ritmo e evolua um pouco a cada dia.
                    </p>

                    <p className="text-sm text-gray-500 italic" lang="en">
                        Learning English is a journey. Start at your own pace and improve
                        every day.
                    </p>
                </div>

                {/* Como estudar */}
                <ol className="mt-12 grid gap-6 md:grid-cols-3">
                    {METHOD_STEPS.map(({ icon: Icon, title, description, href, cta }) => (
                        <li
                            key={title}
                            className="flex flex-col gap-3 rounded-xl bg-white p-6 shadow-md"
                        >
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </span>

                            <h3 className="font-semibold text-blue-900">{title}</h3>
                            <p className="text-sm text-gray-600">{description}</p>

                            <Link
                                href={href}
                                className="group mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            >
                                {cta}
                                <ArrowRight
                                    className="h-4 w-4 transition group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                        </li>
                    ))}
                </ol>

                {/* Autor */}
                <aside
                    aria-label="Sobre o criador"
                    className="mt-12 mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-xl bg-white p-6 text-center shadow-md sm:flex-row sm:text-left"
                >
                    <Image
                        src="/robson.png"
                        alt="Robson Albuquerque, criador do English Study Hub"
                        width={128}
                        height={128}
                        className="h-16 w-16 shrink-0 rounded-full object-cover shadow"
                    />

                    <div>
                        <p className="font-semibold text-blue-900">
                            Robson Albuquerque, criador do English Study Hub
                        </p>
                        {/* TODO: escreva 1 ou 2 frases reais sobre você e sua motivação */}
                        <p className="mt-1 text-sm text-gray-600">
                            Criei o English Study Hub para que estudar inglês seja mais simples
                            e organizado. Conheça a história do projeto e como ele evolui.
                        </p>
                        <Link
                            href="/sobre"
                            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                            Conheça o projeto
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </aside>
            </div>
        </section>
    );
}