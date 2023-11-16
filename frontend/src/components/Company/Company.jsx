import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

function Company() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Heading {...css.title}>ABOUT US</Heading>
        <Heading fontWeight="400" textAlign="center" size="h5">
          MOST TRUSTED NAME IN ALUMINUM COMPOSITE PANELS
        </Heading>
        <Flex {...css.list}>
          <Box>
            <Text {...css.text}>
              ALUBOND is an Aluminum Composite Panels (ACP) and Metal Composite
              Material (MCM) brand owned by Mulk Holdings International. The
              company has emerged as the world’s largest ACP and MCM Brand with
              a 25 Million m2.. of manufacturing and processing capacity from
              its various facilities in UAE, Oman, Serbia, India and Turkey.
              Alubond offers a full range of Fire Rated Metal Panels including
              Solid Aluminum, FR-A1 Mineral Core, FR-A2 Mineral Core, FR
              Euroclass B and various other panels like Exotic Metal Panels in a
              choice of metal skins like Galvanized Steel, Stainless Steel,
              Copper, Bronze and Titanium.
            </Text>
            <Text {...css.text}>
              In addition to the production of metal composites, the company
              also has complete backward and forward integrated manufacturing
              facilities producing different grades of fire retardant mineral
              cores and granules, fire rated bonding adhesives, color coated
              coils, and custom paints.
            </Text>
            <Link {...css.link} href="#">
              FIND MORE
            </Link>
          </Box>
          <Image
            src="https://alubond.com/wp-content/uploads/2022/04/about_alubond.jpg"
            alt="AlStar"
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Company;

const css = {
  box: {
    background: "#f2f2f2",
    padding: "30px",
    margin: "20px 0",
    marginTop: "80px",
  },
  title: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "10px",
    color: "#2E3A6B",
  },
  list: {
    gap: "25px",
    paddingTop: "25px",
    justifyContent: "space-between",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    margin: "15px 0",
    width: 850,
    color: "gray",
    letterSpacing: "0.6px",
  },
  link: {
    fontSize: "14px",
    fontFamily: "sans-serif",
    background: "#C3242A",
    border: "2px solid #C3242A",
    color: "#fff",
    padding: "16px 40px",
    borderRadius: "4px",
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    width: "170px",
    transition: "0.3s all ease-in",

    _hover: {
      background: "transparent",
      color: "#C3242A",
    },
  },
};
