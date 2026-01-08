"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { X } from "lucide-react"

import { modulesData } from "@/data/modulesData"
import { moduleIcons } from "@/components/icons/modulesIcons"

type ModuleLevel = "Básico" | "Intermediário" | "Avançado"

interface SidebarProps {
    open: boolean
    onClose: () => void
}

const modulesByLevel: Record<ModuleLevel, typeof modulesData> = {
    Básico: modulesData.filter(m => m.level === "basico"),
    Intermediário: modulesData.filter(m => m.level === "intermediario"),
    Avançado: modulesData.filter(m => m.level === "avancado"),
}

const levelStyles: Record<ModuleLevel, { title: string; icon: string }> = {
    Básico: {
        title: "text-green-700",
        icon: "text-green-600",
    },
    Intermediário: {
        title: "text-yellow-700",
        icon: "text-yellow-600",
    },
    Avançado: {
        title: "text-red-700",
        icon: "text-red-600",
    },
}

export default function Sidebar({ open, onClose }: SidebarProps) {
    if (!open) return null

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={onClose}
            />

            {/* Drawer */}
            <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 120 }}
                className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-6 flex flex-col"
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="self-end mb-6 cursor-pointer"
                >
                    <X className="w-7 h-7 text-gray-700" />
                </button>

                <p className="text-lg font-bold text-blue-700 mb-4">
                    📚 Módulos de Inglês
                </p>

                <div className="space-y-6 overflow-y-auto pr-2 max-h-[82vh]">
                    {Object.entries(modulesByLevel).map(([level, modules]) => {
                        const typedLevel = level as ModuleLevel

                        return (
                            <div key={typedLevel} className="space-y-2">
                                <p className={`text-xs font-semibold uppercase ${levelStyles[typedLevel].title}`}>
                                    {typedLevel}
                                </p>

                                {modules.map((module) => {
                                    const Icon = moduleIcons[module.icon]

                                    return (
                                        <Link
                                            key={module.link}
                                            href={module.link}
                                            onClick={onClose}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-sm transition"
                                        >
                                            <Icon className={`w-4 h-4 ${levelStyles[typedLevel].icon}`} />
                                            <span>{module.title}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </motion.aside>
        </>
    )
}
