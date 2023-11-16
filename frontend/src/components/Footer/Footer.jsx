import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import AlStarIcon from "../../assets/images/blackalstar.png";

function Footer() {
  return (
    <Box className="footer" {...css.footer}>
      <Box className="container">
        <Flex justifyContent="space-between" gap="25px 0">
          <Box>
            <Heading {...css.title} size="h3">
              ABOUT OUR COMPANY
            </Heading>
            <Image w="200px" src={AlStarIcon} alt="AlStar" />
            <Text {...css.text}>
              Alubond has emerged as the world’s largest MCM & ACP Brand with a
              25 Million sq.m production capacity across various production
              bases. Completely integrated with FR A1/A2/B1 Core & Granules
              Production, Coil Coating, Fire Rated Bonding Adhesives & Paint
              Production.
            </Text>
          </Box>
          <Box>
            <Heading {...css.title} size="h3">
              Quick Links
            </Heading>
            <Flex gap="8px" flexDirection="column">
              <Link {...css.link} href="#">
                About Us
              </Link>
              <Link {...css.link} href="#">
                News
              </Link>
              <Link {...css.link} href="#">
                Projects
              </Link>
              <Link {...css.link} href="#">
                Products
              </Link>
              <Link {...css.link} href="#">
                Contact Us
              </Link>
            </Flex>
          </Box>
          <Box>
            <Heading {...css.title} size="h3">
              CONTACT US
            </Heading>
            <Flex gap="8px" flexDirection="column">
              <Link {...css.link} href="#">
                Phase 1, Hamriyah Freezone, Sharjah, U.A.E
              </Link>
              <Link {...css.link} href="#">
                alstar@gmail.com
              </Link>
              <Link {...css.link} href="#">
                +998 90 777 88 99
              </Link>
              <Link {...css.link} href="#">
                +998 97 125 63 41
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  title: {
    color: "#fff",
    marginBottom: "30px",
    fontSize: "25px",
    fontWeight: 500,
  },
  text: {
    fontSize: "13px",
    fontWeight: 300,
    color: "#fff",
    lineHeight: "22px",
    width: 300,
    marginTop: "20px",
  },
  link: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    fontStyle: "normal",
    transition: "0.3s all",
    display: "block",
    position: "relative",
    paddingBottom: "3px",
    _hover: {
      color: "#C3242A",
      _before: {
        transform: "scaleX(1)",
      },
    },
    // _before: {
    //   content: '""',
    //   position: "absolute",
    //   bottom: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "2px",
    //   transform: "scaleX(0)",
    //   background: "#F26957",
    //   borderRadius: "23px 10px 0px 0px",
    //   transition: "0.3s",
    // },
  },
};
