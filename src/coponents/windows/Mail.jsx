import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MacWindow from "./MacWindow";
import "../../mail.scss";

const Mail = ({ windowName, setWindowState }) => {
  const form = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = serviceId && templateId && publicKey;

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isConfigured) {
      setStatus({
        type: "error",
        message: "Email form is not configured yet. Add the EmailJS values to your .env file.",
      });
      return;
    }

    setStatus({ type: "pending", message: "Sending..." });

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(() => {
        setStatus({ type: "success", message: "Message sent successfully." });
        form.current?.reset();
      })
      .catch((err) => {
        console.log("EmailJS error:", err?.status, err?.text, err);
        const message =
          err?.status === 412
            ? "EmailJS rejected the request. Check your service, template, public key, and allowed domain."
            : "Failed to send message. Please try again.";
        setStatus({ type: "error", message });
      });
  };

  return (
    <MacWindow
      width="35vw"
      height="55vh"
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <div className="mail-window">
        <div className="mail-header">
          <p>Send me a message</p>
          <span>Replies go to avanshsingh2017@gmail.com</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input id="user_name" type="text" name="user_name" required />

          <label htmlFor="user_email">Email</label>
          <input id="user_email" type="email" name="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" required />

          <button type="submit" disabled={!isConfigured || status.type === "pending"}>
            {status.type === "pending" ? "Sending..." : "Send"}
          </button>
          <p className={`mail-status ${status.type}`}>{status.message}</p>
        </form>
      </div>
    </MacWindow>
  );
};

export default Mail;
