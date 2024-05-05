// External dependencies
import { Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

// Internal dependencies
import { BottomBarPropTypes } from "./_types";
import { commonVariants } from "./_motion";
import { mobileStyles } from "./_style";

const MobileBottomBar = ({ socials }: BottomBarPropTypes) => {
  const classes = mobileStyles();
  return (
    <Grid
      item
      xs={1}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={classes.bottomBarWrapper}
    >
      <Grid
        item
        container
        justifyContent="space-between"
        component={motion.div}
        variants={commonVariants.bottomBar}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {socials.map((social) => (
          <Link href={social.href} target="_blank" passHref key={social.href}>
            <IconButton
              color="primary"
              component={motion.div}
              variants={commonVariants.bottomBarItem}
              sx={{ padding: 0 }}
            >
              {social.icon}
            </IconButton>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default MobileBottomBar;
