import type { Route } from "./+types/_index";
import Hero from "../components/Hero";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pavel Knespl - Cybersecurity Specialist & Backend Developer" },
    { name: "description", content: "Cybersecurity specialist and backend developer from CZ. Kybersoutěž 2025 winner, TryHackMe top 2500." },
    { name: "keywords", content: "Pavel Knespl, cybersecurity, penetration testing, backend developer, ethical hacking, CTF, Kybersoutěž, Haxagon, TryHackMe, Node.js, Python, TypeScript, Docker, network security" },
    { name: "author", content: "Pavel Knespl" },
    { name: "robots", content: "index, follow" },

    { tagName: "link", rel: "canonical", href: "https://pavelknespl.cz/" },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: "https://pavelknespl.cz/" },
    { tagName: "link", rel: "alternate", hrefLang: "cs", href: "https://pavelknespl.cz/" },
    { tagName: "link", rel: "alternate", hrefLang: "x-default", href: "https://pavelknespl.cz/" },

    { property: "og:type", content: "website" },
    { property: "og:title", content: "Pavel Knespl - Cybersecurity & Backend Development" },
    { property: "og:description", content: "Cybersecurity specialist and backend developer. Kybersoutěž 2025 winner, TryHackMe top 2500." },
    { property: "og:url", content: "https://pavelknespl.cz/" },
    { property: "og:site_name", content: "Pavel Knespl" },
    { property: "og:locale", content: "en_US" },

    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Pavel Knespl - Cybersecurity & Backend Development" },
    { name: "twitter:description", content: "Cybersecurity specialist and backend developer. Kybersoutěž 2025 winner, TryHackMe top 2500." },
  ];
}

export default function Home() {
  return (
    <div className="pt-24 mesh-gradient min-h-screen">
      <Hero />
      <Achievements />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
