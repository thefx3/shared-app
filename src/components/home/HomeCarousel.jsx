import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PAGE_PATHS } from "../../data/siteContent";

const AUTOPLAY_DELAY_MS = 5000;
const TRANSITION_DURATION_MS = 650;
const carouselCtaClassName =
    "inline-flex items-center justify-center rounded-full bg-[var(--color-brand-strong)] px-5 py-3 text-sm font-semibold text-[var(--color-text-inverse)] transition-colors duration-200 hover:bg-[var(--color-brand-strong-hover)]";

function CarouselVisual({ slide, animationClassName }) {
    return (
        <div className={`${animationClassName} absolute inset-0`}>
            <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-contain object-top"
                loading="eager"
                fetchPriority="high"
                decoding="async"
            />
        </div>
    );
}

function CarouselCopy({ slide, animationClassName, overlay = false, inert = false }) {
    const positionClassName = overlay ? "absolute inset-0" : "relative z-10";

    return (
        <div className={`${animationClassName} ${positionClassName} flex flex-col items-center gap-5 lg:items-start`}>
            <h2 className="text-3xl font-semibold leading-tight text-[var(--color-text-primary)] md:text-4xl">
                {slide.title}
            </h2>
            <p className="text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">
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
    const [transitionKey, setTransitionKey] = useState(0);
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
        setTransitionKey((currentKey) => currentKey + 1);
        scheduleFadeCleanup();
    };

    useEffect(() => {
        const preloaders = slides.map((slide) => {
            const image = new window.Image();
            image.src = slide.image;
            return image;
        });

        return () => {
            preloaders.forEach((image) => {
                image.src = "";
            });
        };
    }, [slides]);

    useEffect(() => {
        const autoplayTimeoutId = window.setTimeout(() => {
            clearFadeTimeout();
            setPreviousSlide(activeSlide);
            setActiveSlide((activeSlide + 1) % slides.length);
            setTransitionKey((currentKey) => currentKey + 1);
            fadeTimeoutRef.current = window.setTimeout(() => {
                setPreviousSlide(null);
            }, TRANSITION_DURATION_MS);
        }, AUTOPLAY_DELAY_MS);

        return () => window.clearTimeout(autoplayTimeoutId);
    }, [activeSlide, slides.length]);

    useEffect(() => {
        return () => {
            clearFadeTimeout();
        };
    }, []);

    return (
        <section className="w-full max-w-6xl rounded-[2rem] px-6 py-8 md:px-10 md:py-10">
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:items-stretch lg:gap-10">
                <div className="relative flex justify-center lg:pt-4">
                    <div className="relative w-full max-w-[560px] overflow-hidden aspect-[4/5] min-h-[400px] sm:min-h-[540px] lg:min-h-[660px]">
                        {previousSlide !== null && (
                            <CarouselVisual
                                slide={slides[previousSlide]}
                                animationClassName="carousel-fade-leave pointer-events-none"
                            />
                        )}

                        <CarouselVisual
                            key={`${currentSlide.image}-${transitionKey}`}
                            slide={currentSlide}
                            animationClassName="carousel-fade-enter relative z-10"
                        />
                    </div>
                </div>

                <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:h-full lg:items-start lg:text-left">
                    <div className="relative mt-4 min-h-[280px] w-full sm:min-h-[320px]">
                        {previousSlide !== null && (
                            <CarouselCopy
                                slide={slides[previousSlide]}
                                animationClassName="carousel-fade-leave pointer-events-none"
                                overlay
                                inert
                            />
                        )}

                        <CarouselCopy
                            key={`${currentSlide.title}-${activeSlide}-${transitionKey}`}
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
                                        ? "scale-110 bg-[var(--color-brand-strong)] shadow-app-ring"
                                        : "bg-[var(--color-dot-inactive)] hover:bg-[var(--color-dot-inactive-hover)]"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
