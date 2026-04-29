export default function Achievements() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap" id="achievements">
      <h2 className="font-h2 text-h2 text-on-surface mb-stack-lg flex items-center gap-4">
        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="glass-card rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group glow-hover transition-all duration-500 min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-surface-variant/20 z-0"></div>
          <div className="relative z-20">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">emoji_events</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-3"><a href="https://kybersoutez.cz" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors duration-200">Kybersoutěž</a> 2025 Winner</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Won czech national cybersecurity competition 2025 in highschool category and I finished 5th overall.</p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group glow-hover transition-all duration-500 min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-surface-variant/20 z-0"></div>
          <div className="relative z-20">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">military_tech</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-3"><a href="https://haxagon.cz" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Haxagon</a> skirmish 2026 finalist</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Qualified to Haxagon skirmish finals.</p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group glow-hover transition-all duration-500 min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-surface-variant/20 z-0"></div>
          <div className="relative z-20">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">emoji_events</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-3"><a href="https://haxagon.cz" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Haxagon</a> SČ 2025 Winner</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Won Haxagon skirmish SČ 2025 competition.</p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group glow-hover transition-all duration-500 min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-surface-variant/20 z-0"></div>
          <div className="relative z-20">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">military_tech</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-3"><a href="https://haxagon.cz" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Haxagon</a> skirmish 2025 - 7th place</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Participated in Haxagon skirmish 2025 competition and finished 7th place.</p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group glow-hover transition-all duration-500 min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-surface-variant/20 z-0"></div>
          <div className="relative z-20">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">flag</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-3"><a href="https://tryhackme.com/p/capyplivl" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors duration-200">TryHackMe</a></h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Currently 14th place in the TryHackMe leaderboard in Czech Republic and top 2500 in world.</p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group glow-hover transition-all duration-500 min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-surface-variant/20 z-0"></div>
          <div className="relative z-20">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">military_tech</span>
            <h3 className="font-h3 text-h3 text-on-surface mb-3"><a href="https://www.tourdeapp.cz/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">TourDeApp</a></h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Our team placed 41st overall from 144 teams in TourDeApp 2025 web development competition.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
