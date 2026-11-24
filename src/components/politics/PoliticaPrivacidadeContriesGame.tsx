import Link from "next/link";

export const metadata = {
    title: "Política de Privacidade - Countries Game | EnglishStudyHub",
    description:
        "Política de privacidade do aplicativo Countries Game, do EnglishStudyHub.",
};

export default function PoliticaPrivacidadeCountriesGame() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-16">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Política de Privacidade do Countries Game
                </h1>

                <p className="text-sm text-gray-500">
                    Última atualização: 23 de novembro de 2026
                </p>
            </header>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Esta política se aplica ao aplicativo <strong>Countries Game</strong> para
                Android, desenvolvido pelo <strong>EnglishStudyHub</strong>. O app é gratuito,
                não tem anúncios e foi feito para ajudar estudantes brasileiros a aprender os
                nomes dos países em inglês. A política do site englishstudyhub.com.br é um
                documento separado.
            </p>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    1. Resumo
                </h2>
                <p className="text-gray-700 mb-4">
                    O Countries Game <strong>não coleta, não envia e não compartilha dados
                    pessoais</strong>. Não há cadastro, login, anúncios, ferramentas de análise
                    nem rastreamento de uso dentro do app.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    2. Dados guardados no seu aparelho
                </h2>
                <p className="text-gray-700 mb-4">
                    Para o jogo funcionar, o app guarda <strong>somente no seu celular</strong>:
                    suas partidas (histórico), pontuações, estatísticas, o ranking local e a
                    preferência de som ligado ou desligado. Essas informações nunca saem do
                    aparelho e não são enviadas a nenhum servidor nosso.
                </p>
                <p className="text-gray-700 mb-4">
                    Para apagá-las, basta desinstalar o app ou limpar os dados dele nas
                    configurações do Android.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    3. Dados que não coletamos
                </h2>
                <p className="text-gray-700 mb-4">
                    O app não solicita nem acessa: nome, e-mail, telefone, localização,
                    contatos, fotos, microfone, câmera, identificador de publicidade ou qualquer
                    outro dado pessoal ou sensível.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    4. Links externos e recursos do sistema
                </h2>
                <p className="text-gray-700 mb-4">
                    Alguns botões do app abrem conteúdos fora dele, e só quando você toca neles:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>
                        <strong>Site do EnglishStudyHub</strong> e páginas relacionadas, abertos
                        no navegador. Nele valem a política e os cookies do próprio site.
                    </li>
                    <li>
                        <strong>Google Play</strong>, para avaliar o app. O pedido de avaliação
                        é feito pelo próprio Google Play, que trata os dados conforme a política
                        dele. O app não recebe sua nota nem seu comentário.
                    </li>
                    <li>
                        <strong>Compartilhar</strong>, que usa o menu padrão do Android. Você
                        escolhe o aplicativo e o destinatário, e o app não acompanha o que foi
                        enviado.
                    </li>
                    <li>
                        <strong>Páginas de terceiros</strong>, como o Instagram ou o WhatsApp de
                        professoras indicadas, caso essa opção esteja disponível. O app não envia
                        nenhum dado seu a elas, e o que você fizer nessas plataformas segue as
                        políticas delas.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    5. Informações técnicas da Google
                </h2>
                <p className="text-gray-700 mb-4">
                    O Google Play e o Android podem fornecer ao desenvolvedor relatórios
                    técnicos anônimos, como falhas e desempenho, para usuários que ativaram esse
                    compartilhamento no aparelho. Isso é gerenciado pelo Google e não é
                    realizado pelo app.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    6. Crianças
                </h2>
                <p className="text-gray-700 mb-4">
                    O Countries Game não é direcionado a crianças menores de 13 anos. Como o app
                    não coleta dados pessoais de nenhum usuário, nenhuma informação de crianças
                    é coletada.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    7. Seus direitos
                </h2>
                <p className="text-gray-700 mb-4">
                    Como não tratamos dados pessoais pelo app, não há dados seus conosco para
                    acessar, corrigir ou excluir. Se você nos escrever por e-mail, usaremos as
                    informações enviadas apenas para responder, e você pode pedir a exclusão
                    delas a qualquer momento, conforme a Lei Geral de Proteção de Dados (LGPD).
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    8. Alterações nesta política
                </h2>
                <p className="text-gray-700 mb-4">
                    Se o app passar a coletar algum dado ou a exibir anúncios, atualizaremos esta
                    página antes e informaremos a mudança na descrição da versão do app. A data
                    de atualização fica no topo.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">
                    9. Contato
                </h2>
                <p className="text-gray-700 mb-4">
                    Para dúvidas ou solicitações sobre privacidade do Countries Game:
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