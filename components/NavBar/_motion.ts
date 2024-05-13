import { NavBarVariantPropTypes } from "./_types";

export const webVariants = {
  navBarItem: {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  navMenu: {
    hidden: (staggerDir: 1 | -1) => ({
      display: "none", // Not Working on animation closing (BUG in Framer motion)
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -staggerDir,
        when: "afterChildren",
      },
      transitionEnd: {
        display: "none", // Patch for the above bug
      },
    }),
    visible: (staggerDir: 1 | -1) => ({
      display: "flex",
      transition: {
        staggerChildren: 0.25,
        staggerDirection: staggerDir,
      },
    }),
  },

  navMenuItem: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
};

export const mobileVariants = {
  navBar: {
    visible: ({ openNavMenu, bgColorforNav }: NavBarVariantPropTypes) => ({
      backgroundColor: bgColorforNav,
      height: openNavMenu ? "auto" : "10%",
      transition: {
        height: {
          duration: 0.5,
        },
        backgroundColor: {
          delay: openNavMenu ? 0 : 0.3,
        },
      },
    }),
  },

  navBarItem: {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    transition: { type: "spring", duration: 1 },
  },

  navMenu: {
    hidden: (staggerDir: 1 | -1) => ({
      display: "none", // Not Working on animation closing (BUG in Framer motion)
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -staggerDir,
        when: "afterChildren",
      },
      transitionEnd: {
        display: "none", // Patch for the above bug
      },
    }),
    visible: (staggerDir: 1 | -1) => ({
      display: "flex",
      transition: {
        staggerChildren: 0.2,
        staggerDirection: staggerDir,
      },
    }),
  },

  navMenuItem: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },

  navMenuLine: {
    hidden: { opacity: 0, height: "0%" },
    visible: { opacity: 1, height: "100%" },
    transition: { type: "tween", ease: "easeInOut", duration: 0.8 },
  },
};
