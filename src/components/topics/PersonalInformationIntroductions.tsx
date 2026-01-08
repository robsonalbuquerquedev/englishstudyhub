"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, UserCircle, Users, Navigation } from "lucide-react";

export default function PersonalInformationIntroductions() {
    const topics = [
        {
            id: 1,
            title: "Introducing Yourself in English",
            description: "Aprenda como se apresentar com confiança em inglês, incluindo cumprimentos, informações pessoais básicas e expressões de cortesia usadas em conversas do dia a dia.",
            icon: <UserCircle className="w-8 h-8 text-blue-600" />,
            link: "/basic/personal-information-introductions/introducing-yourself",
        },
        {
            id: 2,
            title: "Starting Conversations and Making Friends",
            description: "Descubra maneiras simples e naturais de iniciar conversas, fazer perguntas básicas e construir interações amigáveis ​​ao conhecer novas pessoas em inglês.",
            icon: <Users className="w-8 h-8 text-green-600" />,
            link: "/basic/personal-information-introductions/starting-conversations",
        },
        {
            id: 3,
            title: "Asking for and Giving Directions",
            description: "Entenda como pedir informações e explicar locais usando expressões claras em inglês, preposições de lugar e frases comuns usadas em situações do dia a dia.",
            icon: <Navigation className="w-8 h-8 text-amber-600" />,
            link: "/basic/personal-information-introductions/asking-for-directions",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Personal Information and Introductions"
            subtitle="Comunicando quem você é e onde você está."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para se apresentar, interagir com novas pessoas e comunicar informações básicas sobre localização e situações do dia a dia com clareza e confiança."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
