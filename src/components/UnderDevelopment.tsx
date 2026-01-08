"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";

export default function UnderDevelopment() {
    return (
        <main className="flex min-h-screen items-center justify-center px-4">
            <motion.section
                className="max-w-2xl text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    className="mb-6 flex justify-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Construction size={56} className="text-gray-700" />
                </motion.div>

                <h1 className="mb-6 text-2xl font-semibold">
                    Conteúdo em desenvolvimento
                </h1>

                <p className="mb-4 text-base leading-relaxed text-gray-600">
                    O <strong>EnglishStudyHub</strong> está em constante evolução. Este
                    módulo faz parte de uma trilha de aprendizagem cuidadosamente
                    planejada, pensada para oferecer uma experiência clara, progressiva
                    e realmente útil para quem deseja aprender inglês de forma estruturada.
                </p>

                <p className="mb-8 text-base leading-relaxed text-gray-600">
                    No momento, estamos expandindo este conteúdo com atenção aos detalhes,
                    exemplos práticos e uma abordagem didática que respeita o ritmo de
                    aprendizado. Estamos trabalhando para liberar esta página o mais
                    rápido possível, garantindo que ela esteja alinhada com a qualidade
                    e o propósito educacional do projeto.
                </p>

                <Link
                    href="/modulos"
                    className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
                >
                    Voltar para os módulos
                </Link>
            </motion.section>
        </main>
    );
}
