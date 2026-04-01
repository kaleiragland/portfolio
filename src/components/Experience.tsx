const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Columbia Build Lab",
    location: "New York, NY",
    dates: "Jan 2026 – Present",
    bullets: [
      "Designed and hardened AWS-backed infrastructure (RDS, S3, IAM, CloudTrail, API Gateway) for a mobile health startup, enforcing least-privilege access controls and secure data handling",
      "Developed RESTful APIs and relational data models for structured health metric tracking, and implemented React-based mobile features integrating secure backend endpoints",
    ],
    color: "bg-sage-50 border-sage-100",
    dotColor: "bg-sage-300",
  },
  {
    role: "Software Engineer Intern",
    company: "CVS Health",
    location: "New York, NY",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Built and maintained data pipelines integrating with Google Cloud's Vertex AI using Python and SQL to process large-scale healthcare data in an Agile environment",
      "Developed an internal AI-powered summarization tool using the Vertex AI SDK, applying prompt engineering and embeddings to reduce review time by 60%",
    ],
    color: "bg-sky-50 border-sky-100",
    dotColor: "bg-sky-300",
  },
  {
    role: "Software Engineer Intern",
    company: "LeWiz Communications",
    location: "Sunnyvale, CA",
    dates: "Jun 2024 – Aug 2024",
    bullets: [
      "Developed and tested embedded device software for communication protocols (UART), implementing custom Buildroot configurations and bootstrap code in C",
      "Enhanced product usability by adding new Java Swing GUI features to improve interface intuitiveness",
    ],
    color: "bg-peach-50 border-peach-100",
    dotColor: "bg-peach-300",
  },
  {
    role: "Undergraduate Research Assistant",
    company: "The University of Texas at Austin",
    location: "Austin, TX",
    dates: "Jan 2020 – Jun 2022",
    bullets: [
      "Researched evolutionary biology using molecular experimentation and R-based computational analysis",
      "Hosted office hours and taught R and Python to 50 students alongside mentoring team",
    ],
    color: "bg-warm-100 border-warm-200",
    dotColor: "bg-warm-300",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 fade-up">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Where I&apos;ve worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-warm-200 hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-10">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-6 w-[15px] h-[15px] rounded-full ${exp.dotColor} border-[3px] border-warm-50 hidden sm:block`}
                />
                <div
                  className={`${exp.color} border rounded-2xl p-6 sm:p-8 transition-shadow hover:shadow-md`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-neutral-500">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-neutral-400 shrink-0">
                      {exp.dates}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-neutral-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-neutral-300"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
