"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowDown } from "lucide-react";

const modules = [
  { title: "Identificação e Caracterização Pessoal", link: "/identificacao-e-caracterizacao-pessoal" },
  { title: "Transportes, Família e Rotina", link: "/transport-family-routine" },
  { title: "Rotina, Alimentação e Vestuário", link: "/rotina-alimentacao-vestuario" },
  { title: "Restaurante, Saúde e Lazer", link: "/restaurante-saude-lazer" },
  { title: "Adjetivos e Viagens", link: "/adjetivos-viagens-revisao" },
  { title: "Condicional e Mídia", link: "/conditionals-and-media" },
  { title: "Canada & Gramática Avançada", link: "/canada-money-holidays-grammar" },
  { title: "Esportes, Funerais e Acadêmico", link: "/esportes-funerais-academico" },
  { title: "Filmes, Histórias e Vida", link: "/movies-stories-life" },
  { title: "Causative, Tag & Indirect", link: "/causative-tag-indirect" },
  { title: "Trabalho e Modal Verbs", link: "/trabalho-modais-adjetivos" },
  { title: "Future, Modals & Past", link: "/future-modals-past" },
  { title: "Clima, Esportes e Habilidades", link: "/condicoes-clima-esportes-habilidades" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-20 px-6">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left - Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/studyenglishlogorbg.png"
            alt="StudyEnglishHub Logo"
            width={380}
            height={120}
            className="drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Bem-vindo ao EnglishStudyHub 🎓📘
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Um portal feito para organizar e facilitar seu estudo de inglês com base no curso público
            <strong> Aprenda Mais (MEC)</strong>, com acesso rápido a módulos, lições e glossários.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#modulos" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg shadow-md transition">
              Ver Módulos
            </a>

            <Link
              href="https://aprendamais.mec.gov.br/"
              target="_blank"
              className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg shadow-sm transition"
            >
              Plataforma Oficial
            </Link>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="text-blue-700"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="mt-24">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-10">
          Acesse os módulos abaixo 👇
        </h2>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={mod.link}
                className="block bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-blue-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-blue-700" />
                  <p className="font-medium text-gray-800">{mod.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <p className="text-center mt-20 text-gray-700 text-lg font-medium">
        🌱 Grow fluency every day — o progresso acontece um pouco por dia!
      </p>
    </main>
  );
}
