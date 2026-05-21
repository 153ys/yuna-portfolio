import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../Section/Hero";
import Projects from "../Section/Projects";
import Skills from "../Section/Skills";
import BackgroundNoise from "../components/BackgroundNoise";
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
          <Projects />
        </main>
      </div>
    </motion.div>
  );
}
