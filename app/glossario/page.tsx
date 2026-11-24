import type { Metadata } from "next";
import Link from "next/link";
import { modulesData } from "@/data/modulesData";
import { glossaries } from "@/data/glossaries";
import GlossaryHub, { type GlossaryLevelGroup } from "@/components/glossary/GlossaryHub";

export const metadata: Metadata = {
    title: "Glossário de inglês por nível e tema | English Study Hub",
    description:
        "Consulte o vocabulário de todas as aulas em um só lugar, organizado por nível e módulo, com tradução e busca.",
    alternates: { canonical: "/glossario" },
};

const LEVELS = ["basico", "intermediario", "avancado"] as const;

export default function GlossarioPage() {
    // Agrupa os glossários registrados por nível e por módulo, na ordem de modulesData.
    const groups: GlossaryLevelGroup[] = LEVELS.map((level) => ({
        level,
        modules: modulesData
            .filter((m) => m.level === level)
            .map((m) => ({
                title: m.title,
                link: m.link,
                entries: glossaries.filter((g) => g.moduleLink === m.link),
            }))
            .filter((m) => m.entries.length > 0),
    })).filter((g) => g.modules.length > 0);

    const totalTerms = glossaries.reduce((sum, g) => sum + g.terms.length, 0);

    return (
        <main className="max-w-5xl mx-auto px-4 py-16">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-blue-900">Glossário de inglês</h1>
                <p className="mx-auto mt-3 max-w-2xl text-gray-700">
                    O vocabulário de todas as aulas reunido em um só lugar, com tradução,
                    organizado por nível e módulo. Use a busca para achar uma palavra
                    rapidamente ou abra a aula para ver o termo em contexto.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    {glossaries.length} {glossaries.length === 1 ? "glossário" : "glossários"} e{" "}
                    {totalTerms} termos, e a lista cresce a cada aula nova.
                </p>
            </header>

            <GlossaryHub groups={groups} />

            <aside className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
                <h2 className="text-xl font-semibold text-blue-900">
                    Quer fixar o vocabulário?
                </h2>
                <p className="mt-2 text-gray-700">
                    Estude as aulas completas ou pratique os nomes dos países jogando.
                </p>
                <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/#ver-modulos"
                        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Ver os módulos
                    </Link>
                    <Link
                        href="/countries-game"
                        className="rounded-lg border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                        Jogar Countries Game
                    </Link>
                </div>
            </aside>
        </main>
    );
}