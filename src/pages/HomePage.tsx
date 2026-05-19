import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../Section/Hero";
import Projects from "../Section/Projects";
import Skills from "../Section/Skills";
import BackgroundNoise from "../components/BackgroundNoise";
import { Marquee } from "../components/Marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "../components/Icon";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative">
        <BackgroundNoise />
        <main>
          <Hero />
          <Marquee />
          <Skills />

          <section
            id="projects"
            className="min-h-screen py-20 px-3 divider-dotline"
          >
            <div className="max-w-7xl mx-auto">
              <div className="md:text-left text-center mb-12">
                <h2 className="relative inline-block text-4xl md:text-5xl font-heading font-black uppercase">
                  <motion.div
                    className="opacity-60 -z-4 absolute -top-6 -left-6 md:-left-12 w-12 md:w-20"
                    animate={{ y: [0, 5, 0], rotate: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon name="deco_flower_2" className="w-full h-full" />
                  </motion.div>
                  Projects
                </h2>
              </div>
              <Projects />
            </div>
          </section>
        </main>
      </div>
    </motion.div>
  );
}
