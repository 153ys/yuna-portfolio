import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type ButtonModeProps = HTMLMotionProps<"button"> & {
  href?: never;
  variant?: "primary" | "secondary" | "outline" | "dark";
};

type AnchorModeProps = HTMLMotionProps<"a"> & {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
};
type ButtonProps = ButtonModeProps | AnchorModeProps;

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 font-heading font-bold cursor-pointer border-brutal transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-primary text-black shadow-brutal hover:shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px]",
    secondary:
      "bg-white text-black shadow-brutal hover:shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px]",
    outline:
      "bg-transparent text-black border-3 border-black hover:bg-black hover:text-white",
    dark: "bg-black text-white hover:translate-y-[2px] hover:translate-x-[2px] ",
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
