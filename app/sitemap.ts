import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://englishstudyhub.com.br";

    // Páginas institucionais
    const staticRoutes = [
        "",
        "niveis",
        "metodo",
        "sobre",
        "contato",
        "politica-de-cookies",
        "politica-programa-afiliados",
        "termos-de-uso",
    ];

    // Páginas de módulos e conteúdo
    const moduleRoutes = [
        "basic/personal-information-introductions",
        "basic/family-transportation-daily-life",
        "basic/daily-routine-food-clothing",
        "basic/restaurants-health-leisure",
        "basic/adjectives-travel-experiences",
        "intermediate/conditionals-media-language",
        "intermediate/countries-culture-advanced-grammar",
        "intermediate/sports-education-academic-life",
        "intermediate/movies-stories-life-experiences",
        "advanced/causative-tag-questions-indirect-speech",
        "advanced/workplace-english-modal-verbs",
        "advanced/future-tenses-modals-past-review",
        "advanced/weather-sports-personal-skills",
        "advanced/real-life-conversations-situations",
        "advanced/english-for-travel-work-daily-use",
        "padroeiro-da-cidade",
    ];

    return [
        ...staticRoutes.map((route) => ({
            url: `${baseUrl}/${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1.0 : 0.8,
        })),

        ...moduleRoutes.map((route) => ({
            url: `${baseUrl}/${route}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        })),
    ];
}
