// External dependencies
import { Grid, Typography } from "@mui/material";

// Internal dependencies
import { webStyles } from "./_styles";

const WebWorks = () => {
  const classes = webStyles();
  return (
    <Grid
      key="web-works"
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

export default WebWorks;
