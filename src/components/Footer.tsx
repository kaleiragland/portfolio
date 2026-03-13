export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-warm-200/50">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-sage-400 mb-3">
          Get in Touch
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          Let&apos;s connect
        </h2>
        <p className="text-neutral-500 mb-8 max-w-md mx-auto">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="mailto:kar2247@columbia.edu"
            className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
          >
            Say Hello
          </a>
          <a
            href="https://linkedin.com/in/kaleiragland"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neutral-300 text-sm font-medium rounded-full hover:border-neutral-400 hover:bg-white/50 transition-all"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Kalei Ragland
        </p>
      </div>
    </footer>
  );
}
