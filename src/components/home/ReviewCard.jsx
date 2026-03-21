const REVIEW_STARS = ["★", "★", "★", "★", "★"];

export default function ReviewCard({ review }) {
    return (
        <article className="w-full min-w-0 rounded-[1.75rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-app-soft">
            <div className="mb-4 flex items-center gap-1 text-[var(--color-gradient-orange)]">
                {REVIEW_STARS.map((star, index) => (
                    <span key={`${review.role}-star-${index}`}>{star}</span>
                ))}
            </div>

            <p className="text-sm leading-7 text-[var(--color-text-body)] sm:text-base">"{review.quote}"</p>

            <div className="mt-6">
                <p className="text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">{review.name}</p>
                <p className="text-sm text-[var(--color-text-tertiary)]">{review.role}</p>
            </div>
        </article>
    );
}
