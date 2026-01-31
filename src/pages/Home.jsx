import image from '../images/main-image.png'
import square1 from '../images/square1.png'
import square2 from '../images/square2.png'
import square3 from '../images/square3.png'
import message1 from '../images/message1.png'
import message2 from '../images/message2.png'
import message3 from '../images/message3.png'

import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Home() {
    return (
        <section className="relative isolate w-full flex flex-1 flex-col items-center text-center gap-12 py-16 max-w-7xl mx-auto px-4 scroll-mt-24 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-12 justify-center items-center">
                <h1 className="text-5xl sm:text-4xl lg:text-6xl font-bold leading-tight text-center">
                    Tous vos souvenirs partagés,
                    <br></br> en 1 endroit.
                </h1>
                <p className="text-xl sm:text-2xl lg:text-2xl text-gray-800">
                    Avec Shared, conservez et partagez vos photos et vidéos en toute simplicité.
                </p>
            
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                    <a
                        href="https://apps.apple.com/fr/app/shared/id6748949959"
                        className="w-full sm:w-auto min-w-50 inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-4 py-2 text-white text-base sm:text-lg font-semibold shadow-lg transition-transform duration-500 hover:-translate-y-0.5 hover:bg-white hover:text-black border border-black"
                    >
                        <FaApple className="text-xl sm:text-2xl" />
                        <span className="flex flex-col leading-tight text-left">
                            <span className="text-sm sm:text-base font-normal">Télécharger sur</span>
                            <span className="text-lg sm:text-xl font-bold">l’App Store</span>
                        </span>
                    </a>
                    <a
                        href="#download"
                        className="w-full sm:w-auto min-w-50 inline-flex items-center justify-center gap-3 rounded-2xl px-4 py-2 bg-white text-black text-base sm:text-lg font-semibold shadow-lg transition-transform duration-500 hover:-translate-y-0.5 hover:bg-black hover:text-white border border-black"
                    >
                        <FaGooglePlay className="text-xl sm:text-2xl" />
                        <span className="flex flex-col leading-tight text-left">
                            <span className="text-sm sm:text-base font-normal">Télécharger sur</span>
                            <span className="text-lg sm:text-xl font-bold">Google Play</span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="relative z-0 flex w-full items-center justify-center">
                <img
                    src={image}
                    className="w-100 max-w-lg sm:max-w-xl h-auto object-contain"
                    alt="Aperçu Shared 1"
                />
            </div>
            <div className="absolute inset-0 z-0">
                <img
                    src={square1}
                    className="absolute left-12 top-28 w-32 opacity-70 sm:left-12 sm:top-80 sm:w-45 transition-all duration-500 hover:scale-105 hover:opacity-85 "
                    alt=""
                    aria-hidden="true"
                />
                <img
                    src={message1}
                    className="absolute left-12 top-50 w-32 opacity-70 sm:left-12 sm:top-130 sm:w-100 transition-all duration-400 hover:scale-102 hover:opacity-85 "
                    alt=""
                    aria-hidden="true"
                />
                <img
                    src={square2}
                    className="absolute top-6 w-40 -translate-x-1/2 opacity-75 sm:top-110 sm:left-230 sm:w-48 transition-all duration-500 hover:scale-105 hover:opacity-85"
                    alt=""
                    aria-hidden="true"
                />
                <img
                    src={message2}
                    className="absolute top-6 w-40 -translate-x-1/2 opacity-75 sm:top-180 sm:left-260 sm:w-100 transition-all duration-400 hover:scale-102 hover:opacity-85"
                    alt=""
                    aria-hidden="true"
                />
                <img
                    src={square3}
                    className="absolute right-6 top-32 w-32 opacity-75 sm:right-2 sm:top-36 sm:w-40 transition-all duration-500 hover:scale-105 hover:opacity-85"
                    alt=""
                    aria-hidden="true"
                />
                <img
                    src={message3}
                    className="absolute top-6 w-40 -translate-x-1/2 opacity-75 sm:top-200 sm:left-65 sm:w-110 transition-all duration-400 hover:scale-102 hover:opacity-85"
                    alt=""
                    aria-hidden="true"
                />

            </div>
        </section>
    );
}
