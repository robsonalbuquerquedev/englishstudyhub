"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 bg-white/90 backdrop-blur-md border-t border-blue-200 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">

                {/* Logo & About */}
                <div>
                    <div className="flex justify-center md:justify-start mb-3">
                        <Image
                            src="/studyenglishlogorbg.png"
                            alt="StudyEnglishHub"
                            width={200}
                            height={70}
                            className="opacity-90"
                        />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Plataforma independente criada para organizar e facilitar o estudo do curso de inglês
                        disponibilizado gratuitamente no
                        <span className="font-semibold"> Aprenda Mais (MEC)</span>.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-blue-800 mb-3">Navegação</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li><Link href="/" className="hover:text-blue-700 transition">Início</Link></li>
                        <li><Link href="/sobre" className="hover:text-blue-700 transition">Sobre</Link></li>
                        <li><Link href="/contato" className="hover:text-blue-700 transition">Contato</Link></li>
                    </ul>
                </div>

                {/* Credits */}
                <div>
                    <h3 className="font-semibold text-blue-800 mb-3">Créditos</h3>
                    <p className="text-gray-600 text-sm">
                        Conteúdo baseado no curso oferecido pela plataforma
                        <span className="font-semibold"> Aprenda Mais (MEC)</span>.
                    </p>

                    <Link
                        href="https://aprendamais.mec.gov.br/"
                        target="_blank"
                        className="inline-block mt-3 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition"
                    >
                        Visitar Aprenda Mais
                    </Link>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 border-t border-blue-200 pt-5 text-center text-sm text-gray-600">
                <p className="text-xs">
                    © {new Date().getFullYear()} StudyEnglishHub — Projeto educacional sem fins lucrativos.
                </p>
            </div>
        </footer>
    );
}
