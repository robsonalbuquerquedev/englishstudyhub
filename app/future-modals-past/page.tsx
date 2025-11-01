"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, CalendarClock, FileClock, Brain } from "lucide-react";

export default function FutureModalsPastModule() {

    const topics = [
        {
            id: 1,
            title: "Making future plans",
            description: "Aprenda a expressar o futuro usando going to e will para falar de planos e previsões.",
            icon: <CalendarClock className="w-8 h-8 text-blue-600" />,
            link: "/future-modals-past/making-future-plans"
        },
        {
            id: 2,
            title: "You must study hard!",
            description: "Entenda como usar verbos modais para expressar obrigação, permissão e possibilidade.",
            icon: <Brain className="w-8 h-8 text-green-600" />,
            link: "/future-modals-past/you-must-study-hard"
        },
        {
            id: 3,
            title: "When something happened…",
            description: "Compare Past Simple e Past Continuous para narrar eventos no passado.",
            icon: <FileClock className="w-8 h-8 text-amber-600" />,
            link: "/future-modals-past/when-something-happened"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Futuro, Modais e Passado"
            subtitle="Future, Modal Verbs & Past Tenses"
            description="Aprenda a falar sobre futuro com going to e will, usar verbos modais para expressar obrigações, permissões e possibilidades, e diferenciar Past Continuous e Past Simple."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
