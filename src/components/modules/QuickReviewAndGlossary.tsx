import type { ReactNode } from "react";
import Link from "next/link";
import { BookCheck } from "lucide-react";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import GlossaryBox from "@/components/glossary/GlossaryBox";
import { getGlossary } from "@/data/glossaries";

interface QuickReviewAndGlossaryProps {
    /** id do glossário registrado em src/data/glossaries/index.ts */
    glossaryId: string;
    prev: string;
    next: string;
    /** O resumo da aula (parágrafos). */
    children: ReactNode;
}

/**
 * Bloco final de toda aula: resumo + glossário + navegação.
 * Os termos vêm do registro central, a mesma fonte usada pelo hub /glossario.
 */
export default function QuickReviewAndGlossary({
    glossaryId,
    prev,
    next,
    children,
}: QuickReviewAndGlossaryProps) {
    const glossary = getGlossary(glossaryId);

    return (
        <section className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">
            {/* Title: h2, porque a aula já tem o seu h1 */}
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8 flex items-center justify-center gap-2">
                <BookCheck className="w-10 h-10 text-blue-600" aria-hidden="true" />
                Quick Review & Glossary
            </h2>

            {/* RESUMO */}
            <div className="bg-blue-50 border border-blue-200 text-gray-700 rounded-xl shadow p-6 mb-10 leading-relaxed">
                {children}
            </div>

            {/* GLOSSÁRIO */}
            <GlossaryBox terms={glossary.terms} as="h3" title={`Glossary: ${glossary.title}`} />

            <p className="mb-10 text-center text-sm text-gray-600">
                Quer revisar outros temas?{" "}
                <Link
                    href={`/glossario#${glossary.id}`}
                    className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                >
                    Veja o glossário completo
                </Link>
                .
            </p>

            {/* Navigation */}
            <ModuleNavigation prev={prev} next={next} />
        </section>
    );
}