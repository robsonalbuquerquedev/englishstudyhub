/** [palavra em inglês, tradução] */
export type GlossaryTerm = [string, string];

export type GlossaryEntry = {
    /** Identificador único e estável. Vira âncora no hub: /glossario#<id> */
    id: string;
    /** Título exibido, ex.: "Introducing Yourself" */
    title: string;
    /** Deve ser igual a um `link` de modulesData: define nível e módulo no hub. */
    moduleLink: string;
    /** Página da aula onde este glossário aparece (link "Ver na aula"). */
    lessonHref: string;
    terms: GlossaryTerm[];
};