import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box {...css.box}>
      <Box className="big-container">
        <Swiper className="mySwiper">
          <SwiperSlide className="header-list">
            <Heading {...css.title}>SHOWROOM & HEAD OFFICE IN ONTARIO </Heading>
            <Text {...css.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              voluptate deleniti et ratione fuga itaque possimus nesciunt
              doloremque quas iste?
            </Text>
            <Link className="header-link" to="/about">Learn More</Link>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  box: {
    marginTop: "100px",
    position: "relative",
  },
  title: {
    fontSize: "35px",
    fontWeight: 600,
    lineHeight: "40px",
    color: "#eeeded",
    position: "absolute",
    bottom: "240px",
  },
  text: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#fff",
    letterSpacing: "0.4px",
    width: "800px",
    position: "absolute",
    bottom: "180px",
  },
};
