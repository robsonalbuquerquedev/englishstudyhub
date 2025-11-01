"use client";

import { englishModules } from "../../src/data/modules";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-72 h-screen fixed top-0 left-0 bg-white shadow-lg border-r border-blue-100 p-6 z-50">

            {/* Logo */}
            <Link href="/" className="mb-8 flex items-center gap-2">
                <Image
                    src="/studyenglishlogorbg.png"
                    width={170}
                    height={60}
                    alt="StudyEnglishHub Logo"
                    className="object-contain"
                />
            </Link>

            {/* Nav Title */}
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Navegação</p>

            {/* Basic Nav */}
            <nav className="flex flex-col gap-2 mb-6">
                <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium">
                    Início
                </Link>
                <Link href="/sobre" className="text-gray-700 hover:text-blue-700 font-medium">
                    Sobre
                </Link>
                <Link href="/contato" className="text-gray-700 hover:text-blue-700 font-medium">
                    Contato
                </Link>
            </nav>

            {/* Modules */}
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Módulos</p>

            <div className="space-y-1 overflow-y-auto pr-2">
                {englishModules.map((m) => (
                    <Link
                        key={m.link}
                        href={m.link}
                        className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-sm"
                    >
                        <BookOpen className="w-4 h-4 text-blue-600" /> {m.title}
                    </Link>
                ))}
            </div>
        </aside>
    );
}
