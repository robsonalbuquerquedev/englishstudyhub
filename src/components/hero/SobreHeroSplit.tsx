"use client";

import Image from "next/image"
import { motion } from "framer-motion"

export default function SobreHeroSplit() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <h1 className="text-4xl font-bold text-blue-800 mb-6">
                        Sobre o EnglishStudyHub
                    </h1>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        O <strong>EnglishStudyHub</strong> é um projeto independente que
                        representa minha própria jornada de estudo do inglês.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Aqui, acredito que <strong>1% de esforço diário já é aprendizado</strong>.
                        Não se trata de estudar horas sem parar, mas de evoluir um pouco todos os dias.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        O conteúdo é organizado em módulos — <strong>básico, intermediário e avançado</strong> —
                        combinando pesquisas, prática e reflexão para criar uma experiência clara,
                        progressiva e acessível.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Este espaço cresce junto comigo. Se eu aprendo, o projeto evolui.
                        Se o projeto evolui, todos aprendem juntos. 🚀
                    </p>
                </motion.div>

                {/* Creator Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex justify-center"
                >
                    <Image
                        src="/robson.png"
                        alt="Robson Albuquerque - Criador do EnglishStudyHub"
                        width={320}
                        height={320}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </motion.div>

            </div>
        </section>
    )
}
