import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../Section/Hero";
import { Top } from "../components/Top";
import Projects from "../Section/Projects";
import Skills from "../Section/Skills";
import BackgroundNoise from "../components/BackgroundNoise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Marquee } from "../components/Marquee";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomePage() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const scrollTarget = (location.state as { scrollTo?: string } | null)
      ?.scrollTo;
    if (!scrollTarget) return;
    
    const timer = setTimeout(() => {
      if (scrollTarget === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(scrollTarget.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.state]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [
      "rgba(254, 248, 245, 0.1)",
      "rgba(245, 234, 191, 0.4)",
      "rgba(254, 248, 245, 0.1)",
    ],
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen transition-colors duration-300"
    >
      <div className="relative">
        <BackgroundNoise />
        <main>
          <Hero />
          <Marquee />
          <section id="skills" className="py-20 px-3">
            <div className="max-w-7xl mx-auto">
              <div className="md:text-left text-center">
                <h2 className="relative inline-block mb-12 md:mb-0 text-4xl md:text-5xl font-heading font-black uppercase">
                  <motion.img
                    src="./deco_flower_3.png"
                    alt="vector"
                    className="-z-4 absolute -top-6 -left-6 md:-left-12 w-12 md:w-20 h-auto"
                    animate={{ y: [0, 5, 0], rotate: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Skills
                </h2>
              </div>
              <Skills />
            </div>
          </section>

          <section
            id="projects"
            className="min-h-screen py-20 px-3 divider-dotline"
          >
            <div className="max-w-7xl mx-auto">
              <div className="md:text-left text-center mb-12">
                <h2 className="relative inline-block text-4xl md:text-5xl font-heading font-black uppercase">
                  <motion.img
                    src="./deco_flower_2.png"
                    alt="vector"
                    className="opacity-60 -z-4 absolute -top-6 -left-6 md:-left-12 w-12 md:w-20 h-auto"
                    animate={{ y: [0, 5, 0], rotate: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Projects
                </h2>
              </div>
              <Projects />
            </div>
          </section>
        </main>
        <footer className="bg-accent/20 text-gray-500 select-none font-sans font-light py-2 flex w-full justify-center gap-4">
          <p>Portfolio by Yuna Kao © 2026</p>
          <a
            className="hover:text-secondary transition-colors duration-300 flex items-center"
            href="https://github.com/153ys"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" /> GitHub
          </a>
        </footer>
        <Top />
      </div>
    </motion.div>
  );
}
