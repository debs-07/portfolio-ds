// External dependencies
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Internal dependencies
import { SkillChip } from "../../../components/Styled";
import { mobileStyles } from "./_styles";
import { ExperiancePropTypes } from "./_types";
import { mobileVariants } from "./_motion";

const MobileExperiance = ({ experiances }: ExperiancePropTypes) => {
  const classes = mobileStyles();

  return (
    <Grid
      key="mobile-experiance"
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      component={motion.div}
      variants={mobileVariants.wrapper}
      transition={mobileVariants.wrapper.transition}
      initial="hidden"
      animate="visible"
      sx={classes.wrapper}
    >
      {experiances.map((experiance) => (
        <Grid key={experiance.years} item xs={9}>
          {/* years */}
          <Typography variant="body1">{experiance.years}</Typography>

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
          {experiance.skills.map((tech) => (
            <SkillChip key={tech} label={tech} />
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default MobileExperiance;
