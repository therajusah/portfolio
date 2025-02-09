import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      setVisible(direction < 0 || current < 0.05);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-transparent border-gray-400 rounded-full shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
            className
          )}
          style={{ backgroundColor: '#F5F5F4' }}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 hover:text-blue-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm sm:block">{navItem.name}</span>
            </a>
          ))}
          <a href={"https://drive.google.com/file/d/1Oixi26ixbYfbUt_16g77BnLpe48YGGRw/view?usp=sharing"}>
            <button className="px-4 py-2 text-sm font-medium rounded-full sm:text-center">
              <span>Resume</span>
              <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
