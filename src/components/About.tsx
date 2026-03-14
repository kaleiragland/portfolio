export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-warm-200/50 p-8 sm:p-12">
          <p className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            A bit about me
          </h2>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              I&apos;m a Master&apos;s student in Computer Science at Columbia
              University with a background in Biochemistry from UT Austin. My
              path from the lab bench to software engineering gives me a unique
              perspective, I approach problems methodically, value clean
              experimentation, and care deeply about building things that
              actually work for people.
            </p>
            <p>
              I&apos;ve interned at Columbia Build Lab designing AWS
              infrastructure and React features for a health startup, at CVS Health building AI
              data pipelines on Google Cloud, and at LeWiz Communications
              writing embedded systems software. I enjoy working across the
              stack, from cloud architecture to polished frontend experiences.
            </p>
            <p>
              When I&apos;m not coding, you'll most likely find me at a museum or trying a new restaurant (ask me for my Beli!).
            </p>
          </div>

          {/* Education cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-sage-50 rounded-2xl p-5 border border-sage-100">
              <p className="text-xs font-medium tracking-wider uppercase text-sage-400 mb-1">
                Graduate
              </p>
              <p className="font-semibold">Columbia University</p>
              <p className="text-sm text-neutral-500">
                M.S. Computer Science &middot; May 2026
              </p>
            </div>
            <div className="bg-peach-50 rounded-2xl p-5 border border-peach-100">
              <p className="text-xs font-medium tracking-wider uppercase text-peach-300 mb-1">
                Undergraduate
              </p>
              <p className="font-semibold">UT Austin</p>
              <p className="text-sm text-neutral-500">
                B.S. Biochemistry, CS Minor &middot; 3.94 GPA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
