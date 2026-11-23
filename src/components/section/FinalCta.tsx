import Link from "next/link";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { modulesData } from "@/data/modulesData";

export default function FinalCta() {
    const firstModule = modulesData.find((m) => m.level === "basico") ?? modulesData[0];

    return (
        <section
            aria-labelledby="final-cta-title"
            className="max-w-7xl mx-auto mt-24 mb-16 px-4"
        >
            <div className="rounded-2xl bg-blue-900 px-6 py-12 text-center text-white md:px-12">
                <h2 id="final-cta-title" className="text-3xl font-bold">
                    Pronto para dar o próximo passo no seu inglês?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-blue-100">
                    Escolha um módulo, estude no seu ritmo e volte quando quiser. Cada
                    pequeno passo conta.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    {firstModule && (
                        <Link
                            href={firstModule.link}
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Começar pelo Básico
                            <ArrowRight
                                className="h-4 w-4 transition group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    )}

                    <a
                        href="#ver-modulos"
                        className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Ver todos os módulos
                    </a>
                </div>

                <p className="mt-6 text-sm text-blue-100">
                    <Link
                        href="/countries-game"
                        className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                        <Gamepad2 className="h-4 w-4" aria-hidden="true" />
                        Quer praticar jogando? Conheça o Countries Game
                    </Link>
                </p>
            </div>
        </section>
    );
}