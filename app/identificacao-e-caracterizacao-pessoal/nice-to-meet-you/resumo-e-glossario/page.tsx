"use client";

import { motion } from "framer-motion";
import ModuleNavigation from "../../../components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "../../../components/credits/NiceToMeetYouCredits";
import GlossaryBox from "../../../components/glossary/GlossaryBox";
import { BookCheck, BookOpen } from "lucide-react";

export default function ResumoEGlossarioPage() {
    const glossary: [string, string][] = [
        ["Small", "pequeno"],
        ["Town", "cidade"],
        ["Bedroom", "quarto"],
        ["Upstairs", "andar de cima"],
        ["Excuse me", "com licença"],
        ["Nice to meet you", "prazer em conhecê-lo"],
        ["Here is your schedule", "aqui está o seu horário"],
        ["To have you as our student", "tê-la como nossa aluna"],
        ["I’m from", "eu sou de..."],
        ["Advisor", "orientador"],
        ["Not only", "não só / não apenas"],
        ["Customs", "costumes"],
        ["In which", "na qual"],
        ["Often", "frequentemente"],
        ["Usually", "normalmente"],
        ["Affectionate", "afetuoso"],
        ["Close", "próximo"],
        ["To touch", "tocar"],
        ["To hug", "abraçar"],
        ["To kiss", "beijar"],
        ["To meet", "encontrar(-se)"],
        ["Someone", "alguém"],
        ["Just", "apenas"],
        ["Wave", "abano / aceno"],
        ["Handshake", "aperto de mão"],
    ];

    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 text-center mb-8 flex items-center justify-center gap-2"
            >
                <BookCheck className="w-10 h-10 text-blue-600" />
                Resumo & Glossário
            </motion.h1>

            {/* RESUMO */}
            <div className="bg-blue-50 border border-blue-200 text-gray-700 rounded-xl shadow p-6 mb-10 leading-relaxed">
                <p>
                    Esperamos que você, acompanhando Rosa em seu encontro com suas housemates Carly e Christine e em sua
                    experiência na Columbus College of Chicago, tenha se familiarizado com os conteúdos linguísticos e
                    lexicais apresentados.
                </p>

                <p className="mt-4">
                    O verbo <strong>To be</strong> e os <strong>possessive adjectives</strong> frequentemente estão presentes
                    em contextos comunicativos. Já o <strong>alphabet</strong> será importante para soletrar nomes e palavras.
                </p>

                <p className="mt-4">
                    Os nomes de <strong>countries</strong> e <strong>nationalities</strong>, bem como a forma correta de ler
                    <strong> e-mails</strong> e <strong>web addresses</strong>, também são fundamentais para fornecer e
                    solicitar informações pessoais.
                </p>

                <p className="mt-4 font-semibold italic text-blue-800">
                    E não esqueça: no hugging, please! 🤝🙂
                </p>
            </div>

            {/* GLOSSÁRIO */}
            <GlossaryBox terms={glossary} />

            {/* Navigation */}
            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/countries-and-nationalities"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/meeting-new-friends"
            />

            <NiceToMeetYouCredits />

        </main>
    );
}
