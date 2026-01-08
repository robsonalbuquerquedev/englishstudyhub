import ModulosHero from "@/components/hero/ModulosHero"
import CardModuleFull from "@/components/card/CardModuleFull"
import StudyNextSteps from "@/components/StudyNextSteps"

export default function ModulosPage() {
    return (
        <>
            <ModulosHero />
            <CardModuleFull />
            <StudyNextSteps
                title="Como usar este módulo de estudo"
                description="Siga os módulos na ordem proposta, revisite quando necessário e avance no seu ritmo. A constância é mais importante do que a velocidade."
                links={[
                    {
                        label: "Entenda o método de estudo",
                        href: "/metodo"
                    },
                    {
                        label: "Veja todos os níveis de aprendizado",
                        href: "/niveis"
                    }
                ]}
            />
        </>
    )
}
