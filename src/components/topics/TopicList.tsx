"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface Topic {
    title: string;
    icon: ReactNode;
    link: string;
}

interface TopicListProps {
    title: string;
    basePath: string;
    topics: Topic[];
    backLink?: string;
}

export default function TopicList({ title, basePath, topics, backLink, }: TopicListProps) {
    const resolvedBackLink = backLink ?? basePath.split("/").slice(0, -1).join("/");

    return (
        <div className="max-w-5xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-4">
                <Link href={resolvedBackLink} className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-900 transition">
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                </Link>
            </motion.div>

            <motion.h1 className="text-3xl font-bold text-blue-800 text-center mb-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                {title}
            </motion.h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <motion.div key={topic.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                        <Link href={`${basePath}/${topic.link}`} className="block bg-white border border-blue-100 p-5 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-3">
                                <span className="text-blue-600 w-7 h-7">{topic.icon}</span>
                                <p className="font-medium text-gray-700">{topic.title}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
