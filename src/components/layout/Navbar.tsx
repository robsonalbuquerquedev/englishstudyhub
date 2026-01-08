"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, Layers, Compass, Info, Mail, BookOpen, Menu } from "lucide-react"

interface NavbarProps {
    onOpenMenu: () => void
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40 px-6 py-3 flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <div className="w-[160px]">
                    <Image
                        src="/logo/studyenglish.png"
                        alt="EnglishStudyHub logo"
                        width={160}
                        height={55}
                        loading="lazy"
                        className="object-contain w-full h-auto"
                    />
                </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                <Link href="/" className="flex items-center gap-1 hover:text-blue-700 transition">
                    <Home className="w-4 h-4" />
                    <span>Início</span>
                </Link>

                <Link href="/niveis" className="flex items-center gap-1 hover:text-blue-700 transition">
                    <Layers className="w-4 h-4" />
                    <span>Níveis</span>
                </Link>

                <Link href="/metodo" className="flex items-center gap-1 hover:text-blue-700 transition">
                    <Compass className="w-4 h-4" />
                    <span>Método</span>
                </Link>

                <Link href="/sobre" className="flex items-center gap-1 hover:text-blue-700 transition">
                    <Info className="w-4 h-4" />
                    <span>Sobre</span>
                </Link>

                <Link href="/contato" className="flex items-center gap-1 hover:text-blue-700 transition">
                    <Mail className="w-4 h-4" />
                    <span>Contato</span>
                </Link>

                {/* CTA principal */}
                <button
                    onClick={onOpenMenu}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow cursor-pointer"
                >
                    <BookOpen className="w-5 h-5" />
                    <span>Trilhas de Estudo</span>
                </button>
            </nav>

            {/* Mobile */}
            <button
                className="md:hidden text-gray-700 flex items-center gap-2 cursor-pointer"
                onClick={onOpenMenu}
                aria-label="Abrir trilhas de estudo"
            >
                <Menu className="w-7 h-7" />
                <span className="font-medium">📚 Trilhas de Estudo</span>
            </button>
        </header>
    )
}
