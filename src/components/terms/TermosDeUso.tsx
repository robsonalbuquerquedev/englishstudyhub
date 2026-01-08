import Link from "next/link";

export default function TermosDeUso() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-16">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Termos de Uso
                </h1>

                <p className="text-sm text-gray-500">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
            </header>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bem-vindo ao <strong>EnglishStudyHub</strong>.
                Ao acessar e utilizar este site, você concorda com os termos e
                condições descritos abaixo. Recomendamos a leitura atenta deste
                documento.
            </p>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    1. Propósito do Site
                </h2>
                <p className="text-gray-700 mb-4">
                    O EnglishStudyHub é um projeto educacional independente,
                    criado para organizar e compartilhar conteúdos voltados ao
                    aprendizado da língua inglesa.
                </p>
                <p className="text-gray-700 mb-4">
                    Os materiais disponibilizados têm caráter informativo e
                    educacional e <strong>não substituem</strong> cursos formais
                    ou certificações oficiais.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    2. Direitos Autorais
                </h2>
                <p className="text-gray-700 mb-4">
                    Todo o conteúdo original publicado no EnglishStudyHub é de
                    autoria própria, salvo quando indicado o contrário.
                </p>
                <p className="text-gray-700 mb-4">
                    É proibida a reprodução, distribuição ou utilização do
                    conteúdo para fins comerciais sem autorização prévia do
                    autor.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    3. Acesso ao Conteúdo
                </h2>
                <p className="text-gray-700 mb-4">
                    O acesso ao conteúdo do site é gratuito e não requer
                    cadastro ou login.
                </p>
                <p className="text-gray-700 mb-4">
                    O EnglishStudyHub não emite certificados de conclusão ou
                    comprovação de estudos.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    4. Proibição de Uso Indevido
                </h2>
                <p className="text-gray-700 mb-4">
                    É proibido utilizar o conteúdo do site para fins ilegais,
                    enganosos ou que violem direitos autorais e de terceiros.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    5. Privacidade
                </h2>
                <p className="text-gray-700 mb-4">
                    O tratamento de dados e informações dos usuários segue o
                    disposto na Política de Privacidade do EnglishStudyHub.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    6. Responsabilidade
                </h2>
                <p className="text-gray-700 mb-4">
                    O EnglishStudyHub não se responsabiliza por interpretações
                    incorretas, decisões ou resultados obtidos a partir do uso
                    das informações disponibilizadas no site.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    7. Publicidade e Monetização
                </h2>
                <p className="text-gray-700 mb-4">
                    O site pode exibir anúncios e utilizar links de afiliados
                    como forma de monetização, sempre respeitando as políticas
                    das plataformas envolvidas.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    8. Alterações nos Termos
                </h2>
                <p className="text-gray-700 mb-4">
                    Estes Termos de Uso podem ser atualizados a qualquer momento,
                    sem aviso prévio. Recomendamos a revisão periódica deste
                    documento.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    9. Contato
                </h2>
                <p className="text-gray-700 mb-4">
                    Para dúvidas, solicitações ou questões legais, entre em
                    contato:
                </p>
                <p className="text-gray-700 font-semibold mb-8">
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
