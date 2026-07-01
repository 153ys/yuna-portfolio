import { motion, type Variants } from "framer-motion";
import { useParams, useNavigate, useNavigationType } from "react-router-dom";
import { projectsData } from "../components/projectsData";
import BackgroundNoise from "../components/BackgroundNoise";
import Icon from "../components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../components/Button";
import DesignDecisionCards from "../components/DecisionCards";
import { renderTextWithLineBreaks } from "../utils/renderTextWithLineBreaks";

const pageVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.5 } },
};

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut" } },
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

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const prevProject = projectsData[currentIndex - 1] ?? null;
  const nextProject = projectsData[currentIndex + 1] ?? null;

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
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 0.3, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      <BackgroundNoise />
      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          className="md:flex md:gap-10"
          initial="hidden"
          animate="show"
          variants={pageVariants}
        >
          {/* Sidebar */}
          <motion.div
            className="md:w-1/3 shrink-0 mb-8 md:mb-0"
            variants={sidebarVariants}
          >
            <div className="relative bg-primary/10 p-5 rounded-2xl border-2 border-black md:sticky md:top-30 h-max flex flex-col gap-4">
              <motion.div
                className="absolute w-12 md:w-15 right-5 -top-4 md:-top-6"
                animate={{ rotate: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon name="deco_boom" className="w-full h-full" />
              </motion.div>
              {/* 返回按鈕 */}
              <button
                onClick={handleBack}
                className="bg-white/50 hover:bg-accent/50 duration-500 group flex items-center gap-2 text-sm font-semibold border-2 rounded-full px-4 py-2 w-fit"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                />
                返回首頁
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
                <p className="text-sm leading-relaxed">
                  {renderTextWithLineBreaks(project.info)}
                </p>
              )}
              {/* 操作按鈕 */}
              <div className="flex flex-wrap gap-2 w-fit mt-5">
                {project.projectLink && (
                  <Button
                    variant="dark"
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="project website link"
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
                    aria-label="github project page"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />{" "}
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* 內容區 */}
          <div className="flex-1 flex flex-col gap-5 text-md leading-relaxed">
            {project.projectInfo && project.projectInfo.length > 0 && (
              <div className="flex flex-col gap-4">
                {project.projectInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  >
                    {info.title && (
                      <h3 className="text-2xl font-bold inline-block self-start px-2 py-1 border-b-2 border-dotted w-full">
                        <motion.span
                          className="inline-block w-5 h-5 mr-2 align-middle"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Icon name="deco_sparkle" className="w-full h-full" />
                        </motion.span>
                        {info.title}
                      </h3>
                    )}
                    {info.subTitle && (
                      <div className="relative w-fit">
                        <h4 className="relative z-10 text-[18px] inline-block self-start py-1 font-bold">
                          {info.subTitle}
                        </h4>
                        <span className="absolute bottom-2 left-0 h-3 w-full bg-primary/70"></span>
                      </div>
                    )}
                    {info.content && (
                      <p className="leading-relaxed">
                        {renderTextWithLineBreaks(info.content)}
                      </p>
                    )}
                    {info.type === "decisionCards" && info.decisionCards && (
                      <DesignDecisionCards cards={info.decisionCards} />
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
                    {info.tech && (
                      <div className="pt-4 flex flex-wrap gap-2 mb-4">
                        {info.tech.map((t) => (
                          <span
                            key={t}
                            className="hover:-translate-y-1 duration-200 hover:bg-primary/50 delay-100 text-sm font-mono font-bold border-2 px-2 py-1 rounded-lg bg-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
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
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </main>
      {/* 專案列表導覽 */}
      <div className="px-5 border-t-3 border-black ">
        {/* 上一個專案 */}
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          {prevProject ? (
            <button
              onClick={() => navigate(`/projects/${prevProject.id}`)}
              className="w-fit group flex flex-row items-center gap-4 py-6 text-left transition-colors duration-300 px-4"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-2xl group-hover:-translate-x-1 transition-transform duration-200"
              />
              <div className="hidden md:flex flex-col gap-1 font-black font-heading text-xl md:text-2xl leading-tight">
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  上一個專案
                </p>
                <p>{prevProject.title}</p>
              </div>
            </button>
          ) : (
            <div />
          )}

          {/* 下一個專案 */}
          {nextProject ? (
            <button
              onClick={() => navigate(`/projects/${nextProject.id}`)}
              className="w-fit ml-auto group flex flex-row items-center gap-4 py-6 text-right transition-colors duration-400 px-4"
            >
              <div className="hidden md:flex flex-col gap-1 items-end font-black font-heading text-xl md:text-2xl leading-tight">
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  下一個專案
                </p>
                <p>{nextProject.title}</p>
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl group-hover:text-gray-700 group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.div>
  );
}
