export const webStyles = (theme: string) => ({
  navBar: {
    height: "25vh",
    padding: "5.5rem 7rem 3.5rem 7rem",
    "@media screen and (max-width:950px)": {
      display: "none",
    },
    "@media screen and (max-width:1215px)": {
      padding: "5rem 2rem 0 2rem",
      alignItems: "flex-start",
    },
  },

  dsLogo: { display: "flex", position: "relative" },

  dsLogoText: { fontSize: "2em" },

  dsLogoAero: { position: "absolute", height: "1em", width: "1em", top: "32%" },

  navMenuItemsWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media screen and (max-width:950px)": {
      display: "none",
    },
  },

  navMenuItem: {
    textTransform: "none",
    marginRight: "1em",
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: ".40em 0.90em",
    zIndex: 2,
  },

  spanBubble: {
    backgroundColor: theme === "dark" ? "#333333" : "#cccccc",
    borderRadius: "999px",
    position: "absolute",
    zIndex: -1,
    inset: 0,
  },

  modeIcon: {
    marginRight: "0.5em",
    "&:hover": { backgroundColor: "transparent" },
  },

  wallIcon: {
    "&:hover": { backgroundColor: "transparent" },
  },
});

export const mobileStyles = (theme: string) => ({
  navBar: {
    inset: 0,
    position: "absolute",
    zIndex: 2,
    width: "-webkit-fill-available",
    padding: "2.5rem 1.5rem 0 1.4rem",
    "@media screen and (min-width:950px)": {
      display: "none",
    },
  },

  dsLogo: { display: "flex", position: "relative", height: "min-content" },

  dsLogoText: { fontSize: "2em" },

  dsLogoAero: { position: "absolute", height: "1em", width: "1em", top: "32%" },

  navMenuIcon: {
    padding: "0",
    width: "1em",
    height: "1em",
    "&:hover": { backgroundColor: "transparent" },
  },

  navMenu: {
    "& a": {
      WebkitTapHighlightColor: "transparent",
    },
  },

  navMenuItem: {
    textTransform: "none",
    marginBottom: "1em",
    padding: ".40em 0.90em",
    zIndex: 2,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  spanBubble: {
    backgroundColor: theme === "dark" ? "#333333" : "#cccccc",
    borderRadius: "999px",
    position: "absolute",
    zIndex: -1,
    inset: 0,
  },

  modeIcon: {
    marginBottom: "0.5em",
    "&:hover": { backgroundColor: "transparent" },
  },

  wallIcon: {
    "&:hover": { backgroundColor: "transparent" },
  },

  copyright: {
    padding: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
