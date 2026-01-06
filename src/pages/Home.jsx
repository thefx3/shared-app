import image from '../images/home-image.png';
import image2 from '../images/home-image2.png';
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Home() {
    return (
        <section className="flex flex-col lg:flex-row justify-between gap-8 py-16 max-w-7xl mx-auto px-4 scroll-mt-24">
            <div className="flex-1 flex flex-col gap-8">
                <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-left">
                    Tous vos souvenirs partagés en 1 endroit.
                </h1>
                <p className="text-xl lg:text-2xl text-left text-gray-700">
                    Avec Shared, conservez et partagez vos photos et vidéos en toute simplicité.
                </p>
                <div className="flex flex-wrap gap-6">
                    <a
                        href="https://apps.apple.com/fr/app/shared/id6748949959"
                        className="w-65 inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white text-xl font-medium shadow-lg transition-transform duration-150 hover:translate-y-0.5 hover:bg-white hover:text-black border border-black"
                    >
                        <FaApple className="text-5xl" />
                        <span>Télécharger sur <p className='font-bold'>l’App Store</p></span>
                    </a>
                    <a
                        href="#download"
                        className="w-65 inline-flex items-center gap-3 rounded-2xl px-5 py-3 bg-black text-white text-xl font-medium shadow-lg transition-transform duration-150 hover:translate-y-0.5 hover:bg-white hover:text-black border border-black"
                    >
                        <FaGooglePlay className="text-5xl" />
                        <span >Télécharger sur <p className='font-bold'>Google Play</p></span>
                    </a>
                </div>
            </div>
            <div className="flex">
                <img
                    src={image}
                    className="w-full max-w-2xl h-auto object-contain"
                    alt="Aperçu Shared 1"
                />
            </div>
        </section>
    );
}
