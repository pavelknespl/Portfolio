import type { Route } from "./+types/_index";
import Hero from "../components/Hero";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pavel Knespl - Cybersecurity Specialist & Backend Developer" },
    { name: "description", content: "Pavel Knespl — cybersecurity specialist, penetration tester, and backend developer from Czech Republic. Winner of Kybersoutěž 2025, Haxagon competitor, and TryHackMe top-ranked player." },
    { name: "keywords", content: "Pavel Knespl, cybersecurity, penetration testing, backend developer, ethical hacking, CTF, Kybersoutěž, Haxagon, TryHackMe, Node.js, Python, TypeScript, Docker, network security" },
    { name: "author", content: "Pavel Knespl" },
    { name: "robots", content: "index, follow" },

    { property: "og:type", content: "website" },
    { property: "og:title", content: "Pavel Knespl - Cybersecurity & Backend Development" },
    { property: "og:description", content: "Cybersecurity specialist and backend developer. Kybersoutěž 2025 winner, Haxagon finalist, TryHackMe top 2500 worldwide." },
    { property: "og:site_name", content: "Pavel Knespl" },
    { property: "og:locale", content: "en_US" },

    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Pavel Knespl - Cybersecurity & Backend Development" },
    { name: "twitter:description", content: "Cybersecurity specialist and backend developer. Kybersoutěž 2025 winner, Haxagon finalist, TryHackMe top 2500 worldwide." },
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
