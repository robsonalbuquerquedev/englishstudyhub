"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, UtensilsCrossed, HeartPulse, PartyPopper } from "lucide-react";

export default function RestauranteSaudeLazer() {

    const topics = [
        {
            id: 1,
            title: "Are you ready to order?",
            description: "Vocabulário e expressões para pedir comida e bebidas em restaurantes e cafés.",
            icon: <UtensilsCrossed className="w-8 h-8 text-red-600" />,
            link: "/restaurante-saude-lazer/are-you-ready-to-order"
        },
        {
            id: 2,
            title: "I feel sick",
            description: "Falando sobre saúde, sintomas, doenças e o corpo humano.",
            icon: <HeartPulse className="w-8 h-8 text-green-600" />,
            link: "/restaurante-saude-lazer/i-feel-sick"
        },
        {
            id: 3,
            title: "Having fun in the city",
            description: "Locais, passeios, lazer e atividades na cidade.",
            icon: <PartyPopper className="w-8 h-8 text-amber-600" />,
            link: "/restaurante-saude-lazer/having-fun-in-the-city"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Restaurante, Saúde e Lazer"
            subtitle="Food, Health & Fun in the City"
            description="Aprenda expressões para restaurantes, alimentação e bebidas, saúde e sintomas, além de vocabulário para lazer e atividades pela cidade."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
