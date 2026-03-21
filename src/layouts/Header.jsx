import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HEADER_ACTIONS, HEADER_NAV_ITEMS, PAGE_PATHS, SEARCH_NAV_ITEMS } from "../data/siteContent";
import logo from "../images/logo.png";

const actionButtonBaseClass =
    "inline-flex items-center justify-center rounded-full bg-black text-white font-semibold transition-all duration-200 hover:scale-98 hover:shadow-md";
const mobileMenuItemClass =
    "w-full justify-start rounded-md px-3 py-2 text-base font-medium text-gray-800 transition-colors duration-200 hover:text-[#4A90E2]";

function getActiveNavigationId(location) {
    if (location.pathname === PAGE_PATHS.download) {
        return "download";
    }

    if (location.pathname === PAGE_PATHS.contact) {
        return "contact";
    }

    if (location.hash === "#about") {
        return "about";
    }

    return "home";
}

function findSearchMatch(searchTerm) {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
        return null;
    }

    return SEARCH_NAV_ITEMS.find(({ id, label }) => {
        const normalizedLabel = label.toLowerCase();
        return normalizedLabel.includes(normalizedSearch) || id.includes(normalizedSearch);
    });
}

function HeaderIconButton({ item, isActive, onSelect }) {
    const activeClassName = item.featured
        ? "scale-105 bg-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]"
        : "bg-[#4A90E2]/10 text-[#4A90E2]";
    const inactiveClassName = item.featured
        ? "bg-white text-black hover:bg-black hover:text-white"
        : "bg-white text-gray-700 hover:text-[#4A90E2]";

    return (
        <button
            type="button"
            className={`inline-flex h-14 w-14 items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                isActive ? activeClassName : inactiveClassName
            }`}
            onClick={() => onSelect(item)}
            aria-label={item.label}
            title={item.label}
        >
            <item.Icon className={item.featured ? "h-6 w-6" : "h-5 w-5"} />
        </button>
    );
}

function MobileMenuButton({ item, isActive, onSelect }) {
    return (
        <button
            type="button"
            className={`${mobileMenuItemClass} ${isActive ? "text-[#4A90E2] font-semibold" : ""}`}
            onClick={() => onSelect(item)}
        >
            <span className="inline-flex items-center gap-3">
                <item.Icon className="h-4 w-4" />
                <span>{item.label}</span>
            </span>
        </button>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const activeId = getActiveNavigationId(location);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const openNavigationItem = (item) => {
        if (item.href.includes("#")) {
            if (location.pathname === PAGE_PATHS.home) {
                const hash = item.href.split("#")[1];
                window.location.hash = hash ? `#${hash}` : "";
            } else {
                window.location.assign(item.href);
            }
            closeMenu();
            return;
        }

        navigate(item.href);
        closeMenu();
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        const matchedLink = findSearchMatch(searchTerm);
        if (!matchedLink) {
            return;
        }

        openNavigationItem(matchedLink);
        setSearchTerm("");
    };

    return (
        <nav className="relative mx-auto flex w-full items-center justify-between gap-3 overflow-x-clip border border-x-0 border-t-0 border-gray-200 px-3 py-2 lg:gap-6 lg:px-4">
            <div className="flex min-w-0 flex-1 items-center gap-2 lg:flex-none lg:items-center lg:gap-3">
                <button
                    type="button"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 hover:scale-95 lg:hidden"
                    aria-label="Ouvrir le menu"
                    onClick={() => setMenuOpen((previous) => !previous)}
                >
                    <span className="sr-only">Menu</span>
                    <div className="space-y-1.5">
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
                    </div>
                </button>

                <div className="flex min-w-0 flex-1 items-center gap-2 lg:flex-none lg:gap-4">
                    <Link
                        to={PAGE_PATHS.home}
                        className="inline-flex min-w-0 shrink-0 items-center justify-center rounded-md p-1 lg:p-2"
                        onClick={closeMenu}
                    >
                        <img
                            src={logo}
                            alt="Logo Shared"
                            className="block h-10 w-auto max-w-16 shrink-0 rounded-lg object-contain lg:h-10 lg:max-w-none"
                        />
                    </Link>

                    <form
                        className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-200 focus-within:border-[#4A90E2] focus-within:ring-2 focus-within:ring-[#4A90E2]/15 xl:flex"
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

            <div className="hidden w-full lg:flex lg:w-auto lg:flex-nowrap lg:flex-row lg:justify-start lg:gap-5">
                <div className="flex w-full flex-col items-center justify-center gap-2 lg:w-auto lg:flex-row lg:flex-nowrap lg:justify-end lg:gap-2.5">
                    {HEADER_NAV_ITEMS.map((item) => (
                        <HeaderIconButton
                            key={item.id}
                            item={item}
                            isActive={activeId === item.id}
                            onSelect={openNavigationItem}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden gap-2 lg:flex lg:gap-3">
                {HEADER_ACTIONS.map((action) => (
                    <Link
                        key={action.id}
                        to={action.href}
                        onClick={closeMenu}
                        className={`h-10 px-4 text-sm lg:px-5 lg:text-base ${actionButtonBaseClass}`}
                    >
                        {action.label}
                    </Link>
                ))}
            </div>

            <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
                {HEADER_ACTIONS.map((action) => (
                    <Link
                        key={action.id}
                        to={action.href}
                        onClick={closeMenu}
                        className={`h-9 px-3 py-2 text-[14px] ${actionButtonBaseClass}`}
                    >
                        {action.label}
                    </Link>
                ))}
            </div>

            <div
                className={`absolute left-3 right-3 top-full z-20 mt-3 rounded-2xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur transition-all duration-300 lg:hidden ${
                    menuOpen
                        ? "max-h-96 translate-y-0 opacity-100"
                        : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
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

                    {HEADER_NAV_ITEMS.map((item) => (
                        <MobileMenuButton
                            key={item.id}
                            item={item}
                            isActive={activeId === item.id}
                            onSelect={openNavigationItem}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
}
