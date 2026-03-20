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
        title: "Au plus pres de tout ce que vous aimez... petit coquin.",
        description:
            "Retrouvez vos albums partages dans une interface claire, rapide et simple a parcourir, meme quand vous avez beaucoup de souvenirs a trier.",
        cta: "Telecharger Shared",
    },
    {
        image: image2,
        title: "Vos grilles restent belles, meme quand elles grandissent comme ma... .",
        description:
            "Chaque espace met en avant vos photos et videos avec une hierarchie nette pour retrouver les meilleurs moments en un coup d'oeil.",
        cta: "Telecharger Shared",
    },
    {
        image: image3,
        title: "Le petit vaurien a créé son application.",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
        {
        image: image4,
        title: "Paul est vraiment un enfoiré de première",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
        {
        image: image5,
        title: "Paul le petit sac à me...rde.",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
];

const reviews = [
    {
        name: "Paul",
        role: "Le chômeur",
        quote: "Shared m'a aidé à sortir de ma période de chômage prolongé.",
    },
    {
        name: "Paul",
        role: "Le goinfre",
        quote: "Je mange à mes heures perdues et Shared m'aide à organiser mes souvenirs de mes repas les plus mémorables.",
    },
    {
        name: "Paul",
        role: "L'hypocondriaque",
        quote: "Je suis tellement obsédé par ma santé que j'ai utilisé Shared pour partager mes photos chez le docteur.",
    },
    {
        name: "Paul",
        role: "L'acteur",
        quote: "Johnny Depp et Brad n'ont qu'a bien se tenir, j'arrive avec mes talents d'acteur et mon application de souvenirs partagés.",
    },
    {
        name: "Paul",
        role: "Le tueur de zombies",
        quote: "Je tue pas seulement des zombies, je tue aussi le temps en organisant mes souvenirs avec Shared.",
    },
    {
        name: "Paul",
        role: "Le développeur et trader",
        quote: "Je développe, je trade mais je suis aussi un grand fan de Shared.",
    },
    {
        name: "Paul",
        role: "L'imbécile heureux'",
        quote: "Je ne suis pas le plus intelligent mais Shared me rend heureux et c'est tout ce qui compte.",
    },
    {
        name: "Paul",
        role: "Le paulochon des cavernes",
        quote: "Heureux de voir que même les paulochons des cavernes peuvent profiter de Shared pour organiser leurs souvenirs préhistoriques.",
    },
    {
        name: "Paul",
        role: "Le maniaque",
        quote: "J'ai la manie de tout organiser, et Shared est l'outil parfait pour satisfaire mon besoin de contrôle sur mes souvenirs partagés.",
    },
    {
        name: "Paul",
        role: "L'artiste de rue",
        quote: "Artiste un jour, artiste toujours. Shared m'aide à organiser mes souvenirs de mes performances de rue et à les partager avec mes fans.",
    },
];

const reviewColumns = [
    reviews.filter((_, index) => index % 2 === 0),
    reviews.filter((_, index) => index % 2 === 1),
];

function ReviewCard({ review }) {
    return (
        <article className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
            <div className="mb-4 flex items-center gap-1 text-[#FCAF45]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
            <p className="text-base leading-7 text-gray-700">"{review.quote}"</p>
            <div className="mt-6">
                <p className="text-lg font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
            </div>
        </article>
    );
}

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
        <>
            <style>
                {`
                    @keyframes review-scroll-up {
                        from { transform: translateY(0); }
                        to { transform: translateY(-50%); }
                    }

                    .review-track {
                        animation: review-scroll-up 70s linear infinite;
                        will-change: transform;
                    }

                    .review-track--reverse {
                        animation-direction: reverse;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .review-track {
                            animation: none;
                        }
                    }
                `}
            </style>

        <div className="flex w-full flex-col items-center justify-center px-4 py-8 md:py-12">
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
                            className="h-auto w-full max-w-[480px] transition-transform duration-500"
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

            <section className="mt-8 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen overflow-hidden bg-white px-6 py-10 text-gray-900 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:px-10 md:py-14">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                        <span className="rounded-full bg-[#2563eb]/10 px-4 py-1 text-sm font-semibold tracking-wide text-[#2563eb]">
                            Reviews
                        </span>
                        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                            Ce que les utilisateurs pensent de Shared.
                        </h2>
                        <p className="max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                            Une dizaine d'avis mock dans deux colonnes animees pour retrouver un rendu plus vivant et plus editorial.
                        </p>
                    </div>

                    <div className="relative grid gap-5 sm:grid-cols-2">
                        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white via-white/75 to-transparent" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white via-white/75 to-transparent" />

                        {reviewColumns.map((column, columnIndex) => (
                            <div
                                key={`review-column-${columnIndex}`}
                                className="relative h-[540px] overflow-hidden rounded-[2rem] bg-white p-3"
                            >
                                <div className={`review-track ${columnIndex === 0 ? "review-track--reverse" : ""}`}>
                                    <div className="flex flex-col gap-4 pb-4">
                                        {column.map((review) => (
                                            <ReviewCard key={`${review.name}-first`} review={review} />
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-4 pb-4" aria-hidden="true">
                                        {column.map((review) => (
                                            <ReviewCard key={`${review.name}-second`} review={review} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
