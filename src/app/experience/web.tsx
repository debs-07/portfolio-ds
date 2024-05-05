// External dependencies
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Internal dependencies
import { SkillChip } from "../../../components/Styled";
import { webStyles } from "./_style";
import { ExperiancePropTypes } from "./_types";
import { webVariants } from "./_motion";

const WebExperiance = ({ experiances }: ExperiancePropTypes) => {
  const classes = webStyles();

  return (
    <Grid
      key="web-experiance"
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={classes.wrapper}
    >
      {experiances.map((experiance) => (
        <Box key={experiance.years} sx={classes.experianceBox}>
          <Grid container item>
            <Grid
              item
              xs={3}
              component={motion.div}
              variants={webVariants.leftBox}
              transition={webVariants.leftBox.transition}
              initial="hidden"
              animate="visible"
            >
              {/* years */}
              <Typography variant="body1">{experiance.years}</Typography>
            </Grid>
            <Grid
              item
              xs={9}
              component={motion.div}
              variants={webVariants.rightBox}
              transition={webVariants.rightBox.transition}
              initial="hidden"
              animate="visible"
            >
              {/* headers */}
              {experiance.headers.map((header) => (
                <Typography key={header} variant="body1">
                  {header}
                </Typography>
              ))}

              {/* description */}
              <Typography variant="body2" sx={classes.experianceDescription}>
                {experiance.description}
              </Typography>

              {/* skills */}
              {experiance.skills.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </Grid>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};

export default WebExperiance;
