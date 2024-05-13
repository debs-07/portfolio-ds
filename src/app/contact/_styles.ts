export const webStyles = () => ({
  wrapper: {
    height: "70vh",
    "@media screen and (max-width:950px)": {
      display: "none",
    },
  },

  emailWrapper: { height: "15%" },

  emailIcon: { fontSize: "1.5em", marginRight: "0.5em" },

  emailText: { fontSize: "1.25em", margin: "0" },

  cardWrapper: { height: "85%", width: "30%" },

  cardHeader: { fontSize: "1em" },

  inputAdornment: { color: "inherit" },
});

export const mobileStyles = () => ({
  wrapper: {
    height: "100%",
    padding: "10rem 0.5rem 0 0.5rem",
    "@media screen and (min-width:950px)": {
      display: "none",
    },
  },

  emailWrapper: { paddingBottom: "64px" },

  emailIcon: { fontSize: "1.5em", marginRight: "0.5em" },

  emailText: { fontSize: "1.25em", margin: "0" },

  cardHeader: { fontSize: "1em" },

  inputAdornment: { color: "inherit" },
});
