import { motion } from "framer-motion";
import { ReactNode } from "react";

export const MotionDiv = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
