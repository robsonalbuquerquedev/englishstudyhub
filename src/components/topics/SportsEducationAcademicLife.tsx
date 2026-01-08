"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Mountain, Cross, GraduationCap } from "lucide-react";

export default function SportsEducationAcademicLife() {
    const topics = [
        {
            id: 1,
            title: "Talking About Life Experiences",
            description: "Aprenda a falar sobre experiências de vida usando o Present Perfect em contextos do dia a dia.",
            icon: <Mountain className="w-8 h-8 text-blue-600" />,
            link: "/intermediate/sports-education-academic-life/life-experiences",
        },
        {
            id: 2,
            title: "Important Life Events",
            description: "Descubra como falar sobre acontecimentos importantes usando Past Simple e Past Continuous.",
            icon: <Cross className="w-8 h-8 text-red-600" />,
            link: "/intermediate/sports-education-academic-life/important-life-events",
        },
        {
            id: 3,
            title: "Academic and Professional Presentations",
            description: "Aprenda vocabulário acadêmico e pratique estruturas verbais ao falar sobre estudos e apresentações.",
            icon: <GraduationCap className="w-8 h-8 text-amber-600" />,
            link: "/intermediate/sports-education-academic-life/academic-presentations",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Life Experiences, Sports and Academic English"
            subtitle="Falando sobre experiências, eventos e vida acadêmica."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para falar sobre experiências de vida, acontecimentos importantes e situações acadêmicas, usando tempos verbais do passado e do presente com clareza e confiança."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
