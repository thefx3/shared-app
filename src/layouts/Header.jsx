import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HEADER_ACTIONS, HEADER_NAV_ITEMS, PAGE_PATHS, SEARCH_NAV_ITEMS } from "../data/siteContent";
import logo from "../images/logo.png";

const actionButtonBaseClass =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-contrast)] text-[var(--color-text-inverse)] font-semibold transition-all duration-200 hover:scale-98 hover:shadow-md";
const mobileMenuItemClass =
    "w-full justify-start rounded-md px-3 py-2 text-base font-medium text-[var(--color-text-heading)] transition-colors duration-200 hover:text-[var(--color-brand)]";

function getActiveNavigationId(location) {
    if (location.pathname === PAGE_PATHS.download) {
        return "download";
    }

    if (location.pathname === PAGE_PATHS.contact) {
        return "contact";
    }

    if (location.hash === "#features") {
        return "features";
    }

    if (location.hash === "#about") {
        return "about";
    }

    return "home";
}

function HeaderIconButton({ item, isActive, onSelect }) {
    const activeClassName = item.featured
        ? "scale-105 bg-[var(--color-contrast)] text-[var(--color-text-inverse)] shadow-app-floating"
        : "bg-[var(--color-brand-soft)] text-[var(--color-brand)]";
    const inactiveClassName = item.featured
        ? "bg-[var(--color-surface)] text-[var(--color-contrast)] hover:bg-[var(--color-contrast)] hover:text-[var(--color-text-inverse)]"
        : "bg-[var(--color-surface)] text-[var(--color-text-body)] hover:text-[var(--color-brand)]";

    return (
        <button
            type="button"
            className={`inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-200 ${
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
            className={`${mobileMenuItemClass} ${isActive ? "font-semibold text-[var(--color-brand)]" : ""}`}
            onClick={() => onSelect(item)}
        >
            <span className="inline-flex items-center gap-3">
                <item.Icon className="h-4 w-4" />
                <span>{item.label}</span>
            </span>
        </button>
    );
}

function MobileActionLabel({ action }) {
    return (
        <>
            <span className="hidden min-[361px]:inline">{action.label}</span>
            <span className="inline min-[361px]:hidden">
                {action.id === "download" ? "DL" : "Contact"}
            </span>
        </>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
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

    return (
        <nav className="relative mx-auto flex w-full items-center justify-between gap-3 overflow-x-clip border border-x-0 border-t-0 border-[var(--color-border)] px-3 py-2 lg:gap-6 lg:px-4">
            <div className="flex min-w-0 flex-1 items-center gap-2 lg:flex-none lg:items-center lg:gap-3">
                <button
                    type="button"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 hover:scale-95 lg:hidden"
                    aria-label="Ouvrir le menu"
                    onClick={() => setMenuOpen((previous) => !previous)}
                >
                    <span className="sr-only">Menu</span>
                    <div className="space-y-1.5">
                        <span className={`block h-0.5 w-6 bg-[var(--color-text-heading)] transition-transform duration-200 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-[var(--color-text-heading)] transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`block h-0.5 w-6 bg-[var(--color-text-heading)] transition-transform duration-200 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
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
                    <p className="text-2xl font-bold uppercase tracking-widest text-[var(--color-text-primary)] md:text-2xl">
                        Shared
                    </p>
                </div>
            </div>

            <div className="hidden w-full lg:flex lg:w-auto lg:flex-nowrap lg:flex-row lg:justify-start lg:gap-5">
                <div className="flex w-full flex-col items-center justify-center gap-2 lg:w-auto lg:flex-row lg:flex-nowrap lg:justify-end lg:gap-4">
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

            <div className="flex shrink-0 items-center gap-1 lg:hidden">
                {HEADER_ACTIONS.map((action) => (
                    <Link
                        key={action.id}
                        to={action.href}
                        onClick={closeMenu}
                        className={`h-9 px-2 py-2 text-[11px] sm:px-3 sm:text-[14px] ${actionButtonBaseClass}`}
                    >
                        <MobileActionLabel action={action} />
                    </Link>
                ))}
            </div>

            <div
                className={`absolute left-3 right-3 top-full z-20 mt-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-overlay)] shadow-lg backdrop-blur transition-all duration-300 lg:hidden ${
                    menuOpen
                        ? "max-h-96 translate-y-0 opacity-100"
                        : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
                }`}
            >
                <div className="flex flex-col items-start gap-2 px-3 py-3">
                    <p className="text-2xl font-bold uppercase tracking-widest text-[var(--color-text-primary)] md:text-2xl">
                        Shared
                    </p>

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
