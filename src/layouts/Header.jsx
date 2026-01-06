import { useEffect, useMemo, useState } from "react";
import logo from "../images/logo2.png";

export default function Header() {
    const [activeId, setActiveId] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const base = "text-base sm:text-lg font-medium px-3 py-2 text-gray-800 hover:text-[#4A90E2] whitespace-nowrap transition-all duration-200";
    const active = "text-[#4A90E2] font-semibold";
    const title = "text-2xl sm:text-3xl font-semibold px-3 py-2 text-gray-900 transition-all duration-200";
    const links = useMemo(() => [
        { id: "features", label: "Fonctionnalités" },
        { id: "about", label: "A propos" },
        { id: "contact", label: "Contact" },
    ], []);

    const handleScroll = (id) => (event) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        const ids = ["home", ...links.map((link) => link.id)];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, [links]);
  
    return (
    <nav className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-6 py-4 px-3 max-w-7xl mx-auto w-full">
        <div className="flex w-full items-center justify-between sm:justify-start gap-3">
            <a href="#home" className={`${title} inline-flex items-center gap-3 sm:gap-4 leading-none`} onClick={handleScroll("home")}>
                <img src={logo} alt="Logo" className="inline-block w-9 h-9" />
                <span className="text-2xl sm:text-3xl self-center sm:self-end">Shared</span>
            </a>
            <button
                type="button"
                className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border cursor-pointer border-gray-200 shadow-sm hover:scale-95 transition-colors duration-200"
                aria-label="Ouvrir le menu"
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <span className="sr-only">Menu</span>
                <div className="space-y-1.5">
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </div>
            </button>
        </div>

        <div className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto sm:flex-nowrap ${menuOpen ? "flex" : "hidden sm:flex"}`}>
            <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-center sm:justify-end items-center gap-2 sm:gap-3 w-full sm:w-auto">
                {links.map(link => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`${base} ${activeId === link.id ? active : ""} inline-flex items-center h-10 rounded-md`}
                        onClick={handleScroll(link.id)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            <a
                href="#download"
                onClick={handleScroll("download")}
                className="inline-flex items-center justify-center h-10 rounded-full px-4 sm:px-5 text-sm sm:text-md font-semibold text-white transition-all duration-200 hover:scale-98 hover:shadow-md"
                style={{
                    backgroundImage:
                    "linear-gradient(135deg, #4A90E2 0%, #E74C3C 100%)",
                    boxShadow:
                        "0 10px 20px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                Télécharger
            </a>
        </div>
    </nav>
    );
}
