import { motion, type Variants } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { projectsData, type Project } from "../components/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="relative px-6">
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
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center font-bold text-gray-400">
                    Project image
                  </div>
                )}
              </Link>
              <div className="flex gap-4 flex-col w-full md:w-1/2">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-md font-light text-gray-500">
                  {project.time}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="hashtag">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="h-full flex flex-col justify-between">
                  <p>{project.info}</p>
                  <div className="md:text-sm text-xs md:mt-0 mt-5 flex gap-3 self-end">
                    {project.github && (
                      <Button
                        variant="secondary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
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
                      Read More{" "}
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
    </section>
  );
}
