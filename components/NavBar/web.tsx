// External dependencies
import { Grid, Typography, IconButton, Button, Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";

// Internal dependencies
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ModeContext } from "../../context/ThemeContext";
import { NavBarPropTypes } from "./_types";
import { webStyles } from "./_styles";
import { webVariants } from "./_motion";
import ModeIcon from "../../svgs/Mode";
import AeroIcon from "../../svgs/Aero";
import NoWallIcon from "../../svgs/NoWall";

const WebNavBar = ({
  navLinks,
  navLinkSelected,
  changeNavLink,
}: NavBarPropTypes) => {
  const { theme, toggleTheme, toggleWallpaperStatus } = useContext(ModeContext);
  const classes = webStyles(theme);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={classes.navBar}
    >
      {/* Nav Bar Items*/}
      <Grid item xs={2} sx={classes.dsLogo}>
        <Typography
          variant="h3"
          component={motion.div}
          variants={webVariants.navBarItem}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          sx={classes.dsLogoText}
        >
          DS
        </Typography>
        <AeroIcon onLogo={true} style={classes.dsLogoAero} />
      </Grid>
      {/* Nav Menu Items Wrapper*/}
      <Grid
        item
        xs={4}
        component={motion.div}
        variants={webVariants.navMenu}
        custom={-1}
        initial="hidden"
        animate="visible"
        sx={classes.navMenuItemsWrapper}
      >
        {/* Nav Menu Items*/}
        {navLinks.map((navLink) => (
          <Link href={navLink.path} passHref key={navLink.name}>
            <Button
              key={`mobile ${navLink.name}`}
              color="secondary"
              variant="text"
              onClick={() => changeNavLink(navLink.path)}
              disableRipple
              component={motion.div}
              variants={webVariants.navMenuItem}
              sx={classes.navMenuItem}
            >
              {navLink.path === navLinkSelected && (
                <Box
                  component={motion.span}
                  layoutId="web-bubble"
                  transition={{ type: "spring", bounce: 0.2, duration: 1 }}
                  sx={classes.spanBubble}
                />
              )}
              {navLink.name}
            </Button>
          </Link>
        ))}
        <IconButton
          disableRipple
          onClick={toggleTheme}
          component={motion.div}
          variants={webVariants.navMenuItem}
          sx={classes.modeIcon}
        >
          <ModeIcon />
        </IconButton>
        <IconButton
          disableRipple
          onClick={toggleWallpaperStatus}
          component={motion.div}
          variants={webVariants.navMenuItem}
          sx={classes.wallIcon}
        >
          <NoWallIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default WebNavBar;
