"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, Music, Tv, HeartPulse } from "lucide-react";

export default function ConditionalsAndMediaModule() {
    const topics = [
        {
            id: 1,
            title: "Double trouble is just beginning",
            description: "Vocabulário de mídia musical e televisiva + Zero e First Conditional em contexto.",
            icon: <Music className="w-8 h-8 text-blue-600" />,
            link: "/conditionals-and-media/double-trouble"
        },
        {
            id: 2,
            title: "Talking about unreal situations",
            description: "Expressando situações hipotéticas com Second Conditional e uso de would e could.",
            icon: <Tv className="w-8 h-8 text-green-600" />,
            link: "/conditionals-and-media/unreal-situations"
        },
        {
            id: 3,
            title: "Talking about regrets",
            description: "Aprenda a usar Third Conditional para falar sobre arrependimentos e situações imaginadas no passado.",
            icon: <HeartPulse className="w-8 h-8 text-rose-600" />,
            link: "/conditionals-and-media/regrets"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Música, TV e Condicionais"
            subtitle="Music • TV • Healthy Habits • Conditionals"
            description="Aprenda vocabulário sobre música, televisão e hábitos saudáveis enquanto domina Zero, First, Second e Third Conditional, além do uso de would e could."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
