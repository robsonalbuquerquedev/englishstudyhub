"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, Landmark, Luggage, Sparkles } from "lucide-react";

export default function AdjetivosViagensRevisao() {

    const topics = [
        {
            id: 1,
            title: "Talking about cities",
            description: "Descrevendo cidades, lugares e características usando adjetivos.",
            icon: <Landmark className="w-8 h-8 text-blue-600" />,
            link: "/adjetivos-viagens-revisao/talking-about-cities"
        },
        {
            id: 2,
            title: "Let’s pack and go",
            description: "Vocabulário de viagem: planejamento, mala, aeroporto e deslocamentos.",
            icon: <Luggage className="w-8 h-8 text-green-600" />,
            link: "/adjetivos-viagens-revisao/lets-pack-and-go"
        },
        {
            id: 3,
            title: "Everything was awesome!",
            description: "Revisão geral do conteúdo estudado nos módulos anteriores.",
            icon: <Sparkles className="w-8 h-8 text-amber-600" />,
            link: "/adjetivos-viagens-revisao/everything-was-awesome"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Adjetivos, Viagens e Revisão"
            subtitle="Adjectives, Travel & Review"
            description="Aprenda a descrever cidades e lugares, falar sobre viagens e revisar os principais conteúdos estudados nos módulos anteriores."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
