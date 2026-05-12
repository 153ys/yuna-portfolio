import { motion, type Variants } from "framer-motion";
import { useParams, useNavigate, useNavigationType } from "react-router-dom";
import { projectsData } from "../components/projectsData";
import BackgroundNoise from "../components/BackgroundNoise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../components/Button";

const pageVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.5 } },
};

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const project = projectsData.find((p) => p.id === id);

  const handleBack = () => {
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-base flex items-center justify-center">
        <p className="text-gray-500">找不到此專案。</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-bg-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3, ease: "easeInOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      <BackgroundNoise />
      <main className="max-w-7xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          className="md:flex md:gap-10"
          initial="hidden"
          animate="show"
          variants={pageVariants}
        >
          {/* Sidebar */}
          <motion.div
            className="md:w-100 shrink-0 mb-8 md:mb-0"
            variants={sidebarVariants}
          >
            <div className="relative bg-primary/10 p-5 rounded-2xl border-2 border-black md:sticky md:top-30 h-max flex flex-col gap-4">
              <motion.img
                src="./deco_boom.png"
                alt="vector"
                className="absolute w-12 md:w-15 h-auto right-5 -top-4 md:-top-6 z-50"
                animate={{
                  rotate: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* 返回按鈕 */}
              <button
                onClick={handleBack}
                className="bg-white/50 hover:bg-accent/50 duration-500 group flex items-center gap-2 text-sm font-semibold border-2 rounded-full px-4 py-2 w-fit"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                />
                返回 Projects
              </button>
              {/* Title */}
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight">
                  {project.title}
                </h1>
                {project.time && (
                  <p className="text-gray-600 mt-2 text-sm">{project.time}</p>
                )}
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 border-b-2 pb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-heading border-2 bg-white rounded-3xl px-3 py-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              {/* 簡介 */}
              {project.info && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.info}
                </p>
              )}
              {/* 操作按鈕 */}
              <div className="flex gap-2 w-fit mt-5">
                {project.projectLink && (
                  <Button
                    variant="dark"
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    前往網站{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </Button>
                )}
                {project.github && (
                  <Button
                    variant="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />{" "}
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* 內容區 */}
          <motion.div
            className="flex-1 flex flex-col gap-5 text-md leading-relaxed"
            variants={contentVariants}
          >
            {project.projectInfo && project.projectInfo.length > 0 && (
              <div className="flex flex-col gap-5">
                {project.projectInfo.map((info, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    {info.title && (
                      <h3 className="text-2xl font-bold inline-block self-start px-2 py-1 border-b-2 border-dotted w-full">
                        <img
                          className="inline-block w-5 h-5 mr-2"
                          src="./deco_sparkle.png"
                          alt="deco"
                        />
                        {info.title}
                      </h3>
                    )}
                    {info.subTitle && (
                      <h4 className="px-1 relative text-md inline-block self-start py-1 font-bold">
                        {info.subTitle}
                      </h4>
                    )}
                    {info.content && (
                      <p className="leading-relaxed">{info.content}</p>
                    )}
                    {info.list?.map((group, gi) => (
                      <ul
                        key={gi}
                        className="list-disc list-inside space-y-1 ml-2"
                      >
                        {group.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ))}
                    {info.image?.some((img) => img.image.trim() !== "") && (
                      <div className="mx-4 rounded-xl flex flex-col gap-4 shadow-md">
                        {info.image
                          .filter((img) => img.image.trim() !== "")
                          .map((img, i) => (
                            <img
                              key={i}
                              src={img.image}
                              alt={
                                img.description ??
                                `${info.title ?? "project image"}-${i}`
                              }
                              className="w-full h-auto object-cover rounded-xl"
                            />
                          ))}
                      </div>
                    )}
                    {info.figmaLink && (
                      <a
                        className="px-5 py-1 text-sm text-blue-400"
                        href={info.figmaLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Figma Link
                      </a>
                    )}
                    {info.description && (
                      <p className="text-center text-gray-500 italic text-sm mb-4">
                        {info.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
