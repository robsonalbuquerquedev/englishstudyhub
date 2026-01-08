"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Briefcase, Brain, ShieldCheck } from "lucide-react";

export default function WorkplaceEnglishModalVerbs() {
    const topics = [
        {
            id: 1,
            title: "Thinking About the Next Step",
            description: "Vocabulário essencial para entrevistas de emprego, carreira profissional e situações do ambiente corporativo.",
            icon: <Briefcase className="w-8 h-8 text-blue-600" />,
            link: "/advanced/workplace-english-modal-verbs/thinking-about-the-next-step",
        },
        {
            id: 2,
            title: "Past, Present and Future Abilities",
            description: "Aprenda a usar can, could e outras expressões para falar sobre habilidades no passado, presente e futuro.",
            icon: <Brain className="w-8 h-8 text-green-600" />,
            link: "/advanced/workplace-english-modal-verbs/past-present-future-abilities",
        },
        {
            id: 3,
            title: "Rules? Why Do We Need Them?",
            description: "Uso de must, should e have to para falar sobre regras, obrigações, responsabilidades e conselhos no trabalho.",
            icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
            link: "/advanced/workplace-english-modal-verbs/rules-why-do-we-need-them",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Workplace English and Modal Verbs"
            subtitle="Falando sobre carreira, habilidades e regras no ambiente profissional"
            description="Neste módulo avançado, você vai desenvolver o inglês necessário para o ambiente de trabalho, aprendendo a falar sobre carreira, habilidades ao longo do tempo e regras profissionais usando modal verbs de forma clara e natural."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
