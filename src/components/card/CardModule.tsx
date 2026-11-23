import { modulesData } from "@/data/modulesData";
import { moduleIcons } from "@/components/icons/modulesIcons";
import ModuleLink from "@/components/modules/ModuleLink";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

type ModuleLevel = "basico" | "intermediario" | "avancado";

/**
 * Campos opcionais para enriquecer os cards.
 * Adicione-os aos itens de modulesData aos poucos: o que não existir simplesmente não aparece.
 */
type ModuleItem = (typeof modulesData)[number] & {
    description?: string;
    lessonsCount?: number;
    duration?: string; // ex.: "2 h"
};

const LEVELS: {
    id: ModuleLevel;
    label: string;
    headline: string;
    intro: string;
    badge: string;
}[] = [
    {
        id: "basico",
        label: "Básico",
        headline: "Comece do zero",
        intro:
            "A base de tudo: vocabulário essencial, estruturas simples e frases do dia a dia para você se comunicar desde cedo.",
        badge: "bg-green-100 text-green-700",
    },
    {
        id: "intermediario",
        label: "Intermediário",
        headline: "Ganhe fluência",
        intro:
            "Amplie o vocabulário, domine os tempos verbais e entenda textos e conversas com mais segurança.",
        badge: "bg-yellow-100 text-yellow-700",
    },
    {
        id: "avancado",
        label: "Avançado",
        headline: "Refine o seu inglês",
        intro:
            "Expressões, nuances e estruturas mais complexas para falar e escrever com naturalidade.",
        badge: "bg-red-100 text-red-700",
    },
];

export default function CardModule() {
    const modules = modulesData as ModuleItem[];

    const groups = LEVELS.map((level) => ({
        ...level,
        items: modules.filter((m) => m.level === level.id),
    })).filter((group) => group.items.length > 0);

    return (
        <>
            {/* Section Header */}
            <header className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-blue-900">Módulos de estudo</h2>

                <p className="mt-2 mx-auto max-w-2xl text-gray-600">
                    Conteúdos organizados por nível para você evoluir no inglês passo a passo.
                    Não sabe por onde começar? Comece pelo Básico e avance no seu ritmo.
                </p>

                {/* Navegação rápida entre níveis (âncoras) */}
                <nav aria-label="Níveis de estudo" className="mt-5 flex flex-wrap justify-center gap-2">
                    {groups.map((group) => (
                        <a
                            key={group.id}
                            href={`#nivel-${group.id}`}
                            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${group.badge}`}
                        >
                            {group.label} · {group.items.length}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Um bloco por nível: todos os módulos ficam no HTML, sem paginação */}
            <div className="space-y-14">
                {groups.map((group, groupIndex) => (
                    <section
                        key={group.id}
                        id={`nivel-${group.id}`}
                        aria-labelledby={`titulo-${group.id}`}
                        className="scroll-mt-24"
                    >
                        <div className="mb-6">
                            <span
                                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${group.badge}`}
                            >
                                {group.label}
                            </span>
                            <h3
                                id={`titulo-${group.id}`}
                                className="mt-2 text-2xl font-bold text-blue-900"
                            >
                                {group.headline}
                            </h3>
                            <p className="mt-1 max-w-3xl text-gray-600">{group.intro}</p>
                        </div>

                        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {group.items.map((module, index) => {
                                const Icon = moduleIcons[module.icon];
                                const isStartHere = groupIndex === 0 && index === 0;

                                return (
                                    <li key={module.link}>
                                        <ModuleLink href={module.link}>
                                            <article className="group relative h-full rounded-xl bg-white p-6 shadow-md flex flex-col gap-3 transition hover:shadow-lg">
                                                {isStartHere && (
                                                    <span className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                                                        Comece por aqui
                                                    </span>
                                                )}

                                                <div className="flex items-center justify-between">
                                                    <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                                    <span
                                                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${group.badge}`}
                                                    >
                                                        {group.label}
                                                    </span>
                                                </div>

                                                <h4 className="font-semibold text-blue-900">
                                                    {module.title}
                                                </h4>

                                                {module.description && (
                                                    <p className="text-sm text-gray-600">
                                                        {module.description}
                                                    </p>
                                                )}

                                                {(module.lessonsCount || module.duration) && (
                                                    <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                                                        {module.lessonsCount ? (
                                                            <span className="inline-flex items-center gap-1">
                                                                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                                                                {module.lessonsCount}{" "}
                                                                {module.lessonsCount === 1 ? "lição" : "lições"}
                                                            </span>
                                                        ) : null}
                                                        {module.duration ? (
                                                            <span className="inline-flex items-center gap-1">
                                                                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                                                                {module.duration}
                                                            </span>
                                                        ) : null}
                                                    </p>
                                                )}

                                                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-blue-700">
                                                    Estudar módulo
                                                    <ArrowRight
                                                        className="h-4 w-4 transition group-hover:translate-x-1"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </article>
                                        </ModuleLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                ))}
            </div>
        </>
    );
}