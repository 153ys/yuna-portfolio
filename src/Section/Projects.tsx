import { motion, type Variants } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { projectsData, type Project } from "../components/projectsData";
import Icon from "../components/Icon";
import GithubIcon from "../components/GithubIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { renderTextWithLineBreaks } from "../utils/renderTextWithLineBreaks";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const getFirstImage = (images: Project["image"]) =>
  images?.find((image) => image.image.trim() !== "");

const boldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-screen py-20 px-3 divider-dotline">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h2 className="md:ml-15 relative inline-block text-4xl md:text-5xl mb-6 md:mb-12 font-heading font-black uppercase">
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
        <div className="text-left relative px-1.5 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-7xl mx-auto flex flex-col gap-6"
          >
            {projectsData.map((project, index) => {
              const coverImage = getFirstImage(project.image);
              const projectPath = `/projects/${project.id}`;
              const isFirst = index === 0;

              return (
                <motion.div
                  variants={cardVariants}
                  key={project.id}
                  className="flex flex-col md:flex-row w-full card-brutal gap-6 md:gap-10 shadow-brutal sm:p-6 p-4"
                >
                  <Link
                    to={projectPath}
                    aria-label={`查看 ${project.title} 詳細資訊`}
                    className="justify-center items-center flex cursor-pointer hover:scale-102 transition-all md:h-90 h-50 w-full md:w-1/2"
                  >
                    {coverImage ? (
                      <img
                        src={coverImage.image}
                        alt={coverImage.description ?? project.title}
                        className="w-full h-full object-cover rounded-2xl"
                        fetchPriority={isFirst ? "high" : "auto"}
                        loading={isFirst ? "eager" : "lazy"}
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center font-bold text-gray-400">
                        Project image
                      </div>
                    )}
                  </Link>
                  <div className="flex gap-3 flex-col w-full md:w-1/2">
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap md:gap-2 gap-1 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="hashtag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <p>{renderTextWithLineBreaks(project.info, boldText)}</p>
                      <div className="md:text-sm text-xs md:mt-0 mt-5 flex gap-3 self-end">
                        {project.github && (
                          <Button
                            variant="secondary"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="github"
                          >
                            <GithubIcon className="w-5 h-5" />
                          </Button>
                        )}
                        {project.projectLink && (
                          <Button
                            variant="secondary"
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            前往網站
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="w-5 h-5"
                            />
                          </Button>
                        )}
                        <Button
                          variant="dark"
                          onClick={() => navigate(projectPath)}
                        >
                          看更多{" "}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="w-5 h-5"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
