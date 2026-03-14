import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Kalei Ragland",
};

export default function ResumePage() {
  return (
    <section className="pt-24 pb-16 px-6 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-2">
              Resume
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Kalei Ragland
            </h1>
          </div>
          <a
            href="/Kalei_Ragland_Resume.pdf"
            download
            className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-3xl border border-warm-200/50 overflow-hidden shadow-sm">
          <iframe
            src="/Kalei_Ragland_Resume.pdf"
            className="w-full h-[80vh]"
            title="Resume PDF"
          />
        </div>

        {/* Fallback content below PDF */}
        <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-3xl border border-warm-200/50 p-8 sm:p-10">
          <h2 className="text-xl font-bold mb-6">Quick Overview</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
                Education
              </h3>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold">
                    Columbia University - M.S. Computer Science
                  </p>
                  <p className="text-sm text-neutral-500">
                    Expected May 2026
                  </p>
                </div>
                <div>
                  <p className="font-semibold">
                    UT Austin - B.S. Biochemistry, Minors in CS &amp; History
                  </p>
                  <p className="text-sm text-neutral-500">
                    GPA: 3.94 &middot; Graduated May 2023
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
                Honors
              </h3>
              <p className="text-neutral-600">
                College Scholar (2021-2023) &middot; University Honors
                (2019-2023)
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
                Organizations
              </h3>
              <p className="text-neutral-600">
                Apple&apos;s Women in Science and Engineering (AWSEM) &middot;
                Rewriting the Code (RTC) &middot; CodePath &middot; Women in Computer Science (WiCS)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
