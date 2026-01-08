"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Landmark, Luggage, Sparkles } from "lucide-react";

export default function AdjectivesTravelExperiences() {
    const topics = [
        {
            id: 1,
            title: "Describing Cities and Places",
            description: "Aprenda a usar adjetivos para descrever cidades, lugares e suas características.",
            icon: <Landmark className="w-8 h-8 text-blue-600" />,
            link: "/basic/adjectives-travel-experiences/describing-cities-and-places",
        },
        {
            id: 2,
            title: "Planning a Trip and Traveling",
            description: "Vocabulário essencial para falar sobre viagens, planejamento, mala e deslocamentos.",
            icon: <Luggage className="w-8 h-8 text-green-600" />,
            link: "/basic/adjectives-travel-experiences/planning-a-trip-and-traveling",
        },
        {
            id: 3,
            title: "Reviewing Experiences and Progress",
            description: "Revisão geral do que foi aprendido, falando sobre experiências e progresso em inglês.",
            icon: <Sparkles className="w-8 h-8 text-amber-600" />,
            link: "/basic/adjectives-travel-experiences/reviewing-experiences-and-progress",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Adjectives, Travel and Experiences"
            subtitle="Descrevendo lugares, viagens e o que você viveu."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para descrever cidades, falar sobre viagens e revisar experiências usando adjetivos e linguagem comum do dia a dia com clareza e confiança."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
