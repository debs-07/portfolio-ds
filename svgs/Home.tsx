// External dependencies
import { motion } from "framer-motion";
import { useContext } from "react";

// Internal dependencies
import { ModeContext } from "../context/ThemeContext";

const HomeIcon = () => {
  const { theme } = useContext(ModeContext);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30.55 29.96 38.9 40.04"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
    >
      <motion.g>
        <motion.g data-name="Black hole 1">
          <motion.path d="M57.17,57.18c-1.62,0-5.86-4-8.41-6.53a63.53,63.53,0,0,1-4.92-5.45c-1.78-2.28-1.88-3-1.46-3.41,1.08-1.09,6,3.53,8.86,6.37S58.7,55.94,57.62,57A.61.61,0,0,1,57.17,57.18Zm-.07-1h0ZM43.36,42.76a41.93,41.93,0,0,0,6.1,7.18,42.08,42.08,0,0,0,7.18,6.11,41.54,41.54,0,0,0-6.1-7.18A42.08,42.08,0,0,0,43.36,42.76Z" />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.2,
            }}
            stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
            d="M68.41,68.86c-.85,0-2.7-.74-7.06-4.15a162.38,162.38,0,0,1-14-12.65,164.15,164.15,0,0,1-12.66-14c-5.1-6.53-4.21-7.41-3.84-7.79s1.27-1.27,7.8,3.83a164.36,164.36,0,0,1,14,12.66,162.64,162.64,0,0,1,12.66,14c5.1,6.52,4.21,7.41,3.84,7.79A.92.92,0,0,1,68.41,68.86ZM31.71,31a.43.43,0,0,0-.17,0c-.45,1.09,5.14,9,16.51,20.37S67.22,68.24,68.43,67.84c.4-1.21-5.19-9.09-16.48-20.38C41,36.54,33.3,31,31.71,31ZM68.46,67.83Z"
          />
          <motion.path
            d="M56,43.4a8.32,8.32,0,0,0-11.78,0c-.89,1.11,1.64,3.64,4.89,6.89S55,56.19,56,55.19A8.33,8.33,0,0,0,56,43.4ZM56.34,47a.39.39,0,0,1-.52-.2A6.16,6.16,0,0,0,54.5,44.9a6.23,6.23,0,0,0-3.77-1.82A.4.4,0,0,1,50.5,43a.36.36,0,0,1-.11-.32.38.38,0,0,1,.43-.34,7,7,0,0,1,4.24,2,7.23,7.23,0,0,1,1.48,2.16A.39.39,0,0,1,56.34,47Z"
            stroke="#FFFFFF"
          />
          <motion.path d="M57.12,48.57a.51.51,0,0,1-.36-.15.5.5,0,0,1,0-.7l4.45-4.45a.5.5,0,0,1,.71,0,.51.51,0,0,1,0,.71l-4.45,4.44A.5.5,0,0,1,57.12,48.57Z" />
          <motion.path d="M32.54,60.91a.52.52,0,0,1-.35-.14.5.5,0,0,1,0-.71l4.45-4.45a.5.5,0,0,1,.7,0,.5.5,0,0,1,0,.71L32.9,60.77A.54.54,0,0,1,32.54,60.91Z" />
          <motion.path d="M55,38.45a.5.5,0,0,1-.35-.85l5.23-5.23a.5.5,0,0,1,.7,0,.5.5,0,0,1,0,.71L55.36,38.3A.51.51,0,0,1,55,38.45Z" />
          <motion.path d="M42,57.69a.5.5,0,0,1-.35-.15.51.51,0,0,1,0-.71l5.23-5.22a.49.49,0,0,1,.7.7l-5.22,5.23A.51.51,0,0,1,42,57.69Z" />
          <motion.path d="M62.23,31.22a.5.5,0,0,1-.35-.14.55.55,0,0,1-.15-.36.5.5,0,0,1,.85-.35.47.47,0,0,1,.15.35.51.51,0,0,1-.15.36A.5.5,0,0,1,62.23,31.22Z" />
          <motion.path d="M40.1,59.58a.65.65,0,0,1-.19,0,.57.57,0,0,1-.16-.11.51.51,0,0,1-.15-.35.55.55,0,0,1,.15-.36.54.54,0,0,1,.16-.1.51.51,0,0,1,.55.1.54.54,0,0,1,.14.36.5.5,0,0,1-.14.35.62.62,0,0,1-.17.11A.58.58,0,0,1,40.1,59.58Z" />
          <motion.path d="M35.65,70a.49.49,0,0,1-.35-.15.51.51,0,0,1-.15-.35.5.5,0,0,1,.15-.35.51.51,0,0,1,.55-.11.42.42,0,0,1,.16.11.51.51,0,0,1,0,.7.42.42,0,0,1-.16.11A.45.45,0,0,1,35.65,70Z" />
          <motion.path d="M61.12,38.56a.5.5,0,0,1-.35-.85L68,30.48a.51.51,0,0,1,.71,0,.5.5,0,0,1,0,.71l-7.23,7.23A.5.5,0,0,1,61.12,38.56Z" />
          <motion.path d="M39.55,66.14a.51.51,0,0,1-.36-.15.5.5,0,0,1,0-.7l7.23-7.23a.5.5,0,0,1,.71,0,.5.5,0,0,1,0,.7L39.9,66A.49.49,0,0,1,39.55,66.14Z" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export default HomeIcon;
