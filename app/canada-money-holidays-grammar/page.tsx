"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, DollarSign, CalendarDays, Camera } from "lucide-react";

export default function CanadaMoneyHolidaysGrammar() {
    const topics = [
        {
            id: 1,
            title: "Someone stole the document!",
            description: "Vocabulário sobre dinheiro, segurança e situações do dia a dia.",
            icon: <DollarSign className="w-8 h-8 text-green-600" />,
            link: "/canada-money-holidays-grammar/someone-stole-the-document"
        },
        {
            id: 2,
            title: "Canadian holidays",
            description: "Feriados do Canadá e uso de conjunções concessivas e adversativas.",
            icon: <CalendarDays className="w-8 h-8 text-red-600" />,
            link: "/canada-money-holidays-grammar/canadian-holidays"
        },
        {
            id: 3,
            title: "Sightseeing in Canada",
            description: "Viagens, turismo, relative clauses e previsões com 'going to'.",
            icon: <Camera className="w-8 h-8 text-blue-600" />,
            link: "/canada-money-holidays-grammar/sightseeing-in-canada"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Dinheiro, Feriados e Estruturas Avançadas"
            subtitle="Money, Canadian Holidays & Grammar"
            description="Aprenda sobre dinheiro, feriados no Canadá e estruturas essenciais da língua inglesa como conjunções, relative clauses, Present Continuous vs. Going to e o uso de 'be able to'. Ideal para quem quer ampliar o vocabulário e ganhar fluência em contextos reais."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
