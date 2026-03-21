import HomeCarousel from "../components/home/HomeCarousel";
import HomeReviews from "../components/home/HomeReviews";
import { HOME_REVIEW_COLUMNS, HOME_SLIDES } from "../data/homeContent";

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center justify-center px-4 py-8 md:py-12">
            <section className="flex w-full max-w-4xl flex-col items-center gap-2">
                <h1 className="text-center leading-tight">
                    <p className="text-4xl font-bold uppercase tracking-widest text-[var(--color-text-primary)] md:text-4xl">
                        Shared
                    </p>
                    <br />
                    <p className="text-xl italic text-[var(--color-text-secondary)] md:text-2xl">
                        l’application pour tous vos souvenirs partagés.
                    </p>
                </h1>
            </section>

            <HomeCarousel slides={HOME_SLIDES} />
            <HomeReviews reviewColumns={HOME_REVIEW_COLUMNS} />
        </div>
    );
}

