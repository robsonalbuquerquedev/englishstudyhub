"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { modulesData } from "@/data/modulesData";
import { saveLastVisit } from "@/lib/lastVisit";

function normalize(path: string): string {
    return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

/**
 * Registra a última página de módulo visitada.
 * Não renderiza nada: basta incluí-lo uma vez no layout.tsx.
 * Usa os links de modulesData para saber o que é página de estudo, sem depender de rotas fixas.
 */
export default function LastVisitTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;
        const current = normalize(pathname);

        const match = modulesData.find((m) => {
            const link = normalize(m.link);
            return current === link || current.startsWith(`${link}/`);
        });

        if (!match) return;

        saveLastVisit({
            href: current, // volta exatamente para a lição em que o usuário estava
            title: match.title,
            visitedAt: Date.now(),
        });
    }, [pathname]);

    return null;
}