"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import { BookOpenCheck } from "lucide-react";

// diálogo exemplo (você pode ajustar se tiver o original)
const dialogue4 = [
    { speaker: "Mr. Smith", text: "Good morning! Welcome to Columbus College of Chicago! My name is John Smith and I’m the dean here. What is your name?" },
    { speaker: "Rosa", text: "Good morning. My name is Rosa Souza." },
];

// tabelas (você preenche os dados reais já que usaremos imagens também)
const affimativeTable = {
    headers: ["Affimative", "Contraction", "Português"],
    rows: [
        ["I am", "I'm", "Eu sou / estou"],
        ["You are", "You're", "Você é / está - tu és / estás"],
        ["He is", "He's", "Ele é / está"],
        ["She is", "She's", "Ela é / está"],
        ["It is", "It's", "Ele (a) é / está"],
        ["We are", "We're", "Nós somos / estamos"],
        ["You are", "You're", "Vocês são / estão - vós sois / estais"],
        ["They are", "They're", "Eles são / estão"],
    ]
};

const negativeTable = {
    headers: ["Negative", "Contraction", "Português"],
    rows: [
        ["I am not", "I’m not", "Eu não sou / não estou"],
        ["You are not", "You’re not / You aren't", "Você não é / não está - tu não és / Não estás"],
        ["He is not", "He’s not / He isn't", "Ele não é / está"],
        ["She is not", "She’s not / She ins't", "Ela não é / não está"],
        ["It is not", "It’s not / It isn't", "Ele (a) não é / não está"],
        ["We are not", "We’re not / We aren't", "Nós não somos / não estamos"],
        ["You are not", "You’re not / You aren't", "Vocês não são / não estão - Vós não sois / não estais"],
        ["They are not", "They’re not / They aren't", "Eles não são / não estão"],
    ]
};

const interrogativeTable = {
    headers: ["Interrogative", "Português"],
    rows: [
        ["Am I?", "Eu sou / estou?"],
        ["Are you?", "Você é / está - tu és / estás?"],
        ["Is he?", "Ele é / está?"],
        ["Is she?", "Ela é / está?"],
        ["Is it?", "Ele (a) é / está?"],
        ["Are we?", "Nós somos / estamos?"],
        ["Are you?", "Vocês são / estão - Vós sois / estais?"],
        ["Are they?", "Eles são / estão?"],
    ]
};

const questionsTable = {
    headers: ["Question", "Affirmative short answer", "Negative short answer"],
    rows: [
        ["Am I right?", "Yes, you are.", "No, you aren’t."],
        ["Are you a student?", "Yes, I am.", "No, I’m not."],
        ["Is he a teacher?", "Yes, he is.", "No, he isn’t."],
        ["Is she a secretary?", "Yes, she is.", "No, she isn’t."],
        ["Is it a library?", "Yes, it is.", "No, it isn’t."],
        ["Are we in the USA?", "Yes, we are. Yes, you are.", "No, we aren’t. No, you aren’t."],
        ["Are you American?", "Yes, we are.", "	No, we aren’t."],
        ["Are they classmates?", "Yes, they are.", "No, they aren’t."],
    ]
};

export default function VerbToBePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Header */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 mb-8 flex justify-center gap-3 items-center"
            >
                <BookOpenCheck className="w-10 h-10 text-blue-600" />
                Verb To Be
            </motion.h1>

            <p className="text-gray-700 leading-relaxed mb-6">
                <strong>To be</strong> é geralmente o primeiro verbo que se aprende em inglês, pois significa
                <strong> ser</strong> ou <strong>estar</strong>. Veja como ele aparece logo no início do diálogo entre Rosa
                e o diretor da Columbus College of Chicago quando eles falam de si mesmos:
            </p>

            <div className="flex justify-center mb-6">
                <Image
                    src="/verbtobe.png"
                    alt="Verb to be example"
                    width={700}
                    height={380}
                    className="rounded-xl shadow"
                />
            </div>

            <DialogueBox lines={dialogue4} />

            <p className="text-gray-700 leading-relaxed mt-6 mb-6">
                O <strong>To be</strong> é um dos poucos verbos que realmente mudam de acordo com o sujeito.
                Veja sua conjugação no presente simples na forma afirmativa:
            </p>

            {/* Affirmative Table */}
            <LessonTable headers={affimativeTable.headers} rows={affimativeTable.rows} />

            {/* Affirmative Reference Images */}
            <div className="flex flex-wrap justify-center gap-6 my-6">
                <Image src="/affimative001.png" alt="" width={300} height={120} className="rounded shadow" />
                <Image src="/affimative002.png" alt="" width={300} height={120} className="rounded shadow" />
                <Image src="/affimative003.png" alt="" width={300} height={120} className="rounded shadow" />
            </div>

            {/* Negative Table */}
            <LessonTable headers={negativeTable.headers} rows={negativeTable.rows} />

            {/* Negative Reference Images */}
            <div className="flex flex-wrap justify-center gap-6 my-6">
                <Image src="/negative001.png" alt="" width={300} height={120} className="rounded shadow" />
                <Image src="/negative002.png" alt="" width={300} height={120} className="rounded shadow" />
                <Image src="/negative003.png" alt="" width={300} height={120} className="rounded shadow" />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Na forma interrogativa, ocorre uma inversão: o verbo fica antes do sujeito.
            </p>

            {/* Interrogative Table */}
            <LessonTable headers={interrogativeTable.headers} rows={interrogativeTable.rows} />

            {/* Interrogative Example Images */}
            <div className="flex flex-wrap justify-center gap-6 my-6">
                <Image src="/interrogativeexemplo001.png" alt="" width={200} height={120} className="rounded shadow" />
                <Image src="/interrogativeexemplo002.png" alt="" width={200} height={120} className="rounded shadow" />
                <Image src="/interrogativeexemplo003.png" alt="" width={200} height={120} className="rounded shadow" />
                <Image src="/interrogativeexemplo004.png" alt="" width={200} height={120} className="rounded shadow" />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                As <strong>Yes/No Questions</strong> com o verbo <strong>To be</strong> usam respostas curtas
                (short answers). Veja:
            </p>

            {/* Short answers table */}
            <LessonTable headers={questionsTable.headers} rows={questionsTable.rows} />

            <p className="text-gray-700 leading-relaxed mb-8 text-sm border-l-4 border-blue-400 pl-3 italic">
                ✅ Short answers afirmativas não usam contração.<br />
                ✅ Negativas geralmente usam.<br />
                ✅ Para “we”, a resposta pode ser <strong>we</strong> (incluindo quem fala) ou <strong>you</strong> (excluindo quem fala).
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
                Agora que você domina o verbo <strong>To be</strong>, vamos aprender os <strong>possessive adjectives</strong>.
            </p>

            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/subject-pronouns"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/possessive-adjectives"
            />

            <NiceToMeetYouCredits />
        </main>
    );
}
