const REVIEW_STARS = ["★", "★", "★", "★", "★"];

export default function ReviewCard({ review }) {
    return (
        <article className="rounded-[1.75rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 shadow-app-soft">
            <div className="mb-4 flex items-center gap-1 text-[var(--color-gradient-orange)]">
                {REVIEW_STARS.map((star, index) => (
                    <span key={`${review.role}-star-${index}`}>{star}</span>
                ))}
            </div>

            <p className="text-base leading-7 text-[var(--color-text-body)]">"{review.quote}"</p>

            <div className="mt-6">
                <p className="text-lg font-semibold text-[var(--color-text-primary)]">{review.name}</p>
                <p className="text-sm text-[var(--color-text-tertiary)]">{review.role}</p>
            </div>
        </article>
    );
}
