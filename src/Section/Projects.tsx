import { useState } from "react";
import { Button } from "../components/Button";
import { projectsData, type Project } from "../components/projectsData";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useScrollLock } from "usehooks-ts";

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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useScrollLock({ autoLock: !!selectedProject });

  return (
    <>
      <section className="px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-7xl mx-auto flex flex-col gap-6"
        >
          {/* Projects */}
          {projectsData.map((project, index) => {
            return (
              <motion.div
                variants={cardVariants}
                key={index}
                className="flex flex-col md:flex-row w-full card-brutal gap-6 md:gap-10 shadow-brutal sm:p-6 p-4"
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer card-brutal hover:scale-102 transition-all md:h-90 h-50 p-2 w-full md:w-1/2"
                >
                  {project.pic ? (
                    <img
                      src={project.pic}
                      alt={project.title}
                      className="w-auto h-full object-contain rounded-2xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center font-bold text-gray-400">
                      Project Pic
                    </div>
                  )}
                </button>
                <div className="flex gap-4 flex-col w-full md:w-1/2">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-heading font-medium border-2 rounded-full bg-primary px-2 py-1"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="h-full flex flex-col justify-between">
                    <p>{project.description}</p>
                    {/* Buttons */}
                    <div className="md:mt-0 mt-5 flex gap-3 self-end">
                      {project.github && (
                        <Button
                          variant="secondary"
                          href={project.github}
                          target="_blank"
                        >
                          Github
                          <ArrowRight size={20} />
                        </Button>
                      )}
                      <Button
                        variant="dark"
                        onClick={() => setSelectedProject(project)}
                      >
                        Read More <ArrowRight size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Project info 展開*/}
      <AnimatePresence>
        {selectedProject && (
          <div className="z-100 fixed inset-0 flex items-end md:items-center justify-center p-0 md:p-6 pointer-events-none font-sans">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 40, stiffness: 300 }}
              className="relative w-full md:max-w-[70vw] bg-white border-t-3 md:border-2 border-black md:rounded-4xl rounded-t-4xl p-4 pointer-events-auto flex h-[90vh] flex-col md:max-h-[90vh]"
            >
              {/* 關閉按鈕 */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute md:-top-4 md:-right-2 top-4 right-4 p-2 bg-black border-2 text-white hover:scale-105 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all rounded-full cursor-pointer z-10"
              >
                <X size={24} />
              </button>
              <div className="md:flex md:flex-row md:gap-10 px-2 relative overflow-y-auto overflow-x-hidden">
                {/* 左半部 */}
                <div className="bg-primary/20 p-5 rounded-2xl md:w-[40%] flex flex-col gap-2 mt-2 md:sticky md:top-0 h-max pb-4">
                  {selectedProject.pic && (
                    <img
                      src={selectedProject.pic}
                      className="w-full object-cover border-2 border-black rounded-2xl max-h-[30vh] md:max-h-[40vh]"
                      alt={selectedProject.title}
                    />
                  )}

                  <h2 className="mt-5 text-2xl md:text-3xl font-black">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.time && (
                    <p className="text-gray-500 font-heading mb-4">
                      {selectedProject.time}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-heading hashtag px-3 py-1"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {selectedProject.description}
                </div>
                {/* 右半部 */}
                <div className="md:flex-1 text-md leading-relaxed flex flex-col gap-5">
                  {selectedProject.projectInfo &&
                    selectedProject.projectInfo.length > 0 && (
                      <div className="flex flex-col gap-5 mt-2">
                        {selectedProject.projectInfo.map((info, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            {/* Title */}
                            {info.title && (
                              <h3 className="text-xl font-bold inline-block self-start px-2 py-1 border-l-5 border-primary">
                                {info.title}
                              </h3>
                            )}
                            {/* SubTitle */}
                            {info.subTitle && (
                              <h3 className="bg-secondary/20 px-1 relative text-md inline-block self-start py-1 font-bold">
                                {info.subTitle}
                              </h3>
                            )}
                            {/* Content */}
                            {info.content && (
                              <div className="flex flex-col gap-3">
                                {info.content}
                              </div>
                            )}
                            {/* List */}
                            {info.list && (
                              <ul className="list-disc list-inside space-y-2 ml-2">
                                {info.list.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            )}
                            {/* Image */}
                            {info.image && (
                              <div className="flex flex-col gap-4">
                                {info.image.map((img, i) => (
                                  <img
                                    key={i}
                                    src={img}
                                    alt={`${info.title}-${i}`}
                                    className="w-full h-auto object-cover rounded-xl"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  {/* 按鈕 */}
                  <div className="flex mt-1 justify-end gap-4 pt-2 pb-4 ">
                    {selectedProject.github && (
                      <Button
                        variant="secondary"
                        href={selectedProject.github}
                        target="_blank"
                      >
                        Github
                      </Button>
                    )}
                    {selectedProject.projectLink && (
                      <Button
                        variant="dark"
                        href={selectedProject.projectLink}
                        target="_blank"
                      >
                        Visit Website <ArrowRight size={20} />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
