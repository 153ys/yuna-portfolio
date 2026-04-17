import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";

const projectsData = [
  {
    title: "PetPetNi  寵物社交平台",
    time: "2025/11~2026/1",
    tags: [
      "Vue.js",
      "Pinia",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "GIT",
    ],
    description: [
      "PetPetNi 是以寵物為核心的社群平台，整合了社群貼文、即時聊天、活動揪團、配對功能及 AI 助手，串聯線上社群互動與線下生活情境，打造高黏著度的寵物社交生態圈。",
    ],
    pic: "/petpetni_image_image.jpg",
    github: "https://github.com/153ys/PetPetNi",
    projectLink: "https://pet-pet-ni.vercel.app/",
  },
  {
    title: "Projects",
    time: "",
    tags: ["tag"],
    description: ["專案描述"],
    pic: "",
  },
];

export default function Projects() {
  return (
    <section className="px-6 max-w-7xl mx-auto flex-wrap flex gap-8">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row w-full card-brutal gap-8 md:gap-10 shadow-brutal sm:p-6 p-4"
        >
          <a
            href={project.projectLink}
            target="_blank"
            className="card-brutal hover:scale-102 transition-all md:h-90 h-50 p-2 w-full md:w-1/2"
          >
            <img
              src={project.pic}
              alt={project.title}
              className="hover:cursor-pointer"
            />
          </a>
          <div className="flex gap-4 flex-col w-full md:w-1/2">
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-heading shadow-brutal-sm bg-primary border-brutal px-2 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="h-full flex flex-col justify-between">
              <p>{project.description}</p>
              <div className="flex gap-3  self-end">
                <Button
                  variant="secondary"
                  href={project.github}
                  target="_blank"
                >
                  Github
                  <ArrowRight size={20} />
                </Button>
                <Button variant="dark" href="" className="px-5">
                  Read More <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
