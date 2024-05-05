export const webStyles = () => ({
  wrapper: {
    height: "70vh",
    padding: "5rem 8rem 0 8rem",
    "@media screen and (max-width:950px)": {
      display: "none",
    },
    "@media screen and (max-width:1215px)": {
      padding: "5rem 2rem 0 2rem",
    },
  },

  experianceBox: { width: "50em" },

  experianceDescription: { padding: "1em 0em" },
});

export const mobileStyles = () => ({
  wrapper: {
    height: "100vh",
    padding: "12rem 0.5rem 0 0.5rem",
    "@media screen and (min-width:950px)": {
      display: "none",
    },
  },

  experianceDescription: { padding: "1em 0em" },
});
