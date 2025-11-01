"use client";

import Link from "next/link";

export default function TermosDeUso() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">
                Termos de Uso
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bem-vindo ao <strong>EnglisStudyhHub</strong>!
                Ao acessar este site, você concorda com os nossos termos de uso.
                Leia atentamente as informações abaixo.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">1. Propósito do Site</h2>
            <p className="text-gray-700 mb-4">
                O EnglisStudyhHub é um projeto educacional independente, sem fins lucrativos,
                criado para auxiliar estudantes no aprendizado de inglês com base nos conteúdos
                disponibilizados gratuitamente pela plataforma pública{" "}
                <strong>Aprenda Mais (MEC)</strong>.
            </p>

            <p className="text-gray-700 mb-4">
                Este site oferece materiais organizados, explicações complementares e recursos
                para estudo autônomo, porém <strong>não substitui</strong> a plataforma oficial.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">2. Direitos Autorais</h2>
            <p className="text-gray-700 mb-4">
                Todo conteúdo original pertence ao Ministério da Educação (MEC) e à plataforma
                Aprenda Mais. As informações aqui reorganizadas respeitam o uso educacional
                permitido e o princípio de <strong>uso justo (fair use educacional)</strong>.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">3. Acesso ao Conteúdo</h2>
            <p className="text-gray-700 mb-4">
                O acesso ao conteúdo deste site é livre e gratuito, sem necessidade de login.
            </p>
            <p className="text-gray-700 mb-4">
                Para certificação oficial, os cursos devem ser realizados diretamente na plataforma
                Aprenda Mais / MEC.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">4. Proibição de Uso Indevido</h2>
            <p className="text-gray-700 mb-4">
                É proibido copiar integralmente o conteúdo e utilizá-lo para fins comerciais,
                redistribuição ou publicação sem autorização.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">5. Privacidade</h2>
            <p className="text-gray-700 mb-4">
                Não coletamos dados sensíveis dos usuários.
                Caso o formulário de contato seja utilizado, as informações fornecidas serão usadas
                exclusivamente para comunicação com o usuário.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">6. Responsabilidade</h2>
            <p className="text-gray-700 mb-4">
                O EnglisStudyhHub não se responsabiliza por interpretações incorretas dos conteúdos
                ou uso inadequado das informações aqui publicadas.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">7. Publicidade</h2>
            <p className="text-gray-700 mb-4">
                Este site poderá exibir anúncios para fins de monetização, respeitando as políticas
                do Google AdSense e demais plataformas de publicidade.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-3">8. Contato</h2>
            <p className="text-gray-700 mb-4">
                Para dúvidas, solicitações ou questões legais, entre em contato:
            </p>

            <p className="text-gray-700 font-semibold mb-8">
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
