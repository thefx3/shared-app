import HomeCarousel from "../components/home/HomeCarousel";
import HomeReviews from "../components/home/HomeReviews";
import { HOME_REVIEW_COLUMNS, HOME_SLIDES } from "../data/homeContent";

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center justify-center px-4 py-2 md:py-4">
            <HomeCarousel slides={HOME_SLIDES} />
            <HomeReviews reviewColumns={HOME_REVIEW_COLUMNS} />
        </div>
    );
}
