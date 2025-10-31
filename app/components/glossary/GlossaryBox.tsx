"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface GlossaryBoxProps {
    terms: [string, string][]; // array com [palavra em inglês, tradução]
    title?: string; // título opcional, default = Glossary
}

export default function GlossaryBox({ terms, title = "Glossary" }: GlossaryBoxProps) {
    return (
        <div className="mb-10">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2"
            >
                <BookOpen className="w-8 h-8 text-blue-600" /> {title}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-gray-700">
                {terms.map(([en, pt], index) => (
                    <p
                        key={index}
                        className="flex justify-between border-b border-gray-200 pb-1"
                    >
                        <span className="font-semibold">{en}</span>
                        <span>{pt}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}
