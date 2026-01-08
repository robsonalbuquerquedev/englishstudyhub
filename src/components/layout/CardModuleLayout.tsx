interface CardModuleLayoutProps {
    children: React.ReactNode;
}

export default function CardModuleLayout({
    children,
}: CardModuleLayoutProps) {
    return (
        <section id="ver-modulos" className="max-w-7xl mx-auto mt-16 px-4">
            {children}
        </section>
    );
}
