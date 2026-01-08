"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import { HandHeart } from "lucide-react";

// DIÁLOGO
const dialogue2 = [
    { speaker: "Rosa", text: "Excuse me." },
    { speaker: "Mr. Smith", text: "Good morning! Welcome to Columbus College of Chicago! My name is John Smith and I’m the dean here. What is your name?" },
    { speaker: "Rosa", text: "Good morning. My name is Rosa Souza." },
    { speaker: "Mr. Smith", text: "It’s nice to meet you Miss Souza." },
    { speaker: "Rosa", text: "Nice to meet you too, Mr. Smith." },
    { speaker: "Mr. Smith", text: "Where are you from, Miss Souza?" },
    { speaker: "Rosa", text: "I’m from Brazil." },
    { speaker: "Mr. Smith", text: "Oh, nice! Here is your schedule. It’s a pleasure to have you as our student." },
    { speaker: "Rosa", text: "Thank you, Mr. Smith." },
    { speaker: "Mr. Smith", text: "You’re welcome." },
];

// TABELAS (exemplos → você atualiza conforme as imagens/fonte)
const politeExpressionsTable = {
    headers: ["Polite expressions", "Expressões de cordialidade"],
    rows: [
        ["Excuse me", "Com licença"],
        ["Please", "Por favor"],
        ["Thank you / Thanks (informal)", "Muito obrigado / Obrigado"],
        ["You’re welcome", "De nada"],
        ["I’m sorry / Sorry", "Desculpe / Sinto muito"],
    ]
};

const fullNameTable = {
    headers: ["Rosa", "Maria", "Guimarães", "Souza"],
    rows: [
        ["Name / First name", "Second name", "Middle name", "Surname / Last name/ Family name"],
    ]
};

export default function BeingPolitePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2"
            >
                <HandHeart className="w-10 h-10 text-pink-600" />
                Being Polite
            </motion.h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
                No dia seguinte, já instalada em sua nova <em>house</em>, Rosa está ansiosa por conhecer o campus onde irá estudar.
                Ela é recebida por John Smith, o diretor da <em>College</em>. Nesta conversa, a tendência é que Rosa tenha um
                comportamento mais formal ao se apresentar, diferente de como agiu quando conversou com suas housemates. Observe como se dá a conversa:
            </p>

            {/* IMAGEM */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/beingpolite.png"
                    alt="Being polite illustration"
                    width={700}
                    height={400}
                    className="rounded-xl shadow-md"
                />
            </div>

            {/* DIÁLOGO */}
            <DialogueBox lines={dialogue2} />

            {/* VIDEO */}
            <div className="flex justify-center mb-10">
                <div className="aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/v3hN4qxkVUE?si=FZQG2lghJkuoX4Ga"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Ao se apresentar ao Mr. Smith, Rosa utiliza a expressão <strong>"Nice to meet you"</strong>.
                Existem outras expressões que transmitem essa mesma ideia. Veja:
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                <Image
                    src="/expressao001.png"
                    alt="Expression example 1"
                    width={250}
                    height={120}
                    className="rounded-lg shadow-md"
                />
                <Image
                    src="/expressao002.png"
                    alt="Expression example 2"
                    width={250}
                    height={120}
                    className="rounded-lg shadow-md"
                />
                <Image
                    src="/expressao003.png"
                    alt="Expression example 3"
                    width={250}
                    height={120}
                    className="rounded-lg shadow-md"
                />
            </div>

            <p className="text-gray-700 mb-4">
                Para responder de modo adequado, acrescente <strong>too</strong> ao final:
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                <Image
                    src="/expressao004.png"
                    alt="Expression reply example 1"
                    width={250}
                    height={120}
                    className="rounded-lg shadow-md"
                />
                <Image
                    src="/expressao005.png"
                    alt="Expression reply example 2"
                    width={250}
                    height={120}
                    className="rounded-lg shadow-md"
                />
                <Image
                    src="/expressao006.png"
                    alt="Expression reply example 3"
                    width={250}
                    height={120}
                    className="rounded-lg shadow-md"
                />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Rosa também usa as expressões <strong>Excuse me</strong> e <strong>Thank you</strong>, essenciais para demonstrar cordialidade.
            </p>

            {/* TABELAS */}
            <LessonTable headers={politeExpressionsTable.headers} rows={politeExpressionsTable.rows} />

            <p className="text-gray-700 leading-relaxed mb-6">
                Outra forma de ser educado em inglês é através de <strong>titles</strong>
                (pronomes de tratamento). Veja alguns exemplos:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow mb-8 text-gray-700 leading-relaxed">
                <p className="mb-3"><strong>Sir:</strong> quando você se dirigir a um homem adulto, casado ou solteiro, sem utilizar nome ou sobrenome.</p>

                <p className="mb-3">
                    <strong>Ma'am (AmE) / Madam (BrE):</strong> usado ao se dirigir a uma mulher adulta sem utilizar nome ou sobrenome.
                </p>

                <p className="mb-3"><strong>Miss + last name:</strong> para uma mulher solteira, geralmente jovem.</p>

                <p className="mb-3"><strong>Mr + last name:</strong> para um homem, casado ou solteiro.</p>

                <p className="mb-3">
                    <strong>Ms + last name:</strong> para uma mulher adulta, casada ou não. Muito comum em ambientes profissionais.
                </p>

                <p className="mb-3"><strong>Mrs + last name:</strong> para uma mulher casada que utiliza o sobrenome do marido.</p>

                <p className="mb-3"><strong>Professor + last name:</strong> para professores universitários.</p>

                <p className="mt-4">
                    Por isso, a não ser que alguém permita que você use o primeiro nome, ou que vocês tenham
                    intimidade suficiente, prefira utilizar o <strong>title</strong> adequado.
                    Por exemplo, o nome de Rosa poderia ser: <strong>Miss Souza</strong>.
                </p>

                <p className="mt-3">
                    Como muitos desses títulos utilizam o <em>last name</em>, é importante conhecer as
                    partes que compõem um nome completo.
                </p>
            </div>

            {/* Tabela */}
            <LessonTable headers={fullNameTable.headers} rows={fullNameTable.rows} />

            <p className="text-gray-700 leading-relaxed mb-8">
                A seguir você estudará o alfabeto que irá ajudá-lo na escrita e na pronúncia das palavras.
            </p>

            {/* NAVEGAÇÃO */}
            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/greetings"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/the-alphabet"
            />

            {/* CRÉDITOS */}
            <NiceToMeetYouCredits />

        </main>
    );
}
