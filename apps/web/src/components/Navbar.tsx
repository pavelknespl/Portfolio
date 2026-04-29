import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NAVBAR_HEIGHT = 80;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: `-${NAVBAR_HEIGHT}px 0px -50% 0px`,
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl font-['Space_Grotesk'] tracking-tight">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        <a
          className="text-xl font-bold tracking-widest text-white uppercase cursor-pointer"
          href="#hero"
          onClick={handleScroll}
        >
          PAVEL KNESPL
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={handleScroll}
                className={
                  isActive
                    ? "text-red-600 border-b-2 border-red-600 pb-1 text-sm font-medium tracking-wide transition-all duration-300"
                    : "text-zinc-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
                }
              >
                {label}
              </a>
            );
          })}
        </div>
        <a
          className="bg-[#ff3131] text-white px-6 py-2 rounded-DEFAULT font-mono-label text-mono-label hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all duration-300 active:scale-95 transform"
          href="#contact"
          onClick={handleScroll}
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
