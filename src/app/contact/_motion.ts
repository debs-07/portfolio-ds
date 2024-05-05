export const webVariants = {
  wrapper: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      type: "spring",
      duration: 0.8,
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
