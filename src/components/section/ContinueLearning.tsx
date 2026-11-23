"use client";

import { useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles, X } from "lucide-react";
import { modulesData } from "@/data/modulesData";
import {
    clearLastVisit,
    getLastVisitRaw,
    parseLastVisit,
    subscribeLastVisit,
} from "@/lib/lastVisit";

function formatWhen(timestamp: number): string {
    const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
    const diffMinutes = Math.round((timestamp - Date.now()) / 60000);

    if (Math.abs(diffMinutes) < 60) return rtf.format(diffMinutes, "minute");
    const diffHours = Math.round(diffMinutes / 60);
    if (Math.abs(diffHours) < 24) return rtf.format(diffHours, "hour");
    return rtf.format(Math.round(diffHours / 24), "day");
}

export default function ContinueLearning() {
    // No servidor o snapshot é null: o HTML inicial sempre mostra o estado "novo por aqui".
    // Depois da hidratação, se houver histórico, o conteúdo troca sem erro de hidratação.
    const raw = useSyncExternalStore(subscribeLastVisit, getLastVisitRaw, () => null);
    const last = useMemo(() => parseLastVisit(raw), [raw]);

    const firstModule =
        modulesData.find((m) => m.level === "basico") ?? modulesData[0];

    if (!last && !firstModule) return null;

    return (
        <section
            aria-labelledby="continue-title"
            className="max-w-7xl mx-auto mt-14 px-4"
        >
            <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-md sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                    <span className="rounded-xl bg-blue-100 p-3 text-blue-700">
                        {last ? (
                            <PlayCircle className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Sparkles className="h-6 w-6" aria-hidden="true" />
                        )}
                    </span>

                    <div>
                        <h2 id="continue-title" className="text-lg font-semibold text-blue-900">
                            {last ? "Continue de onde parou" : "Novo por aqui?"}
                        </h2>

                        {last ? (
                            <p className="mt-1 text-sm text-gray-600">
                                Você estava em{" "}
                                <strong className="text-blue-900">{last.title}</strong>
                                {" "}({formatWhen(last.visitedAt)}).
                            </p>
                        ) : (
                            <p className="mt-1 text-sm text-gray-600">
                                Comece pelo primeiro módulo e avance no seu ritmo. Seu
                                progresso fica salvo neste aparelho.
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {last ? (
                        <>
                            <Link
                                href={last.href}
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Continuar
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>

                            <button
                                type="button"
                                onClick={clearLastVisit}
                                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            >
                                <X className="h-4 w-4" aria-hidden="true" />
                                Esquecer
                            </button>
                        </>
                    ) : (
                        firstModule && (
                            <Link
                                href={firstModule.link}
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Começar: {firstModule.title}
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}