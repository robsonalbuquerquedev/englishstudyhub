"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ModuleNavigationProps {
    prev?: string; // Rota opcional
    next?: string; // Rota opcional
}

export default function ModuleNavigation({ prev, next }: ModuleNavigationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 flex justify-between items-center"
        >
            {/* Botão Voltar */}
            {prev ? (
                <Link
                    href={prev}
                    className="flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-300 
          text-blue-700 hover:bg-blue-50 hover:-translate-x-1 transition-all duration-200"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                </Link>
            ) : (
                <span />
            )}

            {/* Botão Próximo */}
            {next && (
                <Link
                    href={next}
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white 
          hover:bg-blue-700 hover:translate-x-1 transition-all duration-200"
                >
                    Próximo
                    <ArrowRight className="w-5 h-5" />
                </Link>
            )}
        </motion.div>
    );
}
