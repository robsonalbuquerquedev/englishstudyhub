"use client";

import { motion } from "framer-motion";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import { Users } from "lucide-react";

// Tabela de Subject Pronouns
const subjectPronounsTable = {
    headers: ["Subject Pronouns", "Examples"],
    rows: [
        ["I", "I am a journalist."],
        ["You (singular)", "You are a comedian."],
        ["He", "John is a director. He is a director."],
        ["She", "Rosa is a student. She is a student."],
        ["It", "Mike is my dog. It is my dog."],
        ["We", "Rosa and I are in Chicago. We are in Chicago."],
        ["You (plural)", "You are Billy and Victor."],
        ["They", "Billy and uncle Charles are from the United Kingdom. They are from the United Kingdom."],
    ],
};

export default function SubjectPronounsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 text-center mb-10 flex items-center justify-center gap-2"
            >
                <Users className="w-10 h-10 text-blue-600" />
                Subject Pronouns
            </motion.h1>

            {/* Introdução */}
            <p className="text-gray-700 leading-relaxed mb-4">
                Observe o exemplo abaixo:
            </p>

            <div className="bg-white border border-blue-200 rounded-xl p-5 shadow mb-6">
                <p className="text-gray-700 mb-2"><strong>Versão repetitiva:</strong></p>
                <p className="text-gray-700">
                    Dube é um rapaz muito inteligente e divertido. Dube se apresenta em um Pub toda a semana.
                    Dube é namorado de Christine. Christine, às vezes, se estressa com Dube por conta de seu jeito despreocupado de levar a vida.
                    Dube e Christine se conhecem há bastante tempo.
                </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow mb-8">
                <p className="text-gray-700 mb-2"><strong>Usando pronomes:</strong></p>
                <p className="text-gray-700">
                    Dube é um rapaz muito inteligente e divertido. <strong>Ele</strong> se apresenta em um Pub toda a semana.
                    Dube é namorado de Christine. <strong>Ela</strong>, às vezes, se estressa com <strong>ele</strong> por conta do jeito despreocupado do rapaz de levar a vida.
                    <strong>Eles</strong> se conhecem há bastante tempo.
                </p>
            </div>

            {/* Explicação */}
            <p className="text-gray-700 leading-relaxed mb-6">
                O uso de pronomes sujeitos evita repetições e torna o texto mais natural.
                Em inglês, os <strong>subject pronouns</strong> substituem o sujeito da oração — e não podem ser omitidos.
            </p>

            {/* Tabela */}
            <LessonTable headers={subjectPronounsTable.headers} rows={subjectPronounsTable.rows} />

            {/* Observações */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 shadow mb-10 text-gray-700 space-y-3 text-sm leading-relaxed">
                <p>✅ A primeira pessoa do singular <strong>"I"</strong> é sempre escrita em maiúscula.</p>
                <p>✅ Antes de saber o sexo de um bebê, usa-se <strong>it</strong>.</p>
                <p>✅ Para animais, usamos <strong>it</strong> — a menos que seja um pet, aí usamos <strong>he/she</strong>.</p>
                <p>✅ Em inglês sempre há sujeito: “It is cold” (e não “Está frio”).</p>
                <p>✅ <strong>You</strong> pode ser singular ou plural — depende do contexto.</p>
                <p>✅ <strong>They</strong> pode se referir a masculino, feminino ou ambos.</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
                Agora que você conhece os subject pronouns, vamos continuar com o estudo do verbo <strong>to be</strong>.
            </p>

            {/* Navigation */}
            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/the-alphabet"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/verb-to-be"
            />

            {/* Créditos */}
            <NiceToMeetYouCredits />
        </main>
    );
}
