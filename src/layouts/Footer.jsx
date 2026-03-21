import { Link } from "react-router-dom";
import { FOOTER_SECTIONS, PAGE_PATHS } from "../data/siteContent";
import logo from "../images/logo.png";

function FooterNavLink({ link }) {
    if (link.href.startsWith("/") && !link.href.includes("#")) {
        return (
            <Link
                to={link.href}
                className="text-sm text-white/90 transition-colors duration-200 hover:text-white"
            >
                {link.label}
            </Link>
        );
    }

    return (
        <a href={link.href} className="text-sm text-white/90 transition-colors duration-200 hover:text-white">
            {link.label}
        </a>
    );
}

export default function Footer() {
    return (
        <footer
            className="w-full text-white"
            style={{
                backgroundImage:
                    "linear-gradient(135deg, #5851DB 0%, #E1306C 55%, #FCAF45 100%)",
            }}
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-sm">
                    <Link to={PAGE_PATHS.home} className="inline-flex items-center gap-3">
                        <img src={logo} alt="Logo Shared" className="h-11 w-11 rounded-xl p-1.5" />
                        <span className="text-2xl font-semibold uppercase tracking-widest">Shared</span>
                    </Link>

                    <p className="mt-5 text-sm leading-7 text-white/85 md:text-base">
                        L'application pour retrouver, organiser et partager vos souvenirs dans une interface claire, moderne et collaborative.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to={PAGE_PATHS.download}
                            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#5851DB] transition-colors duration-200 hover:bg-white/90"
                        >
                            Telecharger
                        </Link>
                        <Link
                            to={PAGE_PATHS.contact}
                            className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                        >
                            Me contacter
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {FOOTER_SECTIONS.map((section) => (
                        <div key={section.title} className="min-w-[140px]">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                                {section.title}
                            </h3>
                            <div className="mt-4 flex flex-col gap-3">
                                {section.links.map((link) => (
                                    <FooterNavLink key={link.label} link={link} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/18">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/80 md:flex-row md:items-center md:justify-between md:px-10">
                    <p>Copyright 2026 - Shared</p>
                    <div className="flex items-center gap-4">
                        <a href="/#privacy" className="transition-colors duration-200 hover:text-white">
                            Confidentialite
                        </a>
                        <a href="/#terms" className="transition-colors duration-200 hover:text-white">
                            Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
