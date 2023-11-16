import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Partner() {
  var settings = {
    speed: 5000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Box mt="50px">
      <Box className="container">
        <Heading {...css.title}>OUR CLIENTS</Heading>
        <Heading {...css.text}>WE ARE DEDICATED TO OUR PARTNERS.</Heading>
        <Slider {...settings}>
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
        </Slider>
        <Flex justifyContent="flex-end">
          <Link className="partner-link" to={"/partner"}>
            All Partner
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Partner;

const css = {
  image: {
    objectFit: "contain",
    width: "100%",
  },
  title: {
    fontSize: "30px",
    textAlign: "center",
    lineHeight: "40px",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#2E3A6B",
  },
  text: {
    color: "gray",
    fontSize: "18px",
    textAlign: "center",
    fontWeight: 400,
    marginBottom: "25px",
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
  },
};
