"use client";

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function SobreEncerramentoSection() {
    return (
        <section className="bg-blue-50 border-t border-blue-100">
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-blue-800 mb-6"
                >
                    Aprender inglês é um processo contínuo
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-700 leading-relaxed mb-10"
                >
                    Não existe linha de chegada imediata.
                    Existe prática, repetição e pequenos avanços diários.
                    Se você melhorar apenas 1% hoje, isso já é progresso.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/modulos"
                        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-medium shadow transition"
                    >
                        Começar pelos módulos
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}
