"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Plane, Briefcase, Home, } from "lucide-react";

export default function EnglishForTravelWorkDailyUse() {
    const topics = [
        {
            id: 1,
            title: "English for Travel Situations",
            description: "Use o inglês com segurança em aeroportos, hotéis, restaurantes e situações comuns de viagem.",
            icon: <Plane className="w-8 h-8 text-blue-600" />,
            link: "/advanced/english-for-travel-work-daily-use/english-for-travel-situations",
        },
        {
            id: 2,
            title: "English for the Workplace",
            description: "Comunicação prática no trabalho: reuniões, e-mails simples, pedidos, problemas e soluções.",
            icon: <Briefcase className="w-8 h-8 text-green-600" />,
            link: "/advanced/english-for-travel-work-daily-use/english-for-the-workplace",
        },
        {
            id: 3,
            title: "English for Everyday Life",
            description: "Resolva situações do dia a dia usando inglês natural: serviços, compras, conversas rápidas e decisões.",
            icon: <Home className="w-8 h-8 text-amber-600" />,
            link: "/advanced/english-for-travel-work-daily-use/english-for-everyday-life",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="English for Travel, Work and Daily Use"
            subtitle="Inglês funcional para a vida real"
            description="Este módulo avançado consolida o inglês necessário para viajar, trabalhar e lidar com situações do cotidiano, ajudando você a se comunicar com clareza, autonomia e confiança em contextos reais."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
