import ReviewCard from "./ReviewCard";

function ReviewColumn({ reviews, reverse = false }) {
    const trackClassName = reverse ? "review-track review-track--reverse" : "review-track";

    return (
        <div className="relative h-[540px] overflow-hidden rounded-[2rem] bg-white p-3">
            <div className={trackClassName}>
                {["first", "second"].map((duplicateKey) => (
                    <div
                        key={duplicateKey}
                        className="flex flex-col gap-4 pb-4"
                        aria-hidden={duplicateKey === "second"}
                    >
                        {reviews.map((review, reviewIndex) => (
                            <ReviewCard
                                key={`${review.name}-${review.role}-${duplicateKey}-${reviewIndex}`}
                                review={review}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HomeReviews({ reviewColumns }) {
    return (
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
                        <ReviewColumn
                            key={`review-column-${columnIndex}`}
                            reviews={column}
                            reverse={columnIndex === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
