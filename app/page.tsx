import MainHeroSplit from "@/components/hero/MainHeroSplit";
import CardModuleLayout from "@/components/layout/CardModuleLayout";
import CardModule from "@/components/card/CardModule";
import InspirationSection from "@/components/section/InspirationSection";

export default function Home() {
  return (
    <>
      <MainHeroSplit />
      <CardModuleLayout>
        <CardModule />
      </CardModuleLayout>
      <InspirationSection />
    </>
  );
}
