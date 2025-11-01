"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, Wrench, HelpCircle, ClipboardList } from "lucide-react";

export default function CausativeTagIndirectModule() {
    const topics = [
        {
            id: 1,
            title: "We need to have it fixed",
            description: "Aprenda as causative sentences para indicar serviços feitos por terceiros.",
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            link: "/causative-tag-indirect/we-need-to-have-it-fixed"
        },
        {
            id: 2,
            title: "Checking and asking for information",
            description: "Domine Tag Questions e Indirect Questions para confirmar informações e perguntar com polidez.",
            icon: <HelpCircle className="w-8 h-8 text-green-600" />,
            link: "/causative-tag-indirect/checking-and-asking-for-information"
        },
        {
            id: 3,
            title: "Review",
            description: "Revisão geral do conteúdo: causatives, tag questions e indirect questions.",
            icon: <ClipboardList className="w-8 h-8 text-amber-600" />,
            link: "/causative-tag-indirect/review"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Causatives, Tag Questions e Indirect Questions"
            subtitle="Causative Sentences • Tag Questions • Indirect Questions"
            description="Aprenda a construir frases causativas, confirmar informações com tag questions e formular perguntas indiretas de forma educada e formal."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
