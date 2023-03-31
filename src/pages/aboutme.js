import { Navbar, Text, Link, Grid, Button, Card, Modal, useModal, Image, Popover} from "@nextui-org/react";
import React from "react";
import PDF from "./Resume.pdf";
import {motion as m} from "framer-motion";

const AboutMe = () => {
    const { setVisible, bindings } = useModal();

    return(
        <m.div className= "mainPageContainer" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.80}}>
            <Text h1 css={{display: "flex", justifyContent: "center", alignContent: "center", color: "#0369ed"}} >
                Hi, I'm Thamesh!
            </Text>
            <Text h3 css={{display: "flex", justifyContent: "center", alignContent: "center", color: "#0369ed"}} >
                It's a pleasure to see you around these parts of town.
                Settle down, it might just be worth your while.
            </Text>            
            <Text h3 css={{display: "flex", justifyContent: "center", alignContent: "center", color: "#0369ed"}} >
                I'm a Software Engineer with a Computer Science degree based in New York City.
            </Text>
            <Text h3 css={{display: "flex", justifyContent: "center", alignContent: "center", color: "#0369ed"}} >
                I have professional experience in Full Stack Development, many robust projects, and 
                the curoisity to learn as I go.
            </Text>
            
            <Button   color="secondary" onPress={() => setVisible(true)} 
            css={{display: "flex", justifyContent: "center", alignContent: "center", margin: "auto", top: "420px"}}
            >
                Resume!
            </Button>


            <Modal
                scroll
                width="1000px"
                height="800px"
                blur
                {...bindings}
            >

                <Modal.Body>
                    <embed src={PDF} frameborder="0" height="800px" width="950px"></embed>
  
                </Modal.Body>
                <Modal.Footer>
                    <a className="downloadButton" href={PDF} download="Resume" >
                <Button  auto flat color="error">
                    
                    Download
                </Button>    
                </a>
                <Button auto flat color="error" onPress={() => setVisible(false)}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

        </m.div>

    )
}


export default AboutMe