export type TeacherLink = {
    /** Texto do botão, ex.: "Instagram", "WhatsApp", "Site" */
    label: string;
    /** URL completa (https://...) */
    href: string;
};

export type Teacher = {
    /** Identificador estável, em minúsculas e com hífens. Vira âncora: /professoras#<slug> */
    slug: string;
    name: string;
    /** Frase curta sob o nome, ex.: "Professora de inglês para iniciantes" */
    headline: string;
    /** Apresentação escrita ou aprovada pela própria professora */
    bio: string;
    /** Caminho em public/, ex.: "/professoras/maria.jpg". Sem foto, aparece a inicial do nome. */
    photo?: string;
    specialties: string[];
    /** Ex.: "Aulas online" ou "Presencial em Recife - PE" */
    modality?: string;
    links: TeacherLink[];
};