import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  return (
    <section className="min-h-[85vh] pt-32 pb-20 px-6 flex flex-col justify-center items-center max-w-7xl mx-auto">
      <div className="relative items-center w-full max-w-fit">
        {/* deco animation */}
        <motion.img
          src="./deco_boom.png"
          alt="vector"
          className="-z-4 absolute -bottom-10 -left-6 md:-left-30 w-12 md:w-20 h-auto"
          animate={{
            y: [0, 5, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="./deco_star.png"
          alt="vector"
          className="-z-4 absolute -top-8 -right-6 md:-right-24 w-12 md:w-20 h-auto"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-black font-heading leading-[1.1] tracking-tight">
            <motion.img
              src="./deco_sparkle.png"
              alt="vector"
              className="absolute w-8 h-auto top-4 -left-10 md:-left-14"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
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
              UI/UX & Frontend
            </motion.div>
            Hi, I'm{" "}
            <motion.button
              data-draggable="true"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={{ left: 0.1, right: 0.1, top: 0.1, bottom: 0.1 }}
              whileDrag={{ scale: 1.1, rotate: 1 }}
              whileHover={{
                border: "2px solid #a8abff",
                color: "#695add",
                rotate: 2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              className="bg-bg-base/50 border-2 relative p-2 transform inline-block"
            >
              <div className="absolute border-2 bg-bg-base w-3 h-3 -top-2 -left-2"></div>
              <div className="absolute border-2 bg-bg-base w-3 h-3 -top-2 -right-2"></div>
              <div className="absolute border-2 bg-bg-base w-3 h-3 -bottom-2 -left-2"></div>
              <div className="absolute border-2 bg-bg-base w-3 h-3 -bottom-2 -right-2"></div>
              <span className="transition-colors duration-100">Yuna</span>
            </motion.button>
            <br />
          </h1>

          <p className="text-xl md:text-2xl font-medium text-gray-800 max-w-lg leading-relaxed mix-blend-multiply">
            從設計出發，打造兼具體驗與效能的前端產品
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button
              variant="accent"
              className="w-full sm:w-auto"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView()
              }
            >
              View Projects{" "}
              <FontAwesomeIcon icon={faArrowDown} className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              href="https://github.com/153ys"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" /> GitHub
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              href="https://medium.com/@153yuna"
              target="_blank"
            >
              Medium
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto"
              href="https://yunakao.myportfolio.com/"
              target="_blank"
            >
              Graphic Design
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
