import { useEffect, useEffectEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PAGE_PATHS } from "../../data/siteContent";

const AUTOPLAY_DELAY_MS = 5000;
const TRANSITION_DURATION_MS = 650;
const carouselCtaClassName =
    "inline-flex items-center justify-center rounded-full bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1d4ed8]";

function CarouselVisual({ slide, animationClassName }) {
    return (
        <div className={`${animationClassName} absolute inset-0 flex items-center justify-center`}>
            <img src={slide.image} alt={slide.title} className="h-auto w-full" />
        </div>
    );
}

function CarouselCopy({ slide, animationClassName, overlay = false, inert = false }) {
    const positionClassName = overlay ? "absolute inset-0" : "relative z-10";

    return (
        <div className={`${animationClassName} ${positionClassName} flex flex-col items-center gap-5 lg:items-start`}>
            <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                {slide.title}
            </h2>
            <p className="text-base leading-7 text-gray-600 md:text-lg">
                {slide.description}
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link
                    to={PAGE_PATHS.download}
                    className={carouselCtaClassName}
                    tabIndex={inert ? -1 : undefined}
                >
                    {slide.cta}
                </Link>
            </div>
        </div>
    );
}

export default function HomeCarousel({ slides }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [previousSlide, setPreviousSlide] = useState(null);
    const fadeTimeoutRef = useRef(null);
    const currentSlide = slides[activeSlide];

    const clearFadeTimeout = () => {
        window.clearTimeout(fadeTimeoutRef.current);
    };

    const scheduleFadeCleanup = () => {
        clearFadeTimeout();
        fadeTimeoutRef.current = window.setTimeout(() => {
            setPreviousSlide(null);
        }, TRANSITION_DURATION_MS);
    };

    const transitionToSlide = (nextIndex, currentIndex = activeSlide) => {
        if (nextIndex === currentIndex) {
            return;
        }

        setPreviousSlide(currentIndex);
        setActiveSlide(nextIndex);
        scheduleFadeCleanup();
    };

    const autoplayNextSlide = useEffectEvent(() => {
        transitionToSlide((activeSlide + 1) % slides.length, activeSlide);
    });

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            autoplayNextSlide();
        }, AUTOPLAY_DELAY_MS);

        return () => window.clearInterval(intervalId);
    }, [slides.length]);

    useEffect(() => {
        return () => clearFadeTimeout();
    }, []);

    return (
        <section id="features" className="w-full max-w-6xl rounded-[2rem] px-6 py-8 md:px-10 md:py-10">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:items-stretch lg:gap-10">
                <div className="relative flex justify-center">
                    <div className="relative flex w-full max-w-[480px] items-center justify-center overflow-hidden">
                        {previousSlide !== null && (
                            <CarouselVisual
                                slide={slides[previousSlide]}
                                animationClassName="carousel-fade-leave pointer-events-none"
                            />
                        )}

                        <div key={currentSlide.image} className="relative z-10 flex w-full items-center justify-center">
                            <img
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                className="carousel-fade-enter h-auto w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:h-full lg:items-start lg:text-left">
                    <div className="relative mt-4 min-h-[250px] w-full">
                        {previousSlide !== null && (
                            <CarouselCopy
                                slide={slides[previousSlide]}
                                animationClassName="carousel-fade-leave pointer-events-none"
                                overlay
                                inert
                            />
                        )}

                        <CarouselCopy
                            key={`${currentSlide.title}-${activeSlide}`}
                            slide={currentSlide}
                            animationClassName="carousel-fade-enter"
                        />
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-3 self-center lg:mb-10 lg:mt-auto lg:self-start lg:justify-start lg:pt-8">
                        {slides.map((slide, index) => (
                            <button
                                key={`${slide.image}-${index}`}
                                type="button"
                                aria-label={`Afficher la slide ${index + 1}`}
                                aria-pressed={activeSlide === index}
                                onClick={() => transitionToSlide(index)}
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
    );
}
