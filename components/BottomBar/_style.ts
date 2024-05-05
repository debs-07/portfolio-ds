export const webStyles = () => ({
  bottomBarWrapper: {
    paddingBottom: "5em",
    "@media screen and (max-width:950px)": {
      display: "none",
    },
  },

  socialsBar: { width: "20%", paddingRight: "1%" },

  copyright: { textAlign: "center" },
});

export const mobileStyles = () => ({
  bottomBarWrapper: {
    "@media screen and (min-width:950px)": {
      display: "none",
    },
  },
});
