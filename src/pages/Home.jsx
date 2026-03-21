import { useTranslation } from "react-i18next";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeReviews from "../components/home/HomeReviews";
import { getHomeReviewColumns, getHomeSlides } from "../data/homeContent";

export default function Home() {
    const { t } = useTranslation();
    const slides = getHomeSlides(t);
    const reviewColumns = getHomeReviewColumns(t);

    return (
        <div className="flex w-full flex-col items-center justify-center px-4 py-2 md:py-4">
            <HomeCarousel slides={slides} />
            <HomeReviews reviewColumns={reviewColumns} />
        </div>
    );
}
