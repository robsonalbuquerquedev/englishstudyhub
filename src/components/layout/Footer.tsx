"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Layers, Compass, Info, Mail, BookOpen, Menu } from "lucide-react"

export default function Footer() {
    return (
        <footer className="mt-20 bg-white/90 backdrop-blur-md border-t border-blue-200 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left">

                {/* Logo & About */}
                <div>
                    <div className="flex justify-center md:justify-start mb-3">
                        <Image
                            src="/logo/studyenglish.png"
                            alt="StudyEnglishHub"
                            width={200}
                            height={70}
                            className="opacity-90 h-auto w-auto"
                        />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Projeto educacional independente focado no aprendizado contínuo de inglês,
                        com módulos organizados para estudar no seu ritmo.
                        Não emitimos certificados.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-blue-800 mb-3">Navegação</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-blue-700 transition">
                                <Home size={16} />
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link href="/metodo" className="flex items-center gap-2 hover:text-blue-700 transition">
                                <BookOpen size={16} />
                                Método de Estudo
                            </Link>
                        </li>

                        <li>
                            <Link href="/niveis" className="flex items-center gap-2 hover:text-blue-700 transition">
                                <Compass size={16} />
                                Níveis de Aprendizado
                            </Link>
                        </li>

                        <li>
                            <Link href="/sobre" className="flex items-center gap-2 hover:text-blue-700 transition">
                                <Info size={16} />
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link href="/contato" className="flex items-center gap-2 hover:text-blue-700 transition">
                                <Mail size={16} />
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="flex items-center gap-2 font-semibold text-blue-800 mb-3">
                        <Layers size={18} />
                        Legal
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li><Link href="/politica-de-privacidade" className="hover:text-blue-700 transition">Política de Privacidade</Link></li>
                        <li><Link href="/politica-de-cookies" className="hover:text-blue-700 transition">Política de Cookies</Link></li>
                        <li><Link href="/politica-programa-afiliados" className="hover:text-blue-700 transition">Política de Programa Afiliados</Link></li>
                        <li><Link href="/termos-de-uso" className="hover:text-blue-700 transition">Termos de Uso</Link></li>
                    </ul>
                </div>

                {/* Author Projects */}
                <div>
                    <h3 className="font-semibold text-blue-800 mb-3">
                        Projetos do autor
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <a
                                href="https://aprenderviolaoonline.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-700 transition"
                            >
                                Aprender Violão Online
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://windly.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-700 transition"
                            >
                                Windly
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://cantosjsm.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-700 transition"
                            >
                                Cantos JSM
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 border-t border-blue-200 pt-5 text-center text-sm text-gray-600">
                <p className="text-xs">
                    © {new Date().getFullYear()} EnglishStudyHub — Plataforma educacional independente.
                </p>
            </div>
        </footer>
    );
}
