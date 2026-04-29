export default function Projects() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap" id="projects">
      <h2 className="font-h2 text-h2 text-on-surface mb-stack-lg flex items-center gap-4">
        <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <a href="https://github.com/Libre-SkolaOnline/API-docs" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-8 border border-white/5 glow-hover flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-primary-container font-mono-label text-xs tracking-[0.15em] uppercase">API Documentation</span>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">api</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-4">Libre-SkolaOnline / API-docs</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">Reverse-engineered REST API documentation for the Škola OnLine school system, written in the OpenAPI 3.0 standard and visualized via Swagger UI.</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">OPENAPI 3.0</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">SWAGGER UI</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">HTML</span>
          </div>
        </a>

        <a href="https://github.com/pavelknespl/TerraDiscord" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-8 border border-white/5 glow-hover flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-primary-container font-mono-label text-xs tracking-[0.15em] uppercase">Infrastructure as Code</span>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">hub</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-4">TerraDiscord</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">Infrastructure-as-Code tool for Discord servers. Define roles, categories, channels, and permissions in JSON and apply them instantly via slash commands.</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">PYTHON</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">DISCORD.PY</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">JSON</span>
          </div>
        </a>

        <a href="https://github.com/pavelknespl/Meowl-as-a-Service" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-8 border border-white/5 glow-hover flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-primary-container font-mono-label text-xs tracking-[0.15em] uppercase">Terminal Service</span>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">terminal</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-4">Meowl as a Service</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">Inspired by parrot.live — an HTTP server that streams colorful terminal animations of Meowl via curl, with endpoints for images, videos, and more.</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">NODE.JS</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">JAVASCRIPT</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">CURL</span>
          </div>
        </a>

        <a href="https://github.com/Libre-SkolaOnline/CLI" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-8 border border-white/5 glow-hover flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <span className="text-primary-container font-mono-label text-xs tracking-[0.15em] uppercase">TUI Application</span>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">wysiwyg</span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface mb-4">Libre-SkolaOnline / CLI</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">Terminal UI built with Textual for browsing Škola Online data — grades, timetable, messages, homework, and behaviour — via the documented SOL API.</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">PYTHON</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">TEXTUAL</span>
            <span className="px-3 py-1 bg-transparent border border-primary-container/30 text-primary-container text-xs rounded-sm font-mono-label">REST API</span>
          </div>
        </a>
      </div>
    </section>
  );
}
