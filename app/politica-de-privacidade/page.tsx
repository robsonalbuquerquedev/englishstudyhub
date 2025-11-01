"use client";

import Link from "next/link";

export default function PoliticaPrivacidade() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">
                Política de Privacidade
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Esta Política de Privacidade descreve como o <strong>EnglishStudyHub</strong> coleta, utiliza e protege informações fornecidas pelos usuários deste site.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">1. Informações Coletadas</h2>
            <p className="text-gray-700 mb-4">
                O EnglishStudyHub não solicita cadastro nem coleta informações pessoais sensíveis
                para acesso ao conteúdo.
            </p>
            <p className="text-gray-700 mb-4">
                Apenas quando o usuário preenche o formulário de contato, as informações fornecidas
                voluntariamente (nome, e-mail e mensagem) são utilizadas exclusivamente para retorno
                da comunicação.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">2. Cookies e Dados de Acesso</h2>
            <p className="text-gray-700 mb-4">
                Podemos utilizar cookies e ferramentas de análise (como Google Analytics) para obter
                informações estatísticas de navegação, como páginas visitadas e tempo de uso do site.
                Esses dados são anônimos e servem para melhorar a experiência do usuário.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">3. Publicidade (Google AdSense)</h2>
            <p className="text-gray-700 mb-4">
                O site poderá exibir anúncios do Google AdSense. O Google pode usar cookies, incluindo
                o cookie DART, para exibir anúncios com base nas visitas anteriores do usuário ao site.
            </p>
            <p className="text-gray-700 mb-4">
                O usuário pode desativar o uso do cookie DART acessando:
                <br />
                <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    className="text-blue-700 underline"
                >
                    https://policies.google.com/technologies/ads
                </a>
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">4. Compartilhamento de Dados</h2>
            <p className="text-gray-700 mb-4">
                Não compartilhamos, vendemos ou divulgamos dados pessoais de usuários com terceiros.
                Toda informação enviada via formulário permanece confidencial.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">5. Links Externos</h2>
            <p className="text-gray-700 mb-4">
                O EnglishStudyHub contém links para sites externos, como a plataforma
                <strong> Aprenda Mais / MEC</strong>.
                Não nos responsabilizamos pelas práticas de privacidade desses sites.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">6. Segurança</h2>
            <p className="text-gray-700 mb-4">
                Utilizamos práticas básicas de segurança digital. No entanto, nenhum sistema é
                totalmente imune a riscos. Sempre evite enviar informações sensíveis através de
                formulários públicos.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">7. Consentimento</h2>
            <p className="text-gray-700 mb-4">
                Ao utilizar este site, você concorda com esta Política de Privacidade.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">8. Contato</h2>
            <p className="text-gray-700 mb-4">
                Para dúvidas ou solicitações relacionadas à privacidade, entre em contato:
            </p>
            <p className="font-semibold text-gray-800 mb-8">
                📧 robson.albuquerque.docs@gmail.com
            </p>

            <Link
                href="/"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition"
            >
                ⬅️ Voltar ao início
            </Link>
        </main>
    );
}
