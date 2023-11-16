import React from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import AlStar from "../../assets/images/alstar1.png";
import { Link as HomeLink } from "react-router-dom";
import Language from "../Language/Language";

function Navbar() {
  return (
    <Box {...css.nav}>
      <Box className="container">
        <Flex {...css.list}>
          <HomeLink to="/">
            <Image w="200px" h="45px" src={AlStar} alt="ALSTAR" />
          </HomeLink>
          <Flex gap="25px">
            <Language />
            <Link {...css.link} href="#">
              HOME
            </Link>
            <Link {...css.link} href="#">
              ABOUT US
            </Link>
            <Link {...css.link} href="#">
              PRODUCTS
            </Link>
            <Link {...css.link} href="#">
              NEWS
            </Link>
            <Link {...css.link} href="#">
              PROJECTS
            </Link>
            <Link {...css.link} href="#">
              CONTACT US
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  nav: {
    padding: "20px 0",
    position: "fixed",
    paddingBottom: "8px",
    zIndex: "1000",
    top: 0,
    width: "100%",
    background: "#fff",
  },
  link: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    fontStyle: "normal",
    transition: "0.3s all",
    display: "inline-block",
    color: "#2E3A6B",
    width: "auto",
    position: "relative",
    paddingBottom: "3px",
    _hover: {
      color: "#C3242A",
      _before: {
        transform: "scaleX(1)",
      },
    },
    _before: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px",
      transform: "scaleX(0)",
      background: "#C3242A",
      borderRadius: "23px 10px 0px 0px",
      transition: "0.3s",
    },
  },
  list: {
    align: "center",
    justifyContent: "space-between",
  },
};
