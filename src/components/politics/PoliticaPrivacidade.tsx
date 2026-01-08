import Link from "next/link";

export default function PoliticaPrivacidade() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-16">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Política de Privacidade
                </h1>

                <p className="text-sm text-gray-500">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
            </header>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Esta Política de Privacidade descreve como o <strong>EnglishStudyHub</strong> coleta,
                utiliza e protege informações fornecidas pelos usuários deste site.
            </p>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    1. Informações Coletadas
                </h2>
                <p className="text-gray-700 mb-4">
                    O EnglishStudyHub não solicita cadastro nem coleta informações pessoais sensíveis
                    para acesso ao conteúdo.
                </p>
                <p className="text-gray-700 mb-4">
                    Apenas quando o usuário preenche o formulário de contato, as informações fornecidas
                    voluntariamente (nome, e-mail e mensagem) são utilizadas exclusivamente para
                    retorno da comunicação.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    2. Cookies e Dados de Acesso
                </h2>
                <p className="text-gray-700 mb-4">
                    Podemos utilizar cookies e ferramentas de análise (como Google Analytics) para
                    obter informações estatísticas de navegação, como páginas visitadas e tempo de uso
                    do site. Esses dados são anônimos e servem para melhorar a experiência do usuário.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    3. Publicidade (Google AdSense)
                </h2>
                <p className="text-gray-700 mb-4">
                    O site poderá exibir anúncios do Google AdSense. O Google pode usar cookies,
                    incluindo o cookie DART, para exibir anúncios com base nas visitas anteriores do
                    usuário a este e a outros sites.
                </p>
                <p className="text-gray-700 mb-4">
                    O usuário pode desativar o uso do cookie DART acessando:
                    <br />
                    <a
                        href="https://policies.google.com/technologies/ads"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline"
                    >
                        https://policies.google.com/technologies/ads
                    </a>
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    4. Programas de Afiliados
                </h2>
                <p className="text-gray-700 mb-4">
                    O EnglishStudyHub pode utilizar links de afiliados. Isso significa que, ao clicar
                    em alguns links e realizar uma ação ou compra, o site poderá receber uma comissão,
                    sem custo adicional para o usuário.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    5. Compartilhamento de Dados
                </h2>
                <p className="text-gray-700 mb-4">
                    Não compartilhamos, vendemos ou divulgamos dados pessoais de usuários com
                    terceiros. Toda informação enviada via formulário permanece confidencial.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    6. Links Externos
                </h2>
                <p className="text-gray-700 mb-4">
                    O EnglishStudyHub pode conter links para sites externos. Não nos responsabilizamos
                    pelas práticas de privacidade ou conteúdos desses sites. Recomendamos que o
                    usuário leia as políticas de cada plataforma visitada.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    7. Segurança
                </h2>
                <p className="text-gray-700 mb-4">
                    Utilizamos práticas básicas de segurança digital. No entanto, nenhum sistema é
                    totalmente imune a riscos. Evite enviar informações sensíveis por formulários
                    públicos.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    8. Consentimento
                </h2>
                <p className="text-gray-700 mb-4">
                    Ao utilizar este site, você concorda com esta Política de Privacidade.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    9. Contato
                </h2>
                <p className="text-gray-700 mb-4">
                    Para dúvidas ou solicitações relacionadas à privacidade, entre em contato:
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
