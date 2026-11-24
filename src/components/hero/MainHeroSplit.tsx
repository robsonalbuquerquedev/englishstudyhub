"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Gamepad2, Languages, Check } from "lucide-react";
import AnchorButton from "@/components/ui/AnchorButton";

/**
 * TODO: mover para lib/routes.ts quando centralizar os links internos.
 * Ajuste os hrefs para as rotas reais do projeto.
 */
const START_PATHS = [
    {
        icon: BookOpen,
        label: "Estou começando",
        description: "Trilha do zero: alfabeto, verbo to be e frases do dia a dia.",
        href: "/#ver-modulos",
    },
    {
        icon: Languages,
        label: "Quero ampliar vocabulário",
        description: "Glossários organizados por tema, com exemplos de uso.",
        href: "/glossario",
    },
    {
        icon: Gamepad2,
        label: "Quero praticar jogando",
        description: "Countries Game: memorize países em inglês e treine a ortografia.",
        href: "/countries-game",
    },
] as const;

/** Atualize com os números reais do site. */
const STATS = [
    { value: "10+", label: "módulos" },
    { value: "100+", label: "lições" },
    { value: "100%", label: "gratuito" },
] as const;

const TRUST = ["Sem cadastro", "Sem anúncios invasivos", "Feito para brasileiros"] as const;

export default function MainHeroSplit() {
    const reduce = useReducedMotion();

    const fade = (x: number) => ({
        initial: reduce ? false : { opacity: 0, x },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
    });

    return (
        <section
            aria-labelledby="hero-title"
            className="max-w-7xl mx-auto grid gap-12 items-center px-4 py-16 md:grid-cols-[1.1fr_0.9fr]"
        >
            {/* Left - Conteúdo */}
            <motion.div {...fade(-20)} className="text-center md:text-left">
                <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-5">
                    <Image
                        src="/logo/studyenglish.png"
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-auto"
                    />
                    Inglês para brasileiros, do iniciante ao avançado
                </p>

                <h1
                    id="hero-title"
                    className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4"
                >
                    Aprenda inglês no seu ritmo, com um caminho claro para seguir
                </h1>

                <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
                    Módulos, lições e glossários escolhidos a dedo e organizados por nível.
                    Você sempre sabe o que estudar agora e o que vem depois.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <AnchorButton href="#ver-modulos">Ver módulos</AnchorButton>

                    <Link
                        href="/countries-game"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                        <Gamepad2 className="w-5 h-5" aria-hidden="true" />
                        Jogar Countries Game
                    </Link>
                </div>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start text-sm text-gray-600">
                    {TRUST.map((item) => (
                        <li key={item} className="inline-flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
                            {item}
                        </li>
                    ))}
                </ul>

                <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
                    {STATS.map((s) => (
                        <div key={s.label}>
                            <dt className="sr-only">{s.label}</dt>
                            <dd className="text-2xl font-bold text-blue-900">
                                {s.value}
                                <span className="block text-sm font-normal text-gray-600">
                                    {s.label}
                                </span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </motion.div>

            {/* Right - Comece por aqui */}
            <motion.aside
                {...fade(20)}
                aria-label="Comece por aqui"
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg"
            >
                <div className="flex items-center gap-4 mb-5">
                    <Image
                        src="/logo/studyenglish.png"
                        alt="StudyEnglishHub"
                        width={140}
                        height={44}
                        priority
                        loading="eager"
                        className="h-auto w-[140px]"
                    />
                </div>

                <h2 className="text-xl font-semibold text-blue-900 mb-1">Comece por aqui</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Escolha o seu objetivo e vá direto para o conteúdo certo.
                </p>

                <ul className="space-y-3">
                    {START_PATHS.map(({ icon: Icon, label, description, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="group flex items-start gap-3 rounded-xl border border-gray-100 p-4 transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            >
                                <span className="mt-0.5 rounded-lg bg-blue-100 p-2 text-blue-700">
                                    <Icon className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <span className="flex-1">
                                    <span className="block font-semibold text-blue-900">{label}</span>
                                    <span className="block text-sm text-gray-600">{description}</span>
                                </span>
                                <ArrowRight
                                    className="w-5 h-5 mt-1 text-blue-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                                    aria-hidden="true"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.aside>
        </section>
    );
}