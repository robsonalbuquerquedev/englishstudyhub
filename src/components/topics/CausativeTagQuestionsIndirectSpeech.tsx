"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Wrench, HelpCircle, ClipboardList } from "lucide-react";

export default function CausativeTagQuestionsIndirectSpeech() {
    const topics = [
        {
            id: 1,
            title: "We Need to Have It Fixed",
            description: "Aprenda a usar causative structures para falar sobre serviços realizados por outras pessoas em situações reais do dia a dia.",
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            link: "/advanced/causative-tag-questions-indirect-speech/we-need-to-have-it-fixed",
        },
        {
            id: 2,
            title: "Checking and Asking for Information",
            description: "Domine Tag Questions e Indirect Questions para confirmar informações e fazer perguntas de forma educada e natural.",
            icon: <HelpCircle className="w-8 h-8 text-green-600" />,
            link: "/advanced/causative-tag-questions-indirect-speech/checking-and-asking-for-information",
        },
        {
            id: 3,
            title: "Review",
            description: "Revisão completa das causatives, tag questions e indirect questions, reforçando o uso em contextos reais.",
            icon: <ClipboardList className="w-8 h-8 text-amber-600" />,
            link: "/advanced/causative-tag-questions-indirect-speech/review",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Causative, Tag Questions and Indirect Speech"
            subtitle="Comunicando ações, confirmando informações e falando com mais naturalidade"
            description="Neste módulo avançado, você vai aprender a expressar ações feitas por terceiros, confirmar informações e fazer perguntas indiretas com mais educação, precisão e fluidez em inglês, como em situações reais do cotidiano."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
