"use client";

import { motion } from "framer-motion";
import { User, Target, BookText, MessageCircle, ListChecks, } from "lucide-react";

import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

export default function BasicInformation() {
    const dialogue04 = [
        { speaker: "Tom", text: "Hi! What's your name?" },
        { speaker: "Ana", text: "My name is Ana." },
        { speaker: "Tom", text: "Where are you from?" },
        { speaker: "Ana", text: "I'm from Brazil." },
    ];

    const tableHeaders = ["Expression", "Significado em português"];
    const tableRows = [
        ["My name is...", "Meu nome é..."],
        ["I am...", "Eu sou..."],
        ["I'm from...", "Eu sou de..."],
        ["I live in...", "Eu moro em..."],
        ["I am ... years old", "Eu tenho ... anos"],
    ];

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
                    <User className="w-12 h-12 text-blue-700" />
                </div>

                <h1 className="text-3xl font-bold text-blue-700 mb-2">
                    Your Name and Basic Information
                </h1>

                <p className="text-gray-700 max-w-2xl mx-auto">
                    Aprenda a dizer seu nome e compartilhar informações básicas em inglês
                    de forma simples, clara e natural.
                </p>
            </motion.header>

            {/* Objetivos */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <Target className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Dizer seu nome em inglês corretamente</li>
                    <li>Compartilhar informações pessoais básicas</li>
                    <li>Responder perguntas simples sobre você</li>
                </ul>
            </section>

            {/* Conteúdo introdutório */}
            <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                    Falando sobre você em inglês
                </h3>

                <p className="text-gray-700 leading-relaxed mb-2">
                    Depois de cumprimentar alguém, o próximo passo natural é dizer seu
                    nome e algumas informações básicas, como de onde você é ou onde mora.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Essas frases são simples, mas muito importantes. Com elas, você já
                    consegue participar de conversas iniciais em inglês.
                </p>
            </section>

            {/* Story */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <BookText className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Story</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                    Imagine conhecer alguém novo em uma viagem ou curso. A pessoa pergunta
                    seu nome e de onde você é. Com poucas palavras em inglês, você já
                    consegue responder e continuar a conversa.
                </p>
            </section>

            {/* Dialogue */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Dialogue</h2>
                </div>

                <DialogueBox lines={dialogue04} />
            </section>

            {/* Observação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed mb-8 text-sm border-l-4 border-blue-400 pl-3 italic">
                    Você não precisa falar tudo de uma vez. Dizer apenas seu nome já é um
                    ótimo começo.
                </p>
            </section>

            {/* Tables */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <ListChecks className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">
                        Frases básicas sobre você
                    </h2>
                </div>

                <LessonTable headers={tableHeaders} rows={tableRows} />
            </section>

            {/* Explicação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed">
                    Use essas frases como blocos de construção. Você pode combiná-las e
                    adaptá-las conforme a situação e o nível de detalhe que quiser
                    compartilhar.
                </p>
            </section>

            {/* MIND THE GAP */}
            <section className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
                <h3 className="font-semibold text-lg text-yellow-800 mb-2">
                    Mind the Gap
                </h3>
                <p className="leading-relaxed text-sm">
                    Em inglês, não usamos &rdquo;have&rdquo; para falar idade. Dizemos &rdquo;I am 20 years
                    old&rdquo;, e não &rdquo;I have 20 years&rdquo;.
                </p>
            </section>

            {/* CULTURAL NOTE */}
            <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
                <h3 className="text-blue-800 font-semibold text-lg mb-3">
                    Cultural Note
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Em conversas informais, as pessoas nem sempre perguntam idade. Falar
                    seu nome e de onde você é geralmente já é suficiente.
                </p>
            </section>

            {/* NAVIGATION */}
            <ModuleNavigation
                prev="/basic/personal-information-introductions/introducing-yourself/polite-words"
                next="/basic/personal-information-introductions/introducing-yourself/subject-pronouns"
            />
        </section>
    );
}
