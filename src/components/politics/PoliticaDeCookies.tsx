import Link from "next/link";

export default function PoliticaDeCookies() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Política de Cookies
                </h1>

                <p className="text-sm text-gray-500">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
            </header>

            <p className="mb-6">
                Bem-vindo ao <strong>EnglisStudyhHub</strong>!
                Esta Política de Cookies explica como utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar uso do site e oferecer conteúdos relevantes.
            </p>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-3">
                    O que são Cookies?
                </h2>
                <p className="mb-4">
                    Cookies são pequenos arquivos armazenados no seu dispositivo quando você visita um site.
                    Eles permitem que o site reconheça seu navegador e lembre informações como preferências, login e páginas visitadas.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-3">
                    Como usamos Cookies
                </h2>
                <p className="mb-4">
                    Utilizamos cookies para oferecer uma navegação mais eficiente e personalizada. Eles são usados para:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Guardar preferências de navegação</li>
                    <li>Melhorar performance e segurança</li>
                    <li>Analisar estatísticas de acesso e uso do site</li>
                    <li>Exibir conteúdos mais relevantes ao usuário</li>
                    <li>Validar e otimizar campanhas (como Google AdSense)*</li>
                </ul>

                <p className="text-sm text-gray-600 mb-8">
                    *Quando ativos — este site poderá usar serviços terceiros como Google Ads e Google Analytics que também utilizam cookies.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-3">
                    Tipos de Cookies utilizados
                </h2>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Essenciais</strong> — necessários para funcionamento do site</li>
                    <li><strong>Funcionais</strong> — lembram suas preferências e configurações</li>
                    <li><strong>Analíticos</strong> — ajudam a entender como os usuários interagem com o site</li>
                    <li><strong>Marketing</strong> — usados para personalizar anúncios (quando aplicável)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-3">
                    Gerenciamento de Cookies
                </h2>
                <p className="mb-4">
                    Ao acessar o EnglishStudyHub, você pode aceitar ou recusar cookies essenciais e analíticos.
                </p>

                <p className="mb-4">
                    Você também pode alterar suas preferências a qualquer momento pelo seu navegador:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                </ul>

                <p className="mb-6">
                    Se optar por desativar cookies, algumas funcionalidades do site podem ser limitadas.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-3">
                    Conformidade Legal
                </h2>
                <p className="mb-6">
                    Esta política está alinhada com:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li><strong>Lei Geral de Proteção de Dados (LGPD - Brasil)</strong></li>
                    <li><strong>Regulamento Geral sobre a Proteção de Dados (GDPR - União Europeia)</strong></li>
                    <li><strong>California Consumer Privacy Act (CCPA - EUA)</strong>, quando aplicável</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-3">
                    Atualizações desta Política
                </h2>
                <p className="mb-8">
                    Esta política pode ser atualizada periodicamente para refletir mudanças tecnológicas, legais ou operacionais.
                    Recomendamos revisar esta página ocasionalmente.
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
