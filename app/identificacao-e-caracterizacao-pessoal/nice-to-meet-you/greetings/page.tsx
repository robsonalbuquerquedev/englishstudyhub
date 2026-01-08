"use client";

import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function GreetingsPage() {

    const greetingsTable = {
        headers: ["Greetings", "Saudações"],
        rows: [
            ["Hi", "Oi"],
            ["Hello", "Olá, alô"],
            ["Good morning", "Bom dia"],
            ["Good afternoon", "Boa tarde"],
            ["Good night", "Boa noite"],
            ["Good evening", "Boa noite (ao chegar)"],
        ]
    };

    const goodbyeTable = {
        headers: ["Goodbyes", "Despedidas"],
        rows: [
            ["Good night", "Boa noite (ao sair)"],
            ["Goodbye", "Adeus"],
            ["Bye / Bye bye", "Tchau"],
            ["See you tomorrow", "Vejo você amanhã"],
            ["See you later", "Vejo você depois"],
            ["See you soon", "Até breve / Até logo"],
        ]
    };

    const introductionTable = {
        headers: ["Introduction", "Apresentação"],
        rows: [
            ["My name is (Christine Miller)", "Meu nome é (Christine Miller)"],
            ["I'm (Christine Miller)", "Eu sou (Christine Miller)"],
        ]
    };

    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 text-center mb-8 flex items-center justify-center gap-3"
            >
                <Handshake className="w-10 h-10 text-blue-600" />
                Greetings & Goodbyes
            </motion.h1>

            <p className="text-gray-700 mb-6">
                Cada cultura tem sua forma própria de saudar ou despedir-se de alguém.
                Observe na tabela algumas expressões usadas nestas situações:
            </p>

            {/* Tables */}
            <LessonTable headers={greetingsTable.headers} rows={greetingsTable.rows} />
            <LessonTable headers={goodbyeTable.headers} rows={goodbyeTable.rows} />

            <p className="text-gray-700 mt-8 mb-6">
                Ao se comunicar, além de saudar e despedir-se, é preciso se apresentar.
                Veja algumas estruturas:
            </p>

            <div className="flex justify-center mb-8">
                <Image
                    src="/greetings.png"
                    alt="Greetings illustration"
                    width={700}
                    height={400}
                    className="rounded-xl shadow"
                />
            </div>

            <LessonTable
                headers={introductionTable.headers}
                rows={introductionTable.rows}
            />

            <p className="text-gray-700 mb-8">
                Seja em seu país ou em outro, é importante ser <em>polite</em>.
                Rosa precisa se apresentar ao diretor do <em>College</em>.
                Veja no próximo tópico como isso acontece.
            </p>

            {/* Navigation */}
            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/lesson-nice-to-meet-you"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/being-polite"
            />

            {/* Credits */}
            <NiceToMeetYouCredits />
        </main>
    );
}
