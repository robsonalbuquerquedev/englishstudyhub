"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, Briefcase, Brain, ShieldCheck } from "lucide-react";

export default function TrabalhoModaisAdjetivos() {
    const topics = [
        {
            id: 1,
            title: "Thinking about the next step",
            description: "Vocabulário de entrevista de emprego e ambiente corporativo.",
            icon: <Briefcase className="w-8 h-8 text-blue-600" />,
            link: "/trabalho-modais-adjetivos/thinking-about-the-next-step"
        },
        {
            id: 2,
            title: "Past, present and future abilities",
            description: "Uso de can, could e expressões para falar de habilidades ao longo do tempo.",
            icon: <Brain className="w-8 h-8 text-green-600" />,
            link: "/trabalho-modais-adjetivos/past-present-future-abilities"
        },
        {
            id: 3,
            title: "Rules? Why do we need them?",
            description: "Uso de must, should e have to para regras, obrigações e conselhos.",
            icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
            link: "/trabalho-modais-adjetivos/rules-why-do-we-need-them"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Entrevista, Modal Verbs e Adjetivos"
            subtitle="Jobs, Abilities & Rules"
            description="Aprenda vocabulário para entrevistas de emprego, fale sobre habilidades no passado, presente e futuro, e domine verbos modais como can, could, should, must e have to. Explore também adjetivos terminados em -ed e -ing."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
