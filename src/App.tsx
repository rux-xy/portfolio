import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills";
import Achievements from "./Sections/Achievements";
import Contact from "./Sections/Contact";
import References from "./Sections/References";
import Footer from "./components/Footer";

export default function App() {
  // Smooth in-page scrolling
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest(
        "a[href^='#']"
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <References />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
