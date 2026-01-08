"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DialogueBox from "@/components/dialogue/DialogueBox";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import { Flag } from "lucide-react";

// diálogo do aeroporto
const dialogue5 = [
    { speaker: "Attendant", text: "All right. Where are you from, Miss Souza?" },
    { speaker: "Rosa", text: " I’m from Brazil." },
    { speaker: "Attendant", text: "Oh, right. You’re Brazilian. Nice to meet you, Rosa." },
    { speaker: "Rosa", text: "Nice to meet you too. Are you from the USA?" },
    { speaker: "Attendant", text: "No... I’m from Canada." },
    { speaker: "Rosa", text: "All right, you’re Canadian!" },
];

export default function CountriesAndNationalitiesPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* TÍTULO */}
            <motion.h1
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 mb-8 flex justify-center items-center gap-2"
            >
                <Flag className="w-10 h-10 text-blue-600" />
                Countries and Nationalities
            </motion.h1>

            <p className="text-gray-700 leading-relaxed mb-6">
                Quando você está no exterior, é comum mencionar seu país de origem ou sua nacionalidade.
                Da mesma forma, pessoas estrangeiras vão lhe informar sua origem.
                Observe a continuação da conversa de Rosa com o funcionário no aeroporto:
            </p>

            {/* IMAGEM DE CENA */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/countriesandnationalities.png"
                    alt="Airport conversation scene"
                    width={700}
                    height={380}
                    className="rounded-xl shadow"
                />
            </div>

            {/* DIÁLOGO */}
            <DialogueBox lines={dialogue5} />

            {/* VÍDEO */}
            <div className="flex justify-center mb-10">
                <div className="aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/ebS4tChmY-Y?si=--u5N-8MRqCO8F-J"
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Observe que o atendente pergunta:
            </p>

            <div className="flex justify-center mb-6">
                <Image
                    src="/exemplo001.png"
                    alt="Where are you from example"
                    width={400}
                    height={120}
                    className="rounded shadow"
                />
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Where ... from</strong> é usado para perguntar a origem de alguém.
                Note a inversão em <em>are you</em> por ser uma pergunta.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
                Já na resposta afirmativa, não há inversão:
                <br /><strong>I'm from Brazil.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
                Veja abaixo exemplos de países e nacionalidades:
            </p>

            {/* BANDERAS, COUNTRIES & NATIONALITIES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-semibold text-gray-800 mb-10 text-center">
                {[
                    "american", "british", "swiss", "swedish",
                    "spanish", "portuguese", "peruvian", "norwegian",
                    "dutch", "mexican", "korean", "japanese",
                    "italian", "irish", "idian", "hungarian",
                    "greek", "german", "french", "finnish",
                    "danish", "chinese", "canadian", "brazilian",
                    "belgian", "argentinian", "australian", "austrian",
                ].map((flag) => (
                    <div key={flag} className="flex flex-col items-center space-y-2">
                        <Image
                            src={`/${flag}.png`}
                            alt={flag}
                            width={60}
                            height={60}
                            className="rounded shadow"
                        />
                        <p className="capitalize">{flag}</p>
                    </div>
                ))}
            </div>

            {/* MIND THE GAP */}
            <div className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
                <h3 className="font-semibold text-lg text-yellow-800 mb-2">Mind the gap</h3>
                <p className="leading-relaxed text-sm">
                    Geralmente, não usamos artigo definido antes de nomes de países.
                    Porém, utilizamos <strong>the</strong> nos casos:
                    <br />- Países com <em>Kingdom</em>, <em>States</em>, <em>Republic</em>
                    <br />- Países no plural
                    <br />- Regiões e oceanos
                    <br /><br />
                    Ex.: <strong>the United Kingdom, the United States, the Netherlands, the Atlantic Ocean</strong>.
                </p>
            </div>

            {/* CULTURAL NOTE */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
                <h3 className="text-blue-800 font-semibold text-lg mb-3">No hugging, please!</h3>

                <div className="flex justify-center mb-4">
                    <Image
                        src="/nohugging.png"
                        alt="No hugging context"
                        width={500}
                        height={200}
                        className="rounded shadow"
                    />
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                    Brazil and the United States are culturally different about physical contact.
                    Brazilians hug and kiss when greeting. Americans usually don't — especially with strangers.
                    So when meeting someone for the first time:
                    <strong>No hugging or kissing — a wave or handshake is OK!</strong>
                </p>
            </div>

            {/* NAVIGATION */}
            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/possessive-adjectives"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/resumo-e-glossario"
            />

            <NiceToMeetYouCredits />
        </main>
    );
}
