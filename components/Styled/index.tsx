"use client";
// External dependencies
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Card,
  Chip,
  TextareaAutosize,
  styled,
} from "@mui/material";

export const HorizontalLine = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "1px",
}));

export const VerticalLine = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "1px",
}));

export const ContactCard = styled(Card)(({ theme }) => ({
  background: "transparent",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(98, 98, 98, 0.03)"
      : "rgba(0, 0, 0, 0.05)",
}));

export const HighlightChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "customColor",
})<{ customColor?: string }>(
  ({ theme, customColor = theme.palette.primary.main }) => ({
    color: customColor,
    fontWeight: "500",
    fontSize: "1.11em",
  })
);

export const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1d1d1d5c" : "#37373814",
  marginRight: "2%",
  marginBottom: "2%",
  borderRadius: "8px",
  fontSize: "0.95em",
  fontWeight: 500,
}));

export const EmailHighlighter = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "flex-end",
  padding: "8px",
  borderRadius: 1,
  width: "100%",
  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  border:
    theme.palette.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.5)"
      : "1px solid rgba(0, 0, 0, 0.5)",
}));

export const ButtonContact = styled(motion(Button), {
  shouldForwardProp: (prop) => prop !== "customWidth",
})<{
  component: React.ElementType;
  customWidth?: string;
}>(({ theme, customWidth = "auto" }) => ({
  marginTop: "1.25em",
  borderRadius: 2,
  width: customWidth,
  textTransform: "none",
  background: "transparent",
  color: theme.palette.text.primary,
}));

export const TextArea = styled(TextareaAutosize)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: "transparent",
  padding: ".5em .875em",
  width: "100%",
  border: "none",
  borderRadius: "4px",
  marginTop: "1em",
  lineHeight: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  fontFamily: "inherit",
  letterSpacing: "inherit",
  outline:
    theme.palette.mode === "dark"
      ? "1px solid #ffffff3b"
      : "1px solid #0c0c0c3b",
  "&::placeholder": {
    color: theme.palette.text.primary,
  },
  "&:focus ": {
    // To change color of outline(similar effect as text fields)
    outline: `1px solid ${theme.palette.info.main}`,
  },
  "&:hover:not(:focus) ": {
    // To change color of outline when hover but not focused(similar effect as text fields)
    outline: `1px solid ${theme.palette.info.main}`,
  },
}));
