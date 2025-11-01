"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { englishModules } from "../../src/data/modules";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Top Navbar */}
            <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40 px-6 py-3 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/studyenglishlogorbg.png"
                        alt="logo"
                        width={160}
                        height={55}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-blue-700 transition">Início</Link>
                    <Link href="/sobre" className="hover:text-blue-700 transition">Sobre</Link>
                    <Link href="/contato" className="hover:text-blue-700 transition">Contato</Link>

                    {/* 📚 Cursos button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow cursor-pointer"
                    >
                        📚 Cursos
                    </button>
                </nav>

                {/* Mobile Burger Button */}
                <button
                    className="md:hidden text-gray-700 flex items-center gap-2"
                    onClick={() => setOpen(true)}
                >
                    <Menu className="w-7 h-7" />
                    <span className="font-medium">Cursos</span>
                </button>
            </header>

            {/* Mobile/Overlay Darken */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            {open && (
                <motion.aside
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-6 flex flex-col"
                >
                    {/* Close button */}
                    <button onClick={() => setOpen(false)} className="self-end mb-6 cursor-pointer">
                        <X className="w-7 h-7 text-gray-700" />
                    </button>

                    <p className="text-lg font-bold text-blue-700 mb-4">📚 Módulos de Inglês</p>

                    {/* Links */}
                    <div className="space-y-2 overflow-y-auto pr-2 max-h-[82vh]">
                        {englishModules.map((m) => (
                            <Link
                                key={m.link}
                                href={m.link}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-sm"
                            >
                                <BookOpen className="w-4 h-4 text-blue-600" />
                                {m.title}
                            </Link>
                        ))}
                    </div>
                </motion.aside>
            )}
        </>
    );
}
