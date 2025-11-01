"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, HeartHandshake } from "lucide-react";

export default function SobrePage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-24 lg:py-32">

            {/* Título */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Sobre o StudyEnglishHub
                </h1>
                <p className="text-lg text-gray-700">
                    Um espaço criado com carinho para apoiar estudantes de inglês no Brasil 🇧🇷📘
                </p>
            </motion.div>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/studyenglishlogorbg.png"
                        alt="StudyEnglishHub Logo"
                        width={300}
                        height={120}
                        className="drop-shadow-lg"
                    />
                </motion.div>

                {/* Text */}
                <div className="text-gray-700 text-lg leading-relaxed">
                    <p className="mb-4">
                        O <strong>StudyEnglishHub</strong> é um projeto educacional independente,
                        criado para facilitar o estudo do curso de inglês oferecido pela plataforma pública
                        <strong> Aprenda Mais (MEC)</strong>.
                    </p>

                    <p className="mb-4">
                        A proposta é simples: reunir conteúdos, organizar módulos e criar um ambiente
                        visualmente agradável para revisar e praticar inglês com autonomia e constância.
                    </p>

                    <p className="">
                        Todo o material do curso original pertence ao MEC e à plataforma
                        <strong> Aprenda Mais</strong>. Aqui, você encontra uma versão organizada para ajudar
                        no aprendizado.
                    </p>
                </div>
            </div>

            {/* Missão */}
            <section className="bg-white shadow-sm border border-blue-100 rounded-xl p-8 mb-16">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-blue-800 mb-4">
                    <GraduationCap className="text-blue-700" /> Nossa Missão
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Democratizar o aprendizado de inglês, oferecendo uma experiência clara, intuitiva
                    e organizada para estudantes brasileiros. 🌎✈️
                </p>
            </section>

            {/* Como usar */}
            <section className="bg-white shadow-sm border border-blue-100 rounded-xl p-8 mb-16">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-blue-800 mb-4">
                    <BookOpen className="text-blue-700" /> Como usar o portal?
                </h2>
                <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
                    <li>Escolha um módulo</li>
                    <li>Siga as aulas na ordem sugerida</li>
                    <li>Pratique diariamente</li>
                    <li>Volte sempre que quiser revisar</li>
                </ul>
            </section>

            {/* Certificados e Acesso */}
            <section className="bg-white shadow-sm border border-blue-100 rounded-xl p-8 mb-16">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-blue-800 mb-4">
                    🎓 Certificados e acesso à plataforma oficial
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O StudyEnglishHub é um projeto independente criado para facilitar o estudo e revisão.
                    Aqui você pode acessar todo o conteúdo sem login e estudar no seu ritmo.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Já na plataforma oficial <strong>Aprenda Mais (MEC)</strong>, é necessário criar uma conta gratuita para acessar as aulas.
                    A vantagem é que, ao concluir os módulos na plataforma oficial, você recebe
                    <strong> certificados reconhecidos </strong> emitidos automaticamente a cada unidade concluída.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    ➤ Ou seja:
                    <br />• <strong>Aqui:</strong> estudo livre, prático, sem login 😊
                    <br />• <strong>No MEC:</strong> progresso oficial + certificados 📜✅
                    <br /><br />
                    Recomendamos usar os dois juntos para potencializar seu aprendizado.
                </p>
            </section>

            {/* Link Aprenda Mais */}
            <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center mb-16">
                <p className="text-gray-700 mb-4">
                    Quer acessar a versão oficial do curso completo?
                </p>
                <Link
                    href="https://aprendamais.mec.gov.br/"
                    target="_blank"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow transition"
                >
                    Visitar Plataforma Aprenda Mais
                </Link>
            </section>

            {/* Final message */}
            <div className="text-center mt-10 text-gray-800 font-medium text-lg">
                📘 Utilize o StudyEnglishHub para revisar e treinar.<br />
                ✅ Faça as unidades no Aprenda Mais para emitir certificados oficiais.
                <br /><br />
                Seu aprendizado pode ser livre aqui — e reconhecido lá. 🚀
                <HeartHandshake className="w-8 h-8 mx-auto text-blue-600 mb-3" />
            </div>
        </main>
    );
}
