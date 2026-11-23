import { useId } from "react";
import { BookOpen } from "lucide-react";

interface GlossaryBoxProps {
    terms: [string, string][]; // array com [palavra em inglês, tradução]
    title?: string; // título opcional, default = Glossary
    id?: string; // âncora opcional para linkar direto neste glossário (ex.: /glossario#family)
}

export default function GlossaryBox({ terms, title = "Glossary", id }: GlossaryBoxProps) {
    const headingId = useId();

    return (
        <section id={id} aria-labelledby={headingId} className="mb-10 scroll-mt-24">
            <h2
                id={headingId}
                className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2"
            >
                <BookOpen className="w-8 h-8 text-blue-600" aria-hidden="true" /> {title}
            </h2>

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