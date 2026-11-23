import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    Briefcase,
    Film,
    MessageCircle,
    Plane,
    Trophy,
} from "lucide-react";
import { modulesData } from "@/data/modulesData";

type Level = "basico" | "intermediario" | "avancado";

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

/**
 * Trilhas por objetivo. Cada item referencia um módulo pelo `link` de modulesData,
 * então títulos e níveis ficam sempre sincronizados com a fonte de dados.
 * Edite os textos livremente: eles são a curadoria editorial do site.
 */
const GOALS = [
    {
        icon: Plane,
        title: "Viajar com confiança",
        description:
            "Vocabulário e situações para se virar em viagens, restaurantes e passeios.",
        links: [
            "/basic/adjectives-travel-experiences",
            "/basic/restaurants-health-leisure",
            "/advanced/english-for-travel-work-daily-use",
        ],
    },
    {
        icon: Briefcase,
        title: "Inglês para o trabalho",
        description:
            "Apresente-se, entenda o vocabulário profissional e use os verbos modais no dia a dia.",
        links: [
            "/basic/personal-information-introductions",
            "/advanced/workplace-english-modal-verbs",
            "/advanced/english-for-travel-work-daily-use",
        ],
    },
    {
        icon: MessageCircle,
        title: "Conversar no dia a dia",
        description:
            "Rotina, família, comida e conversas reais para falar com naturalidade.",
        links: [
            "/basic/daily-routine-food-clothing",
            "/basic/family-transportation-daily-life",
            "/advanced/real-life-conversations-situations",
        ],
    },
    {
        icon: BookOpen,
        title: "Dominar a gramática",
        description:
            "Condicionais, tempos futuros, voz causativa e discurso indireto, na ordem certa.",
        links: [
            "/intermediate/conditionals-media-language",
            "/advanced/future-tenses-modals-past-review",
            "/advanced/causative-tag-questions-indirect-speech",
        ],
    },
    {
        icon: Film,
        title: "Cultura, filmes e histórias",
        description:
            "Aprenda inglês com mídia, cinema, países e experiências de vida.",
        links: [
            "/intermediate/movies-stories-life-experiences",
            "/intermediate/countries-culture-advanced-grammar",
            "/intermediate/conditionals-media-language",
        ],
    },
    {
        icon: Trophy,
        title: "Esporte e vida acadêmica",
        description:
            "Vocabulário de esportes, educação, clima e habilidades pessoais.",
        links: [
            "/intermediate/sports-education-academic-life",
            "/advanced/weather-sports-personal-skills",
        ],
    },
] as const;

export default function FeaturedContent() {
    const byLink = new Map(modulesData.map((m) => [m.link, m]));

    const goals = GOALS.map((goal) => ({
        ...goal,
        modules: goal.links
            .map((link) => byLink.get(link))
            .filter((m): m is NonNullable<typeof m> => Boolean(m)),
    })).filter((goal) => goal.modules.length > 0);

    return (
        <section
            aria-labelledby="featured-title"
            className="max-w-7xl mx-auto mt-24 px-4"
        >
            <header className="mb-10 text-center">
                <h2 id="featured-title" className="text-3xl font-bold text-blue-900">
                    Estude por objetivo
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                    Já sabe o que quer aprender? Escolha uma trilha e vá direto aos
                    módulos mais úteis para esse objetivo, em qualquer nível.
                </p>
            </header>

            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {goals.map(({ icon: Icon, title, description, modules }) => (
                    <li
                        key={title}
                        className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md"
                    >
                        <div className="flex items-center gap-3">
                            <span className="rounded-lg bg-blue-100 p-2.5 text-blue-700">
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <h3 className="font-semibold text-blue-900">{title}</h3>
                        </div>

                        <p className="text-sm text-gray-600">{description}</p>

                        <ul className="mt-auto space-y-2">
                            {modules.map((module) => (
                                <li key={module.link}>
                                    <Link
                                        href={module.link}
                                        className="group flex items-start justify-between gap-3 rounded-lg border border-gray-100 p-3 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                                    >
                                        <span className="text-sm font-medium text-blue-900">
                                            {module.title}
                                            <span
                                                className={`ml-2 inline-block rounded-full px-2 py-0.5 align-middle text-[11px] font-semibold ${LEVEL_STYLE[module.level as Level]}`}
                                            >
                                                {LEVEL_LABEL[module.level as Level]}
                                            </span>
                                        </span>
                                        <ArrowRight
                                            className="mt-0.5 h-4 w-4 shrink-0 text-blue-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <p className="mt-8 text-center text-sm text-gray-600">
                Prefere seguir uma ordem?{" "}
                <a
                    href="#ver-modulos"
                    className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                >
                    Veja todos os módulos por nível
                </a>
                .
            </p>
        </section>
    );
}