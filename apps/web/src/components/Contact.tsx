export default function Contact() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap" id="contact">
      <h2 className="font-h2 text-h2 text-on-surface mb-stack-lg flex items-center gap-4">
        <span className="material-symbols-outlined text-[#ff3131]" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
        Connect
      </h2>
      <div className="glass-card rounded-xl border border-white/5 overflow-hidden flex flex-col glow-hover transition-all duration-300 mx-auto max-w-[600px]">
        <a className="flex flex-col sm:flex-row sm:items-center p-6 sm:px-8 border-b border-white/5 hover:bg-white/[0.02] group transition-colors duration-300 gap-4 justify-between" href="https://github.com/pavelknespl">
          <div className="flex items-center gap-6 w-32 shrink-0">
            <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-[#ff3131] transition-colors">code</span>
            <div className="font-mono-label text-xs tracking-[0.15em] text-[#ff3131] uppercase">GitHub</div>
          </div>
          <div className="font-body-lg text-on-surface-variant group-hover:text-on-surface transition-colors">pavelknespl</div>
        </a>
        <a className="flex flex-col sm:flex-row sm:items-center p-6 sm:px-8 border-b border-white/5 hover:bg-white/[0.02] group transition-colors duration-300 gap-4 justify-between" href="https://www.linkedin.com/in/pavelknespl">
          <div className="flex items-center gap-6 w-32 shrink-0">
            <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-[#ff3131] transition-colors">work</span>
            <div className="font-mono-label text-xs tracking-[0.15em] text-[#ff3131] uppercase">LinkedIn</div>
          </div>
          <div className="font-body-lg text-on-surface-variant group-hover:text-on-surface transition-colors">pavelknespl</div>
        </a>
        <a className="flex flex-col sm:flex-row sm:items-center p-6 sm:px-8 border-b border-white/5 hover:bg-white/[0.02] group transition-colors duration-300 gap-4 justify-between" href="https://www.discord.gg/p/capyplivl">
          <div className="flex items-center gap-6 w-32 shrink-0">
            <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-[#ff3131] transition-colors">forum</span>
            <div className="font-mono-label text-xs tracking-[0.15em] text-[#ff3131] uppercase">Discord</div>
          </div>
          <div className="font-body-lg text-on-surface-variant group-hover:text-on-surface transition-colors">Capyplivl</div>
        </a>
        <a className="flex flex-col sm:flex-row sm:items-center p-6 sm:px-8 border-b border-white/5 hover:bg-white/[0.02] group transition-colors duration-300 gap-4 justify-between" href="https://www.instagram.com/pavel_knespl">
          <div className="flex items-center gap-6 w-32 shrink-0">
            <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-[#ff3131] transition-colors">photo_camera</span>
            <div className="font-mono-label text-xs tracking-[0.15em] text-[#ff3131] uppercase">Instagram</div>
          </div>
          <div className="font-body-lg text-on-surface-variant group-hover:text-on-surface transition-colors">pavel_knespl</div>
        </a>
        <a className="flex flex-col sm:flex-row sm:items-center p-6 sm:px-8 hover:bg-white/[0.02] group transition-colors duration-300 gap-4 justify-between" href="mailto:pavel.knespl3@gmail.com">
          <div className="flex items-center gap-6 w-32 shrink-0">
            <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-[#ff3131] transition-colors">mail</span>
            <div className="font-mono-label text-xs tracking-[0.15em] text-[#ff3131] uppercase">Email</div>
          </div>
          <div className="font-body-lg text-on-surface-variant group-hover:text-on-surface transition-colors">pavel.knespl3@gmail.com</div>
        </a>
      </div>
    </section>
  );
}
