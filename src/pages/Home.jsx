import image from '../images/home-image.png';
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Home() {
    return (
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left gap-12 lg:gap-16 py-16 max-w-7xl mx-auto px-4 scroll-mt-24">
            <div className="flex-1 lg:w-7/12 flex flex-col gap-8 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                    Tous vos souvenirs partagés en 1 endroit.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">
                    Avec Shared, conservez et partagez vos photos et vidéos en toute simplicité.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                    <a
                        href="https://apps.apple.com/fr/app/shared/id6748949959"
                        className="w-full sm:w-auto min-w-60 inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-5 py-3 text-white text-base sm:text-lg font-semibold shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white hover:text-black border border-black"
                    >
                        <FaApple className="text-3xl sm:text-4xl" />
                        <span className="flex flex-col leading-tight text-left">
                            <span className="text-sm sm:text-base font-normal">Télécharger sur</span>
                            <span className="text-lg sm:text-xl font-bold">l’App Store</span>
                        </span>
                    </a>
                    <a
                        href="#download"
                        className="w-full sm:w-auto min-w-60 inline-flex items-center justify-center gap-3 rounded-2xl px-5 py-3 bg-black text-white text-base sm:text-lg font-semibold shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white hover:text-black border border-black"
                    >
                        <FaGooglePlay className="text-3xl sm:text-4xl" />
                        <span className="flex flex-col leading-tight text-left">
                            <span className="text-sm sm:text-base font-normal">Télécharger sur</span>
                            <span className="text-lg sm:text-xl font-bold">Google Play</span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="flex justify-center w-full lg:w-5/12">
                <img
                    src={image}
                    className="w-full max-w-lg sm:max-w-xl h-auto object-contain"
                    alt="Aperçu Shared 1"
                />
            </div>
        </section>
    );
}
