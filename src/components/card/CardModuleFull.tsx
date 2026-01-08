"use client";

import { modulesData } from "@/data/modulesData"
import { moduleIcons } from "@/components/icons/modulesIcons"
import ModuleLink from "@/components/modules/ModuleLink"

const levelStyles = {
    Básico: "bg-green-100 text-green-700",
    Intermediário: "bg-yellow-100 text-yellow-700",
    Avançado: "bg-red-100 text-red-700",
}

export default function CardModuleFull() {
    return (
        <section className="max-w-6xl mx-auto px-6 pb-24">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {modulesData.map((module) => {
                    const Icon = moduleIcons[module.icon]

                    return (
                        <ModuleLink key={module.link} href={module.link}>
                            <div className="h-full rounded-xl bg-white p-6 shadow-md flex flex-col gap-4 transition hover:shadow-lg hover:-translate-y-1">

                                {/* Icon */}
                                <Icon className="h-7 w-7 text-blue-600" />

                                {/* Level */}
                                <span
                                    className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${levelStyles[module.level]}`}
                                >
                                    {module.level}
                                </span>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-blue-900">
                                    {module.title}
                                </h3>

                            </div>
                        </ModuleLink>
                    )
                })}
            </div>
        </section>
    )
}
