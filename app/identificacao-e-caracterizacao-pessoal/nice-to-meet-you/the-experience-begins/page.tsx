"use client";

import { motion } from "framer-motion";
import { BookOpen, Target } from "lucide-react";

export default function TheExperienceBegins() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="flex justify-center mb-3">
                    <BookOpen className="w-12 h-12 text-blue-700" />
                </div>

                <h1 className="text-3xl font-bold text-blue-800 mb-2">
                    The Experience Begins
                </h1>

                <p className="text-gray-700 max-w-2xl mx-auto">
                    Bem-vindo(a) ao primeiro passo da sua jornada no inglês!
                    Aqui você aprenderá estruturas essenciais para se comunicar desde o primeiro contato.
                </p>
            </motion.div>

            {/* Objetivos */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-2">
                    <Target className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Cumprimentar e despedir-se, utilizando expressões adequadas.</li>
                    <li>Utilizar expressões de cortesia para pedidos e agradecimentos.</li>
                    <li>Apresentar-se e indicar nacionalidade usando o verbo <em>To be</em>, pronomes pessoais e adjetivos possessivos.</li>
                    <li>
                        Soletrar e reconhecer o alfabeto em inglês, identificando nomes, países,
                        nacionalidades e endereços de e-mail.
                    </li>
                </ul>
            </section>

            {/* Conteúdo introdutório */}
            <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
                <h3 className="text-xl font-bold text-blue-700 mb-3">The experience begins</h3>

                <p className="text-gray-700 leading-relaxed">
                    Neste primeiro módulo você conhecerá algumas estruturas básicas do inglês para
                    saudar e apresentar-se. Também verá como utilizar o verbo <em>To be</em> ao soletrar
                    e informar nomes de pessoas, nacionalidade, país de origem e e-mail.
                    Estes conteúdos auxiliarão em um contato inicial básico, mas fundamental para a comunicação em língua inglesa.
                </p>
            </section>

            {/* Créditos */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-600 text-center border-t border-blue-200 pt-6"
            >
                <p className="max-w-2xl mx-auto leading-relaxed">
                    <strong>Créditos:</strong> Este material foi baseado em:<br />
                    MOREIRA, Helton Bezerra; PAULO, Juciana Maria; FILHO, Lourival Soares de Aquino;
                    LIMA, Júlio César Ferreira. <em>English.</em> Instituto Federal Sul-riograndense / Rede e-Tec Brasil, Pelotas: 2015.
                </p>
            </motion.div>

            {/* Navegação entre módulos */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-12 flex justify-between items-center"
            >
                {/* Botão Voltar */}
                <a
                    href="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-300 
    text-blue-700 hover:bg-blue-50 hover:-translate-x-1 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Voltar
                </a>

                {/* Botão Próximo */}
                <a
                    href="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/episode"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white 
    hover:bg-blue-700 hover:translate-x-1 transition-all duration-200"
                >
                    Próximo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </motion.div>
        </main>
    );
}
