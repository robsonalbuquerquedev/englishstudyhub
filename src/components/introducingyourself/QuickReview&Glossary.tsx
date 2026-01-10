"use client";

import { motion } from "framer-motion";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import GlossaryBox from "@/components/glossary/GlossaryBox";
import { BookCheck, BookOpen } from "lucide-react";

const glossary: [string, string][] = [
    ["Welcome", "bem-vindo"],
    ["Introduction", "apresentação"],
    ["Hello", "olá"],
    ["Hi", "oi"],
    ["Good morning", "bom dia"],
    ["Good afternoon", "boa tarde"],
    ["Good evening", "boa noite"],
    ["Excuse me", "com licença"],
    ["Please", "por favor"],
    ["Thank you", "obrigado(a)"],
    ["Nice to meet you", "prazer em conhecê-lo"],
    ["My name is", "meu nome é"],
    ["I am", "eu sou / eu estou"],
    ["I’m from", "eu sou de"],
    ["Subject pronoun", "pronome pessoal do sujeito"],
    ["Verb to be", "verbo ser / estar"],
    ["Country", "país"],
    ["Nationality", "nacionalidade"],
    ["Where are you from?", "de onde você é?"],
    ["Brazil", "Brasil"],
    ["Brazilian", "brasileiro(a)"],
];

export default function QuickReviewAndGlossaryIntroducingYoursel() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 text-center mb-8 flex items-center justify-center gap-2"
            >
                <BookCheck className="w-10 h-10 text-blue-600" />
                Quick Review & Glossary
            </motion.h1>

            {/* RESUMO */}
            <div className="bg-blue-50 border border-blue-200 text-gray-700 rounded-xl shadow p-6 mb-10 leading-relaxed">
                <p>
                    Nesta unidade, você deu seus primeiros passos no inglês aprendendo
                    como se apresentar, cumprimentar pessoas e participar de conversas
                    simples do dia a dia.
                </p>

                <p className="mt-4">
                    Você aprendeu cumprimentos básicos, palavras educadas, como dizer seu
                    nome e informações simples, além de entender a importância dos
                    <strong> subject pronouns</strong> e do verbo <strong>to be</strong>,
                    que são a base da comunicação em inglês.
                </p>

                <p className="mt-4">
                    Também viu como falar sobre países e nacionalidades, algo muito comum
                    em apresentações pessoais e diálogos reais com pessoas de outros
                    lugares.
                </p>

                <p className="mt-4 font-semibold italic text-blue-800">
                    Se você consegue dizer quem você é, de onde você é e cumprimentar
                    alguém em inglês, você já começou a se comunicar de verdade.
                </p>
            </div>

            {/* GLOSSÁRIO */}
            <GlossaryBox terms={glossary} />

            {/* Navigation */}
            <ModuleNavigation
                prev="/basic/personal-information-introductions/introducing-yourself/countries-and-nationalities"
                next="/basic/personal-information-introductions/starting-conversations"
            />
        </section>
    );
}
