import {
  Text,
  Card,
  Modal,
  useModal,
} from "@nextui-org/react";
import React from "react";
import { motion as m } from "framer-motion";
import Rodal from "rodal";

const QuickNotesCard = () => {
  const { setVisible, bindings } = useModal();

  return (
<div>
      <m.div
        className="Card"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        whileTap={() => setVisible(true)}
        transition={{ type: "spring", stiffness: 350, damping: 17 }}
      >
        <m.div>
          <Text
            h1
            color="#0369ed"
            size={"30px"}
            css={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "auto",
              marginBottom: "10px",
            }}
          >
            QuickNotes
          </Text>
          <Card css={{ w: "105vh" }}>
            <Text
              size={20}
              weight="bold"
              transform="uppercase"
              color="#9E9E9E"
              css={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            ></Text>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                className="cardImg"
                src={require("./QuicknotesSC.png")}
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
              />
            </Card.Body>
          </Card>
            <Modal scroll width="800px" height="800px" blur {...bindings}>
              <Modal.Body>
                <Text
                  size="20px"
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                >
                  QuickNotes is a full stack web application aimed at providing an ease to use platform to quickly
                  store notes!
                </Text>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          
        </m.div>
      </m.div>
    </div>
  );
};

export default QuickNotesCard;
