"use client";

import { motion } from "framer-motion"
import { BookOpen, TrendingUp, Layers } from "lucide-react"

export default function SobreJourneySection() {
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
                    Como o EnglishStudyHub funciona
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Este projeto não nasceu pronto. Ele evolui com estudo,
                    prática e pequenos avanços diários.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">

                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm"
                >
                    <BookOpen className="text-blue-700 mb-4" size={32} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Estudo diário
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        O foco está na constância. Um pouco todos os dias
                        vale mais do que longos períodos sem estudar.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm"
                >
                    <TrendingUp className="text-blue-700 mb-4" size={32} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Evolução contínua
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Conforme novos conceitos são aprendidos,
                        o conteúdo é ajustado, melhorado e expandido.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm"
                >
                    <Layers className="text-blue-700 mb-4" size={32} />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Conteúdo por módulos
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        A plataforma é organizada em níveis: básico,
                        intermediário e avançado, respeitando o ritmo de cada estudante.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
