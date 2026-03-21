import image1 from "../images/images v2/image-1.png";
import image2 from "../images/images v2/image-2.png";
import image3 from "../images/images v2/image-3.png";
import image4 from "../images/images v2/image-4.png";
import image5 from "../images/images v2/image-5.png";

const slideDefinitions = [
    {
        image: image1,
        titleKey: "home.carousel.slides.sharedSpace.title",
        descriptionKey: "home.carousel.slides.sharedSpace.description",
    },
    {
        image: image2,
        titleKey: "home.carousel.slides.feed.title",
        descriptionKey: "home.carousel.slides.feed.description",
    },
    {
        image: image3,
        titleKey: "home.carousel.slides.privateChats.title",
        descriptionKey: "home.carousel.slides.privateChats.description",
    },
    {
        image: image4,
        titleKey: "home.carousel.slides.captureMoment.title",
        descriptionKey: "home.carousel.slides.captureMoment.description",
    },
    {
        image: image5,
        titleKey: "home.carousel.slides.memories.title",
        descriptionKey: "home.carousel.slides.memories.description",
    },
];

const reviewDefinitions = [
    { id: "camille" },
    { id: "lucas" },
    { id: "sarah" },
    { id: "nicolas" },
    { id: "julie" },
    { id: "antoine" },
    { id: "lea" },
    { id: "thomas" },
    { id: "ines" },
    { id: "mathieu" },
];

export function getHomeSlides(t) {
    return slideDefinitions.map((slide) => ({
        image: slide.image,
        title: t(slide.titleKey),
        description: t(slide.descriptionKey),
        cta: t("common.actions.downloadShared"),
    }));
}

export function getHomeReviews(t) {
    return reviewDefinitions.map(({ id }) => ({
        name: t(`home.reviews.items.${id}.name`),
        role: t(`home.reviews.items.${id}.role`),
        quote: t(`home.reviews.items.${id}.quote`),
    }));
}

export function getHomeReviewColumns(t) {
    const reviews = getHomeReviews(t);

    return [
        reviews.filter((_, index) => index % 2 === 0),
        reviews.filter((_, index) => index % 2 === 1),
    ];
}
