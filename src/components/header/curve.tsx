import { motion } from "motion/react";

const Curve = () => {
  const initialPath = `M0 0 L${window.innerWidth} 0 Q${window.innerWidth / 2} ${window.innerHeight / 4} 0 0`;
  const targetPath = `M0 0 L${window.innerWidth} 0 Q${window.innerWidth / 2} 0 0 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.75, 0],
      },
    },
  };
  return (
    <svg className={"w-full h-1/4 absolute -bottom-1/4 fill-black stroke-0"}>
      <motion.path
        variants={pathAnimation}
        exit="exit"
        animate="enter"
        initial="initial"
      />
    </svg>
  );
};

export { Curve };
