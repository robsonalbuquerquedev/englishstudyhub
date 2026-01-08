"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Clapperboard, History, Film } from "lucide-react";

export default function MoviesStoriesLifeExperiences() {
    const topics = [
        {
            id: 1,
            title: "Let’s Go to the Movies",
            description: "Vocabulário essencial sobre filmes, gêneros cinematográficos e pessoas envolvidas no mundo do cinema, usando exemplos do dia a dia.",
            icon: <Clapperboard className="w-8 h-8 text-purple-600" />,
            link: "/intermediate/movies-stories-life-experiences/lets-go-to-the-movies",
        },
        {
            id: 2,
            title: "I’d Never Done That Before",
            description: "Aprenda a usar Past Perfect e Simple Past para falar sobre experiências passadas e acontecimentos anteriores a outros eventos.",
            icon: <History className="w-8 h-8 text-blue-600" />,
            link: "/intermediate/movies-stories-life-experiences/id-never-done-that-before",
        },
        {
            id: 3,
            title: "I Used To",
            description: "Entenda como falar sobre hábitos antigos, mudanças ao longo da vida e adaptação usando used to e get used to.",
            icon: <Film className="w-8 h-8 text-green-600" />,
            link: "/intermediate/movies-stories-life-experiences/i-used-to",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Movies, Stories and Life Experiences"
            subtitle="Falando sobre histórias, experiências e mudanças ao longo da vida"
            description="Neste módulo intermediário, você vai desenvolver sua habilidade de contar histórias, falar sobre experiências passadas e descrever hábitos e mudanças ao longo da vida, usando contextos reais como filmes, memórias e situações do cotidiano."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
