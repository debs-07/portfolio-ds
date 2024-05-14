// External dependencies
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Internal dependencies
import BottomBar from "../../components/BottomBar";
import MilkyWayIcon from "../../svgs/Milkyway";
import AeroIcon from "../../svgs/Aero";
import { mobileStyles } from "./_styles";
import { mobileVariants } from "./_motion";
import { HighlightChip } from "../../components/Styled";

const MobileHome = () => {
  const classes = mobileStyles();

  return (
    <Grid
      key="mobile-home"
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={classes.wrapper}
    >
      <Grid
        item
        xs={10}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        component={motion.div}
        variants={mobileVariants.wrapper}
        transition={mobileVariants.wrapper.transition}
        initial="hidden"
        animate="visible"
      >
        <Grid item>
          <Typography gutterBottom variant="h5" sx={classes.subHeaderText}>
            Hey, I'm&nbsp;
          </Typography>
          <Typography gutterBottom variant="h3" sx={classes.headerText}>
            <Box
              component={AeroIcon}
              onLogo={false}
              variants={mobileVariants.aero}
              transition={mobileVariants.aero.transition}
              animate="visible"
              sx={classes.headerAero}
            />
            Debakanta Satapathy.
          </Typography>
          <Typography gutterBottom variant="h5" sx={classes.subHeaderText}>
            A Web Developer.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="body2"
            sx={classes.descriptionText}
          >
            Building intuitive and scalable digital experiences for the web. At
            present, I am working at&nbsp;
            <HighlightChip customColor="#ff7b00" label="Highradius" /> to
            develop features tailored for the products serving the office of the
            CFO.
          </Typography>
          <Typography
            component="div"
            variant="body2"
            sx={classes.descriptionText}
          >
            Finding exhilaration in observing the&nbsp;
            <HighlightChip
              label={
                <Box sx={classes.chipWithIcon}>
                  cosmos &nbsp; <MilkyWayIcon height="3.5em" width="3.5em" />
                </Box>
              }
            />
            beneath the blanket of the night sky.
          </Typography>
        </Grid>
      </Grid>
      <BottomBar />
    </Grid>
  );
};

export default MobileHome;
