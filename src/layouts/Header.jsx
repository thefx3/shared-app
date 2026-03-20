import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header() {
    const [activeId, setActiveId] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const base = "text-base sm:text-lg font-medium px-3 py-2 text-gray-800 hover:text-[#4A90E2] whitespace-nowrap transition-all duration-200";
    const active = "text-[#4A90E2] font-semibold";
    const actionBaseClass = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 hover:scale-98 hover:shadow-md";
    const links = useMemo(
        () => [
            { id: "features", label: "Fonctionnalites" },
            { id: "about", label: "A propos" },
            { id: "contact", label: "Contact" },
        ],
        []
    );
    const actionLinks = useMemo(
        () => [
            { id: "download", label: "Telecharger", className: "bg-black text-white" },
            { id: "contact", label: "Me contacter", className: "bg-black text-white" },
        ],
        []
    );
    const searchableLinks = useMemo(
        () => [{ id: "home", label: "Shared" }, ...links, ...actionLinks],
        [actionLinks, links]
    );

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const openSection = (id) => {
        if (location.pathname !== "/") {
            navigate(`/#${id}`);
            setMenuOpen(false);
            return;
        }

        scrollToSection(id);
        setActiveId(id);
        setMenuOpen(false);
    };

    const openDownloadPage = () => {
        navigate("/download");
        setMenuOpen(false);
    };

    const handleSectionClick = (id) => (event) => {
        event.preventDefault();
        openSection(id);
    };

    const handleActionClick = (id) => (event) => {
        event.preventDefault();

        if (id === "download") {
            openDownloadPage();
            return;
        }

        openSection(id);
    };

    const handleLogoClick = (event) => {
        event.preventDefault();

        if (location.pathname !== "/") {
            navigate("/");
            setMenuOpen(false);
            return;
        }

        openSection("home");
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        const normalizedSearch = searchTerm.trim().toLowerCase();
        if (!normalizedSearch) return;

        const matchedLink = searchableLinks.find(({ label, id }) => {
            const normalizedLabel = label.toLowerCase();
            return normalizedLabel.includes(normalizedSearch) || id.includes(normalizedSearch);
        });

        if (!matchedLink) return;

        if (matchedLink.id === "download") {
            openDownloadPage();
        } else {
            openSection(matchedLink.id);
        }

        setSearchTerm("");
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

    useEffect(() => {
        if (location.pathname !== "/" || !location.hash) return;

        const targetId = location.hash.slice(1);
        const frame = window.requestAnimationFrame(() => {
            scrollToSection(targetId);
            setActiveId(targetId);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [location.hash, location.pathname]);

    return (
        <nav className="border relative mx-auto flex w-full items-center justify-between gap-3 overflow-x-clip border-b border-gray-200 px-3 py-2 lg:gap-6 lg:px-4">
            <div className="flex min-w-0 flex-1 items-center gap-2 lg:flex-none lg:gap-3 lg:items-center">
                <button
                    type="button"
                    className="lg:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full  transition-colors duration-200 hover:scale-95"
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

                <div className="flex min-w-0 flex-1 items-center gap-2 lg:flex-none lg:gap-4">
                    <a
                        href="/"
                        className="inline-flex min-w-0 shrink-0 items-center justify-center rounded-md p-1 lg:p-2"
                        onClick={handleLogoClick}
                    >
                        <img src={logo} alt="Logo Shared" className="block h-10 rounded-lg w-auto max-w-16 shrink-0 object-contain lg:h-10 lg:max-w-none" />
                    </a>

                    <form
                        className="hidden xl:flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-200 focus-within:border-[#4A90E2] focus-within:ring-2 focus-within:ring-[#4A90E2]/15"
                        onSubmit={handleSearchSubmit}
                        role="search"
                    >
                        <Search className="h-4 w-4 text-gray-500" aria-hidden="true" />
                        <input
                            type="search"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Rechercher une section"
                            className="w-44 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 lg:w-56"
                            aria-label="Rechercher une section"
                        />
                    </form>
                </div>
            </div>

            <div className="hidden lg:flex lg:flex-row lg:justify-start gap-3 lg:gap-5 w-full lg:w-auto lg:flex-nowrap">
                <div className="flex flex-col lg:flex-row lg:flex-nowrap justify-center lg:justify-end items-center gap-2 lg:gap-3 w-full lg:w-auto">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`${base} ${activeId === link.id ? active : ""} inline-flex items-center justify-center h-10 rounded-md`}
                            onClick={handleSectionClick(link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="hidden lg:flex gap-2 lg:gap-3">
                {actionLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.id === "download" ? "/download" : `#${link.id}`}
                        onClick={handleActionClick(link.id)}
                        className={`h-10 px-4 lg:px-5 text-sm lg:text-base ${actionBaseClass} ${link.className}`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
                {actionLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.id === "download" ? "/download" : `#${link.id}`}
                        onClick={handleActionClick(link.id)}
                        className={`h-9 px-3 py-2 text-[14px] ${actionBaseClass} ${link.className}`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div
                className={`lg:hidden absolute left-3 right-3 top-full z-20 mt-3 rounded-2xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur transition-all duration-300 ${
                    menuOpen
                        ? "opacity-100 translate-y-0 max-h-96"
                        : "pointer-events-none opacity-0 -translate-y-2 max-h-0"
                }`}
            >
                <div className="flex flex-col items-start gap-2 px-3 py-3">
                    <form
                        className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-200 focus-within:border-[#4A90E2] focus-within:ring-2 focus-within:ring-[#4A90E2]/15"
                        onSubmit={handleSearchSubmit}
                        role="search"
                    >
                        <Search className="h-4 w-4 text-gray-500" aria-hidden="true" />
                        <input
                            type="search"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder="Rechercher..."
                            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                            aria-label="Rechercher..."
                        />
                    </form>

                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`${base} ${activeId === link.id ? active : ""} w-full justify-start rounded-md`}
                            onClick={handleSectionClick(link.id)}
                        >
                            {link.label}
                        </a>
                    ))}

                </div>
            </div>
        </nav>
    );
}
