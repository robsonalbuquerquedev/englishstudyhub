"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, UserCheck, Users, MapPin } from "lucide-react";

export default function IdentificacaoECaracterizacaoPessoal() {
    const topics = [
        {
            id: 1,
            title: "Nice to meet you",
            description: "Cumprimentos, apresentações e expressões básicas para iniciar uma conversa em inglês.",
            icon: <UserCheck className="w-8 h-8 text-blue-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/nice-to-meet-you",
        },
        {
            id: 2,
            title: "Meeting new friends",
            description: "Como conhecer novas pessoas, fazer perguntas simples e manter o diálogo fluindo.",
            icon: <Users className="w-8 h-8 text-green-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/meeting-new-friends",
        },
        {
            id: 3,
            title: "How to get there",
            description: "Dar e receber instruções de localização e deslocamento no dia a dia.",
            icon: <MapPin className="w-8 h-8 text-amber-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/how-to-get-there",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Identificação e Caracterização Pessoal"
            subtitle="Localização no Tempo e no Espaço"
            description="Este módulo apresenta expressões e estruturas básicas da língua inglesa relacionadas à apresentação pessoal, localização no tempo e espaço, e situações de cumprimento, despedida e cortesia."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
