export const webVariants = {
  leftBox: {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 2,
      bounce: 0,
    },
  },

  rightBox: {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 2,
      bounce: 0,
    },
  },
};

export const mobileVariants = {
  wrapper: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
