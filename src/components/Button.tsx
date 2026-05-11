import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type ButtonModeProps = HTMLMotionProps<"button"> & {
  href?: never;
  variant?: "primary" | "secondary" | "accent" | "outline" | "dark";
};

type AnchorModeProps = HTMLMotionProps<"a"> & {
  href: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "dark";
};
type ButtonProps = ButtonModeProps | AnchorModeProps;

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 md:px-6 md:py-3 font-heading font-bold cursor-pointer border-brutal transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "hover:bg-accent bg-primary text-black shadow-brutal hover:shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px]",
    secondary:
      "hover:bg-primary/50 bg-white text-black shadow-brutal hover:shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px]",
    accent:
      "bg-accent text-black shadow-brutal hover:shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px]",
    outline:
      "bg-transparent text-black border-3 border-black hover:bg-black hover:text-white",
    dark: "bg-black hover:bg-accent text-white hover:translate-y-[2px] hover:text-black hover:translate-x-[2px] ",
  };

  const finalClassName = `${baseClasses} ${variants[variant]} ${className}`;

  if ("href" in props) {
    return (
      <motion.a
        className={finalClassName}
        whileTap={{ scale: 0.98 }}
        {...(props as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={finalClassName}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
