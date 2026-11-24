import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Gamepad2, Smartphone } from "lucide-react";
import TeacherCard from "@/components/teachers/TeacherCard";
import { teachers } from "@/data/teachers";

export const metadata: Metadata = {
    title: "Professoras de inglês parceiras do Countries Game | English Study Hub",
    description:
        "Conheça as professoras de inglês parceiras do Countries Game, veja como falar com elas e descubra o jogo que ajuda a memorizar os países em inglês.",
    alternates: { canonical: "/professoras" },
};

/** TODO: troque pelo canal real para professoras interessadas (página de contato, e-mail ou formulário). */
const PARTNER_CONTACT_HREF = "/contato";

const STEPS = [
    {
        icon: Smartphone,
        title: "O app leva você até aqui",
        description:
            "No Countries Game, você encontra o convite para conhecer as professoras parceiras e chega a esta página.",
    },
    {
        icon: GraduationCap,
        title: "Você conhece a professora",
        description:
            "Cada professora tem um perfil com apresentação, especialidades e contatos para você falar direto com ela.",
    },
    {
        icon: Gamepad2,
        title: "A professora indica o app",
        description:
            "As professoras recomendam o Countries Game aos seus alunos para praticar os nomes dos países em inglês, de graça.",
    },
] as const;

export default function ProfessorasPage() {
    return (
        <main>
            {/* Hero */}
            <section className="max-w-4xl mx-auto px-4 pt-16 text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                    Parceria Countries Game
                </p>
                <h1 className="mt-2 text-4xl font-bold text-blue-900 md:text-5xl">
                    Professoras de inglês parceiras
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
                    Conheça professoras que recomendam o Countries Game aos seus alunos e
                    encontre quem pode te ajudar a evoluir no inglês, além do jogo.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/countries-game"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        <Gamepad2 className="h-5 w-5" aria-hidden="true" />
                        Conhecer o Countries Game
                    </Link>
                    <a
                        href="#seja-parceira"
                        className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                        Sou professora e quero ser parceira
                    </a>
                </div>
            </section>

            {/* Como funciona */}
            <section aria-labelledby="como-funciona" className="max-w-6xl mx-auto mt-20 px-4">
                <h2 id="como-funciona" className="mb-8 text-center text-3xl font-bold text-blue-900">
                    Como funciona a parceria
                </h2>

                <ol className="grid gap-6 md:grid-cols-3">
                    {STEPS.map(({ icon: Icon, title, description }, index) => (
                        <li key={title} className="flex flex-col gap-3 rounded-xl bg-white p-6 shadow-md">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <h3 className="font-semibold text-blue-900">
                                {index + 1}. {title}
                            </h3>
                            <p className="text-sm text-gray-600">{description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Professoras */}
            <section aria-labelledby="nossas-professoras" className="max-w-6xl mx-auto mt-20 px-4">
                <h2 id="nossas-professoras" className="mb-2 text-center text-3xl font-bold text-blue-900">
                    Nossas professoras parceiras
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
                    A contratação de aulas é feita diretamente com cada professora, pelos
                    contatos do perfil dela.
                </p>

                {teachers.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2">
                        {teachers.map((teacher) => (
                            <TeacherCard key={teacher.slug} teacher={teacher} />
                        ))}
                    </div>
                ) : (
                    <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-8 text-center">
                        <p className="font-semibold text-blue-900">
                            As primeiras professoras parceiras chegam em breve.
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                            Enquanto isso, você já pode estudar com os módulos do site e praticar
                            com o Countries Game.
                        </p>
                        <Link
                            href="/#ver-modulos"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                            Ver os módulos
                            <ArrowRight
                                className="h-4 w-4 transition group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                )}
            </section>

            {/* Para professoras */}
            <section
                id="seja-parceira"
                aria-labelledby="seja-parceira-titulo"
                className="max-w-4xl mx-auto mt-20 mb-20 scroll-mt-24 px-4"
            >
                <div className="rounded-2xl bg-blue-900 px-6 py-12 text-white md:px-12">
                    <h2 id="seja-parceira-titulo" className="text-3xl font-bold">
                        É professora de inglês? Seja parceira
                    </h2>

                    <p className="mt-3 text-blue-100">
                        Você apresenta aos seus alunos um jogo gratuito, sem anúncios e sem
                        cadastro para reforçar o vocabulário, e o seu trabalho ganha
                        visibilidade aqui no English Study Hub.
                    </p>

                    <ul className="mt-6 space-y-2 text-blue-50">
                        <li>✓ Perfil nesta página, com foto, apresentação, especialidades e contatos.</li>
                        <li>✓ Um link só seu (englishstudyhub.com.br/professoras#seu-nome) para divulgar.</li>
                        <li>✓ Um jogo para indicar aos alunos como prática entre as aulas.</li>
                    </ul>

                    <Link
                        href={PARTNER_CONTACT_HREF}
                        className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Quero ser parceira
                        <ArrowRight
                            className="h-4 w-4 transition group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}