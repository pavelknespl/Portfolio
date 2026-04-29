export default function Experience() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap" id="experience">
      <h2 className="font-h2 text-h2 text-on-surface mb-stack-lg flex items-center gap-4">
        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
        Professional Experience
      </h2>
      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">

        <div className="relative pl-8 md:pl-12 group">
          <div className="absolute -left-[5px] top-3 w-[9px] h-[9px] rounded-full bg-primary-container border-2 border-surface-container-lowest group-hover:scale-150 transition-transform duration-300"></div>
          <div className="glass-card rounded-xl p-8 border border-white/5 glow-hover">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <div>
                <h3 className="font-h3 text-h3 text-on-surface">Backend Developer</h3>
                <p className="text-primary mt-1 font-medium">SCG</p>
              </div>
              <div className="text-sm text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-sm border border-white/5 uppercase tracking-wide">
                2026 - Present
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-3xl leading-relaxed">
              Focused on ceating and maintaining projects primarly for <a href="https://tourdeapp.com" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">tourdeapp</a>.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-surface-container-lowest border border-white/10 text-on-surface text-sm rounded-sm">Node.js</span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-white/10 text-on-surface text-sm rounded-sm">Typescript</span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-white/10 text-on-surface text-sm rounded-sm">i18n</span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-white/10 text-on-surface text-sm rounded-sm">Docker</span>
              <span className="px-3 py-1 bg-surface-container-lowest border border-white/10 text-on-surface text-sm rounded-sm">Pentesting</span>
            </div>
          </div>
        </div>

        <div className="relative pl-8 md:pl-12 group">
          <div className="absolute -left-[5px] top-3 w-[9px] h-[9px] rounded-full bg-surface-variant border-2 border-surface-container-lowest group-hover:bg-primary-container group-hover:scale-150 transition-all duration-300"></div>
          <div className="glass-card rounded-xl p-8 border border-white/5 glow-hover">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <div>
                <h3 className="font-h3 text-h3 text-on-surface">Lecturer</h3>
                <p className="text-primary mt-1 font-medium">Makemore</p>
              </div>
              <div className="text-sm text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-sm border border-white/5 uppercase tracking-wide">
                2026 - Present
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Lecturing on makerfaire workshops and summer camps about 3D printing soldering and robotics.
            </p>
          </div>
        </div>

        <div className="relative pl-8 md:pl-12 group">
          <div className="absolute -left-[5px] top-3 w-[9px] h-[9px] rounded-full bg-surface-variant border-2 border-surface-container-lowest group-hover:bg-primary-container group-hover:scale-150 transition-all duration-300"></div>
          <div className="glass-card rounded-xl p-8 border border-white/5 glow-hover">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <div>
                <h3 className="font-h3 text-h3 text-on-surface">Network Engineer</h3>
                <p className="text-primary mt-1 font-medium">IT Business</p>
              </div>
              <div className="text-sm text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-sm border border-white/5 uppercase tracking-wide">
                2026 - 2026
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Working on physical networks with fiber optics and antennas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
