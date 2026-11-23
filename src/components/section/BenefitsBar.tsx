import Link from "next/link";
import { Layers, Clock, Smartphone, Gamepad2 } from "lucide-react";

/**
 * Faixa de benefícios logo abaixo do hero.
 * Server Component: sem estado, sem framer-motion, 100% indexável.
 * Os hrefs são placeholders: ajuste para as rotas reais (ou use lib/routes.ts).
 */
const BENEFITS = [
    {
        icon: Layers,
        title: "Organizado por nível",
        description: "Do iniciante ao avançado, com uma ordem clara de estudo.",
        href: "#ver-modulos",
        cta: "Ver módulos",
    },
    {
        icon: Clock,
        title: "No seu ritmo",
        description: "Lições curtas e objetivas, para estudar em qualquer horário.",
        href: "/modulos",
        cta: "Começar agora",
    },
    {
        icon: Gamepad2,
        title: "Aprenda jogando",
        description: "Fixe vocabulário e ortografia com o Countries Game.",
        href: "/countries-game",
        cta: "Conhecer o jogo",
    },
    {
        icon: Smartphone,
        title: "Também no app",
        description: "Leve o estudo no celular, gratuito e sem cadastro.",
        href: "/countries-game",
        cta: "Ver o app",
    },
] as const;

export default function BenefitsBar() {
    return (
        <section
            aria-labelledby="benefits-title"
            className="border-y border-blue-100 bg-blue-50/60"
        >
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 id="benefits-title" className="sr-only">
                    Por que estudar no EnglishStudyHub
                </h2>

                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {BENEFITS.map(({ icon: Icon, title, description, href, cta }) => (
                        <li key={title} className="flex flex-col gap-3">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                                <Icon className="w-6 h-6" aria-hidden="true" />
                            </span>

                            <div>
                                <h3 className="font-semibold text-blue-900">{title}</h3>
                                <p className="mt-1 text-sm text-gray-700">{description}</p>
                            </div>

                            <Link
                                href={href}
                                className="mt-auto text-sm font-semibold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            >
                                {cta} →
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}