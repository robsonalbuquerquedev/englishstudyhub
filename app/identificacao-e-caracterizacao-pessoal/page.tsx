"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, UserCheck, Users, MapPin } from "lucide-react";

export default function IdentificacaoECaracterizacaoPessoal() {
    const topicos = [
        {
            id: 1,
            titulo: "Nice to meet you",
            descricao:
                "Cumprimentos, apresentações e expressões básicas para iniciar uma conversa em inglês.",
            icone: <UserCheck className="w-8 h-8 text-blue-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/nice-to-meet-you",
        },
        {
            id: 2,
            titulo: "Meeting new friends",
            descricao:
                "Como conhecer novas pessoas, fazer perguntas simples e manter o diálogo fluindo.",
            icone: <Users className="w-8 h-8 text-green-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/meeting-new-friends",
        },
        {
            id: 3,
            titulo: "How to get there",
            descricao:
                "Dar e receber instruções de localização e deslocamento no dia a dia.",
            icone: <MapPin className="w-8 h-8 text-amber-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/how-to-get-there",
        },
    ];

    return (
        <main className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">
            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="flex justify-center mb-3">
                    <BookOpen className="w-12 h-12 text-blue-700" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
                    Identificação e Caracterização Pessoal
                </h1>
                <h2 className="text-lg md:text-xl text-blue-600 mt-2">
                    Localização no Tempo e no Espaço
                </h2>

                <p className="text-gray-700 mt-5 max-w-2xl mx-auto">
                    Este módulo apresenta expressões e estruturas básicas da língua inglesa
                    relacionadas à apresentação pessoal, localização no tempo e espaço, e
                    situações de cumprimento, despedida e cortesia.
                </p>
            </motion.div>

            {/* Lista de tópicos */}
            <div className="grid gap-8 md:grid-cols-3">
                {topicos.map((topico, index) => (
                    <motion.div
                        key={topico.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Link
                            href={topico.link}
                            className="block bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 text-center"
                        >
                            <div className="flex justify-center mb-4">{topico.icone}</div>
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">
                                {topico.titulo}
                            </h3>
                            <p className="text-gray-600 text-sm">{topico.descricao}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Créditos */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 text-sm text-gray-600 text-center border-t border-blue-200 pt-6"
            >
                <div className="flex items-center justify-center gap-3 mb-2">
                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path d="M2 4v16a2 2 0 0 0 2 2h16M2 4h16a2 2 0 0 1 2 2v16M2 4l10 6 10-6" />
                        </svg>
                    </motion.div>
                    <h3 className="font-semibold text-blue-700">Créditos</h3>
                </div>

                <p className="max-w-3xl mx-auto leading-relaxed text-gray-700">
                    O curso utiliza como base o material{" "}
                    <em>“Inglês Módulo 1 - Caderno 1”</em>, produzido pelos professores{" "}
                    <strong>
                        Helton Bezerra Moreira, Juciana Maria Paulo e Lourival Soares de Aquino
                        Filho
                    </strong>
                    , do <strong>Instituto Federal Sul-rio-grandense (IFSUL)</strong>, para a{" "}
                    <strong>Rede e-Tec Brasil</strong>.
                </p>
            </motion.div>
        </main>
    );
}
