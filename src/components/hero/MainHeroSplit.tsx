"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AnchorButton from "@/components/ui/AnchorButton";

export default function MainHeroSplit() {
    return (
        <section className="max-w-7xl mx-auto grid gap-12 items-center md:grid-cols-2 py-16">

            {/* Left - Logo */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center md:justify-start"
            >
                <Image
                    src="/logo/studyenglish.png"
                    alt="StudyEnglishHub Logo"
                    width={380}
                    height={120}
                    priority
                    loading="eager"
                    className="drop-shadow-lg"
                />
            </motion.div>

            {/* Right - Content */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                    Bem-vindo ao EnglishStudyHub 🎓📘
                </h1>

                <p className="text-lg text-gray-700 mb-4 max-w-xl">
                    Um portal criado para organizar e simplificar seus estudos de inglês,
                    com acesso rápido a módulos, lições e glossários.
                </p>

                {/* Subtítulo orientativo */}
                <p className="text-sm text-gray-600 mb-6">
                    Escolha um módulo abaixo e estude no seu ritmo, do iniciante ao avançado 👇
                </p>

                <AnchorButton href="#ver-modulos">
                    Ver módulos
                </AnchorButton>

                <div className="mt-10 flex justify-center md:justify-start">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                        className="text-blue-700"
                    >
                        <ArrowDown className="w-8 h-8" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
