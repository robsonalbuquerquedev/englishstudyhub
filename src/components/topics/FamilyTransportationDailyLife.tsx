"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Clock, Users, Home } from "lucide-react";

export default function FamilyTransportationDailyLife() {
    const topics = [
        {
            id: 1,
            title: "Getting Around the City",
            description: "Aprenda a falar sobre transporte público, horários e deslocamento no dia a dia.",
            icon: <Clock className="w-8 h-8 text-blue-600" />,
            link: "/basic/family-transportation-daily-life/getting-around-the-city",
        },
        {
            id: 2,
            title: "Talking About Your Family",
            description: "Descubra como apresentar parentes e falar sobre relações familiares em inglês.",
            icon: <Users className="w-8 h-8 text-green-600" />,
            link: "/basic/family-transportation-daily-life/talking-about-your-family",
        },
        {
            id: 3,
            title: "Daily Life at Home",
            description: "Vocabulário e expressões para falar sobre rotina, tarefas e hábitos em casa.",
            icon: <Home className="w-8 h-8 text-amber-600" />,
            link: "/basic/family-transportation-daily-life/daily-life-at-home",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Family, Transportation and Daily Life"
            subtitle="Falando sobre sua rotina, sua família e seus deslocamentos."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para falar sobre transporte no dia a dia, apresentar membros da sua família e descrever sua rotina em casa com clareza e naturalidade."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
