import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import type { Teacher } from "@/type/teacherType";

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
    const { slug, name, headline, bio, photo, specialties, modality, links } = teacher;

    return (
        // O id permite linkar direto: /professoras#slug. O :target destaca o cartão ao chegar por esse link.
        <article
            id={slug}
            className="scroll-mt-24 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md target:ring-2 target:ring-blue-500"
        >
            <div className="flex items-center gap-4">
                {photo ? (
                    <Image
                        src={photo}
                        alt={`Foto de ${name}`}
                        width={160}
                        height={160}
                        className="h-20 w-20 shrink-0 rounded-full object-cover shadow"
                    />
                ) : (
                    <span
                        aria-hidden="true"
                        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white"
                    >
                        {name.charAt(0)}
                    </span>
                )}

                <div>
                    <h3 className="text-xl font-bold text-blue-900">{name}</h3>
                    <p className="text-sm text-gray-600">{headline}</p>
                    {modality && (
                        <p className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            {modality}
                        </p>
                    )}
                </div>
            </div>

            <p className="text-sm text-gray-700">{bio}</p>

            {specialties.length > 0 && (
                <ul className="flex flex-wrap gap-2" aria-label="Especialidades">
                    {specialties.map((s) => (
                        <li
                            key={s}
                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                        >
                            {s}
                        </li>
                    ))}
                </ul>
            )}

            {links.length > 0 && (
                <ul className="mt-auto flex flex-wrap gap-3 pt-2" aria-label={`Contatos de ${name}`}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 px-3 py-1.5 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            >
                                {link.label}
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                <span className="sr-only">(abre em nova aba)</span>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}