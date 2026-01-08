"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Music, Tv, HeartPulse } from "lucide-react";

export default function ConditionalsMediaLanguage() {
    const topics = [
        {
            id: 1,
            title: "Talking About Real Possibilities",
            description: "Aprenda a falar sobre situações reais e prováveis usando Zero and First Conditional em contextos de mídia.",
            icon: <Music className="w-8 h-8 text-blue-600" />,
            link: "/intermediate/conditionals-media-language/real-possibilities",
        },
        {
            id: 2,
            title: "Imagining Unreal Situations",
            description: "Descubra como expressar situações hipotéticas e imaginárias usando Second Conditional com would e could.",
            icon: <Tv className="w-8 h-8 text-green-600" />,
            link: "/intermediate/conditionals-media-language/unreal-situations",
        },
        {
            id: 3,
            title: "Talking About Past Regrets",
            description: "Aprenda a falar sobre arrependimentos e situações passadas imaginadas usando Third Conditional.",
            icon: <HeartPulse className="w-8 h-8 text-rose-600" />,
            link: "/intermediate/conditionals-media-language/past-regrets",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Conditionals and Media Language"
            subtitle="Falando sobre possibilidades, hipóteses e arrependimentos."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para falar sobre possibilidades reais, imaginar situações irreais e refletir sobre o passado usando estruturas condicionais em contextos de mídia e conversação."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
