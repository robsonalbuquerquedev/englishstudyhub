import SobreHeroSplit from "@/components/hero/SobreHeroSplit"
import SobreJourneySection from "@/components/about/SobreJourneySection"
import SobreValoresSection from "@/components/section/SobreValoresSection"
import SobreEncerramentoSection from "@/components/section/SobreEncerramentoSection"

export default function SobrePage() {
    return (
        <>
            <SobreHeroSplit />
            <SobreJourneySection />
            <SobreValoresSection />
            <SobreEncerramentoSection />
        </>
    )
}
