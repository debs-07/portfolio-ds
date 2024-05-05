export const webStyles = () => ({
  wrapper: {
    minHeight: "75vh",
    padding: "5rem 7rem 0 7rem",
    overflow: "auto",
    "@media screen and (max-width:950px)": {
      display: "none",
    },
    "@media screen and (max-width:1215px)": {
      padding: "5rem 2rem 0 2rem",
    },
  },

  container: {
    position: "relative",
    padding: "0em 0em 0em 5em",
    "@media screen and (max-width:1215px)": {
      padding: "0",
      justifyContent: "center",
    },
  },

  section: { width: "calc(1vw * 0.25 + 900px)" },

  containerTop: {
    paddingBottom: "3em",
  },

  headerText: { fontSize: "3.25em", position: "relative" },

  headerAero: { position: "absolute", height: "0.5em", width: "0.5em" },

  subHeaderText: {
    fontSize: "1.25em",
    paddingLeft: ".1em",
    letterSpacing: ".1em",
  },

  containerBottom: {
    paddingLeft: ".1em",
    paddingRight: "15em",
  },

  descriptionText: {
    fontSize: "0.9em",
    letterSpacing: ".1em",
  },

  chipWithIcon: {
    display: "flex",
    alignItems: "center",
  },
});

export const mobileStyles = () => ({
  wrapper: {
    height: "100vh",
    padding: "10rem 0.5rem 0 0.5rem",
    overflow: "auto",
    "@media screen and (min-width:950px)": {
      display: "none",
    },
  },

  headerText: {
    fontSize: "1.9em",
    padding: ".5em 0em 1em 0em",
    position: "relative",
  },

  headerAero: { position: "absolute", height: "0.5em", width: "0.5em" },

  subHeaderText: { fontSize: "1.4em" },

  descriptionText: {
    fontSize: "1.2em",
    lineHeight: "2em",
    letterSpacing: "0.1em",
  },

  chipWithIcon: {
    display: "flex",
    alignItems: "center",
  },
});
