"use client";

import { motion } from "framer-motion"
import { Heart, Repeat, Brain, Compass } from "lucide-react"

export default function SobreValoresSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 pb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-14"
            >
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Os valores por trás do EnglishStudyHub
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Este projeto não é sobre aprender rápido.
                    É sobre aprender de forma consciente, constante e possível.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                {/* Valor 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm"
                >
                    <Heart className="text-blue-700 mb-4" size={30} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Aprender sem pressão
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Cada pessoa tem seu tempo. Aqui, errar faz parte
                        e não existe cobrança por perfeição.
                    </p>
                </motion.div>

                {/* Valor 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm"
                >
                    <Repeat className="text-blue-700 mb-4" size={30} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Constância acima de tudo
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Um pouco todos os dias cria resultados reais.
                        O progresso acontece na repetição.
                    </p>
                </motion.div>

                {/* Valor 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm"
                >
                    <Brain className="text-blue-700 mb-4" size={30} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Clareza antes da complexidade
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Conceitos simples bem entendidos são
                        mais importantes do que regras avançadas confusas.
                    </p>
                </motion.div>

                {/* Valor 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm"
                >
                    <Compass className="text-blue-700 mb-4" size={30} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Aprendizado com propósito
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Estudar inglês aqui tem direção:
                        compreender, praticar e usar no mundo real.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
