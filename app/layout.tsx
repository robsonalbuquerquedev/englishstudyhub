import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/shared/CookieConsent";

export const metadata: Metadata = {
  title: "EnglishStudyHub | Seu Portal Organizado para Estudar Inglês",
  description:
    "Portal educacional gratuito inspirado no curso de inglês da plataforma Aprenda Mais (MEC). Estude inglês com organização, design moderno e navegação simples. Fluência é constância — practice every day!",
  keywords: [
    "inglês",
    "estudar inglês",
    "curso de inglês",
    "aprender inglês",
    "english course",
    "english study hub",
    "aprenda mais mec",
    "portal de estudos",
    "vocabulário inglês",
    "gramática inglesa"
  ],
  authors: [
    { name: "StudyEnglishHub" },
    { name: "Robson Monteiro de Albuquerque" }
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "StudyEnglishHub | Estude Inglês com Organização e Praticidade",
    description:
      "Plataforma independente que organiza os módulos do curso de inglês gratuito do Aprenda Mais (MEC). Conteúdo livre, visual moderno e fácil navegação.",
    url: "https://seudominio.com", // troque quando tiver o domínio
    siteName: "EnglisStudyhHub",
    type: "website",
    images: [
      {
        url: "/studyenglishlogorbg.png",
        width: 1200,
        height: 630,
        alt: "StudyEnglishHub",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-blue-50"
      >
        <Header />
        <main className="bg-gray-50 pt-20">{children}</main>
        <Footer />
        {/* Cookie Consent */}
        <CookieConsent />
      </body>
    </html>
  );
}
