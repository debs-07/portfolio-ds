// External dependencies
import {
  CardContent,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonIcon from "@mui/icons-material/Person";

// Internal dependencies
import SendIcon from "../../../svgs/Send";
import { ContactPropTypes } from "./_types";
import { mobileStyles } from "./_styles";
import { mobileVariants } from "./_motion";
import {
  EmailHighlighter,
  TextArea,
  ButtonContact,
  ContactCard,
} from "../../../components/Styled";

const MobileContact = ({
  sendMessageHandler,
  formDataHandler,
  messageData,
  snackbar,
  handleSnackbarClose,
}: ContactPropTypes) => {
  const classes = mobileStyles();

  return (
    <Grid
      key="mobile-contact"
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      component={motion.div}
      variants={mobileVariants.wrapper}
      transition={mobileVariants.wrapper.transition}
      initial="hidden"
      animate="visible"
      sx={classes.wrapper}
    >
      <Grid item sx={classes.emailWrapper}>
        <EmailHighlighter>
          <EmailRoundedIcon sx={classes.emailIcon} color="info" />
          <Typography gutterBottom variant="h5" sx={classes.emailText}>
            debakantasatapathy07@gmail.com
          </Typography>
        </EmailHighlighter>
      </Grid>
      <Grid item>
        <ContactCard>
          <CardContent component="form" onSubmit={sendMessageHandler}>
            <Typography variant="body2" sx={classes.cardHeader}>
              Don't hesitate to drop a message !
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Name"
              name="name"
              fullWidth
              margin="normal"
              type="text"
              required
              value={messageData?.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                formDataHandler(name, value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    disablePointerEvents={true}
                    sx={classes.inputAdornment}
                  >
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="email"
              margin="normal"
              type="email"
              size="small"
              variant="outlined"
              placeholder="Email"
              fullWidth
              required
              value={messageData?.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                formDataHandler(name, value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    disablePointerEvents={true}
                    sx={classes.inputAdornment}
                  >
                    <EmailRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextArea
              name="message"
              required
              minRows={7}
              placeholder="Start typing..."
              value={messageData?.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const { name, value } = e.target;
                formDataHandler(name, value);
              }}
            />
            <ButtonContact
              type="submit"
              variant="outlined"
              customWidth="100%"
              component={motion.button}
            >
              Send Message <SendIcon />
            </ButtonContact>
          </CardContent>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            message={snackbar.message}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{ backgroundColor: "#0099ff" }}
          />
        </ContactCard>
      </Grid>
    </Grid>
  );
};
export default MobileContact;
