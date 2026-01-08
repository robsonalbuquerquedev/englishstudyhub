"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, UtensilsCrossed, HeartPulse, PartyPopper } from "lucide-react";

export default function RestaurantsHealthLeisure() {
    const topics = [
        {
            id: 1,
            title: "Eating Out and Ordering Food",
            description: "Aprenda a pedir comida e bebidas em restaurantes e cafés usando expressões comuns.",
            icon: <UtensilsCrossed className="w-8 h-8 text-red-600" />,
            link: "/basic/restaurants-health-leisure/eating-out-and-ordering-food",
        },
        {
            id: 2,
            title: "Talking About Health and Feelings",
            description: "Descubra como falar sobre sintomas, saúde e como você está se sentindo no dia a dia.",
            icon: <HeartPulse className="w-8 h-8 text-green-600" />,
            link: "/basic/restaurants-health-leisure/talking-about-health-and-feelings",
        },
        {
            id: 3,
            title: "Leisure and Fun in the City",
            description: "Aprenda a falar sobre lazer, passeios e atividades para se divertir na cidade.",
            icon: <PartyPopper className="w-8 h-8 text-amber-600" />,
            link: "/basic/restaurants-health-leisure/leisure-and-fun-in-the-city",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Restaurants, Health and Leisure"
            subtitle="Comendo fora, cuidando da saúde e aproveitando a cidade."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para pedir comida, falar sobre saúde e descrever atividades de lazer em situações comuns do dia a dia com clareza e naturalidade."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
