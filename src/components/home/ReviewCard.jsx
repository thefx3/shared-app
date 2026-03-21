const REVIEW_STARS = ["★", "★", "★", "★", "★"];

export default function ReviewCard({ review }) {
    return (
        <article className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
            <div className="mb-4 flex items-center gap-1 text-[#FCAF45]">
                {REVIEW_STARS.map((star, index) => (
                    <span key={`${review.role}-star-${index}`}>{star}</span>
                ))}
            </div>

            <p className="text-base leading-7 text-gray-700">"{review.quote}"</p>

            <div className="mt-6">
                <p className="text-lg font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
            </div>
        </article>
    );
}
