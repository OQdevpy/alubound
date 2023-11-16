import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function AllPartner() {
  return (
    <Box {...css.partner}>
      <Box className="container">
        <Heading {...css.title}>OUR CLIENTS</Heading>
        <SimpleGrid columns={5} spacing="30px">
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
          <Box {...css.box}>
            <Image
              {...css.image}
              src="https://alubond.com/wp-content/uploads/2022/04/client_logo-08.png"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default AllPartner;

const css = {
  partner: {
    padding: "50px 0",
    marginTop: "50px",
  },
  image: {
    objectFit: "contain",
    width: "100%",
    transition: "0.3s all ease",
    cursor: "pointer",

    _hover: {
      transform: "scale(0.9)",
    },
  },
  title: {
    fontSize: "25px",
    lineHeight: "30px",
    fontWeight: 600,
    marginBottom: "30px",
    color: "#2E3A6B",
  },
  box: {
    height: "158px",
    width: "100%",
    padding: "20px",
    overflow: "hidden",
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    background: "#fff",
    borderRadius: "12px",
    margin: "0 15px",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s all ease",
    _hover: {
      transform: "scale(0.9)",
    },
  },
};
