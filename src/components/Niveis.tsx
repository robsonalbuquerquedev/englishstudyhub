import { Layers, BookOpen, GraduationCap } from "lucide-react"
import StudyNextSteps from "@/components/StudyNextSteps"

export default function Niveis() {
    return (
        <article className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
            {/* Title */}
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                    Níveis de Aprendizado no EnglishStudyHub
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    O <strong>EnglishStudyHub</strong> organiza o estudo do inglês em níveis progressivos para ajudar você
                    a evoluir com clareza, constância e propósito. Cada nível foi pensado para desenvolver
                    habilidades específicas, respeitando o tempo de aprendizado e a prática diária.
                </p>
            </header>

            {/* Básico */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-blue-800">Nível Básico</h2>
                </div>
                <p className="leading-relaxed mb-4">
                    O nível básico é o ponto de partida para quem está começando ou deseja reorganizar
                    fundamentos importantes do inglês. Aqui, o foco está na construção da base:
                    vocabulário essencial, estruturas simples, apresentações pessoais e situações do
                    cotidiano.
                </p>
                <p className="leading-relaxed mb-4">
                    Neste estágio, o objetivo não é falar rápido ou dominar regras complexas, mas ganhar
                    segurança. O estudante aprende a reconhecer padrões da língua, entender frases comuns
                    e se expressar de forma simples, porém funcional.
                </p>
                <p className="leading-relaxed">
                    O nível básico cria o hábito do estudo diário e prepara o terreno para que os próximos
                    níveis sejam encarados com menos esforço e mais confiança.
                </p>
            </section>

            {/* Intermediário */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-blue-800">Nível Intermediário</h2>
                </div>
                <p className="leading-relaxed mb-4">
                    O nível intermediário é onde o inglês começa a ganhar profundidade. O estudante já
                    consegue compreender textos, vídeos e diálogos mais longos, e passa a explorar
                    situações reais de comunicação.
                </p>
                <p className="leading-relaxed mb-4">
                    Aqui entram temas como cultura, mídia, educação, esportes e experiências pessoais.
                    A gramática é apresentada de forma contextual, ajudando o aluno a entender não apenas
                    as regras, mas quando e por que usá-las.
                </p>
                <p className="leading-relaxed">
                    Este nível fortalece a autonomia. O estudante começa a pensar mais em inglês, errar
                    com consciência e perceber evolução prática no dia a dia.
                </p>
            </section>

            {/* Avançado */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-blue-800">Nível Avançado</h2>
                </div>
                <p className="leading-relaxed mb-4">
                    O nível avançado é voltado para o uso real e confiante do inglês em diferentes
                    contextos. O foco está em conversas complexas, situações profissionais, viagens,
                    trabalho e comunicação natural.
                </p>
                <p className="leading-relaxed mb-4">
                    O estudante revisita tempos verbais, explora estruturas mais sofisticadas e aprende
                    a interpretar nuances da língua, como intenções, formalidade e tom.
                </p>
                <p className="leading-relaxed">
                    Neste nível, o inglês deixa de ser apenas um objeto de estudo e passa a ser uma
                    ferramenta prática para a vida cotidiana, estudos e carreira.
                </p>
            </section>
            <StudyNextSteps
                title="Próximo passo no seu aprendizado"
                description="Agora que você conhece os níveis do EnglishStudyHub, o próximo passo é acessar as trilhas e começar a estudar de forma organizada."
                links={[
                    {
                        label: "Entenda o método de estudo",
                        href: "/metodo"
                    },
                    {
                        label: "Acesse os módulos de estudo",
                        href: "/modulos"
                    }
                ]}
            />
        </article>
    )
}
