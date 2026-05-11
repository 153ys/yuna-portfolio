import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useIsScrolled } from "../hooks/useIsScrolled";

const NAV_LINKS = [
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
] as const;

export const Navbar = () => {
  const isScrolled = useIsScrolled();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: hash } });
      return;
    }

    if (hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(hash.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-heading transition-all duration-300 ${
        isScrolled ? "pointer-events-auto" : "p-4 pointer-events-none"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`w-full mx-auto flex items-center justify-center transition-all duration-300 border-black ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b-2"
            : "max-w-7xl bg-white border-2 rounded-2xl pointer-events-auto"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between p-4 ${
            isScrolled ? "max-w-7xl" : ""
          }`}
        >
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "#top")}
            className="text-2xl font-black tracking-tight"
          >
            Yuna
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="relative group text-base md:text-xl font-bold inline-block"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 bottom-0 md:bottom-1 w-full h-2 md:h-5 bg-primary -z-10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left delay-150 duration-500 ease-out"></span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
