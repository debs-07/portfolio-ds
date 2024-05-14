// External dependencies
import { Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// Internal dependencies
import AeroIcon from "../../svgs/Aero";
import MilkyWayIcon from "../../svgs/Milkyway";
import BottomBar from "../../components/BottomBar";
import { webStyles } from "./_styles";
import { webVariants } from "./_motion";
import { HighlightChip } from "../../components/Styled";

const WebHome = () => {
  const classes = webStyles();

  return (
    <Grid
      key="web-home"
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={classes.wrapper}
    >
      <Grid
        item
        xs={8}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        component={motion.div}
        variants={webVariants.wrapper}
        transition={webVariants.wrapper.transition}
        initial="hidden"
        animate="visible"
        sx={classes.container}
      >
        <Grid container item sx={classes.section}>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={classes.containerTop}
          >
            <Typography gutterBottom variant="h5" sx={classes.subHeaderText}>
              Hey, I'm&nbsp;
            </Typography>

            <Typography gutterBottom variant="h3" sx={classes.headerText}>
              <Box
                component={AeroIcon}
                onLogo={false}
                variants={webVariants.aero}
                transition={webVariants.aero.transition}
                animate="visible"
                sx={classes.headerAero}
              />
              Debakanta Satapathy.
            </Typography>

            <Typography gutterBottom variant="h5" sx={classes.subHeaderText}>
              A Web Developer.
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={classes.containerBottom}
          >
            <Typography
              component="div"
              variant="body2"
              sx={classes.descriptionText}
            >
              Building intuitive and scalable digital experiences for the web.
              At present, I am working at{" "}
              <HighlightChip customColor="#e85d04" label="Highradius" /> to
              develop features tailored for the products serving the office of
              the CFO.
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={classes.descriptionText}
            >
              Finding exhilaration in observing the{" "}
              <HighlightChip
                label={
                  <Box sx={classes.chipWithIcon}>
                    cosmos &nbsp; <MilkyWayIcon height="5em" width="5em" />
                  </Box>
                }
              />
              beneath the blanket of the night sky.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <BottomBar />
    </Grid>
  );
};

export default WebHome;
