import { useEffect, useMemo, useState } from "react";
import logo from "../images/logo2.png";

export default function Header() {
    const [activeId, setActiveId] = useState("home");
    const base = "text-lg font-medium px-3 py-2 text-gray-800 hover:text-[#4A90E2] transition-all duration-200";
    const active = "text-[#4A90E2] font-semibold";
    const title = "text-3xl font-semibold px-3 py-2 text-gray-900 transition-all duration-200";
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
    <nav className="flex items-center justify-between gap-4 py-4 px-2 max-w-7xl mx-auto w-full">
        <a href="#home" className={`${title} inline-flex gap-4 leading-none`} onClick={handleScroll("home")}>
            <img src={logo} alt="Logo" className="inline-block w-9 h-9" />
            <span className="text-3xl self-end">Shared</span>
        </a>
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
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
                className="inline-flex items-center justify-center h-10 rounded-full px-4 text-md font-semibold text-white transition-all duration-200 hover:scale-98 hover:shadow-md"
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
