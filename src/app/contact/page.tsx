"use client";

// External dependencies
import { FormEvent, useState } from "react";

// Internal dependencies
import WebContact from "./web";
import MobileContact from "./mobile";
import { messageDataType, snackbarDataType } from "./_types";
import { sendEmail } from "../../../utils/helper/emailHelper";

const initailMessageData = {
  name: "",
  email: "",
  message: "",
};

const initailSnackbarData = {
  open: false,
  success: undefined,
  message: "",
};

const Contact = () => {
  const [messageData, setMessageData] =
    useState<messageDataType>(initailMessageData);
  const [snackbar, setSnackbar] =
    useState<snackbarDataType>(initailSnackbarData);

  const formDataHandler = (name: string, value: string) => {
    setMessageData((prevMessageData) => ({
      ...prevMessageData,
      [name]: value,
    }));
  };

  const sendMessageHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await sendEmail(messageData);

    if (response.success) setMessageData(initailMessageData);

    setSnackbar({
      open: true,
      success: response.success,
      message: response.message,
    });
  };

  const handleSnackbarClose = () => setSnackbar(initailSnackbarData);

  return (
    <>
      <WebContact
        snackbar={snackbar}
        messageData={messageData}
        formDataHandler={formDataHandler}
        sendMessageHandler={sendMessageHandler}
        handleSnackbarClose={handleSnackbarClose}
      />
      <MobileContact
        snackbar={snackbar}
        messageData={messageData}
        formDataHandler={formDataHandler}
        sendMessageHandler={sendMessageHandler}
        handleSnackbarClose={handleSnackbarClose}
      />
    </>
  );
};

export default Contact;
