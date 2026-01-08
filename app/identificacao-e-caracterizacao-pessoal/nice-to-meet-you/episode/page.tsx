"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";
import Link from "next/link";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

export default function EpisodeNiceToMeetYou() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Título */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <div className="flex justify-center mb-3">
                    <Video className="w-12 h-12 text-blue-700" />
                </div>

                <h1 className="text-3xl font-bold text-blue-800 mb-2">
                    Episode – Nice to meet you
                </h1>

                <p className="text-gray-700">
                    Assista abaixo ao vídeo introdutório ao módulo do curso.
                </p>
            </motion.div>

            {/* Vídeo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
            >
                <div className="aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/7StArwBZTQA?si=vvIf0POyenOfMyNL"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </motion.div>

            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/the-experience-begins"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/lesson-nice-to-meet-you"
            />
            
            {/* Créditos */}
            <NiceToMeetYouCredits />

        </main>
    );
}
