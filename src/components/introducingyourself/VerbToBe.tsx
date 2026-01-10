"use client";

import { motion } from "framer-motion";
import { Link2, Target, BookText, MessageCircle, ListChecks, } from "lucide-react";
import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

const dialogue02 = [
    { speaker: "Lucas", text: "Hi! Are you new here?" },
    { speaker: "Emma", text: "Yes, I am. I am from Canada." },
    { speaker: "Lucas", text: "Nice! I am from Brazil." },
    { speaker: "Emma", text: "Are you a student?" },
    { speaker: "Lucas", text: "Yes, I am." },
];

const tableHeaders = ["Subject", "Verb To Be", "Exemplo"];
const tableRows = [
    ["I", "am", "I am happy."],
    ["You", "are", "You are my friend."],
    ["He", "is", "He is a teacher."],
    ["She", "is", "She is at home."],
    ["It", "is", "It is cold today."],
    ["We", "are", "We are ready."],
    ["They", "are", "They are students."],
];

export default function VerbToBe() {
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
                    <Link2 className="w-12 h-12 text-blue-700" />
                </div>

                <h1 className="text-3xl font-bold text-blue-700 mb-2">
                    The Verb To Be in Real Life
                </h1>

                <p className="text-gray-700 max-w-2xl mx-auto">
                    O verbo <strong>to be</strong> é um dos mais importantes do inglês.
                    Ele aparece logo no início dos estudos porque é usado em situações
                    reais do dia a dia.
                </p>
            </motion.header>

            {/* Objetivos */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <Target className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
                </div>

                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Entender o que é o verbo <em>to be</em>.</li>
                    <li>Aprender quando usar <em>am</em>, <em>is</em> e <em>are</em>.</li>
                    <li>Usar o verbo <em>to be</em> em frases reais.</li>
                </ul>
            </section>

            {/* Conteúdo introdutório */}
            <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                    O que significa o verbo To Be?
                </h3>

                <p className="text-gray-700 leading-relaxed mb-2">
                    O verbo <strong>to be</strong> pode significar <strong>ser</strong> ou
                    <strong> estar</strong>, dependendo do contexto. Em inglês, não existe um verbo
                    diferente para cada caso, como acontece em português.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Ele muda de forma de acordo com o sujeito da frase. Por isso, dizemos <strong>I am</strong>, <strong>she is</strong> e <strong>they are</strong>.
                </p>
            </section>

            {/* Story */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <BookText className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">Story</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                    Lucas está conhecendo pessoas novas em um intercâmbio. Para se
                    apresentar, ele diz: <strong>I am Lucas</strong>. Para falar de sua origem: <strong>I am from Brazil</strong>. O verbo <strong>to be</strong> aparece o
                    tempo todo.
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
                    Em inglês, não é correto dizer apenas <strong>I student</strong>. O verbo
                    <strong> to be</strong> é obrigatório: <strong>I am a student</strong>.
                </p>
            </section>

            {/* Tables */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <ListChecks className="text-blue-600 w-6 h-6" />
                    <h2 className="text-2xl font-semibold text-blue-700">
                        Verb To Be – Presente
                    </h2>
                </div>

                <LessonTable headers={tableHeaders} rows={tableRows} />
            </section>

            {/* Explicação */}
            <section className="mb-10">
                <p className="text-gray-700 leading-relaxed">
                    Sempre que você quiser falar quem você é, como você está ou onde você
                    está, provavelmente vai precisar do verbo <strong>to be</strong>. Ele
                    é a base da comunicação em inglês.
                </p>
            </section>

            {/* MIND THE GAP */}
            <section className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
                <h3 className="font-semibold text-lg text-yellow-800 mb-2">
                    Mind the Gap
                </h3>
                <p className="leading-relaxed text-sm">
                    Nunca use <strong>am</strong> com <strong>you</strong>, <strong>he</strong>, <strong>she</strong> ou
                    <strong> they</strong>. <strong>Am</strong> só funciona com <strong>I</strong>.
                </p>
            </section>

            {/* CULTURAL NOTE */}
            <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
                <h3 className="text-blue-800 font-semibold text-lg mb-3">
                    Cultural Note
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Em conversas informais, o verbo <strong>to be</strong> costuma aparecer
                    contraído, como <strong>I’m</strong>, <strong>you’re</strong> e <strong>she’s</strong>. Isso é
                    extremamente comum no inglês real.
                </p>
            </section>

            {/* NAVIGATION */}
            <ModuleNavigation
                prev="/basic/personal-information-introductions/introducing-yourself/subject-pronouns"
                next="/basic/personal-information-introductions/introducing-yourself/countries-and-nationalities"
            />
        </section>
    );
}
