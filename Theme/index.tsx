"use client";

// External dependencies
import { Comfortaa, Major_Mono_Display } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import { useContext } from "react";

// Internal dependencies
import { ModeContext } from "../context/ThemeContext";

const comfortaa = Comfortaa({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const majorMonoDisplay = Major_Mono_Display({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#333333",
      contrastText: "#1f1f1f",
    },
    secondary: {
      main: "#000000",
      contrastText: "#080808",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#454545",
      secondary: "#fafafa",
    },
    info: {
      main: "#454545",
    },
  },
  typography: {
    h3: {
      color: "#000000",
      fontFamily: majorMonoDisplay.style.fontFamily,
      fontWeight: 700,
    },
    h4: {
      color: "#454545",
      fontFamily: majorMonoDisplay.style.fontFamily,
      fontWeight: 700,
    },
    h5: {
      color: "#454545",
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 600,
    },
    body1: {
      color: "#333333",
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 500,
      fontSize: "1.05em",
    },
    body2: {
      color: "#454545",
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 400,
    },
    button: {
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 500,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "1em",
          "& .MuiInputBase-input": {
            "&::placeholder": {
              color: "#454545",
              opacity: 1,
            },
            "&.MuiOutlinedInput-input": {
              color: "#343a40",
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 0 #ffffff inset",
                WebkitTextFillColor: "#343a40",
                // To fix white border around text in textfield with adornment when populate data from history
                WebkitBackgroundClip: "text",
              },
            },
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            "&.Mui-focused fieldset": {
              border: "1px solid #343a40",
            },
          },
        },
      },
    },
  },
};

const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#dfdfdf",
      contrastText: "#d1d1d1",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#dfdfdf",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#888888",
      secondary: "#fafafa",
    },
    info: {
      main: "#888888",
    },
  },
  typography: {
    h3: {
      color: "#ffffff",
      fontFamily: majorMonoDisplay.style.fontFamily,
      fontWeight: 700,
    },
    h4: {
      color: "#888888",
      fontFamily: majorMonoDisplay.style.fontFamily,
      fontWeight: 700,
    },
    h5: {
      color: "#888888",
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 600,
    },
    body1: {
      color: "#dfdfdf",
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 500,
      fontSize: "1.05em",
    },
    body2: {
      color: "#888888",
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 400,
    },
    button: {
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 500,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "1em",
          "& .MuiInputBase-input": {
            "&::placeholder": {
              color: "#888888",
              opacity: 1,
            },
            "&.MuiOutlinedInput-input": {
              color: "#dfdfdf",
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 0 #000000 inset",
                WebkitTextFillColor: "#888888",
                // To fix white border around text in textfield with adornment when populate data from history
                WebkitBackgroundClip: "text",
              },
            },
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            "&.Mui-focused fieldset": {
              border: "1px solid #888888",
            },
          },
        },
      },
    },
  },
};

const CustomThemeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { theme } = useContext(ModeContext);

  const muiTheme = useTheme();
  const projectTheme = createTheme(
    muiTheme,
    theme === "dark" ? darkTheme : lightTheme
  );

  return <ThemeProvider theme={projectTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
