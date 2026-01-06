import { useState } from "react";

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
        setStatus({ state: "success", message: "Merci, votre message a bien été envoyé." });
        event.target.reset();
      } else {
        setStatus({ state: "error", message: "Une erreur est survenue. Merci de réessayer." });
      }
    } catch {
      setStatus({ state: "error", message: "Impossible d’envoyer le message pour le moment." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="space-y-2 flex flex-col gap-4">
        <h2 className="text-2xl uppercase tracking-[0.25em] text-white-900">Contact</h2>
        <p className="text-white-600 max-w-2xl mx-auto">
          Un projet, une question ? Envoyez-moi un message via ce formulaire, je vous réponds rapidement.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto grid w-full max-w-2xl gap-4 rounded-2xl backdrop-blur p-6 shadow-sm text-left"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="space-y-2 text-md font-medium text-white-700 flex flex-col gap-2">
            Nom
            <input
              required
              type="text"
              name="name"
              className="w-full rounded-lg border border-white-400 px-3 py-2 text-white-900 focus:border-[#7eb077] focus:ring-[#7eb077] outline-none"
            />
          </label>
          <label className="space-y-2 text-md font-medium text-white-700 flex flex-col gap-2">
            Email
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-lg border border-white-400 px-3 py-2 text-white-900 focus:border-[#7eb077] focus:ring-[#7eb077] outline-none"
            />
          </label>
        </div>

        <label className="space-y-2 text-md font-medium text-white-700 flex flex-col gap-2">
          Sujet
          <input
            type="text"
            name="subject"
            placeholder="À propos d’un projet, d’une mission..."
            className="w-full rounded-lg border border-white-400 px-3 py-2 text-white-900 focus:border-[#7eb077] focus:ring-[#7eb077] outline-none"
          />
        </label>

        <label className="space-y-2 text-md font-medium text-white-700 flex flex-col gap-2">
          Message
          <textarea
            required
            name="message"
            rows="5"
            className="w-full rounded-lg border border-white-400 px-3 py-2 text-white-900 focus:border-[#7eb077] focus:ring-[#7eb077] outline-none"
          />
        </label>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-[#7eb077] px-6 py-3 text-md font-semibold text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {status.message && (
            <p
              className={`text-md ${
                status.state === "success" ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
