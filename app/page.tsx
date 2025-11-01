"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        {/* Logo + Branding */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/studyenglishlogorbg.png"
            alt="StudyEnglishHub Logo"
            width={260}
            height={85}
            className="drop-shadow-md"
            priority
          />
          <h2 className="text-xl font-semibold text-blue-900 mt-2 tracking-wide">
            EnglishStudyHub
          </h2>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Seu Portal Organizado de Estudos de Inglês 🎓📘
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Este portal reúne conteúdos do curso de inglês da plataforma pública
          <strong> Aprenda Mais (MEC)</strong>, organizando módulos e tópicos em um só lugar
          para facilitar seu estudo, revisão e progresso.
        </p>

        {/* Aprenda Mais Reference */}
        <div className="mt-10 flex flex-col items-center">
          <Image
            src="/aprendamaislogo.png"
            alt="Aprenda Mais Logo"
            width={150}
            height={70}
            className="mb-3 opacity-90"
          />

          <Link
            href="https://aprendamais.mec.gov.br/"
            target="_blank"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Conhecer Plataforma Oficial
          </Link>
        </div>
      </motion.div>

      {/* Modules */}
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

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16 text-gray-700 text-lg font-medium"
      >
        🌱 Grow fluency every day — o progresso acontece um pouco por dia!
      </motion.p>
    </main>
  );
}
