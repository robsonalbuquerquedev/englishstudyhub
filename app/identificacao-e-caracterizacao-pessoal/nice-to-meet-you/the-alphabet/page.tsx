"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DialogueBox from "../../../components/dialogue/DialogueBox";
import LessonTable from "../../../components/table/LessonTable";
import ModuleNavigation from "../../../components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "../../../components/credits/NiceToMeetYouCredits";
import { SpellCheck } from "lucide-react";

// Diálogo Rosa no aeroporto
const dialogue3 = [
    { speaker: "Attendant", text: "Good afternoon, may I help you?" },
    { speaker: "Rosa", text: "Hi, I'm Rosa… Rosa Souza. S-O-U-Z-A." },
    { speaker: "Attendant", text: "Rosa Souza?" },
    { speaker: "Rosa", text: "Yes, Rosa Souza." },
];

// Tabela de caracteres
const caracteresTable = {
    headers: ["Symbol / Character", "Name in English"],
    rows: [
        ["@", "at"],
        [".", "dot"],
        ["/", "slash"],
        ["_", "underscore"],
        [":", "colon"],
        ["-", "hyphen"],
        ["*", "asterisk"],
        ["#", "hash"],
    ]
};

export default function TheAlphabetPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 text-center mb-8 flex items-center justify-center gap-3"
            >
                <SpellCheck className="w-10 h-10 text-blue-600" />
                The Alphabet
            </motion.h1>

            {/* Introdução */}
            <p className="text-gray-700 mb-6 leading-relaxed">
                Numa situação comunicativa é comum haver dúvidas quanto à escrita de certos nomes de pessoas
                ou lugares. Para um estrangeiro, um sobrenome como, por exemplo, <strong>Magalhães</strong>,
                pode ser tão complicado de entender quanto <strong>Schleiermacher</strong> é difícil para brasileiros.
                Para resolver situações assim, soletrar palavras corretamente é fundamental.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
                Veja como isso acontece em um diálogo entre Rosa e um funcionário do aeroporto de Chicago:
            </p>

            {/* Imagem 1 */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/the-alphabet.png"
                    alt="Alphabet situation illustration"
                    width={700}
                    height={400}
                    className="rounded-xl shadow"
                />
            </div>

            {/* Dialogue */}
            <DialogueBox lines={dialogue3} />

            {/* Vídeo 1 */}
            <div className="flex justify-center mb-10">
                <div className="aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/IyX57Avej-s?si=oSRbxpEdE_SWS0L3"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Introdução do alfabeto */}
            <p className="text-gray-700 mb-6 leading-relaxed">
                Você deve ter percebido que as letras em inglês têm sons diferentes. Veja a pronúncia do alfabeto:
            </p>

            {/* Imagem 2 */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/alphabet.png"
                    alt="English alphabet chart"
                    width={700}
                    height={400}
                    className="rounded-xl shadow"
                />
            </div>

            {/* Vídeo 2 */}
            <div className="flex justify-center mb-10">
                <div className="aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/sJk8h5gYm4A?si=Jqpi6U9JtA-Zw0YD"
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>

            {/* Texto sobre emails e web */}
            <p className="text-gray-700 mb-4 leading-relaxed">
                Certos caracteres são fundamentais para soletrar e informar <em>e-mail</em> e <em>web address</em>.
            </p>

            {/* Tabela de caracteres */}
            <LessonTable headers={caracteresTable.headers} rows={caracteresTable.rows} />

            <p className="text-gray-700 mb-4">
                O endereço eletrônico de Rosa seria lido assim:
            </p>

            <div className="flex flex-col items-center justify-center mb-8">
                <Image
                    src="/enderecoeletronico.png"
                    alt="Email reading example"
                    width={700}
                    height={200}
                    className="rounded-lg shadow mb-2"
                />

                <p className="text-blue-700 font-semibold italic text-center">
                    "rosa dot souza at facul dot com dot br"
                </p>
            </div>

            <p className="text-gray-700 mb-4">
                Já o endereço da <em>web page</em> que Rosa acessava seria lido assim:
            </p>

            <div className="flex flex-col items-center justify-center mb-8">
                <Image
                    src="/webadress.png"
                    alt="Web address reading example"
                    width={700}
                    height={200}
                    className="rounded-lg shadow mb-2"
                />

                <p className="text-blue-700 font-semibold italic text-center">
                    "www dot facul dot com dot br slash enrollment slash sem underscore four"
                </p>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
                Agora você já consegue soletrar nomes, informar endereços eletrônicos e compreender
                parte importante da comunicação básica. A seguir, estudaremos os <strong>subject pronouns</strong>.
            </p>

            {/* Navigation */}
            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/being-polite"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/subject-pronouns"
            />

            {/* Credits */}
            <NiceToMeetYouCredits />
        </main>
    );
}
