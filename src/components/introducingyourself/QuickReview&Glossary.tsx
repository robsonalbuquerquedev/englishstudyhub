import QuickReviewAndGlossary from "@/components/modules/QuickReviewAndGlossary";

/**
 * Exemplo de aula migrada: só o texto do resumo e as rotas ficam aqui.
 * Os termos do glossário moram em src/data/glossaries/basic/introducing-yourself.ts
 */
export default function QuickReviewAndGlossaryIntroducingYoursel() {
    return (
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
    );
}