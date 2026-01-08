"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, CalendarClock, Brain, FileClock } from "lucide-react";

export default function FutureTensesModalsPastReview() {
    const topics = [
        {
            id: 1,
            title: "Making Future Plans",
            description: "Aprenda a falar sobre planos e previsões usando going to e will em situações do dia a dia.",
            icon: <CalendarClock className="w-8 h-8 text-blue-600" />,
            link: "/advanced/future-tenses-modals-past-review/making-future-plans",
        },
        {
            id: 2,
            title: "You Must Study Hard!",
            description: "Uso de verbos modais para expressar obrigação, permissão e possibilidade de forma clara e natural.",
            icon: <Brain className="w-8 h-8 text-green-600" />,
            link: "/advanced/future-tenses-modals-past-review/you-must-study-hard",
        },
        {
            id: 3,
            title: "When Something Happened…",
            description: "Compare Past Simple e Past Continuous para narrar acontecimentos e descrever ações em andamento no passado.",
            icon: <FileClock className="w-8 h-8 text-amber-600" />,
            link: "/advanced/future-tenses-modals-past-review/when-something-happened",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Future, Modals and Past Review"
            subtitle="Falando sobre planos, regras e acontecimentos passados"
            description="Neste módulo avançado, você vai aprender a expressar planos futuros, usar verbos modais para falar de regras e possibilidades, e narrar eventos passados com mais precisão e fluidez."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
