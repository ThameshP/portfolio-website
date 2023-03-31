import { Navbar, Text, Link, Grid, Button } from "@nextui-org/react";
import React from "react";
import { motion as m } from "framer-motion";

const NavbarTop = () => {
  return (
    <div className="navbarContainer">
      <m.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 350, damping: 17 }}
      >
        <Link block color="primary" href="/" auto css={{ margin: "4px" }}>
          About me
        </Link>
      </m.div>

      <m.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 350, damping: 17 }}
      >
        <Link
          block
          color="primary"
          href="/projects"
          auto
          css={{ margin: "4px" }}
        >
          My projects
        </Link>
      </m.div>
      <m.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 350, damping: 17 }}
      >
        <Link
          block
          color="primary"
          href="/contact"
          auto
          css={{ margin: "4px" }}
        >
          Contact me
        </Link>
      </m.div>
    </div>
  );
};

export default NavbarTop;
