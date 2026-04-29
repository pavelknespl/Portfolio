export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap flex flex-col items-center justify-center min-h-[819px] text-center" id="hero">
      <h1 className="font-h1 text-h1 text-on-surface mb-stack-md tracking-tighter mt-8">
        PAVEL <span className="text-primary-container">KNESPL</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg leading-relaxed">
        Cybersecurity Specialist & Backend Developer focusing on secure infrastructure and penetration testing.
      </p>
      <div className="flex gap-4">
        <button
          className="bg-primary-container text-white px-8 py-3 rounded-DEFAULT font-mono-label text-mono-label hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all duration-300 uppercase tracking-wider"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects
        </button>
        <button
          className="border border-white/10 bg-transparent text-primary-container px-8 py-3 rounded-DEFAULT font-mono-label text-mono-label hover:border-primary-container hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all duration-300 uppercase tracking-wider"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
