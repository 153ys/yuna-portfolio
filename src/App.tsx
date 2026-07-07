import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./Section/Navbar";
import CustomCursor from "./components/CutstomCursor";
import { Top } from "./components/Top";
import GithubIcon from "./components/GithubIcon";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Top />
      <Suspense fallback={<div className="min-h-screen bg-bg-base" />}>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="projects/:id" element={<ProjectPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <footer className="bg-black text-white select-none font-sans font-light py-2 flex w-full justify-center gap-4">
        <p>Portfolio by Yuna Kao © 2026</p>
        <a
          className="hover:text-accent transition-colors duration-300 flex items-center"
          href="https://github.com/153ys"
          target="_blank"
        >
          <GithubIcon className="w-4 h-4" /> GitHub
        </a>
      </footer>
    </>
  );
}
