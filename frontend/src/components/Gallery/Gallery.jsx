import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function Gallery() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Heading {...css.title}>PROJECTS GALLERY</Heading>
      </Box>
      <SimpleGrid columns={4}>
        <Box {...css.list}>
          <Image
            src="https://alubond.com/wp-content/uploads/2022/04/residential_buildings.jpg"
            alt="Image"
            {...css.image}
          />
          {/* <Heading size="h4">RESIDENTIAL BUILDING</Heading> */}
        </Box>
        <Box {...css.list}>
          <Image
            src="https://alubond.com/wp-content/uploads/2022/04/office_building-1.jpg"
            alt="Image"
            {...css.image}
          />
          {/* <Heading size="h4">RESIDENTIAL BUILDING</Heading> */}
        </Box>
        <Box {...css.list}>
          <Image
            src="https://alubond.com/wp-content/uploads/2022/04/hotels.jpg"
            alt="Image"
            {...css.image}
          />
          {/* <Heading size="h4">RESIDENTIAL BUILDING</Heading> */}
        </Box>
        <Box {...css.list}>
          <Image
            src="https://alubond.com/wp-content/uploads/2022/04/residential_buildings.jpg"
            alt="Image"
            {...css.image}
          />
          {/* <Heading size="h4">RESIDENTIAL BUILDING</Heading> */}
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Gallery;

const css = {
  title: {
    fontSize: "30px",
    fontWeight: 600,
    textAlign: "center",
    lineHeight: "40px",
    marginBottom: "30px",
    color: "#2E3A6B",
  },
  box: {
    padding: "50px 0",
  },
};
