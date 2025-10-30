"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    BookOpen,
    Handshake,
    Smile,
    Flag,
    Type,
    Users,
    User,
    Globe,
    NotebookPen,
    Languages
} from "lucide-react";

export default function NiceToMeetYou() {
    const topics = [
        { title: "The Experience Begins", icon: <BookOpen />, link: "the-experience-begins" },
        { title: "Episode", icon: <Handshake />, link: "episode" },
        { title: "Nice to meet you", icon: <Smile />, link: "lesson-nice-to-meet-you" },
        { title: "Greetings", icon: <Smile />, link: "greetings" },
        { title: "Being polite", icon: <User />, link: "being-polite" },
        { title: "The alphabet", icon: <Type />, link: "the-alphabet" },
        { title: "Subject pronouns", icon: <Users />, link: "subject-pronouns" },
        { title: "Verb To be", icon: <Languages />, link: "verb-to-be" },
        { title: "Possessive adjectives", icon: <NotebookPen />, link: "possessive-adjectives" },
        { title: "Countries and nationalities", icon: <Globe />, link: "countries-and-nationalities" },
        { title: "Resumo e glossário", icon: <Flag />, link: "resumo-e-glossario" },
    ];

    return (
        <main className="max-w-5xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">
            <motion.h1
                className="text-3xl font-bold text-blue-800 text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Nice to meet you 👋
            </motion.h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <motion.div
                        key={topic.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                    >
                        <Link
                            href={`/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/${topic.link}`}
                            className="block bg-white border border-blue-100 p-5 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-blue-600 w-7 h-7">{topic.icon}</span>
                                <p className="font-medium text-gray-700">{topic.title}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
