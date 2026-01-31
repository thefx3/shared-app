import image from '../images/main-image.png'
import square1 from '../images/square1.png'
import square2 from '../images/square2.png'
import square3 from '../images/square3.png'
import message1 from '../images/message1.png'
import message2 from '../images/message2.png'
import message3 from '../images/message3.png'

import { FaApple, FaGooglePlay } from "react-icons/fa";

const sectionClass = "relative isolate w-full flex flex-1 flex-col items-center text-center gap-12 py-16 max-w-7xl mx-auto px-4 scroll-mt-24 overflow-hidden";
const contentClass = "relative z-10 flex flex-col gap-12 justify-center items-center";
const storeButtonsClass = "flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6";
const storeButtonBaseClass = "w-full sm:w-auto min-w-50 inline-flex items-center justify-center gap-3 rounded-2xl px-4 py-2 text-base sm:text-lg font-semibold shadow-lg transition-transform duration-500 hover:-translate-y-0.5 border border-black";
const storeIconClass = "text-xl sm:text-2xl";
const storeLabelClass = "flex flex-col leading-tight text-left";
const storeLabelTopClass = "text-sm sm:text-base font-normal";
const storeLabelBottomClass = "text-lg sm:text-xl font-bold";
const mainImageWrapClass = "relative z-0 flex w-full items-center justify-center";
const mainImageClass = "w-90 max-w-lg sm:max-w-xl h-auto object-contain";
const floatingLayerClass = "absolute inset-0 z-0";
const floatingSquareClass = "absolute opacity-75 transition-all duration-500 hover:scale-105 hover:opacity-85";
const floatingMessageClass = "absolute opacity-75 transition-all duration-400 hover:scale-102 hover:opacity-85";

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

const floatingImages = [
    {
        src: square1,
        className: `${floatingSquareClass} left-12 top-28 w-32 opacity-70 sm:left-12 sm:top-130 sm:w-45`,
    },
    {
        src: message1,
        className: `${floatingMessageClass} message-reveal-left left-12 top-50 w-32 sm:left-12 sm:top-190 sm:w-100`,
        delayMs: 100,
        opacity: 0.7,
    },
    {
        src: square2,
        className: `${floatingSquareClass} top-6 w-40 -translate-x-1/2 opacity-75 sm:top-105 sm:left-230 sm:w-48`,
    },
    {
        src: message2,
        className: `${floatingMessageClass} message-reveal-right top-6 w-40 -translate-x-1/2 sm:top-170 sm:left-260 sm:w-100`,
        delayMs: 250,
        opacity: 0.75,
    },
    {
        src: square3,
        className: `${floatingSquareClass} right-6 top-32 w-32 opacity-75 sm:right-2 sm:top-36 sm:w-40`,
    },
    {
        src: message3,
        className: `${floatingMessageClass} message-reveal-left top-6 w-40 -translate-x-1/2 sm:top-220 sm:left-65 sm:w-115`,
        delayMs: 400,
        opacity: 0.75,
    },
];

export default function Home() {
    return (
        <section className={sectionClass}>
            <div className={contentClass}>
                <h1 className="text-5xl sm:text-4xl lg:text-6xl font-bold leading-tight text-center">
                    Tous vos souvenirs partagés,
                    <br></br> en 1 endroit.
                </h1>
                <p className="text-xl sm:text-2xl lg:text-2xl text-gray-800">
                    Avec Shared, conservez et partagez vos photos et vidéos en toute simplicité.
                </p>
            
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
            <div className={floatingLayerClass}>
                {floatingImages.map(({ src, className, delayMs, opacity }, index) => (
                    <img
                        key={`${src}-${index}`}
                        src={src}
                        className={className}
                        style={
                            delayMs || opacity
                                ? {
                                      animationDelay: delayMs ? `${delayMs}ms` : undefined,
                                      "--message-opacity": opacity ?? undefined,
                                  }
                                : undefined
                        }
                        alt=""
                        aria-hidden="true"
                    />
                ))}
            </div>
        </section>
    );
}
