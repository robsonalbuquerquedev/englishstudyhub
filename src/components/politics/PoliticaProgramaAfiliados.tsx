import Link from "next/link";

export default function PoliticaProgramaAfiliados() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-16">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Política de Programa de Afiliados
                </h1>

                <p className="text-sm text-gray-500">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
            </header>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Esta Política de Programa de Afiliados explica como o
                <strong> EnglishStudyHub</strong> pode utilizar links de afiliados
                como forma de monetização, mantendo sempre a transparência e o
                compromisso educacional com seus usuários.
            </p>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    1. O que são links de afiliados
                </h2>
                <p className="text-gray-700 mb-4">
                    Links de afiliados são links que direcionam o usuário para
                    produtos, serviços ou plataformas externas. Caso o usuário
                    realize uma ação ou compra por meio desses links, o
                    EnglishStudyHub poderá receber uma comissão.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    2. Uso de links de afiliados
                </h2>
                <p className="text-gray-700 mb-4">
                    Atualmente, o EnglishStudyHub pode ou não utilizar links de
                    afiliados em seus conteúdos. Caso sejam utilizados, isso será
                    feito de forma transparente e alinhada ao propósito
                    educacional do site.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    3. Isenção e transparência
                </h2>
                <p className="text-gray-700 mb-4">
                    A presença de links de afiliados não influencia a criação dos
                    conteúdos, opiniões ou recomendações apresentadas no site.
                    Todas as indicações são baseadas em estudos, pesquisas e
                    experiência do autor.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    4. Responsabilidade do usuário
                </h2>
                <p className="text-gray-700 mb-4">
                    Ao clicar em links de afiliados, o usuário passa a estar
                    sujeito às políticas, termos e condições das plataformas
                    externas. O EnglishStudyHub não se responsabiliza por
                    produtos, serviços ou práticas dessas plataformas.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    5. Alterações nesta política
                </h2>
                <p className="text-gray-700 mb-4">
                    Esta Política de Programa de Afiliados pode ser atualizada a
                    qualquer momento, sem aviso prévio. Recomendamos que o
                    usuário revise este documento periodicamente.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    6. Contato
                </h2>
                <p className="text-gray-700 mb-4">
                    Em caso de dúvidas sobre esta política, entre em contato:
                </p>
                <p className="font-semibold text-gray-800 mb-8">
                    📧 robson.albuquerque.docs@gmail.com
                </p>
            </section>

            <Link
                href="/"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition"
            >
                ⬅️ Voltar ao início
            </Link>
        </article>
    );
}
