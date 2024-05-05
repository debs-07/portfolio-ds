// External dependencies
import { Grid, Typography } from "@mui/material";

// Internal dependencies
import { mobileStyles } from "./_styles";

const MobileWorks = () => {
  const classes = mobileStyles();
  return (
    <Grid
      key="mobile-works"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={classes.wrapper}
    >
      <Typography variant="h3" sx={classes.section}>
        Coming Soon
      </Typography>
    </Grid>
  );
};
export default MobileWorks;
