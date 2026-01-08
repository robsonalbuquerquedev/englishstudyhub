import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 pt-30">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}
