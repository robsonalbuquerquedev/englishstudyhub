import Link from "next/link";
import { ArrowRight, Download, Shuffle, Lightbulb, Trophy, LineChart } from "lucide-react";

/**
 * TODO: troque pelos links reais do app (Google Play / App Store) quando estiverem publicados.
 * Enquanto não houver link de loja, o CTA de download leva para a página do jogo.
 */
const APP_DOWNLOAD_HREF = "/countries-game#app";

const FEATURES = [
    {
        icon: Shuffle,
        title: "Anagramas",
        description: "Decifre as letras embaralhadas e descubra o país em inglês.",
    },
    {
        icon: Lightbulb,
        title: "Dicas progressivas",
        description: "Travou? As dicas aparecem aos poucos, sem entregar a resposta.",
    },
    {
        icon: Trophy,
        title: "Ranking e histórico",
        description: "Compare seus resultados e veja o que você já acertou.",
    },
    {
        icon: LineChart,
        title: "Gráficos de evolução",
        description: "Acompanhe seu progresso ao longo do tempo.",
    },
] as const;

/** Ilustração decorativa: BRAZIL embaralhado em ZLIBRA. */
const SCRAMBLED = ["Z", "L", "I", "B", "R", "A"] as const;

export default function CountriesGameSection() {
    return (
        <section
            aria-labelledby="countries-game-title"
            className="max-w-7xl mx-auto mt-24 px-4"
        >
            <div className="grid items-center gap-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-md md:grid-cols-[1.2fr_0.8fr] md:p-10">
                {/* Texto */}
                <div className="text-center md:text-left">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                        Para praticar no celular
                    </p>

                    <h2
                        id="countries-game-title"
                        className="mt-2 text-3xl font-bold text-blue-900"
                    >
                        Countries Game: memorize os países em inglês jogando
                    </h2>

                    <p className="mt-3 text-gray-700">
                        O Countries Game é o aplicativo que complementa os estudos aqui no
                        site. Enquanto os módulos ensinam o conteúdo, o jogo ajuda a fixar o
                        vocabulário e a ortografia dos nomes dos países de forma leve e
                        interativa. Ideal para estudar em pequenos intervalos do dia.
                    </p>

                    <ul className="mt-6 grid gap-4 text-left sm:grid-cols-2">
                        {FEATURES.map(({ icon: Icon, title, description }) => (
                            <li key={title} className="flex items-start gap-3">
                                <span className="mt-0.5 rounded-lg bg-blue-100 p-2 text-blue-700">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block font-semibold text-blue-900">{title}</span>
                                    <span className="block text-sm text-gray-600">{description}</span>
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-sm text-gray-600">
                        Gratuito, sem anúncios e sem cadastro. Funciona sem internet, e seus
                        dados ficam apenas no seu aparelho.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                        <Link
                            href={APP_DOWNLOAD_HREF}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            <Download className="h-5 w-5" aria-hidden="true" />
                            Baixar o app
                        </Link>

                        <Link
                            href="/countries-game"
                            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                            Como funciona
                            <ArrowRight
                                className="h-4 w-4 transition group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>

                    <p className="mt-4 text-sm text-gray-600">
                        Quer ir além dos países?{" "}
                        <Link
                            href="/#ver-modulos"
                            className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                        >
                            Veja os glossários por tema
                        </Link>
                        .
                    </p>
                </div>

                {/* Ilustração */}
                <div
                    role="img"
                    aria-label="Exemplo de anagrama do jogo: as letras Z, L, I, B, R, A formam a palavra Brazil"
                    className="rounded-2xl bg-blue-50 p-6 text-center"
                >
                    <div aria-hidden="true">
                        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                            Qual é o país?
                        </p>

                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {SCRAMBLED.map((letter, i) => (
                                <span
                                    key={`${letter}-${i}`}
                                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl font-bold text-blue-900 shadow"
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>

                        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm text-gray-700 shadow-sm">
                            <Lightbulb className="h-4 w-4 text-yellow-500" />
                            Dica: fica na América do Sul
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}