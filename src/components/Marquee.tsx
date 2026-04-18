import { motion } from "framer-motion";

const phrases = [
  "FRONTEND DEVELOPER",
  "✦",
  "UI/UX DESIGNER",
  "✦",
  "VISUAL DESIGNER",
  "✦",
  "FRONTEND DEVELOPER",
  "✦",
  "UI/UX DESIGNER",
  "✦",
  "VISUAL DESIGNER",
  "✦",
];

export const Marquee = () => {
  return (
    <div className="w-full bg-accent/20 border-y-2 border-black py-2 overflow-hidden flex whitespace-nowrap items-center select-none z-10 relative">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25, // 數字越小跑越快
        }}
      >
        {/* 第一組 */}
        <div className="flex items-center justify-around min-w-max px-4 gap-8">
          {phrases.map((phrase, index) => (
            <span
              key={`first-${index}`}
              className="text-xl font-bold font-heading tracking-wider"
            >
              {phrase}
            </span>
          ))}
        </div>
        {/* 第二組 (完全重複，為了無縫銜接) */}
        <div className="flex items-center justify-around min-w-max px-4 gap-8">
          {phrases.map((phrase, index) => (
            <span
              key={`second-${index}`}
              className="text-xl font-bold font-heading tracking-wider"
            >
              {phrase}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
