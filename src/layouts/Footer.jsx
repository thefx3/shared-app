import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getFooterSections, PAGE_PATHS } from "../data/siteContent";
import logo from "../images/logo.png";

function FooterNavLink({ link }) {
    if (link.href.startsWith("/") && !link.href.includes("#")) {
        return (
            <Link
                to={link.href}
                className="text-sm text-[var(--color-footer-text)] transition-colors duration-200 hover:text-[var(--color-text-inverse)]"
            >
                {link.label}
            </Link>
        );
    }

    return (
        <a
            href={link.href}
            className="text-sm text-[var(--color-footer-text)] transition-colors duration-200 hover:text-[var(--color-text-inverse)]"
        >
            {link.label}
        </a>
    );
}

export default function Footer() {
    const { t } = useTranslation();
    const footerSections = getFooterSections(t);

    return (
        <footer className="footer-gradient w-full text-[var(--color-text-inverse)]">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-sm">
                    <Link to={PAGE_PATHS.home} className="inline-flex items-center gap-3">
                        <img src={logo} alt={t("common.brand.logoAlt")} className="h-11 w-11 rounded-xl p-1.5" />
                        <span className="text-2xl font-semibold uppercase tracking-widest">{t("common.brand.name")}</span>
                    </Link>

                    <p className="mt-5 text-sm leading-7 text-[var(--color-footer-text-soft)] md:text-base">
                        {t("footer.description")}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to={PAGE_PATHS.download}
                            className="inline-flex items-center justify-center rounded-full bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-gradient-violet)] transition-colors duration-200 hover:bg-[var(--color-surface-hover)]"
                        >
                            {t("common.actions.download")}
                        </Link>
                        <Link
                            to={PAGE_PATHS.contact}
                            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-inverse)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-inverse)] transition-colors duration-200 hover:bg-[var(--color-footer-hover)]"
                        >
                            {t("common.actions.contact")}
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {footerSections.map((section) => (
                        <div key={section.title} className="min-w-[140px]">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-footer-text-muted)]">
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

            <div className="border-t border-[var(--color-footer-divider)]">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-[var(--color-footer-text-muted)] md:flex-row md:items-center md:justify-between md:px-10">
                    <p>{t("footer.copyright")}</p>
                    <div className="flex items-center gap-4">
                        <a href="/#privacy" className="transition-colors duration-200 hover:text-[var(--color-text-inverse)]">
                            {t("common.legal.privacy")}
                        </a>
                        <a href="/#terms" className="transition-colors duration-200 hover:text-[var(--color-text-inverse)]">
                            {t("common.legal.terms")}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
