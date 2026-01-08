"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, CloudSun, Dumbbell, LampDesk } from "lucide-react";

export default function WeatherSportsPersonalSkills() {
    const topics = [
        {
            id: 1,
            title: "What's the Weather Like There?",
            description: "Fale sobre clima, estações do ano e rotina usando Present Simple e Present Continuous.",
            icon: <CloudSun className="w-8 h-8 text-blue-600" />,
            link: "/intermediate/weather-sports-personal-skills/whats-the-weather-like-there",
        },
        {
            id: 2,
            title: "You Can Do It!",
            description: "Expresse habilidades, gostos e preferências usando o modal can em contextos de esporte e lazer.",
            icon: <Dumbbell className="w-8 h-8 text-green-600" />,
            link: "/intermediate/weather-sports-personal-skills/you-can-do-it",
        },
        {
            id: 3,
            title: "May I Borrow a Lamp?",
            description: "Aprenda a pedir permissão com may, falar sobre objetos da casa e usar possessive pronouns.",
            icon: <LampDesk className="w-8 h-8 text-amber-600" />,
            link: "/intermediate/weather-sports-personal-skills/may-i-borrow-a-lamp",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Weather, Sports and Personal Skills"
            subtitle="Falando sobre clima, habilidades e permissões"
            description="Neste módulo avançado, você aprende a falar sobre o clima e a rotina, expressar habilidades e preferências, e pedir permissão de forma educada e natural em inglês."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
