import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnglishStudyHub | Estude Inglês do Básico ao Avançado com Organização",
  description:
    "EnglishStudyHub é uma plataforma educacional independente para estudar inglês do nível básico ao avançado. Conteúdo organizado por módulos, linguagem clara e prática constante para evoluir com confiança.",
  keywords: [
    "estudar inglês",
    "aprender inglês online",
    "curso de inglês gratuito",
    "inglês básico intermediário avançado",
    "english study hub",
    "english learning platform",
    "vocabulário em inglês",
    "gramática inglesa",
    "prática de inglês",
    "aprender inglês sozinho"
  ],
  authors: [
    { name: "EnglishStudyHub" },
    { name: "Robson Monteiro de Albuquerque" }
  ],
  creator: "EnglishStudyHub",
  publisher: "EnglishStudyHub",
  metadataBase: new URL("https://englishstudyhub.com.br"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EnglishStudyHub | Inglês Organizado do Básico ao Avançado",
    description:
      "Aprenda inglês de forma progressiva e organizada. Módulos básicos, intermediários e avançados focados em uso real da língua.",
    url: "https://englishstudyhub.com.br",
    siteName: "EnglishStudyHub",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/studyenglishlogorbg.png",
        width: 1200,
        height: 630,
        alt: "EnglishStudyHub — Plataforma para Estudo de Inglês",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        <MainLayout>
          {children}
        </MainLayout>
        {/* Cookie Consent */}
      </body>
    </html>
  );
}
