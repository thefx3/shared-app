import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/images v2/image-1.png";
import image2 from "../images/images v2/image-2.png";
import image3 from "../images/images v2/image-3.png";
import image4 from "../images/images v2/image-4.png";
import image5 from "../images/images v2/image-5.png";

const slides = [
    {
        image: image1,
        title: "Au plus pres de tout ce que vous aimez.",
        description:
            "Retrouvez vos albums partages dans une interface claire, rapide et simple a parcourir, meme quand vous avez beaucoup de souvenirs a trier.",
        cta: "Telecharger Shared",
    },
    {
        image: image2,
        title: "Vos grilles restent belles, meme quand elles grandissent.",
        description:
            "Chaque espace met en avant vos photos et videos avec une hierarchie nette pour retrouver les meilleurs moments en un coup d'oeil.",
        cta: "Telecharger Shared",
    },
    {
        image: image3,
        title: "Discutez autour de chaque souvenir.",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
        {
        image: image4,
        title: "Discutez autour de chaque souvenir.",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
        {
        image: image5,
        title: "Discutez autour de chaque souvenir.",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
];

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const currentSlide = slides[activeSlide];

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 5000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className="flex w-full flex-col items-center justify-center gap-8 px-4 py-8 md:py-12">
            <section className="flex w-full max-w-4xl flex-col items-center gap-2">
                <h1 className="text-center leading-tight">
                    <p className="text-4xl uppercase tracking-widest font-semibold text-gray-900 md:text-4xl">
                        Shared
                    </p>
                    <br />
                    <p className="text-xl italic text-gray-600 md:text-2xl">
                        l’application pour tous vos souvenirs partagés.
                    </p>
                </h1>
            </section>

            <section id="features" className="w-full max-w-6xl rounded-[2rem] px-6 py-8 md:px-10 md:py-10"
            >
                <div className="grid items-center gap-6 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:items-stretch lg:gap-10">
                    <div className="relative flex justify-center">
                        <img
                            key={currentSlide.image}
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="h-auto w-full max-w-[520px] transition-transform duration-500"
                        />
                    </div>

                    <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:h-full lg:items-start lg:text-left">
                        <div className="mt-4 flex flex-col items-center gap-5 lg:items-start">
                            <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                                {currentSlide.title}
                            </h2>
                            <p className="text-base leading-7 text-gray-600 md:text-lg">
                                {currentSlide.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 lg:justify-start mb-6">
                                <Link
                                    to="/download"
                                    className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1d4ed8]"
                                >
                                    {currentSlide.cta}
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-3 self-center lg:mb-10 lg:mt-auto lg:self-start lg:justify-start lg:pt-8">
                            {slides.map((slide, index) => (
                                <button
                                    key={`${slide.image}-${index}`}
                                    type="button"
                                    aria-label={`Afficher la slide ${index + 1}`}
                                    aria-pressed={activeSlide === index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`h-3 w-3 rounded-full transition-all duration-200 ${
                                        activeSlide === index
                                            ? "scale-110 bg-[#2563eb] shadow-[0_0_0_4px_rgba(37,99,235,0.14)]"
                                            : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4 flex items-center justify-center gap-4">
                <p>Reviews</p>
            </section>
        </div>
    );
}
