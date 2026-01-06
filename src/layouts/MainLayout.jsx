import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <header className="sticky top-0 backdrop-blur-xl z-100">
                <Header />
            </header>
    
            <main className="flex-1 justify-items-center justify-center text-center">
            {children}
            </main>
    
            <footer className="text-sm">
                <Footer />
            </footer>
        </div>
    )
}
