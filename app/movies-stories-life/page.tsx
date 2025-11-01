"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, Clapperboard, History, Film } from "lucide-react";

export default function MoviesStoriesLife() {
    const topics = [
        {
            id: 1,
            title: "Let’s go to the movies",
            description: "Vocabulário sobre filmes, gêneros cinematográficos e profissionais do cinema.",
            icon: <Clapperboard className="w-8 h-8 text-purple-600" />,
            link: "/movies-stories-life/lets-go-to-the-movies"
        },
        {
            id: 2,
            title: "I’d never done that before",
            description: "Past Perfect, Simple Past e contrações no Past Perfect com exemplos reais.",
            icon: <History className="w-8 h-8 text-blue-600" />,
            link: "/movies-stories-life/id-never-done-that-before"
        },
        {
            id: 3,
            title: "I used to",
            description: "Uso de use, get used to e used to; estágios da vida e hábitos antigos.",
            icon: <Film className="w-8 h-8 text-green-600" />,
            link: "/movies-stories-life/i-used-to"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Filmes, Histórias e Estágios da Vida"
            subtitle="Movies, Stories & Life Stages"
            description="Aprenda vocabulário sobre cinema, gêneros narrativos e estágios da vida, além de dominar estruturas essenciais como verbos com to/ing, Past Perfect e o uso de used to."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
