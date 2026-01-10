"use client";

import { motion } from "framer-motion";
import { Smile, Target, BookText, MessageCircle, ListChecks, } from "lucide-react";

import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

export default function SayingHello() {
  const dialogue02 = [
    { speaker: "Emma", text: "Hi! How are you?" },
    { speaker: "Lucas", text: "I'm fine, thanks! And you?" },
    { speaker: "Emma", text: "I'm great!" },
  ];

  const tableHeaders = ["Greeting", "Quando usar"];
  const tableRows = [
    ["Hi", "Cumprimento informal e muito comum"],
    ["Hello", "Cumprimento neutro, formal ou informal"],
    ["Good morning", "Usado pela manhã"],
    ["Good afternoon", "Usado à tarde"],
    ["Good evening", "Usado à noite"],
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">
      {/* Cabeçalho */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-3">
          <Smile className="w-12 h-12 text-blue-700" />
        </div>

        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Saying Hello: Common Greetings
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto">
          Aprenda como dizer &rdquo;olá&rdquo; em inglês de forma natural, educada e adequada
          a diferentes situações do dia a dia.
        </p>
      </motion.header>

      {/* Objetivos */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Target className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
        </div>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Conhecer os cumprimentos mais comuns em inglês</li>
          <li>Entender quando usar cumprimentos formais e informais</li>
          <li>Ganhar confiança para iniciar conversas simples</li>
        </ul>
      </section>

      {/* Conteúdo introdutório */}
      <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
        <h3 className="text-xl font-bold text-blue-700 mb-3">
          O primeiro passo de toda conversa
        </h3>

        <p className="text-gray-700 leading-relaxed mb-2">
          Cumprimentar alguém em inglês é uma habilidade essencial. Mesmo com um
          vocabulário pequeno, saber dizer &rdquo;olá&rdquo; corretamente já permite iniciar
          uma conversa de forma educada e amigável.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Nesta lição, você vai aprender os cumprimentos mais usados em inglês e
          entender em quais situações cada um deles é mais adequado.
        </p>
      </section>

      {/* Story */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <BookText className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">Story</h2>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          Imagine entrar em uma sala cheia de pessoas que falam inglês. Você
          encontra alguém, sorri e diz apenas &rdquo;Hi!&rdquo;. Esse simples cumprimento já
          quebra o gelo e abre espaço para uma conversa.
        </p>
      </section>

      {/* Dialogue */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <MessageCircle className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">Dialogue</h2>
        </div>

        <DialogueBox lines={dialogue02} />
      </section>

      {/* Observação */}
      <section className="mb-10">
        <p className="text-gray-700 leading-relaxed mb-8 text-sm border-l-4 border-blue-400 pl-3 italic">
          Em inglês, é muito comum acompanhar o cumprimento com um sorriso ou
          uma pergunta simples como &rdquo;How are you?&rdquo;.
        </p>
      </section>

      {/* Tables */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <ListChecks className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">
            Cumprimentos mais comuns
          </h2>
        </div>

        <LessonTable headers={tableHeaders} rows={tableRows} />
      </section>

      {/* Explicação */}
      <section className="mb-10">
        <p className="text-gray-700 leading-relaxed">
          Não existe um único &rdquo;hello&rdquo; certo ou errado. O importante é observar o
          contexto: horário do dia, grau de formalidade e a situação em que você
          está.
        </p>
      </section>

      {/* MIND THE GAP */}
      <section className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
        <h3 className="font-semibold text-lg text-yellow-800 mb-2">
          Mind the Gap
        </h3>
        <p className="leading-relaxed text-sm">
          Diferente do português, em inglês não é comum dizer &rdquo;Good night&rdquo; como
          cumprimento. Essa expressão é usada principalmente para se despedir.
        </p>
      </section>

      {/* CULTURAL NOTE */}
      <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
        <h3 className="text-blue-800 font-semibold text-lg mb-3">
          Cultural Note
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Em muitos países de língua inglesa, cumprimentos rápidos e diretos são
          vistos como algo natural e educado, mesmo entre pessoas que não se
          conhecem bem.
        </p>
      </section>

      {/* NAVIGATION */}
      <ModuleNavigation
        prev="/basic/personal-information-introductions/introducing-yourself/welcome"
        next="/basic/personal-information-introductions/introducing-yourself/polite-words"
      />
    </section>
  );
}
