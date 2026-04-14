import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-4 font-heading pointer-events-none">
        <div className="relative max-w-7xl mx-auto w-full">
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-0 left-0 w-full flex items-center justify-between card-brutal p-4 pointer-events-auto"
              >
                <a
                  href="#"
                  className="text-2xl font-black tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  Yuna<span className="text-primary.">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-bold hover:text-black/60 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <button
                  className="md:hidden p-2 border-brutal hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isScrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: 90,
                  transition: { duration: 0.2 },
                }}
                className="absolute top-0 right-0 p-3 card-brutal pointer-events-auto hover:bg-black hover:text-white items-center justify-center -mr-2 md:mr-0 md:mt-0 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-28 px-4 font-heading flex flex-col items-center gap-6"
          >
            <div className="flex flex-col w-full max-w-sm gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="card-brutal p-6 text-center text-xl font-bold bg-white hover:bg-primary/20 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
 