import type { Route } from "./+types/_index";
import Hero from "../components/Hero";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pavel Knespl - IT & Cybersecurity" },
    { name: "description", content: "Cybersecurity Specialist & Backend Developer" },
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
