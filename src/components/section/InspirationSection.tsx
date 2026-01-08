"use client";

import { useState } from "react";
import { Smile } from "lucide-react";

export default function InspirationSection() {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <section className="mt-24 py-16 text-center bg-blue-50">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                Aprender inglês é uma jornada
            </h2>

            <p className="text-gray-700 mb-2">
                Comece no seu ritmo e evolua todos os dias.
            </p>

            <p className="text-sm text-gray-500 italic mb-8">
                Learning English is a journey. Start at your own pace and improve every day.
            </p>

            {/* Micro-interaction */}
            <button
                onClick={() => setShowMessage((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-blue-700 shadow hover:shadow-md transition cursor-pointer"
            >
                <Smile className="h-5 w-5" />
                {showMessage ? "Nice to meet you!" : "Conheça o criador"}
            </button>

            {showMessage && (
                <p className="mt-6 text-gray-700 max-w-xl mx-auto animate-fade-in">
                    Hi! I'm <strong>Robson Albuquerque</strong>, the creator of
                    EnglishStudyHub. It's a pleasure to meet you and be part of
                    your English learning journey.
                </p>
            )}
        </section>
    );
}
