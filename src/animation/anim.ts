export const background = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.5,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const menuSide = {
  initial: { y: "calc(-100% - 25%)" },
  enter: {
    y: "0%",
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    y: "calc(-100% - 25%)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0, 0.75, 0],
    },
  },
};

export const textAnimation = {
  initial: { y: "100px", rotateX: 90, opacity: 0 },
  enter: (index: number) => ({
    y: "0",
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.25 + index * 0.05,
    },
  }),
  exit: (index: number) => ({
    y: "0",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0, 0.75, 1],
      delay: 0.1 * index,
    },
  }),
};

// export const textAnimation = {
//   initial: {
//     rotateX: 90,
//     opacity: 0,
//   },
//   enter: (i: number) => ({
//     rotateX: 0,
//     opacity: 1,
//     transition: {
//       duration: 3.6,
//       ease: [0.25, 1, 0.5, 1],
//       delay: 0.25 + i * 0.05,
//     },
//   }),
//   exit: {
//     opacity: 0,
//     transition: { duration: 2.7, ease: [0.25, 0, 0.75, 1] },
//   },
// };

export const mountAnim = { initial: "initial", animate: "enter", exit: "exit" };
