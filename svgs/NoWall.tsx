// External dependencies
import { useContext } from "react";

// Internal dependencies
import { ModeContext } from "../context/ThemeContext";

const NoWallIcon = () => {
  const { theme, wallpaperStatus } = useContext(ModeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="10 18.39 80.01 63.22"
      xmlSpace="preserve"
      width="1.4em"
      height="1.4em"
      fill={theme === "dark" ? "#ffffff" : "#000000"}
    >
      <g>
        {wallpaperStatus === "no" && (
          <path
            d="M0 0, L100 100"
            strokeWidth="5"
            stroke={theme === "dark" ? "#ffffff" : "#000000"}
          />
        )}
        <path d="M83.56,18.39H16.44c-3.55,0-6.44,2.89-6.44,6.44v50.34c0,3.55,2.89,6.44,6.44,6.44h67.13c3.55,0,6.44-2.89,6.44-6.44V24.83   C90,21.28,87.11,18.39,83.56,18.39z M16.44,22.99h67.13c1.01,0,1.84,0.82,1.84,1.84v45.65L67.53,52.6L56.38,63.75L34.94,42.32   L14.6,62.66V24.83C14.6,23.81,15.42,22.99,16.44,22.99z" />
        <circle cx="68.97" cy="36.44" r="5.98" />
      </g>
    </svg>
  );
};

export default NoWallIcon;
