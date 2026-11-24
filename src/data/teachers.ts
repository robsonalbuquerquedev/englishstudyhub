import type { Teacher } from "@/type/teacherType";

/**
 * Professoras parceiras do Countries Game.
 * Só adicione alguém com autorização dela para usar nome, foto, texto e links.
 * Fotos ficam em public/professoras/ (ex.: photo: "/professoras/nome.jpg").
 *
 * Exemplo de formato (apague os comentários ao cadastrar a primeira professora):
 *
 * {
 *     slug: "nome-da-professora",
 *     name: "Nome da Professora",
 *     headline: "Professora de inglês para iniciantes",
 *     bio: "Texto de apresentação escrito ou aprovado por ela.",
 *     photo: "/professoras/nome-da-professora.jpg",
 *     specialties: ["Iniciantes", "Conversação"],
 *     modality: "Aulas online",
 *     links: [
 *         { label: "Instagram", href: "https://www.instagram.com/usuario" },
 *         { label: "WhatsApp", href: "https://wa.me/55DDDNUMERO" },
 *     ],
 * },
 */
export const teachers: Teacher[] = [
    {
        slug: "grimellys",
        // TODO: complete com o nome como ela quer ser apresentada (nome e sobrenome, se desejar).
        name: "Grimellys",
        headline: "English Path · Aulas de inglês 100% online",
        // TODO: peça para ela aprovar este texto, que foi escrito a partir da bio do Instagram.
        bio: "Aulas e materiais 100% online, com o Método Cambridge. Agende a sua aula experimental gratuita e conheça o jeito de estudar da English Path.",
        photo: "/professoras/grimellys.jpeg",
        specialties: ["Método Cambridge", "Materiais online"],
        modality: "Aulas 100% online",
        links: [
            // Os links de bio costumam ser o caminho de agendamento: confirme se é isso mesmo.
            { label: "Aula experimental gratuita", href: "https://linktr.ee/englishpathof" },
            { label: "Instagram @englishpathofc", href: "https://www.instagram.com/englishpathofc" },
        ],
    },
];