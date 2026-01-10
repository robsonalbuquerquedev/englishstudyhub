"use client";

import { motion } from "framer-motion";
import { Globe, Target, BookText, MessageCircle, ListChecks, } from "lucide-react";
import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

const dialogue02 = [
    { speaker: "Tom", text: "Hi! Where are you from?" },
    { speaker: "Ana", text: "I am from Brazil." },
    { speaker: "Tom", text: "Nice! I am from the United States." },
    { speaker: "Ana", text: "So, you are American?" },
    { speaker: "Tom", text: "Yes, I am." },
];

const tableHeaders = ["Country", "Nationality", "Exemplo"];
const tableRows = [
    ["Brazil", "Brazilian", "I am Brazilian."],
    ["United States", "American", "She is American."],
    ["England", "English", "He is English."],
    ["Canada", "Canadian", "They are Canadian."],
    ["France", "French", "She is French."],
    ["Japan", "Japanese", "He is Japanese."],
];

export default function CountriesAndNationalities() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Cabeçalho */}
            <motion.header
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="flex justify-center mb-3">
                    <Globe className="w-12 h-12 text-blue-700" />
                </div>

                <h1 className="text-3xl font-bold text-blue-700 mb-2">
                    Countries and Nationalities
                </h1>

                <p className="text-gray-700 max-w-2xl mx-auto">
                    Falar sobre países e nacionalidades é uma das primeiras coisas que
                    aprendemos em inglês, porque isso faz parte das apresentações e
                    conversas do dia a dia.
                </p>
            </motion.header>

            {/* Objetivos */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <Target className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Aprender nomes de países em inglês.</li>
                    <li>Entender como falar nacionalidades.</li>
                    <li>Usar países e nacionalidades com o verbo <em>to be</em>.</li>
                </ul>
            </section>

            {/* Conteúdo introdutório */}
            <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                    País x Nacionalidade
                </h3>

                <p className="text-gray-700 leading-relaxed mb-2">
                    Em inglês, o nome do país e a nacionalidade quase nunca são iguais.
                    Dizemos <strong>Brazil</strong> para o país, mas <strong>Brazilian</strong> para a
                    nacionalidade.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Normalmente usamos a nacionalidade para falar sobre pessoas e o país
                    para falar de origem, sempre junto do verbo <strong>to be</strong>.
                </p>
            </section>

            {/* Story */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <BookText className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Story</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                    Ana está em um curso internacional e conhece Tom. Para iniciar a
                    conversa, ela pergunta: <em>Where are you from?</em>. Em poucos
                    segundos, eles já sabem de que país cada um é.
                </p>
            </section>

            {/* Dialogue */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Dialogue</h2>
                </div>

                <DialogueBox lines={dialogue02} />
            </section>

            {/* Observação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed mb-8 text-sm border-l-4 border-blue-400 pl-3 italic">
                    Para falar nacionalidade em inglês, não usamos artigo. Dizemos
                    <em>I am Brazilian</em>, e não <em>I am a Brazilian</em> (na maioria
                    dos casos).
                </p>
            </section>

            {/* Tables */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <ListChecks className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">
                        Countries and Nationalities
                    </h2>
                </div>

                <LessonTable headers={tableHeaders} rows={tableRows} />
            </section>

            {/* Explicação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed">
                    Saber falar países e nacionalidades permite que você se apresente,
                    entenda pessoas de outros lugares e participe de conversas básicas em
                    inglês com muito mais confiança.
                </p>
            </section>

            {/* MIND THE GAP */}
            <section className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
                <h3 className="font-semibold text-lg text-yellow-800 mb-2">
                    Mind the Gap
                </h3>
                <p className="leading-relaxed text-sm">
                    Cuidado para não traduzir literalmente do português. Não diga
                    <em> I am from Brazilian</em>. O correto é <em>I am Brazilian</em> ou
                    <em>I am from Brazil</em>.
                </p>
            </section>

            {/* CULTURAL NOTE */}
            <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
                <h3 className="text-blue-800 font-semibold text-lg mb-3">
                    Cultural Note
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Em contextos internacionais, perguntar <em>Where are you from?</em> é
                    comum e educado. Normalmente isso abre espaço para uma conversa mais
                    longa.
                </p>
            </section>

            {/* NAVIGATION */}
            <ModuleNavigation
                prev="/basic/personal-information-introductions/introducing-yourself/verb-to-be"
                next="/basic/personal-information-introductions/introducing-yourself/review-and-glossary"
            />
        </section>
    );
}
