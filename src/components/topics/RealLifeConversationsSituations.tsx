"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, MessageCircle, PhoneCall, Users, } from "lucide-react";

export default function RealLifeConversationsSituations() {
    const topics = [
        {
            id: 1,
            title: "Handling Everyday Conversations",
            description: "Pratique diálogos do dia a dia em contextos reais, como pedidos, reclamações e pequenas conversas.",
            icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
            link: "/advanced/real-life-conversations-situations/handling-everyday-conversations",
        },
        {
            id: 2,
            title: "Solving Problems and Making Requests",
            description: "Aprenda a resolver problemas, pedir ajuda e negociar soluções usando linguagem educada e clara.",
            icon: <PhoneCall className="w-8 h-8 text-green-600" />,
            link: "/advanced/real-life-conversations-situations/solving-problems-and-making-requests",
        },
        {
            id: 3,
            title: "Expressing Opinions and Interacting Naturally",
            description: "Expresse opiniões, concorde ou discorde e interaja com mais fluidez em conversas reais.",
            icon: <Users className="w-8 h-8 text-amber-600" />,
            link: "/advanced/real-life-conversations-situations/expressing-opinions-and-interacting-naturally",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Real-Life Conversations and Situations"
            subtitle="Usando o inglês no mundo real"
            description="Neste módulo avançado, você coloca todo o inglês aprendido em prática, lidando com situações reais, conversas espontâneas e interações do cotidiano com mais confiança e naturalidade."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
