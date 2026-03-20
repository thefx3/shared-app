import image from '../images/main-image.png'

import { FaApple, FaGooglePlay } from "react-icons/fa";

const sectionClass = "relative isolate w-full flex flex-1 flex-col items-center text-center gap-10 py-8 max-w-7xl mx-auto px-4 scroll-mt-24 overflow-hidden";
const contentClass = "relative z-15 flex flex-col gap-12 justify-center items-center";
const storeButtonsClass = "flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6";
const storeButtonBaseClass = "w-full md:w-auto min-w-50 inline-flex items-center justify-center gap-3 rounded-2xl px-4 py-2 text-base md:text-lg font-semibold shadow-lg transition-transform duration-500 hover:-translate-y-0.5 border border-black";
const storeIconClass = "text-xl md:text-2xl";
const storeLabelClass = "flex flex-col leading-tight text-left";
const storeLabelTopClass = "text-md md:text-base font-normal";
const storeLabelBottomClass = "text-lg md:text-xl font-bold";
const mainImageWrapClass = "relative z-10 flex w-full items-center justify-center";
const mainImageClass = "w-90 max-w-lg md:max-w-xl h-auto object-contain";


const storeButtons = [
    {
        href: "https://apps.apple.com/fr/app/shared/id6748949959",
        Icon: FaApple,
        topLabel: "Télécharger sur",
        bottomLabel: "l’App Store",
        className: "bg-black text-white hover:bg-white hover:text-black",
    },
    {
        href: "#download",
        Icon: FaGooglePlay,
        topLabel: "Télécharger sur",
        bottomLabel: "Google Play",
        className: "bg-white text-black hover:bg-black hover:text-white",
    },
];


export default function Download() {
    return (
        <section className={sectionClass}>
            <div className={contentClass}>
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
                    Tous vos souvenirs partagés,
                    <br></br> en 1 endroit.
                </h1>
 
                <div className={storeButtonsClass}>
                    {storeButtons.map(({ href, Icon, topLabel, bottomLabel, className }) => (
                        <a
                            key={href}
                            href={href}
                            className={`${storeButtonBaseClass} ${className}`}
                        >
                            <Icon className={storeIconClass} />
                            <span className={storeLabelClass}>
                                <span className={storeLabelTopClass}>{topLabel}</span>
                                <span className={storeLabelBottomClass}>{bottomLabel}</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
            <div className={mainImageWrapClass}>
                <img
                    src={image}
                    className={mainImageClass}
                    alt="Aperçu Shared 1"
                />
            </div>
        </section>
    );
}
