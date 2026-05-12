import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./Section/Navbar";
import CustomCursor from "./components/CutstomCursor";
import { Top } from "./components/Top";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Top />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
