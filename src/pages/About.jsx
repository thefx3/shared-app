import NotFound from "./NotFound.jsx";

export default function About() {
  const highlights = [
    { label: "Expérience", value: "1+ ans", detail: "Full Stack / JS" },
    { label: "Basé à", value: "Paris", detail: "Disponible remote" },
    { label: "Focus", value: "Apps web & sites internet", detail: "Performance et responsivité" },
  ];

  const experiences = [
    {
      title: "Développeur Full Stack",
      company: "Freelance",
      period: "2025 - Aujourd'hui",
      description: "Conception de CRUD App avec React & Node, intégrations API, mise en prod et suivi.",
    },
    {
      title: "Projets personnels",
      company: "JS / React / Node",
      period: "2025 - Aujourd'hui",
      description: "Création d’outils et mini-sites pour affiner UI, performances et bonnes pratiques.",
    },
    {
        title: "Formation Développeur Full Stack JavaScript",
        company: "The Odin Project",
        period: "2025 - 2026",
        description: "Formation au développement web à partir de 0. Initiation aux différents languages de programmations (HTML, CSS, JS, React, Node etc...) couplé avec un apprentissage en autodidacte.",
      },
  ];

  const hasContent = experiences.length > 0;

  return (
    <div className="space-y-10 text-center">
      <div className="space-y-3 flex flex-col gap-4">
        <h2 className="text-2xl uppercase tracking-[0.25em] text-white-900">À propos</h2>
        <p className="text-xl ext-white-600 max-w-3xl mx-auto">
          Je construis des interfaces claires et rapides, avec une attention particulière au détail,
          à l’accessibilité et à la qualité du code.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border bg-white/90 backdrop-blur p-5 shadow-sm space-y-2"
          >
            <div className="text-sm uppercase tracking-wide text-neutral-500">{item.label}</div>
            <div className="text-xl text-[#7eb077] font-semibold">{item.value}</div>
            <div className="text-sm text-neutral-600">{item.detail}</div>
          </div>
        ))}
      </div>

      {hasContent ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">Parcours</h3>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="rounded-2xl border bg-white/85 backdrop-blur p-5 shadow-sm text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="text-lg font-semibold text-neutral-900">{exp.title}</div>
                  <div className="text-sm text-neutral-500">{exp.period}</div>
                </div>
                <div className="text-sm text-neutral-700">{exp.company}</div>
                <p className="text-neutral-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
