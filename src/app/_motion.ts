export const webVariants = {
  wrapper: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      type: "spring",
      duration: 5,
      bounce: 0,
    },
  },

  aero: {
    visible: { left: ["0%", "100%"], opacity: [1, 0] },
    transition: { type: "tween", ease: "easeInOut", duration: 5 },
  },
};

export const mobileVariants = {
  wrapper: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      type: "spring",
      duration: 2,
      bounce: 0,
    },
  },

  aero: {
    visible: { left: ["0%", "100%"], opacity: [1, 0] },
    transition: { type: "tween", ease: "easeInOut", duration: 5 },
  },
};
