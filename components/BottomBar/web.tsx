// External dependencies
import { Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

// Internal dependencies
import { HorizontalLine } from "../Styled";
import { BottomBarPropTypes } from "./_types";
import { commonVariants } from "./_motion";
import { webStyles } from "./_style";

const WebBottomBar = ({ socials }: BottomBarPropTypes) => {
  const classes = webStyles();
  return (
    <Grid
      item
      xs={4}
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
        sx={classes.socialsBar}
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
      <Grid
        item
        component={motion.div}
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "55%" }}
        transition={{ duration: 1, delay: 1 }}
      >
        <HorizontalLine />
      </Grid>
      <Grid
        item
        component={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
        sx={classes.copyright}
      >
        © / 2024
      </Grid>
      <Grid
        item
        component={motion.div}
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "10%" }}
        transition={{ duration: 1, delay: 1 }}
      >
        <HorizontalLine />
      </Grid>
    </Grid>
  );
};

export default WebBottomBar;
