"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Target, BookText, MessageCircle, ListChecks, } from "lucide-react";

import DialogueBox from "@/components/dialogue/DialogueBox";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

export default function PoliteWords() {
  const dialogue03 = [
    { speaker: "Sarah", text: "Excuse me, can you help me?" },
    { speaker: "Mark", text: "Of course! What do you need?" },
    { speaker: "Sarah", text: "Thank you very much." },
    { speaker: "Mark", text: "You're welcome!" },
  ];

  const tableHeaders = ["Polite word", "Uso em português"];
  const tableRows = [
    ["Please", "Usado para pedir algo de forma educada"],
    ["Thank you", "Usado para agradecer"],
    ["Thanks", "Forma mais informal de agradecer"],
    ["You're welcome", "Resposta a um agradecimento"],
    ["Excuse me", "Para chamar atenção ou pedir licença"],
    ["Sorry", "Para pedir desculpas"],
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
          <HeartHandshake className="w-12 h-12 text-blue-700" />
        </div>

        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Polite Words in Daily Conversations
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto">
          Aprenda palavras e expressões simples que tornam sua comunicação em
          inglês mais educada, natural e respeitosa.
        </p>
      </motion.header>

      {/* Objetivos */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Target className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">Objetivos</h2>
        </div>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Aprender palavras de cortesia usadas no dia a dia</li>
          <li>Entender quando usar expressões educadas em inglês</li>
          <li>Soar mais natural e respeitoso em conversas simples</li>
        </ul>
      </section>

      {/* Conteúdo introdutório */}
      <section className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 mb-10">
        <h3 className="text-xl font-bold text-blue-700 mb-3">
          Pequenas palavras, grande diferença
        </h3>

        <p className="text-gray-700 leading-relaxed mb-2">
          Em inglês, palavras educadas são muito importantes. Mesmo frases
          curtas podem soar rudes se não usarmos expressões de cortesia como
          &rdquo;please&rdquo; ou &rdquo;thank you&rdquo;.
        </p>

        <p className="text-gray-700 leading-relaxed">
          A boa notícia é que essas palavras são fáceis de aprender e aparecem
          o tempo todo em conversas do cotidiano.
        </p>
      </section>

      {/* Story */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <BookText className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">Story</h2>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          Imagine pedir ajuda em um lugar novo. Ao dizer &rdquo;Excuse me&rdquo; antes de
          falar, a outra pessoa já percebe que você está sendo educado e
          respeitoso.
        </p>
      </section>

      {/* Dialogue */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <MessageCircle className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">Dialogue</h2>
        </div>

        <DialogueBox lines={dialogue03} />
      </section>

      {/* Observação */}
      <section className="mb-10">
        <p className="text-gray-700 leading-relaxed mb-8 text-sm border-l-4 border-blue-400 pl-3 italic">
          Usar palavras educadas não deixa a conversa mais formal — deixa mais
          agradável.
        </p>
      </section>

      {/* Tables */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <ListChecks className="text-blue-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-blue-700">
            Palavras educadas mais comuns
          </h2>
        </div>

        <LessonTable headers={tableHeaders} rows={tableRows} />
      </section>

      {/* Explicação */}
      <section className="mb-10">
        <p className="text-gray-700 leading-relaxed">
          Sempre que você pedir algo, agradecer ou interromper alguém, tente
          usar uma palavra de cortesia. Isso faz sua comunicação soar muito mais
          natural em inglês.
        </p>
      </section>

      {/* MIND THE GAP */}
      <section className="bg-yellow-50 border border-yellow-300 p-5 rounded-xl shadow text-gray-800 mb-10">
        <h3 className="font-semibold text-lg text-yellow-800 mb-2">
          Mind the Gap
        </h3>
        <p className="leading-relaxed text-sm">
          Diferente do português, em inglês &rdquo;please&rdquo; pode aparecer no começo ou
          no final da frase, sem mudar o significado.
        </p>
      </section>

      {/* CULTURAL NOTE */}
      <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow mb-10">
        <h3 className="text-blue-800 font-semibold text-lg mb-3">
          Cultural Note
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Em países de língua inglesa, usar palavras educadas é esperado até em
          situações rápidas, como pedir informação na rua ou comprar algo.
        </p>
      </section>

      {/* NAVIGATION */}
      <ModuleNavigation
        prev="/basic/personal-information-introductions/introducing-yourself/common-greetings"
        next="/basic/personal-information-introductions/introducing-yourself/basic-information"
      />
    </section>
  );
}
