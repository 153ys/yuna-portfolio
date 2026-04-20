import { motion } from "framer-motion";
import { useIsScrolled } from "../hooks/useIsScrolled";

export const Navbar = () => {
  const isScrolled = useIsScrolled();
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

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
          <a href="#" className="text-2xl font-black tracking-tight">
            Yuna
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-md md:text-lg font-bold hover:text-black/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
