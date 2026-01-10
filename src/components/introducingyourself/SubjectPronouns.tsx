"use client";

import { motion } from "framer-motion";
import { User, Target, BookText, MessageCircle, ListChecks, } from "lucide-react";
import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

const dialogue02 = [
    { speaker: "Anna", text: "Hi! I am Anna. I am from Brazil." },
    { speaker: "Mark", text: "Nice to meet you! I am Mark." },
    { speaker: "Anna", text: "Are you a teacher?" },
    { speaker: "Mark", text: "Yes, I am. And you?" },
    { speaker: "Anna", text: "I am a student." },
];

const tableHeaders = ["Pronoun", "Significado", "Exemplo"];
const tableRows = [
    ["I", "Eu", "I am happy."],
    ["You", "Você", "You are my friend."],
    ["He", "Ele", "He is a teacher."],
    ["She", "Ela", "She is very kind."],
    ["It", "Ele / Ela (coisas/animais)", "It is cold today."],
    ["We", "Nós", "We are students."],
    ["They", "Eles / Elas", "They are at home."],
];

export default function SubjectPronouns() {
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
                    Subject Pronouns Made Simple
                </h1>

                <p className="text-gray-700 max-w-2xl mx-auto">
                    Os <strong>subject pronouns</strong> são os pronomes que indicam quem é
                    o sujeito da frase. Eles são essenciais para formar frases simples e
                    claras em inglês, especialmente quando usamos o verbo <em>to be</em>.
                </p>
            </motion.header>

            {/* Objetivos */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <Target className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Entender o que são subject pronouns.</li>
                    <li>Aprender os pronomes pessoais do inglês.</li>
                    <li>Usar subject pronouns em frases simples.</li>
                </ul>
            </section>

            {/* Conteúdo introdutório */}
            <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                    O que são Subject Pronouns?
                </h3>

                <p className="text-gray-700 leading-relaxed mb-2">
                    Em inglês, toda frase precisa deixar claro quem está realizando a
                    ação. Para isso, usamos os <strong>subject pronouns</strong>, que são
                    pronomes pessoais do caso sujeito.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Diferente do português, em inglês o pronome quase nunca é omitido.
                    Dizemos <em>I am</em>, <em>she is</em>, <em>they are</em>. O pronome
                    sempre aparece para evitar confusão.
                </p>
            </section>

            {/* Story */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <BookText className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Story</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                    Anna acabou de chegar a um curso de inglês. Para se apresentar, ela
                    diz: <em>I am Anna</em>. Note como o pronome <strong>I</strong> aparece
                    logo no início. Sem ele, a frase estaria incompleta em inglês.
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
                    Em português, muitas vezes dizemos apenas &rdquo;sou estudante&rdquo;. Em inglês,
                    isso não funciona. É obrigatório dizer <strong>I am a student</strong>.
                </p>
            </section>

            {/* Tables */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <ListChecks className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">
                        Subject Pronouns
                    </h2>
                </div>

                <LessonTable headers={tableHeaders} rows={tableRows} />
            </section>

            {/* Explicação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed">
                    Memorizar os subject pronouns é um passo fundamental para falar inglês
                    com segurança. Eles aparecem em praticamente todas as frases e serão
                    usados em todos os tempos verbais.
                </p>
            </section>

            {/* MIND THE GAP */}
            <section className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
                <h3 className="font-semibold text-lg text-yellow-800 mb-2">
                    Mind the Gap
                </h3>
                <p className="leading-relaxed text-sm">
                    Não confunda <strong>he</strong> e <strong>she</strong>. Use <strong>he</strong> para homens e <strong>she</strong> para mulheres. Para objetos, animais ou
                    ideias, use <strong>it</strong>.
                </p>
            </section>

            {/* CULTURAL NOTE */}
            <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
                <h3 className="text-blue-800 font-semibold text-lg mb-3">
                    Cultural Note
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Em inglês, usar o pronome corretamente demonstra clareza e educação na
                    comunicação. Evitar pronomes pode soar estranho ou errado para falantes
                    nativos.
                </p>
            </section>

            {/* NAVIGATION */}
            <ModuleNavigation
                prev="/basic/personal-information-introductions/introducing-yourself/basic-information"
                next="/basic/personal-information-introductions/introducing-yourself/verb-to-be"
            />
        </section>
    );
}
