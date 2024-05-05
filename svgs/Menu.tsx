// External dependencies
import { motion } from "framer-motion";
import { useContext } from "react";

// Internal dependencies
import { ModeContext } from "../context/ThemeContext";

const DarkIcon = ({ openNavMenu }: { openNavMenu: boolean }) => {
  const { theme } = useContext(ModeContext);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="24.6 30 55 40"
      fill={theme === "dark" ? "#dfdfdf" : "#000000"}
    >
      <motion.path
        d="M71.9,30H28.1a3.5,3.5,0,0,0,0,7H71.9a3.5,3.5,0,0,0,0-7Z"
        animate={
          openNavMenu
            ? {
                rotate: 45,
                translateY: 16.75,
              }
            : {
                rotate: 0,
                translateY: 0,
              }
        }
      />
      <motion.path
        d="M71.9,46.5H28.1a3.5,3.5,0,1,0,0,7H71.9a3.5,3.5,0,0,0,0-7Z"
        initial={{ opacity: 0 }}
        animate={{ opacity: openNavMenu ? 0 : 1 }}
      />
      <motion.path
        d="M75.4,66.5A3.5,3.5,0,0,0,71.9,63H28.1a3.5,3.5,0,1,0,0,7H71.9A3.5,3.5,0,0,0,75.4,66.5Z"
        animate={
          openNavMenu
            ? {
                rotate: -45,
                translateY: -16.75,
              }
            : {
                rotate: 0,
                translateY: 0,
              }
        }
      />
    </motion.svg>
  );
};

export default DarkIcon;
