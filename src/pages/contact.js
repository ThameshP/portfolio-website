import {
  Navbar,
  Text,
  Link,
  Grid,
  Button,
  Card,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";

import React, { useRef } from "react";
import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_ly20twb",
        "template_0g2jmpb",
        form.current,
        "ud-iugK9ftEnAzgJk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <m.div
      className="contactPageContainer"
      css={{ width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Text
        h1
        css={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          color: "#0369ed",
        }}
      >
        Contact me!
      </Text>
      <form ref={form} onSubmit={sendEmail}>
        <m.div
          whileHover={{ scale: 1.1 }}
          transition={{}}
        >
          <Input
            status="primary"
            size="md"
            clearable
            placeholder="Name"
            color="primary"
            name="user_name"
            css={{
              display: "flex",
              padding: "20px",
              justifyContent: "center",
              alignContent: "center",
              width: "520px",
              margin: "auto",
            }}
          />
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          transition={{}}
        >
          <Input
            v
            size="md"
            clearable
            placeholder="E-mail"
            status="primary"
            name="user_email"
            type="email"
            css={{
              display: "flex",
              padding: "20px",
              justifyContent: "center",
              alignContent: "center",
              width: "520px",
              margin: "auto",
            }}
          />
        </m.div>
        <m.div
          whileHover={{ scale: 1.1 }}
          transition={{}}
        >
          <Textarea
            size="md"
            clearable
            placeholder="Note/Description/Anything"
            status="primary"
            name="user_text"
            css={{
              display: "flex",
              padding: "20px",
              justifyContent: "center",
              alignContent: "center",
              width: "520px",
              margin: "auto",
            }}
          />
        </m.div>

        <m.div
          whileHover={{ scale: 1.1 }}
          transition={{ }}
        >
          <Button
            flat
            type="submit"
            color="primary"
            css={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "auto",
            }}
          >
            Send
          </Button>
        </m.div>
      </form>
    </m.div>
  );
};

export default ContactPage;
