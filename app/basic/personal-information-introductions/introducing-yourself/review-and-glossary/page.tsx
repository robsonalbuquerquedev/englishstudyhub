import type { Metadata } from "next";
import Link from "next/link";
import QuickReviewAndGlossary from "@/components/modules/QuickReviewAndGlossary";
import { modulesData } from "@/data/modulesData";

const MODULE_LINK = "/basic/personal-information-introductions";

export const metadata: Metadata = {
    title: "Introducing Yourself: revisão e glossário | English Study Hub",
    description:
        "Revise como se apresentar em inglês e consulte o glossário com cumprimentos, verbo to be, países e nacionalidades.",
    alternates: {
        canonical:
            "/basic/personal-information-introductions/introducing-yourself/review-and-glossary",
    },
};

export default function QuickReviewAndGlossaryIntroducingYourselPage() {
    const moduleTitle =
        modulesData.find((m) => m.link === MODULE_LINK)?.title ??
        "Personal Information & Introductions";

    return (
        <>
            <nav aria-label="Você está em" className="max-w-4xl mx-auto px-6 pt-8 text-sm text-gray-600">
                <ol className="flex flex-wrap items-center gap-1.5">
                    <li>
                        <Link href="/" className="hover:underline">
                            Início
                        </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                        <Link href={MODULE_LINK} className="hover:underline">
                            {moduleTitle}
                        </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="font-semibold text-blue-900">
                        Introducing Yourself
                    </li>
                </ol>
            </nav>

            {/* h1 da página: o componente abaixo usa h2 */}
            <header className="max-w-4xl mx-auto px-6 pt-6 text-center">
                <h1 className="text-4xl font-bold text-blue-900">Introducing Yourself</h1>
                <p className="mt-2 text-gray-600">
                    Revisão e glossário: cumprimentos, apresentações, verbo to be, países e
                    nacionalidades.
                </p>
            </header>

            {/* Os termos do glossário moram em src/data/glossaries/basic/introducing-yourself.ts */}
            <QuickReviewAndGlossary
                glossaryId="introducing-yourself"
                prev="/basic/personal-information-introductions/introducing-yourself/countries-and-nationalities"
                next="/basic/personal-information-introductions/starting-conversations"
            >
                <p>
                    Nesta unidade, você deu seus primeiros passos no inglês aprendendo como
                    se apresentar, cumprimentar pessoas e participar de conversas simples do
                    dia a dia.
                </p>

                <p className="mt-4">
                    Você aprendeu cumprimentos básicos, palavras educadas, como dizer seu
                    nome e informações simples, além de entender a importância dos
                    <strong> subject pronouns</strong> e do verbo <strong>to be</strong>, que
                    são a base da comunicação em inglês.
                </p>

                <p className="mt-4">
                    Também viu como falar sobre países e nacionalidades, algo muito comum em
                    apresentações pessoais e diálogos reais com pessoas de outros lugares.
                </p>

                <p className="mt-4 font-semibold italic text-blue-800">
                    Se você consegue dizer quem você é, de onde você é e cumprimentar alguém
                    em inglês, você já começou a se comunicar de verdade.
                </p>
            </QuickReviewAndGlossary>
        </>
    );
}