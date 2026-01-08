import { Compass, Route, Repeat } from "lucide-react"
import StudyNextSteps from "@/components/StudyNextSteps"

export default function Metodo() {
    return (
        <article className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
            {/* Title */}
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                    O Método de Estudo do EnglishStudyHub
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    O <strong>EnglishStudyHub</strong> foi pensado para ajudar você a estudar inglês de forma consciente,
                    organizada e possível no dia a dia. O método não depende de pressa, mas de constância,
                    clareza e prática real ao longo do tempo.
                </p>
            </header>

            {/* Como estudar */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <Compass className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-blue-800">Como estudar inglês</h2>
                </div>
                <p className="leading-relaxed mb-4">
                    Estudar inglês de forma eficiente não significa passar horas seguidas decorando regras.
                    No <strong>EnglishStudyHub</strong>, o foco está em entender aos poucos, revisar com frequência e aplicar
                    o que foi aprendido em contextos reais.
                </p>
                <p className="leading-relaxed mb-4">
                    A recomendação é escolher um horário simples e realista, mesmo que seja curto.
                    Quinze ou vinte minutos diários são suficientes quando o estudo é direcionado e
                    organizado. O importante é criar contato frequente com a língua.
                </p>
                <p className="leading-relaxed">
                    Ler, ouvir, repetir e refletir fazem parte do processo. Errar é esperado e faz parte
                    do aprendizado. O progresso vem da continuidade, não da perfeição.
                </p>
            </section>

            {/* Como usar as trilhas */}
            <section className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <Route className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-blue-800">Como usar as trilhas de estudo</h2>
                </div>
                <p className="leading-relaxed mb-4">
                    As trilhas de estudo organizam o conteúdo em uma sequência lógica, do básico ao
                    avançado. Cada trilha reúne módulos que se complementam, ajudando o estudante a
                    avançar sem lacunas importantes.
                </p>
                <p className="leading-relaxed mb-4">
                    O ideal é seguir a ordem proposta, respeitando o tempo de cada módulo. Não é necessário
                    entender tudo de forma imediata. Revisitar conteúdos faz parte do método e fortalece
                    a memorização.
                </p>
                <p className="leading-relaxed">
                    As trilhas funcionam como um guia. Elas mostram o caminho, mas o ritmo é seu.
                    Avançar com consciência evita frustrações e torna o aprendizado mais leve.
                </p>
            </section>

            {/* Constância, prática e organização */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <Repeat className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-blue-800">
                        Constância, prática e organização
                    </h2>
                </div>
                <p className="leading-relaxed mb-4">
                    O principal pilar do método é a constância. Aprender um idioma é um processo acumulativo.
                    Pequenos avanços diários geram resultados mais sólidos do que longos períodos de estudo
                    esporádico.
                </p>
                <p className="leading-relaxed mb-4">
                    A prática frequente ajuda o cérebro a reconhecer padrões e ganhar naturalidade.
                    Mesmo atividades simples, como reler um conteúdo ou revisar vocabulário, fortalecem
                    o aprendizado.
                </p>
                <p className="leading-relaxed">
                    A organização evita sobrecarga. Saber o que estudar, em que ordem e com qual objetivo
                    torna o processo mais claro, motivador e sustentável ao longo do tempo.
                </p>
            </section>
            <StudyNextSteps
                title="Próximos passos no seu estudo"
                description="Agora que você entende como estudar e usar o método, o próximo passo é conhecer os níveis e escolher sua trilha de aprendizado."
                links={[
                    {
                        label: "Conheça os níveis de aprendizado",
                        href: "/niveis"
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
