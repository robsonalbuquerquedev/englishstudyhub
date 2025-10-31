"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, Clock, Users, Home } from "lucide-react";

export default function TransportFamilyRoutine() {
    const topics = [
        {
            id: 1,
            title: "What time is the next bus?",
            description: "Conversando sobre horários e meios de transporte.",
            icon: <Clock className="w-8 h-8 text-blue-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/transport-family-routine/next-bus"
        },
        {
            id: 2,
            title: "Family matters",
            description: "Falando sobre parentes e relações familiares.",
            icon: <Users className="w-8 h-8 text-green-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/transport-family-routine/family-matters"
        },
        {
            id: 3,
            title: "Cleaning day",
            description: "Vocabulário e ações do dia a dia em casa.",
            icon: <Home className="w-8 h-8 text-amber-600" />,
            link: "/identificacao-e-caracterizacao-pessoal/transport-family-routine/cleaning-day"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Meios de Transporte, Família e Rotina"
            subtitle="Rotina e Hábitos – Em Casa"
            description="Aprenda a falar sobre transportes, sobre sua família e sobre o que você faz no seu dia a dia em casa."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
