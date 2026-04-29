export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 text-sm w-full py-12 px-8 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div>
          © 2026 Pavel Knespl. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="https://github.com/pavelknespl" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/pavelknespl/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-white transition-colors" href="https://tryhackme.com/p/capyplivl" target="_blank" rel="noopener noreferrer">TryHackMe</a>
        </div>
      </div>
    </footer>
  );
}
