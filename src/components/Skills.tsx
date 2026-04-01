const skillGroups = [
  {
    label: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C",
      "SQL",
      "Ruby",
      "R",
      "Swift",
      "PHP",
      "HTML/CSS",
    ],
    color: "bg-sage-50 border-sage-100 text-sage-400",
  },
  {
    label: "Technologies",
    items: [
      "React",
      "Next.js",
      "FastAPI",
      "Rails",
      "Firebase",
      "SwiftUI",
      "Cucumber",
      "Buildroot",
      "Generative AI",
    ],
    color: "bg-sky-50 border-sky-100 text-sky-300",
  },
  {
    label: "Cloud & Tools",
    items: [
      "AWS (EC2, RDS, S3, Elastic Beanstalk)",
      "GCP (Vertex AI, BigQuery)",
      "Git",
      "PostgreSQL",
      "Linux",
      "Jira",
      "Xcode",
    ],
    color: "bg-peach-50 border-peach-100 text-peach-300",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 fade-up">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          What I work with
        </h2>

        <div className="grid gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-white/60 backdrop-blur-sm rounded-3xl border border-warm-200/50 p-8"
            >
              <p
                className={`text-xs font-medium tracking-widest uppercase mb-4 ${group.color.split(" ").pop()}`}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-full bg-warm-50 border border-warm-200 text-neutral-700 hover:border-sage-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
