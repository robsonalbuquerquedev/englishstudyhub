"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import GlossaryBox from "@/components/glossary/GlossaryBox";
import type { GlossaryEntry } from "@/type/glossaryType";

type Level = "basico" | "intermediario" | "avancado";

export type GlossaryLevelGroup = {
    level: Level;
    modules: { title: string; link: string; entries: GlossaryEntry[] }[];
};

const LEVEL_LABEL: Record<Level, string> = {
    basico: "Básico",
    intermediario: "Intermediário",
    avancado: "Avançado",
};

const LEVEL_STYLE: Record<Level, string> = {
    basico: "bg-green-100 text-green-700",
    intermediario: "bg-yellow-100 text-yellow-700",
    avancado: "bg-red-100 text-red-700",
};

/** Ignora acentos, maiúsculas e aspas curvas, para "I'm" achar "I’m". */
function normalize(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’‘]/g, "'")
        .toLowerCase()
        .trim();
}

export default function GlossaryHub({ groups }: { groups: GlossaryLevelGroup[] }) {
    const [query, setQuery] = useState("");
    const q = normalize(query);

    const filtered = useMemo(() => {
        if (!q) return groups;

        return groups
            .map((group) => ({
                ...group,
                modules: group.modules
                    .map((module) => ({
                        ...module,
                        entries: module.entries
                            .map((entry) => ({
                                ...entry,
                                terms: entry.terms.filter(
                                    ([en, pt]) => normalize(en).includes(q) || normalize(pt).includes(q)
                                ),
                            }))
                            .filter((entry) => entry.terms.length > 0),
                    }))
                    .filter((module) => module.entries.length > 0),
            }))
            .filter((group) => group.modules.length > 0);
    }, [groups, q]);

    const totalTerms = filtered.reduce(
        (sum, group) =>
            sum +
            group.modules.reduce(
                (s, m) => s + m.entries.reduce((n, e) => n + e.terms.length, 0),
                0
            ),
        0
    );

    return (
        <div>
            {/* Busca */}
            <div className="mx-auto max-w-xl">
                <label htmlFor="glossary-search" className="sr-only">
                    Buscar no glossário
                </label>
                <div className="relative">
                    <Search
                        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                        aria-hidden="true"
                    />
                    <input
                        id="glossary-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar em inglês ou português (ex.: hello, país)"
                        className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </div>
                <p className="mt-2 text-center text-sm text-gray-500" aria-live="polite">
                    {q
                        ? `${totalTerms} ${totalTerms === 1 ? "termo encontrado" : "termos encontrados"}`
                        : `${totalTerms} termos no total`}
                </p>
            </div>

            {/* Atalhos por nível */}
            {filtered.length > 0 && (
                <nav aria-label="Níveis do glossário" className="mt-6 flex flex-wrap justify-center gap-2">
                    {filtered.map((group) => (
                        <a
                            key={group.level}
                            href={`#glossario-${group.level}`}
                            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${LEVEL_STYLE[group.level]}`}
                        >
                            {LEVEL_LABEL[group.level]}
                        </a>
                    ))}
                </nav>
            )}

            {/* Resultados */}
            {filtered.length === 0 ? (
                <p className="mt-12 text-center text-gray-600">
                    Nenhum termo encontrado para &ldquo;{query}&rdquo;. Tente outra palavra.
                </p>
            ) : (
                <div className="mt-12 space-y-16">
                    {filtered.map((group) => (
                        <section
                            key={group.level}
                            id={`glossario-${group.level}`}
                            aria-labelledby={`titulo-glossario-${group.level}`}
                            className="scroll-mt-24"
                        >
                            <h2
                                id={`titulo-glossario-${group.level}`}
                                className="mb-6 flex items-center gap-3 text-2xl font-bold text-blue-900"
                            >
                                Nível
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-semibold ${LEVEL_STYLE[group.level]}`}
                                >
                                    {LEVEL_LABEL[group.level]}
                                </span>
                            </h2>

                            <div className="space-y-10">
                                {group.modules.map((module) => (
                                    <div key={module.link}>
                                        <h3 className="mb-4 text-xl font-semibold text-blue-900">
                                            <Link
                                                href={module.link}
                                                className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                                            >
                                                {module.title}
                                            </Link>
                                        </h3>

                                        {module.entries.map((entry) => (
                                            <GlossaryBox
                                                key={entry.id}
                                                id={entry.id}
                                                as="h4"
                                                compact
                                                title={entry.title}
                                                terms={entry.terms}
                                                lesson={{ href: entry.lessonHref }}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}