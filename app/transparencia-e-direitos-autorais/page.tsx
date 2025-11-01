"use client";

import Link from "next/link";

export default function TransparenciaDireitosAutorais() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">
                Transparência & Direitos Autorais
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O <strong>EnglishStudyHub</strong> é um projeto educacional independente e sem
                fins lucrativos, criado com o propósito de facilitar o estudo do curso de
                inglês oferecido gratuitamente pela plataforma pública{" "}
                <Link href="https://aprendamais.mec.gov.br/" className="text-blue-700 font-semibold underline" target="_blank">
                    Aprenda Mais (MEC)
                </Link>
                .
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Direitos sobre o Conteúdo</h2>

            <p className="text-gray-700 mb-4">
                Todo o conteúdo educacional original — incluindo textos, vídeos, imagens e
                materiais didáticos — pertence ao Ministério da Educação e à plataforma{" "}
                <strong>Aprenda Mais</strong>.
            </p>

            <p className="text-gray-700 mb-4">
                O EnglisStudyhHub <strong>não copia nem hospeda materiais completos do curso</strong>.
                Nosso objetivo é apenas:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Organizar temas e módulos</li>
                <li>Auxiliar no estudo e revisão</li>
                <li>Complementar a experiência educacional</li>
                <li>Direcionar usuários à plataforma oficial</li>
            </ul>

            <p className="text-gray-700 mb-6">
                Trechos curtos e descrições podem ser utilizados apenas com finalidade educativa
                e dentro do conceito de <strong>uso justo (fair use educacional)</strong>.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Certificação Oficial</h2>

            <p className="text-gray-700 mb-6">
                Para obter certificados oficiais, o estudante deve concluir o curso no site{" "}
                <Link href="https://aprendamais.mec.gov.br/" className="text-blue-700 font-semibold underline" target="_blank">
                    Aprenda Mais / MEC
                </Link>
                .
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Aviso Importante</h2>

            <p className="text-gray-700 mb-4">
                Este site <strong>não representa nem substitui</strong> a plataforma oficial.
            </p>

            <p className="text-gray-700 mb-6">
                Nosso objetivo é fornecer uma experiência complementar de estudo, com
                organização e acessibilidade para revisão de conteúdo.
            </p>

            <p className="text-sm text-gray-600">
                Caso algum conteúdo aqui presente viole direitos autorais, entre em contato
                imediatamente para remoção:
            </p>

            <p className="text-sm font-medium text-gray-700 mt-1">
                ✉️ robson.albuquerque.docs@gmail.com
            </p>

            <Link
                href="/"
                className="inline-block mt-10 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition"
            >
                ⬅️ Voltar ao início
            </Link>
        </main>
    );
}
