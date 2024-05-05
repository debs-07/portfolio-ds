"use client";

// External dependencies
import { Container, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Internal dependencies
import NavBar from "../NavBar";
import { ModeContext } from "../../context/ThemeContext";
import { commonStyles } from "./_styles";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
];

const PageWrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();
  const { theme, wallpaperStatus } = useContext(ModeContext);

  const classes = commonStyles(theme, wallpaperStatus);

  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [navLinkSelected, setNavLinkSelected] = useState(pathname);

  const wideScreen = useMediaQuery("(min-width: 950px)");

  const toggleNavMenu = (open: boolean) => setOpenNavMenu(open);
  const changeNavLink = (pathName: string) => setNavLinkSelected(pathName);

  // This effect closes nav menu if its opened when screen changed from mobile to web size
  useEffect(() => {
    if (wideScreen) setOpenNavMenu(false);
  }, [wideScreen]);

  return (
    <Container maxWidth={false} sx={classes.pageWrapper}>
      <NavBar
        navLinks={navLinks}
        navLinkSelected={navLinkSelected}
        openNavMenu={openNavMenu}
        toggleNavMenu={toggleNavMenu}
        changeNavLink={changeNavLink}
      />
      {children}
    </Container>
  );
};

export default PageWrapper;
