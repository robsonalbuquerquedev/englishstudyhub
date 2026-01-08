"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LessonTable from "@/components/table/LessonTable";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";
import NiceToMeetYouCredits from "@/components/credits/NiceToMeetYouCredits";
import { HeartHandshake } from "lucide-react";

// tabelas (você pode preencher os dados oficiais do material)
const possessiveAdjectivesTable = {
    headers: ["Pronoun", "Possessive Adjective", "Example"],
    rows: [
        ["I", "my", "My name is Rosa."],
        ["You", "your", "Your coat is beautiful."],
        ["He", "his", "His name is Dube."],
        ["She", "her", "Her coat is pretty."],
        ["It", "its", "The dog wagged its tail."],
        ["We", "our", "Our home is cozy."],
        ["They", "their", "Their house is near here."],
    ],
};

const contractionsTable = {
    headers: ["Contraction", "Sounds like", "But means"],
    rows: [
        ["I'm", "My", "I am"],
        ["You're", "Your", "You are"],
        ["He's", "His", "He is"],
        ["She's", "She’s (possessive sound close)", "She is"],
        ["It's", "Its", "It is"],
        ["We're", "We're / Our (close sound)", "We are"],
        ["They're", "Their", "They are"],
    ],
};

export default function PossessiveAdjectivesPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 mt-10">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-blue-800 text-center mb-10 flex items-center justify-center gap-2"
            >
                <HeartHandshake className="w-10 h-10 text-blue-600" />
                Possessive Adjectives
            </motion.h1>

            {/* Intro */}
            <p className="text-gray-700 leading-relaxed mb-6">
                Os <strong>possessive adjectives</strong> são os adjetivos possessivos em inglês, ou seja, palavras que indicam posse.
                Eles aparecem <strong>antes</strong> do que é possuído e não variam no plural.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                Por exemplo, ao ver Amanda pela primeira vez, no aeroporto, Rosa pensou:
            </p>

            {/* Image */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/possessiveadjectives.png"
                    alt="Possessive adjectives example"
                    width={700}
                    height={380}
                    className="rounded-xl shadow"
                />
            </div>

            {/* Example images */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                <Image src="/possessiveadjectivesexemplo001.png" alt="" width={280} height={120} className="rounded shadow" />
                <Image src="/possessiveadjectivesexemplo002.png" alt="" width={280} height={120} className="rounded shadow" />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Note que <strong>her</strong> continua o mesmo, seja para algo no singular (casaco) ou plural (sapatos).
            </p>

            {/* Another example */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/possessiveadjectives002.png"
                    alt="Conversation example"
                    width={700}
                    height={380}
                    className="rounded-xl shadow"
                />
            </div>

            <div className="flex justify-center gap-6 mb-10">
                <Image src="/possessiveadjectivesexemplo003.png" alt="" width={280} height={120} className="rounded shadow" />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                O pronome <strong>their</strong> refere-se a <em>Christine e Carly</em>, independentemente do que elas possuem.
            </p>

            <div className="flex justify-center mb-6">
                <Image
                    src="/possessiveadjectives003.png"
                    alt="Plural example"
                    width={700}
                    height={380}
                    className="rounded-xl shadow"
                />
            </div>

            <div className="flex justify-center gap-6 mb-10">
                <Image src="/possessiveadjectivesexemplo004.png" alt="" width={280} height={120} className="rounded shadow" />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Portanto, o <strong>possessive adjective</strong> se refere a quem possui, e não à coisa possuída.
            </p>

            {/* Table */}
            <LessonTable
                headers={possessiveAdjectivesTable.headers}
                rows={possessiveAdjectivesTable.rows}
            />

            <p className="text-gray-700 leading-relaxed mb-6">
                Lembre-se: o possessive adjective sempre vem acompanhado da palavra possuída (ex.: <em>her coat</em>).
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                Já as <strong>contractions</strong> podem soar parecidas com possessivos, mas significam algo diferente:
            </p>

            <LessonTable
                headers={contractionsTable.headers}
                rows={contractionsTable.rows}
            />

            <p className="text-gray-700 leading-relaxed mb-10">
                Perceba as diferenças de significado e contexto para não confundir.
                A seguir, veremos <strong>countries and nationalities</strong>.
            </p>

            <ModuleNavigation
                prev="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/verb-to-be"
                next="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you/countries-and-nationalities"
            />

            <NiceToMeetYouCredits />
        </main>
    );
}
