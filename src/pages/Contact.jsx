import { useState } from "react";
import { CONTACT_DETAILS } from "../data/siteContent";

const formLabelClassName = "flex flex-col gap-2 text-sm font-medium text-[var(--color-text-body)]";
const fieldClassName =
    "w-full rounded-xl border border-[var(--color-border)] px-4 py-3 text-[var(--color-text-primary)] outline-none transition-colors duration-200";

function ContactDetailCard({ item }) {
    const Icon = item.icon;
    const Component = item.href ? "a" : "div";

    return (
        <Component
            {...(item.href ? { href: item.href } : {})}
            className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-4 transition-colors duration-200 hover:bg-[var(--color-surface-muted-hover)]"
        >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-contrast)] text-[var(--color-text-inverse)]">
                <Icon className="h-5 w-5" />
            </span>
            <span>
                <span className="block text-sm uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                    {item.label}
                </span>
                <span className="mt-1 block text-base font-medium text-[var(--color-text-primary)]">
                    {item.value}
                </span>
            </span>
        </Component>
    );
}

export default function Contact() {
    const [status, setStatus] = useState({ state: "idle", message: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus({ state: "idle", message: "" });

        const formData = new FormData(event.target);
        formData.append("access_key", "7dd040f5-4eb6-48c0-974d-e1c311998119");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ state: "success", message: "Merci, votre message a bien ete envoye." });
                event.target.reset();
            } else {
                setStatus({ state: "error", message: "Une erreur est survenue. Merci de reessayer." });
            }
        } catch {
            setStatus({ state: "error", message: "Impossible d'envoyer le message pour le moment." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)]">
                <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-[var(--color-text-primary)] shadow-app-panel">
                    <span className="inline-flex rounded-full bg-[var(--color-contrast)] px-4 py-1 text-sm font-semibold tracking-wide text-[var(--color-text-inverse)]">
                        Contact
                    </span>
                    <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary)]">
                        Vous avez une question, une remarque, un problème ou une demande d'amélioration ? N'hesitez pas a me contacter.
                    </p>

                    <div className="mt-8 grid gap-4">
                        {CONTACT_DETAILS.map((item) => (
                            <ContactDetailCard key={item.label} item={item} />
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-app-panel md:p-8">
                    <div className="mb-8 text-left">
                        <h3 className="text-3xl font-semibold text-[var(--color-text-primary)]">Envoyer un message</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-5 text-left">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className={formLabelClassName}>
                                Nom
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    className={`${fieldClassName} focus:border-[var(--color-gradient-violet)]`}
                                />
                            </label>

                            <label className={formLabelClassName}>
                                Email
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    className={`${fieldClassName} focus:border-[var(--color-gradient-violet)]`}
                                />
                            </label>
                        </div>

                        <label className={formLabelClassName}>
                            Sujet
                            <input
                                type="text"
                                name="subject"
                                placeholder="Projet, partenariat, question produit..."
                                className={`${fieldClassName} focus:border-[var(--color-gradient-magenta)]`}
                            />
                        </label>

                        <label className={formLabelClassName}>
                            Message
                            <textarea
                                required
                                name="message"
                                rows="7"
                                className={`${fieldClassName} focus:border-[var(--color-gradient-orange)]`}
                            />
                        </label>

                        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--color-contrast)] px-6 py-3 text-sm font-semibold text-[var(--color-text-inverse)] shadow-app-button transition-colors duration-200 hover:bg-[var(--color-contrast-hover)] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Envoi..." : "Envoyer le message"}
                            </button>

                            {status.message && (
                                <p
                                    className={`text-sm ${
                                        status.state === "success" ? "text-[var(--color-success)]" : "text-[var(--color-error)]"
                                    }`}
                                >
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
