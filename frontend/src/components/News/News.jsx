import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

function News() {
  return (
    <Box {...css.news}>
      <Box className="container">
        <Heading {...css.title}>NEWS</Heading>
        <SimpleGrid columns={4} spacing="20px">
          <Box {...css.box}>
            <Image
              src="https://alubond.com/wp-content/uploads/2022/11/inter.png"
              alt="News One Image"
            />
            <Box {...css.item}>
              <Heading {...css.subtitle} size="h4">
                Alubond Has Succesfully Passed CAN/ULC-S134…
              </Heading>
              <Text {...css.text}>
                We proudly announce that we have passed CAN/ULC -S134 full-scale
                wall-assembly test designed to measure the limits of…
              </Text>
              <Text {...css.text}>10.05.2023</Text>
              <Link {...css.link} href="#">
                Learn More
              </Link>
            </Box>
          </Box>
          <Box {...css.box}>
            <Image
              src="https://alubond.com/wp-content/uploads/2022/11/inter.png"
              alt="News One Image"
            />
            <Box {...css.item}>
              <Heading {...css.subtitle} size="h4">
                Alubond Has Succesfully Passed CAN/ULC-S134…
              </Heading>
              <Text {...css.text}>
                We proudly announce that we have passed CAN/ULC -S134 full-scale
                wall-assembly test designed to measure the limits of…
              </Text>
              <Text {...css.text}>10.05.2023</Text>
              <Link {...css.link} href="#">
                Learn More
              </Link>
            </Box>
          </Box>
          <Box {...css.box}>
            <Image
              src="https://alubond.com/wp-content/uploads/2022/11/inter.png"
              alt="News One Image"
            />
            <Box {...css.item}>
              <Heading {...css.subtitle} size="h4">
                Alubond Has Succesfully Passed CAN/ULC-S134…
              </Heading>
              <Text {...css.text}>
                We proudly announce that we have passed CAN/ULC -S134 full-scale
                wall-assembly test designed to measure the limits of…
              </Text>
              <Text {...css.text}>10.05.2023</Text>
              <Link {...css.link} href="#">
                Learn More
              </Link>
            </Box>
          </Box>
          <Box {...css.box}>
            <Image
              src="https://alubond.com/wp-content/uploads/2022/11/inter.png"
              alt="News One Image"
            />
            <Box {...css.item}>
              <Heading {...css.subtitle} size="h4">
                Alubond Has Succesfully Passed CAN/ULC-S134…
              </Heading>
              <Text {...css.text}>
                We proudly announce that we have passed CAN/ULC -S134 full-scale
                wall-assembly test designed to measure the limits of…
              </Text>
              <Text {...css.text}>10.05.2023</Text>
              <Link {...css.link} href="#">
                Learn More
              </Link>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default News;

const css = {
  news: {
    padding: "30px 0",
  },
  title: {
    fontSize: "35px",
    fontWeight: 600,
    textAlign: "center",
    lineHeight: "40px",
    marginBottom: "30px",
    color: "#2E3A6B",
  },
  box: {
    width: "100%",
    overflow: "hidden",
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    background: "#fff",
    borderRadius: "8px",
  },
  item: {
    padding: "10px 15px",
    paddingBottom: "25px",
  },
  subtitle: {
    color: "#2E3A6B",
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "0.2px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.2px",
    color: "gray",
    opacity: "0.9",
    fontWeight: 400,
    marginBottom: "15px",
  },
  link: {
    color: "#C3242A",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: 400,
  },
};
