import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getContactDetails } from "../data/siteContent";

const WEB3FORMS_ACCESS_KEY = "59a6c0ee-8505-41e4-a634-7e6a38b31336";
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
    const { t } = useTranslation();
    const [status, setStatus] = useState({ state: "idle", message: "" });
    const [loading, setLoading] = useState(false);
    const contactDetails = getContactDetails(t);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus({ state: "idle", message: "" });

        const formData = new FormData(event.target);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ state: "success", message: t("contact.status.success") });
                event.target.reset();
            } else {
                setStatus({
                    state: "error",
                    message: data.message || t("contact.status.genericError"),
                });
            }
        } catch {
            setStatus({ state: "error", message: t("contact.status.networkError") });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full px-4 py-10 md:px-6 md:py-14">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)]">
                <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-[var(--color-text-primary)] shadow-app-panel">
                    <span className="inline-flex rounded-full bg-[var(--color-contrast)] px-4 py-1 text-sm font-semibold tracking-wide text-[var(--color-text-inverse)]">
                        {t("contact.badge")}
                    </span>
                    <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary)]">
                        {t("contact.intro")}
                    </p>

                    <div className="mt-8 grid gap-4">
                        {contactDetails.map((item) => (
                            <ContactDetailCard key={item.label} item={item} />
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-app-panel md:p-8">
                    <div className="mb-8 text-left">
                        <h3 className="text-3xl font-semibold text-[var(--color-text-primary)]">{t("contact.formTitle")}</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-5 text-left">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className={formLabelClassName}>
                                {t("contact.fields.name")}
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    className={`${fieldClassName} focus:border-[var(--color-gradient-violet)]`}
                                />
                            </label>

                            <label className={formLabelClassName}>
                                {t("contact.fields.email")}
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    className={`${fieldClassName} focus:border-[var(--color-gradient-violet)]`}
                                />
                            </label>
                        </div>

                        <label className={formLabelClassName}>
                            {t("contact.fields.subject")}
                            <input
                                type="text"
                                name="subject"
                                placeholder={t("contact.fields.subjectPlaceholder")}
                                className={`${fieldClassName} focus:border-[var(--color-gradient-magenta)]`}
                            />
                        </label>

                        <label className={formLabelClassName}>
                            {t("contact.fields.message")}
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
                                {loading ? t("common.actions.sending") : t("common.actions.sendMessage")}
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
