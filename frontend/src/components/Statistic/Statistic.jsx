import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RocketIcon from "../../assets/images/raketa.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Statistic() {
  const [count, setCount] = useState(false);
  return (
    <Box m="30px 0">
      <Box className="container">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}>
          <Box {...css.box}>
            <Heading {...css.title}>
              In us <span style={{ color: "#C3242A" }}>there are numbers</span>
            </Heading>
            <Flex {...css.list}>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp start={0} duration={2.75} end="20" delay={0} />
                  )}
                  <span style={{ color: "#C3242A" }}>+</span>
                </Heading>
                <Text {...css.text}>The number of employees</Text>
              </Flex>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp
                      start={1400}
                      duration={2.75}
                      end="1672"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#C3242A" }}>+</span>
                </Heading>
                <Text {...css.text}>launched advertising campaigns</Text>
              </Flex>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp
                      start={1400}
                      duration={2.75}
                      end="1660"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#C3242A" }}>+</span>
                </Heading>
                <Text {...css.text}>successful cases</Text>
              </Flex>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp
                      start={1400}
                      duration={2.75}
                      end="1660"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#C3242A" }}>+</span>
                </Heading>
                <Text {...css.text}>successful cases</Text>
              </Flex>
              <Image src={RocketIcon} alt="RocketIcon" />
            </Flex>
          </Box>
        </ScrollTrigger>
      </Box>
    </Box>
  );
}

export default Statistic;

const css = {
  box: {
    padding: "50px",
    background: "#fff",
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    borderRadius: "24px",
    width: "100%",
  },
  title: {
    fontSize: "32px",
    lineHeight: "38px",
    fontWeight: 700,
    fontFamily: "Unbounded !important",
  },
  number: {
    fontSize: "62px",
    lineHeight: "80px",
    fontWeight: 600,
    fontFamily: "Unbounded !important",
  },
  list: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
  },
  text: {
    color: "#2a3437",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 400,
    fontFamily: "Unbounded !important",
  },
};
