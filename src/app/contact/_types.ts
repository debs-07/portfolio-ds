// External dependencies
import { FormEvent } from "react";

export type snackbarDataType = {
  open: boolean;
  success: boolean | undefined;
  message: string;
};

export type messageDataType = {
  name: string;
  email: string;
  message: string;
};

export type ContactPropTypes = {
  sendMessageHandler: (e: FormEvent<HTMLFormElement>) => void;
  formDataHandler: (name: string, value: string) => void;
  messageData: messageDataType;
  snackbar: snackbarDataType;
  handleSnackbarClose: () => void;
};
