import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Github, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[85vh] pt-32 pb-20 px-6 flex flex-col justify-center items-center max-w-7xl mx-auto">
      <div className="items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-black font-heading leading-[1.1] tracking-tight">
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-12 shadow-brutal-sm -left-20 inline-block bg-primary border-brutal px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider transform -rotate-5"
            >
              UI/UX & Frontend Developer
            </motion.div>
            Hi, I'm{" "}
            <span className="transform inline-block hover:scale-105 transition-transform cursor-default">
              Yuna
            </span>
            <br />
          </h1>

          <p className="text-xl md:text-2xl font-medium text-gray-800 max-w-lg leading-relaxed mix-blend-multiply">
            從設計出發，打造兼具體驗與效能的前端產品
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button
              variant="primary"
              className="bg-accent! w-full sm:w-auto"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView()
              }
            >
              View Projects <ArrowDown size={20} />
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              href="https://github.com/153ys"
              target="_blank"
            >
              <Github size={20} /> GitHub
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              href="https://medium.com/@153yuna"
              target="_blank"
            >
              Medium
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
