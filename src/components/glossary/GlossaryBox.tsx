import { useId } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

type HeadingTag = "h2" | "h3" | "h4";

interface GlossaryBoxProps {
    terms: [string, string][]; // array com [palavra em inglês, tradução]
    title?: string; // título opcional, default = Glossary
    id?: string; // âncora opcional (ex.: /glossario#introducing-yourself)
    as?: HeadingTag; // nível do título, para respeitar a hierarquia da página (default h2)
    compact?: boolean; // versão menor, usada no hub
    lesson?: { href: string; label?: string }; // link opcional para a aula de origem
}

export default function GlossaryBox({
    terms,
    title = "Glossary",
    id,
    as: Heading = "h2",
    compact = false,
    lesson,
}: GlossaryBoxProps) {
    const headingId = useId();

    return (
        <section id={id} aria-labelledby={headingId} className="mb-10 scroll-mt-24">
            <div className="mb-4">
                <Heading
                    id={headingId}
                    className={`font-bold text-blue-700 flex items-center gap-2 ${
                        compact ? "text-lg" : "text-2xl"
                    }`}
                >
                    <BookOpen
                        className={compact ? "w-6 h-6 text-blue-600" : "w-8 h-8 text-blue-600"}
                        aria-hidden="true"
                    />{" "}
                    {title}
                </Heading>

                {lesson && (
                    <Link
                        href={lesson.href}
                        className="mt-1 inline-block text-sm font-semibold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                        {lesson.label ?? "Ver na aula"} →
                    </Link>
                )}
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-gray-700">
                {terms.map(([en, pt], index) => (
                    <div
                        key={`${en}-${index}`}
                        className="flex justify-between gap-4 border-b border-gray-200 pb-1"
                    >
                        <dt lang="en" className="font-semibold">
                            {en}
                        </dt>
                        <dd>{pt}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}