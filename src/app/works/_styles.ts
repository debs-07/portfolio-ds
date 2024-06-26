export const webStyles = () => ({
  wrapper: {
    height: "70%",
    "@media screen and (max-width:950px)": {
      display: "none",
    },
  },

  section: { fontSize: "2rem" },
});

export const mobileStyles = () => ({
  wrapper: {
    height: "100%",
    "@media screen and (min-width:950px)": {
      display: "none",
    },
  },

  section: { fontSize: "2rem" },
});
