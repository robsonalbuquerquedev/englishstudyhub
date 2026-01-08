"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TopicItem {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    link: string;
}

interface ModuleIntroProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    description: string;
    topics: TopicItem[];
    credits: ReactNode;
}

export default function ModuleIntro({
    icon,
    title,
    subtitle,
    description,
    topics,
    credits
}: ModuleIntroProps) {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="flex justify-center mb-3">{icon}</div>

                <h1 className="text-3xl md:text-4xl font-bold text-blue-800">{title}</h1>
                <h2 className="text-lg md:text-xl text-blue-600 mt-2">{subtitle}</h2>

                <p className="text-gray-700 mt-5 max-w-2xl mx-auto">
                    {description}
                </p>
            </motion.div>

            {/* Topics */}
            <div className="grid gap-8 md:grid-cols-3">
                {topics.map((t, index) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Link
                            href={t.link}
                            className="block bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 text-center"
                        >
                            <div className="flex justify-center mb-4">{t.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t.title}</h3>
                            <p className="text-gray-600 text-sm">{t.description}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Credits */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 text-sm text-gray-600 text-center border-t border-blue-200 pt-6"
            >
                {credits}
            </motion.div>

        </div>
    );
}
