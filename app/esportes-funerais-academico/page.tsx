"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, Mountain, Cross, GraduationCap } from "lucide-react";

export default function EsportesFuneraisAcademico() {

    const topics = [
        {
            id: 1,
            title: "Have you ever bungee jumped?",
            description: "Vocabulário de esportes radicais e uso do Present Perfect para experiências de vida.",
            icon: <Mountain className="w-8 h-8 text-blue-600" />,
            link: "/esportes-funerais-academico/have-you-ever-bungee-jumped"
        },
        {
            id: 2,
            title: "Life goes on",
            description: "Falando sobre acontecimentos da vida e usando Past Simple e Past Continuous.",
            icon: <Cross className="w-8 h-8 text-red-600" />,
            link: "/esportes-funerais-academico/life-goes-on"
        },
        {
            id: 3,
            title: "Presenting a paper at college",
            description: "Vocabulário acadêmico e prática de estruturas no Present Perfect e Past Tenses.",
            icon: <GraduationCap className="w-8 h-8 text-amber-600" />,
            link: "/esportes-funerais-academico/presenting-a-paper-at-college"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Esportes, Funerais e Ambiente Acadêmico"
            subtitle="Extreme Sports, Funerals & Academic Life"
            description="Amplie seu vocabulário sobre esportes radicais, serviços funerários e ambiente acadêmico enquanto aprende Past Simple, Past Continuous e Present Perfect Simple."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
