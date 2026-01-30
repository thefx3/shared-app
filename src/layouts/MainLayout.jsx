import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white items-center">
            <header className="flex-1 w-full sticky top-0 backdrop-blur-xl z-100">
                <Header />
            </header>
    
            <main className="w-full max-w-7xl text-center">
            {children}
            </main>
    
            <footer className="text-sm">
                <Footer />
            </footer>
        </div>
    )
}
