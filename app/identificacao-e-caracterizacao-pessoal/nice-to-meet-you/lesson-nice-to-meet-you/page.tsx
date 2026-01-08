"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import DialogueBox from "@/components/dialogue/DialogueBox";
import { MessageCircleHeart } from "lucide-react";

const dialogue1 = [
    { speaker: "Rosa", text: "Nice to meet you, girls!" },
    { speaker: "Carly", text: "Nice to meet you too." },
    { speaker: "Christine", text: "Welcome to your new home!" },
    { speaker: "Carly", text: "Where are you from in Brazil?" },
    { speaker: "Rosa", text: "I’m from Rio de Janeiro. And you? Are you from Chicago?" },
    { speaker: "Christine", text: "I’m from New York!" },
    { speaker: "Carly", text: "I’m from a small town in California." },
    { speaker: "Rosa", text: "I’m curious to see my bedroom!" },
    { speaker: "Carly", text: "Of course! Let’s go… your bedroom is upstairs." },
];

export default function LessonNiceToMeetYou() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
            >
                <div className="flex justify-center mb-3">
                    <MessageCircleHeart className="w-12 h-12 text-pink-600" />
                </div>

                <h1 className="text-3xl font-bold text-blue-800 mb-2">
                    Lesson – Nice to meet you
                </h1>

                <p className="text-gray-700">
                    Acompanhe uma cena real de apresentação entre amigas.
                </p>
            </motion.div>

            {/* Story */}
            <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
                <p className="text-gray-700 leading-relaxed mb-4">
                    Rosa chegou aos Estados Unidos e foi recebida por Amanda, que a levou até sua nova{" "}
                    <em>home</em> para conhecer suas <em>housemates</em>. Neste momento Rosa, de uma forma espontânea,
                    abraça Carly, demonstrando alegria em ver suas novas amigas pela primeira vez. Ao encontrarem-se,
                    as garotas saudaram-se e apresentaram-se. Acompanhe a continuação da conversa:
                </p>
            </section>

            {/* Image */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/nicetomeetyou.png" // ajuste o caminho conforme sua estrutura
                    alt="Nice to meet you scene illustration"
                    width={700}
                    height={400}
                    className="rounded-xl shadow-md"
                />
            </div>

            {/* Dialogue */}
            <DialogueBox lines={dialogue1} />

            {/* Observação */}
            <div className="bg-white border border-blue-100 rounded-xl p-6 shadow mb-10">
                <p className="text-gray-700 leading-relaxed">
                    É importante observar que quando interagimos com pessoas precisamos nos comunicar com elas.
                    Você pôde acompanhar que, ao se encontrarem, as garotas utilizam o <strong>Hi</strong> para se saudar.
                    Para que você consiga saudar ou se despedir de alguém, no tópico a seguir você conhecerá
                    algumas destas estruturas.
                </p>
            </div>

            {/* Video */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-10"
            >
                <div className="aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/EaTAkIC-qLM?si=NL0-M5G92MqYlIet"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </motion.div>

            {/* Navigation */}
            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/episode"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/greetings"
            />

            {/* Credits */}
            <NiceToMeetYouCredits />

        </main>
    );
}
