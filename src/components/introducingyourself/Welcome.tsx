"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, BookText, MessageCircle, ListChecks } from "lucide-react";
import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

export default function Welcome() {
    const dialogue01 = [
        { speaker: "Anna", text: "Hi! My name is Anna. Nice to meet you!" },
        { speaker: "John", text: "Hello, Anna! I'm John. Nice to meet you too." },
        { speaker: "Anna", text: "Where are you from, John?" },
        { speaker: "John", text: "I'm from Brazil. And you?" },
        { speaker: "Anna", text: "I'm from the United States." },
    ];

    const tableHeaders = ["Expressão em inglês", "Significado em português"];
    const tableRows = [
        ["Hi / Hello", "Oi / Olá"],
        ["My name is...", "Meu nome é..."],
        ["Nice to meet you", "Prazer em conhecer você"],
        ["Where are you from?", "De onde você é?"],
        ["I’m from...", "Eu sou de..."],
    ];

    return (
        <section className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">
            {/* Cabeçalho */}
            <motion.header initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10">
                <div className="flex justify-center mb-3">
                    <BookOpen className="w-12 h-12 text-blue-700" />
                </div>

                <h1 className="text-3xl font-bold text-blue-700 mb-2">
                    Welcome to Your First English Introduction
                </h1>

                <p className="text-gray-700 max-w-2xl mx-auto">
                    Este é o seu primeiro passo para começar a falar inglês com confiança.
                </p>
            </motion.header>

            {/* Objetivos */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <Target className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Aprender como se apresentar em inglês</li>
                    <li>Usar cumprimentos básicos e expressões de cortesia</li>
                    <li>Sentir mais segurança ao iniciar conversas simples</li>
                </ul>
            </section>

            {/* Conteúdo introdutório */}
            <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                    Por que aprender a se apresentar em inglês?
                </h3>

                <p className="text-gray-700 leading-relaxed mb-2">
                    Se apresentar em inglês geralmente é a primeira coisa que fazemos ao
                    conhecer alguém novo. E a boa notícia é: não precisa ser perfeito.
                    O mais importante é conseguir se comunicar de forma clara, educada
                    e amigável.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Nesta lição, você vai aprender frases simples que são usadas todos
                    os dias no mundo inteiro. Elas ajudam você a iniciar conversas na
                    escola, no trabalho, em viagens ou até na internet.
                </p>
            </section>

            {/* Story */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <BookText className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Story</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                    Imagine seu primeiro dia em um lugar novo. Você vê alguém sorrindo e
                    decide dizer &rdquo;olá&rdquo;. Respira fundo e fala seu nome. Esse pequeno
                    momento é o início de uma conversa — e toda conversa começa com uma
                    apresentação.
                </p>
            </section>

            {/* Dialogue */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Dialogue</h2>
                </div>

                <DialogueBox lines={dialogue01} />
            </section>

            {/* Observação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed mb-8 text-sm border-l-4 border-blue-400 pl-3 italic">
                    💡 Não se preocupe com o seu sotaque. O inglês é falado de muitas
                    formas diferentes ao redor do mundo.
                </p>
            </section>

            {/* Tables */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <ListChecks className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">
                        Expressões mais comuns
                    </h2>
                </div>

                <LessonTable headers={tableHeaders} rows={tableRows} />
            </section>

            {/* Explicação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed">
                    A maioria das apresentações segue um padrão simples: cumprimento,
                    nome e uma informação curta. Você pode falar só o básico ou acrescentar
                    mais detalhes conforme se sentir mais confortável.
                </p>
            </section>

            {/* MIND THE GAP */}
            <section className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
                <h3 className="font-semibold text-lg text-yellow-800 mb-2">Mind the Gap</h3>
                <p className="leading-relaxed text-sm">
                    Em inglês, é muito comum dizer &rdquo;Nice to meet you&rdquo; quando falamos com
                    alguém pela primeira vez. Essa expressão demonstra educação e
                    simpatia.
                </p>
            </section>

            {/* CULTURAL NOTE */}
            <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
                <h3 className="text-blue-800 font-semibold text-lg mb-3">Cultural Note</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Em muitos países onde o inglês é falado, sorrir e manter contato
                    visual são atitudes importantes ao se apresentar.
                </p>
            </section>

            {/* NAVIGATION */}
            <ModuleNavigation
                prev="/basic/personal-information-introductions/introducing-yourself"
                next="/basic/personal-information-introductions/introducing-yourself/common-greetings"
            />
        </section>
    );
}
