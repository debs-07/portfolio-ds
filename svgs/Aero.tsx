// External dependencies
import { motion } from "framer-motion";
import { useContext } from "react";

// Internal dependencies
import { ModeContext } from "../context/ThemeContext";

const AeroIcon = ({ onLogo, ...restProps }: any) => {
  const { theme } = useContext(ModeContext);
  const fillColor = theme === "dark" ? "#ffffff" : "#000000";
  const reverseFillColor = theme === "dark" ? "#000000" : "#ffffff";

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="5 7.09 90 82.7"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
      width="100%"
      height="100%"
      fill={onLogo ? reverseFillColor : fillColor}
      key={fillColor}
      {...restProps}
    >
      <path d="M87.774,41.142H63.378L34.189,7.087h-4.865l12.162,34.055H17.162L5,28.979v38.918l12.162-12.162h24.324L29.324,89.79h4.865  l29.188-34.055h24.396c3.99,0,7.226-3.232,7.226-7.226v-0.143C95,44.374,91.765,41.142,87.774,41.142" />
    </motion.svg>
  );
};

export default AeroIcon;
