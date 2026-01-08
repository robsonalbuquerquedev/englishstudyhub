import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface StudyNextStepsProps {
    title: string
    description?: string
    links: {
        label: string
        href: string
    }[]
}

export default function StudyNextSteps({
    title,
    description,
    links
}: StudyNextStepsProps) {
    return (
        <aside className="mt-20 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {title}
            </h3>

            {description && (
                <p className="text-gray-700 mb-4 leading-relaxed">
                    {description}
                </p>
            )}

            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition"
                        >
                            <ArrowRight className="w-4 h-4" />
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
