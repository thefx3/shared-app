import { createElement } from "react";
import { useTranslation } from "react-i18next";
import image from "../images/main-image.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const sectionClass = "relative isolate mx-auto flex w-full max-w-7xl flex-1 flex-col items-center gap-8 overflow-hidden px-4 py-8 text-center scroll-mt-24 md:gap-10";
const contentClass = "relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12";
const storeButtonsClass = "flex flex-wrap justify-center gap-4 md:gap-6 lg:justify-start";
const storeButtonBaseClass = "inline-flex w-full max-w-[20rem] items-center justify-center gap-3 rounded-2xl border border-[var(--color-contrast)] px-4 py-2 text-base font-semibold shadow-lg transition-transform duration-500 hover:-translate-y-0.5 sm:max-w-none md:w-auto md:min-w-[18rem] md:text-lg";
const storeIconClass = "text-xl md:text-2xl";
const storeLabelClass = "flex flex-col text-left leading-tight";
const storeLabelTopClass = "text-sm font-normal md:text-base";
const storeLabelBottomClass = "text-lg font-bold md:text-xl";
const mainImageWrapClass = "relative z-10 flex w-full items-center justify-center";
const mainImageClass = "h-auto w-full max-w-[15rem] object-contain md:max-w-[20rem] lg:max-w-[24rem]";

function StoreButton({ href, Icon, topLabel, bottomLabel, className }) {
    return (
        <a href={href} className={`${storeButtonBaseClass} ${className}`}>
            {createElement(Icon, { className: storeIconClass })}
            <span className={storeLabelClass}>
                <span className={storeLabelTopClass}>{topLabel}</span>
                <span className={storeLabelBottomClass}>{bottomLabel}</span>
            </span>
        </a>
    );
}

export default function Download() {
    const { t } = useTranslation();
    const storeButtons = [
        {
            href: "https://apps.apple.com/fr/app/shared/id6748949959",
            Icon: FaApple,
            topLabel: t("download.stores.downloadOn"),
            bottomLabel: t("download.stores.appStore"),
            className: "bg-[var(--color-contrast)] text-[var(--color-text-inverse)] hover:bg-[var(--color-surface)] hover:text-[var(--color-contrast)]",
        },
        {
            href: "#download",
            Icon: FaGooglePlay,
            topLabel: t("download.stores.downloadOn"),
            bottomLabel: t("download.stores.googlePlay"),
            className: "bg-[var(--color-surface)] text-[var(--color-contrast)] hover:bg-[var(--color-contrast)] hover:text-[var(--color-text-inverse)]",
        },
    ];

    return (
        <section className={sectionClass}>
            <div className={contentClass}>
                <h1 className="text-center text-4xl font-semibold leading-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
                    {t("download.titleLine1")}
                    <br /> {t("download.titleLine2")}
                </h1>

                <div className={storeButtonsClass}>
                    {storeButtons.map((button) => (
                        <StoreButton
                            key={button.href}
                            href={button.href}
                            Icon={button.Icon}
                            topLabel={button.topLabel}
                            bottomLabel={button.bottomLabel}
                            className={button.className}
                        />
                    ))}
                </div>
            </div>

            <div className={mainImageWrapClass}>
                <img
                    src={image}
                    className={mainImageClass}
                    alt={t("download.previewAlt")}
                />
            </div>
        </section>
    );
}
