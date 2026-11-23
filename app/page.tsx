import type { Metadata } from "next";
import MainHeroSplit from "@/components/hero/MainHeroSplit";
import BenefitsBar from "@/components/section/BenefitsBar";
import CardModuleLayout from "@/components/layout/CardModuleLayout";
import CardModule from "@/components/card/CardModule";
import ContinueLearning from "@/components/section/ContinueLearning";
import CountriesGameSection from "@/components/section/CountriesGameSection";
import FeaturedContent from "@/components/section/FeaturedContent";
import InspirationSection from "@/components/section/InspirationSection";
import FaqSection from "@/components/section/FaqSection";
import FinalCta from "@/components/section/FinalCta";
import AdSlot from "@/components/ads/AdSlot";

export const metadata: Metadata = {
  title: "English Study Hub | Aprenda inglês de forma prática e gratuita",
  description:
    "Trilhas de estudo, vocabulário e jogos para aprender inglês. Gratuito, sem cadastro.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <MainHeroSplit />
      <BenefitsBar />

      <CardModuleLayout>
        <CardModule />
      </CardModuleLayout>

      <ContinueLearning />   {/* client component, lê localStorage */}
      <AdSlot slot="home-after-modules" />

      <CountriesGameSection />
      <FeaturedContent />
      <AdSlot slot="home-after-featured" />

      <InspirationSection />
      <FaqSection />         {/* com JSON-LD FAQPage */}
      <FinalCta />
    </>
  );
}