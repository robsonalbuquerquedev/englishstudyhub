"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, CloudSun, Dumbbell, LampDesk } from "lucide-react";

export default function CondicoesClimaEsportesHabilidades() {

    const topics = [
        {
            id: 1,
            title: "What's the weather like there?",
            description: "Falando sobre clima, estações do ano e rotina diária com Present Simple e Present Continuous.",
            icon: <CloudSun className="w-8 h-8 text-blue-600" />,
            link: "/condicoes-clima-esportes-habilidades/whats-the-weather-like-there"
        },
        {
            id: 2,
            title: "You can do it!",
            description: "Expressando habilidades, gostos e preferências com o modal can e verbos relacionados a esportes e lazer.",
            icon: <Dumbbell className="w-8 h-8 text-green-600" />,
            link: "/condicoes-clima-esportes-habilidades/you-can-do-it"
        },
        {
            id: 3,
            title: "May I borrow a lamp?",
            description: "Pedindo permissão com may, falando sobre objetos da casa e utilizando possessive pronouns.",
            icon: <LampDesk className="w-8 h-8 text-amber-600" />,
            link: "/condicoes-clima-esportes-habilidades/may-i-borrow-a-lamp"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Clima, Esportes e Habilidades"
            subtitle="Weather, Sports & Abilities"
            description="Aprenda a falar sobre o clima, suas atividades de lazer, habilidades e preferências, utilizando Present Simple e Present Continuous, adverbs of manner e os verbos modais can e may."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
