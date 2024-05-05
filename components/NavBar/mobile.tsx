// External dependencies
import { useContext } from "react";
import { Grid, Typography, IconButton, Button, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Internal dependencies
import { NavBarPropTypes } from "./_types";
import { ModeContext } from "../../context/ThemeContext";
import { mobileStyles } from "./_styles";
import { mobileVariants } from "./_motion";
import { VerticalLine } from "../Styled";
import ModeIcon from "../../svgs/Mode";
import Menu from "../../svgs/Menu";
import AeroIcon from "../../svgs/Aero";
import NoWallIcon from "../../svgs/NoWall";

const MobileNavBar = ({
  navLinks,
  navLinkSelected,
  openNavMenu,
  toggleNavMenu,
  changeNavLink,
}: NavBarPropTypes) => {
  const { theme, toggleTheme, toggleWallpaperStatus } = useContext(ModeContext);
  const classes = mobileStyles(theme);

  const opacNav = theme === "dark" ? "#000000" : "#ffffff";
  const transparentNav = theme === "dark" ? "#00000000" : "#ffffff00";

  const bgColorforNav = openNavMenu ? opacNav : transparentNav;

  const navLinkClickHandler = (navLinkPath: string) => {
    changeNavLink(navLinkPath);
    toggleNavMenu(false);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      component={motion.div}
      custom={{ openNavMenu, bgColorforNav }}
      variants={mobileVariants.navBar}
      animate="visible"
      sx={classes.navBar}
    >
      {/* Nav Bar Items*/}
      <Grid item xs={2} container justifyContent="space-between">
        <Grid item xs={2} sx={classes.dsLogo}>
          <Typography
            variant="h3"
            component={motion.div}
            variants={mobileVariants.navBarItem}
            transition={mobileVariants.navBarItem.transition}
            initial="hidden"
            animate="visible"
            sx={classes.dsLogoText}
          >
            DS
          </Typography>
          <AeroIcon onLogo={true} style={classes.dsLogoAero} />
        </Grid>
        <IconButton
          disableRipple
          onClick={() => toggleNavMenu(!openNavMenu)}
          component={motion.div}
          variants={mobileVariants.navBarItem}
          transition={mobileVariants.navBarItem.transition}
          initial="hidden"
          animate="visible"
          sx={classes.navMenuIcon}
        >
          <Menu openNavMenu={openNavMenu} />
        </IconButton>
      </Grid>
      {/* Nav Menu */}
      <Grid
        key="navMenu"
        item
        xs={10}
        container
        direction="column"
        justifyContent="space-between"
        component={motion.div}
        custom={1}
        variants={mobileVariants.navMenu}
        initial="hidden"
        animate={openNavMenu ? "visible" : "hidden"}
        sx={classes.navMenu}
      >
        <Grid
          item
          xs={5}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          {/* Nav Menu Items*/}
          {navLinks.map((navLink) => (
            <Link href={navLink.path} passHref key={`${navLink.name}link`}>
              <AnimatePresence mode="wait">
                <Button
                  key={`mobile ${navLink.name}`}
                  disableRipple
                  color="secondary"
                  variant="text"
                  onClick={() => navLinkClickHandler(navLink.path)}
                  component={motion.div}
                  variants={mobileVariants.navMenuItem}
                  sx={classes.navMenuItem}
                >
                  {navLink.path === navLinkSelected && (
                    <Box
                      component={motion.span}
                      layoutId="mobile-bubble"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 1,
                      }}
                      sx={classes.spanBubble}
                    />
                  )}
                  {navLink.name}
                </Button>
              </AnimatePresence>
            </Link>
          ))}
          <IconButton
            key="modeButton"
            disableRipple
            onClick={toggleTheme}
            component={motion.div}
            variants={mobileVariants.navMenuItem}
            sx={classes.modeIcon}
          >
            <ModeIcon />
          </IconButton>
          <IconButton
            disableRipple
            onClick={toggleWallpaperStatus}
            component={motion.div}
            variants={mobileVariants.navMenuItem}
            sx={classes.wallIcon}
          >
            <NoWallIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={10}>
            <VerticalLine
              variants={mobileVariants.navMenuLine}
              transition={mobileVariants.navMenuLine.transition}
            />
          </Grid>
          <Grid
            item
            xs={2}
            component={motion.div}
            variants={mobileVariants.navMenuItem}
            sx={classes.copyright}
          >
            © / 2024
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileNavBar;
