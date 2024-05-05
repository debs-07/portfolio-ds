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
import { webStyles } from "./_styles";
import { webVariants } from "./_motion";
import {
  EmailHighlighter,
  TextArea,
  ButtonContact,
  ContactCard,
} from "../../../components/Styled";

const WebContact = ({
  snackbar,
  messageData,
  formDataHandler,
  sendMessageHandler,
  handleSnackbarClose,
}: ContactPropTypes) => {
  const classes = webStyles();
  return (
    <Grid
      key="web-contact"
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      component={motion.div}
      variants={webVariants.wrapper}
      transition={webVariants.wrapper.transition}
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
      <Grid item sx={classes.cardWrapper}>
        <ContactCard>
          <CardContent component="form" onSubmit={sendMessageHandler}>
            <Typography variant="body2" sx={classes.cardHeader}>
              Don't hesitate to drop a message !
            </Typography>
            <TextField
              required
              fullWidth
              size="small"
              name="name"
              type="text"
              margin="normal"
              placeholder="Name"
              variant="outlined"
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
              required
              fullWidth
              size="small"
              name="email"
              type="email"
              margin="normal"
              variant="outlined"
              placeholder="Email"
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
              required
              name="message"
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
              component={motion.button}
            >
              Send Message <SendIcon />
            </ButtonContact>
          </CardContent>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={2000}
            message={snackbar.message}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          />
        </ContactCard>
      </Grid>
    </Grid>
  );
};

export default WebContact;
