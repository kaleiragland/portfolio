const projects = [
  {
    title: "Warranty Buddy",
    description:
      "A Rails application that parses email receipts via Gmail OAuth and persists structured warranty data in PostgreSQL. Features background jobs and lifecycle logic to power warranty tracking and automated reminder workflows.",
    tech: ["Ruby on Rails", "PostgreSQL", "Gmail API", "OAuth"],
    github: "https://github.com/kaleiragland",
    gradient: "from-sage-100 to-sky-100",
    accent: "bg-sage-400",
  },
  {
    title: "Mock E-commerce Platform",
    description:
      "A scalable multi-vendor marketplace built with microservices architecture on AWS. Features seamless seller and payment integrations with REST APIs managing listings, orders, and payment processing between services.",
    tech: ["AWS", "Python", "FastAPI", "PostgreSQL", "EC2"],
    github: "https://github.com/Serverless-Squad",
    gradient: "from-peach-100 to-warm-200",
    accent: "bg-peach-300",
  },
  {
    title: "SwipeShare",
    description:
      "A location-based iOS app that helps college students share and receive meal swipes. Built a MapKit feature to visualize dining halls with interactive polygons and update student locations dynamically, with Firebase-backed auth, profiles, and real-time chat.",
    tech: ["Swift", "SwiftUI", "MapKit", "Firebase", "Xcode"],
    github: "https://github.com/kaleiragland/ios_project",
    gradient: "from-sky-100 to-sage-100",
    accent: "bg-sky-300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Things I&apos;ve built
        </h2>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl border border-warm-200/50 overflow-hidden transition-shadow hover:shadow-lg"
            >
              {/* Gradient banner */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-700 transition-colors shrink-0"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-warm-100 text-neutral-600 border border-warm-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
