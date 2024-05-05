import { messageDataType } from "@/app/contact/_types";
import { send } from "emailjs-com";

export const sendEmail = async (message: messageDataType) => {
  try {
    const res = await send(
      "email-from-portfolio-ds",
      "template_yv0i28e",
      message,
      "DktqHChM_y6Oflpm-"
    );
    return { success: true, message: "Message sent successfully!" };
  } catch (e) {
    console.error("Some error occured while sending mail", e);
    return { success: false, message: "Message could not be sent." };
  }
};
