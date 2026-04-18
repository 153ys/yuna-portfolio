import { Navbar } from "./Section/Navbar";
import { Hero } from "./Section/Hero";
import { Top } from "./components/Top";
import Projects from "./Section/Projects";
import Skills from "./Section/Skills";
import BackgroundNoise from "./components/BackgroundNoise";
import { Github } from "lucide-react";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <BackgroundNoise />
      <main>
        <Hero />
        <section
          id="skills"
          className="min-h-screen py-20 px-3 divider-dotline "
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
              Skills
            </h2>
            <Skills />
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen py-20 px-3 divider-dotline bg-primary/20"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
              Projects
            </h2>
            <Projects />
          </div>
        </section>


      </main>
      <footer className="bg-accent/20 text-secondary select-none font-sans font-light py-2 flex w-full justify-center gap-4">
        <p>Portfolio by Yuna Kao © 2026</p>
        <a
          className="hover:text-teal-500 transition-colors duration-300 flex items-center"
          href="https://github.com/153ys"
          target="_blank"
        >
          <Github size={16} /> GitHub
        </a>
      </footer>
      <Top />
    </div>
  );
}

export default App;
