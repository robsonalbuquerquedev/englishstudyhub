"use client";

import { useState } from "react";
import { modulesData } from "@/data/modulesData";
import { moduleIcons } from "@/components/icons/modulesIcons";
import ModuleLink from "@/components/modules/ModuleLink";

const ITEMS_PER_PAGE = 6;

const levelStyles = {
    iniciante: "bg-green-100 text-green-700",
    intermediário: "bg-yellow-100 text-yellow-700",
    avançado: "bg-red-100 text-red-700",
};

export default function CardModule() {
    const [page, setPage] = useState(0);

    const start = page * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const currentModules = modulesData.slice(start, end);
    const totalPages = Math.ceil(modulesData.length / ITEMS_PER_PAGE);

    return (
        <>
            {/* Section Header */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-blue-900">
                    Módulos de Estudo 📚
                </h2>

                <p className="mt-2 text-gray-600">
                    Conteúdos organizados por nível para você evoluir no inglês passo a passo.
                </p>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentModules.map((module) => {
                    const Icon = moduleIcons[module.icon];

                    return (
                        <ModuleLink key={module.link} href={module.link}>
                            <div className="h-full rounded-xl bg-white p-6 shadow-md flex flex-col gap-3 transition hover:shadow-lg">

                                {/* Icon */}
                                <Icon className="h-6 w-6 text-blue-600" />

                                {/* Level */}
                                <span
                                    className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${levelStyles[module.level]}`}
                                >
                                    {module.level}
                                </span>

                                {/* Title */}
                                <h3 className="font-semibold text-blue-900">
                                    {module.title}
                                </h3>
                            </div>
                        </ModuleLink>
                    );
                })}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-4">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 0))}
                    disabled={page === 0}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-40 cursor-pointer"
                >
                    Anterior
                </button>

                <span className="text-sm text-gray-600">
                    Página {page + 1} de {totalPages}
                </span>

                <button
                    onClick={() =>
                        setPage((p) => Math.min(p + 1, totalPages - 1))
                    }
                    disabled={page === totalPages - 1}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-40 cursor-pointer"
                >
                    Próximo
                </button>
            </div>
        </>
    );
}
