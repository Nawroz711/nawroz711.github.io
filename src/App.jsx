import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "./pages/Landing";
import Header from "./pages/Header";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Animate landing on load
    gsap.from("#landing", { opacity: 0, y: 50, duration: 1.5, ease: "power2.out" });

    // Animate other sections on scroll
    const sections = ["#experience", "#projects", "#skills", "#contact"];
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <Landing />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
