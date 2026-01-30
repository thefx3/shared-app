import image from '../images/removed-bg/home-image.png';
import image2 from '../images/removed-bg/my-grids-inside-2.png'
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Home() {
    return (
        <section className=" w-full flex-1 flex-col lg:flex-col items-center lg:items-start justify-between text-center lg:text-left gap-12 lg:gap-16 py-16 max-w-7xl mx-auto px-4 scroll-mt-24">
            <div className="flex flex-col gap-12 justify-center items-center">
                <h1 className="text-5xl sm:text-3xl lg:text-5xl font-bold leading-tight text-center">
                    Tous vos souvenirs partagés,
                    <br></br> en 1 endroit.
                </h1>
                <p className="text-xl sm:text-2xl lg:text-2xl text-gray-800">
                    Avec Shared, conservez et partagez vos photos et vidéos en toute simplicité.
                </p>
            
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                    <a
                        href="https://apps.apple.com/fr/app/shared/id6748949959"
                        className="w-full sm:w-auto min-w-50 inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-4 py-2 text-white text-base sm:text-lg font-semibold shadow-lg transition-transform duration-100 hover:-translate-y-0.5 hover:bg-white hover:text-black border border-black"
                    >
                        <FaApple className="text-xl sm:text-2xl" />
                        <span className="flex flex-col leading-tight text-left">
                            <span className="text-sm sm:text-base font-normal">Télécharger sur</span>
                            <span className="text-lg sm:text-xl font-bold">l’App Store</span>
                        </span>
                    </a>
                    <a
                        href="#download"
                        className="w-full sm:w-auto min-w-50 inline-flex items-center justify-center gap-3 rounded-2xl px-4 py-2 bg-white text-black text-base sm:text-lg font-semibold shadow-lg transition-transform duration-100 hover:-translate-y-0.5 hover:bg-black hover:text-white border border-black"
                    >
                        <FaGooglePlay className="text-xl sm:text-2xl" />
                        <span className="flex flex-col leading-tight text-left">
                            <span className="text-sm sm:text-base font-normal">Télécharger sur</span>
                            <span className="text-lg sm:text-xl font-bold">Google Play</span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="flex justify-center w-full lg:w-5/12">
                <img
                    src={image2}
                    className="w-full max-w-lg sm:max-w-xl h-auto object-contain"
                    alt="Aperçu Shared 1"
                />
            </div>
        </section>
    );
}
