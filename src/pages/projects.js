import { Navbar, Text, Link, Grid, Button, Card} from "@nextui-org/react";
import React from "react";
import ProjectCard from "../components/ProjectCards";
import {motion as m} from "framer-motion";
const ProjectPage = () => {


    return (
      <m.div
        className="projectPageContainer"
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
          Spend a little time with my work!
        </Text>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <ProjectCard />
        </m.div>
      </m.div>
    );
}


export default ProjectPage