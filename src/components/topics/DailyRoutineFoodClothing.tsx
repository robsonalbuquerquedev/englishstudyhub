"use client";

import ModuleIntro from "@/components/modules/ModuleIntro";
import ETecCredits from "@/components/shared/ETecCredits";
import { BookOpen, Calendar, Utensils, ShoppingBag } from "lucide-react";

export default function DailyRoutineFoodClothing() {
    const topics = [
        {
            id: 1,
            title: "Daily Routine Outside Home",
            description: "Aprenda a falar sobre sua rotina diária em estudos, trabalho e atividades fora de casa.",
            icon: <Calendar className="w-8 h-8 text-blue-600" />,
            link: "/basic/daily-routine-food-clothing/daily-routine-outside-home",
        },
        {
            id: 2,
            title: "Food and Groceries",
            description: "Vocabulário essencial para falar sobre alimentação, refeições e compras de supermercado.",
            icon: <Utensils className="w-8 h-8 text-green-600" />,
            link: "/basic/daily-routine-food-clothing/food-and-groceries",
        },
        {
            id: 3,
            title: "Clothes and Shopping",
            description: "Descubra como falar sobre roupas, compras e escolhas do que vestir no dia a dia.",
            icon: <ShoppingBag className="w-8 h-8 text-amber-600" />,
            link: "/basic/daily-routine-food-clothing/clothes-and-shopping",
        },
    ];

    return (
        <ModuleIntro
            icon={<BookOpen className="w-12 h-12 text-blue-700" />}
            title="Daily Routine, Food and Clothing"
            subtitle="Falando sobre hábitos, alimentação e o que vestir."
            description="Este módulo ajuda você a desenvolver habilidades essenciais em inglês para falar sobre sua rotina diária, alimentação e roupas, usando situações comuns do dia a dia com clareza e naturalidade."
            topics={topics}
            credits={<ETecCredits />}
        />
    );
}
