"use client";

// External dependencies
import React, { useEffect, useState } from "react";
import { createContext } from "react";

// Internal dependencies
import { ModeContextTypes } from "./_types";

export const ModeContext = createContext<ModeContextTypes>({
  theme: "dark",
  wallpaperStatus: "yes",
  toggleTheme: () => {},
  toggleWallpaperStatus: () => {},
});

export const ModeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [theme, setTheme] = useState<string>("dark");
  const [wallpaperStatus, setWallpaperStatus] = useState<string>("no");

  useEffect(() => {
    if (typeof window !== undefined) {
      setTheme(window?.localStorage?.getItem("theme") || "dark");
      setWallpaperStatus(
        window?.localStorage?.getItem("wallpaperStatus") || "no"
      );
    }
  }, []);

  const toggleTheme = () =>
    setTheme((prevState) => {
      const newTheme = prevState === "dark" ? "light" : "dark";
      window?.localStorage?.setItem("theme", newTheme);
      return newTheme;
    });

  const toggleWallpaperStatus = () =>
    setWallpaperStatus((prevState) => {
      const newWallpaperStatus = prevState === "yes" ? "no" : "yes";
      window?.localStorage?.setItem("wallpaperStatus", newWallpaperStatus);
      return newWallpaperStatus;
    });

  return (
    <ModeContext.Provider
      value={{
        theme,
        toggleTheme,
        wallpaperStatus,
        toggleWallpaperStatus,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};
