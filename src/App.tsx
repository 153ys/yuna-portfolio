import { Navbar } from "./Section/Navbar";
import { Hero } from "./Section/Hero";
import Skills from "./Section/Skills";
import BackgroundNoise from "./components/BackgroundNoise";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <BackgroundNoise />

      <main>
        <Hero />

        <section id="skills" className="min-h-[50vh] divider-dotline">
          <div className="max-w-7xl mx-auto">
            <Skills />
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen py-20 px-6 divider-dotline bg-primary/20"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
              Projects
            </h2>
            <div className="card-brutal p-8 text-center text-xl text-gray-500">
              Projects components pending...
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-[50vh] py-20 px-6 divider-dotline bg-accent/20"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
              Contact
            </h2>
            <div className="card-brutal p-8 text-center text-xl text-gray-500">
              Contact & Footer components pending...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
