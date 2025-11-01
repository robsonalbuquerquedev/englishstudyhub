"use client";

import ModuleIntro from "../components/modules/ModuleIntro";
import ETecCredits from "../components/shared/ETecCredits";
import { BookOpen, School, Refrigerator, ShoppingBag } from "lucide-react";

export default function RotinaAlimentacaoVestuario() {

    const topics = [
        {
            id: 1,
            title: "A day on campus",
            description: "Falando sobre rotina diária no ambiente escolar/universitário.",
            icon: <School className="w-8 h-8 text-blue-600" />,
            link: "/rotina-alimentacao-vestuario/a-day-on-campus"
        },
        {
            id: 2,
            title: "What's in the fridge?",
            description: "Vocabulário sobre alimentação e itens de supermercado.",
            icon: <Refrigerator className="w-8 h-8 text-green-600" />,
            link: "/rotina-alimentacao-vestuario/whats-in-the-fridge"
        },
        {
            id: 3,
            title: "Shopping at the mall",
            description: "Compras no shopping e vocabulário de vestuário.",
            icon: <ShoppingBag className="w-8 h-8 text-amber-600" />,
            link: "/rotina-alimentacao-vestuario/shopping-at-the-mall"
        }
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Rotina, Alimentação e Vestuário"
            subtitle="Daily Routine, Food & Clothing"
            description="Aprenda a falar sobre sua rotina diária, alimentação, compras de supermercado e vestuário, expandindo seu vocabulário para situações comuns do cotidiano."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
