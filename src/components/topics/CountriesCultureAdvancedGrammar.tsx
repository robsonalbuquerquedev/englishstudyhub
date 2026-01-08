"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, DollarSign, CalendarDays, Camera } from "lucide-react";

export default function CountriesCultureAdvancedGrammar() {
    const topics = [
        {
            id: 1,
            title: "Money, Safety and Everyday Problems",
            description: "Aprenda a falar sobre dinheiro, segurança e problemas comuns do dia a dia com mais confiança.",
            icon: <DollarSign className="w-8 h-8 text-green-600" />,
            link: "/intermediate/countries-culture-grammar/money-safety-and-problems",
        },
        {
            id: 2,
            title: "Culture, Holidays and Contrasts",
            description: "Descubra como falar sobre feriados, cultura e contrastes usando conectores como although, but e however.",
            icon: <CalendarDays className="w-8 h-8 text-red-600" />,
            link: "/intermediate/countries-culture-grammar/culture-and-holidays",
        },
        {
            id: 3,
            title: "Travel, Places and Future Plans",
            description: "Aprenda a descrever lugares, fazer previsões e falar sobre viagens usando relative clauses e going to.",
            icon: <Camera className="w-8 h-8 text-blue-600" />,
            link: "/intermediate/countries-culture-grammar/travel-and-places",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Countries, Culture and Grammar"
            subtitle="Falando sobre cultura, viagens e situações mais complexas."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para lidar com dinheiro e segurança, falar sobre cultura e feriados, e descrever viagens e planos futuros usando estruturas gramaticais mais avançadas com clareza e naturalidade."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
