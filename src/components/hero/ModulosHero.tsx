"use client";

import { motion } from "framer-motion"

export default function ModulosHero() {
    return (
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-blue-800 mb-4"
            >
                Módulos de estudo
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
                Escolha seu nível, siga no seu ritmo e evolua um pouco todos os dias.
                Não importa onde você começa — o importante é continuar.
            </motion.p>
        </section>
    )
}
