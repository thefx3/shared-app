import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center bg-[var(--color-surface)]">
            <header className="w-full sticky top-0 backdrop-blur-xl z-100">
                <Header />
            </header>
    
            <main className="flex-1 w-full max-w-7xl text-center">
                {children}
            </main>
    
            <footer className="w-full text-sm">
                <Footer />
            </footer>
        </div>
    )
}
