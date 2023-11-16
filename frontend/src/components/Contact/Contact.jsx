import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  Image,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [, setInvalidName] = useState(false);
  const [, setInvalidNumber] = useState(false);

  function changeNumber(item) {
    setNumberValue(item);
    setInvalidNumber(false);
  }

  function changeName(item) {
    setNameValue(item);
    setInvalidName(false);
  }
  function changeText(item) {
    setTextValue(item);
  }
  let bot = {
    TOKEN: "6567609620:AAHWghf_07FQxHs1wI220pI6IM71TgBmEVQ",
    chatID: "-1001849406680",
    message: `
      Assalomu alaykum sizga yangi xabar!%0A
      %0AIsmi 👤: ${nameValue}; 
      %0ATelefon raqami ☎: ${numberValue};
      %0ASizga xabar ☎: ${textValue};`,
  };

  function sendMessage() {
    if (nameValue === "") {
      setInvalidName(true);
    } else if (numberValue === "") {
      setInvalidNumber(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          // handleClose();
          // toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
        },
        (error) => {}
      );

      setNameValue("");
      setNumberValue("");
      setTextValue("");
    }
  }
  return (
    <Box {...css.contact}>
      <Box className="container">
        <Flex {...css.list}>
          <Box>
            <Heading {...css.title}>Have you questions for us?</Heading>
            <form action="">
              <Box m="25px 0">
                <FormControl isRequired>
                  <FormLabel {...css.label}>Name</FormLabel>
                  <Input
                    value={nameValue}
                    onChange={(e) => changeName(e.target.value)}
                    {...css.input}
                    placeholder="Name"
                  />
                </FormControl>
              </Box>
              <Box m="25px 0">
                <FormControl isRequired>
                  <FormLabel {...css.label}>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...css.input}
                      value={numberValue}
                      onChange={(e) => changeNumber(e.target.value)}
                      size="md"
                      type="tel"
                      placeholder="Phone number"
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box m="25px 0">
                <FormControl isRequired>
                  <FormLabel {...css.label}>Your Message</FormLabel>
                  <Textarea
                    placeholder="Here is a sample placeholder"
                    size="md"
                    {...css.textarea}
                    value={textValue}
                    onChange={(e) => changeText(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Button onClick={() => sendMessage()} {...css.button}>
                Send
              </Button>
            </form>
          </Box>
          <Image
            {...css.image}
            src="https://inoutads.uz/_nuxt/registerImg.527c043b.png"
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  contact: {
    padding: "50px 0",
  },
  title: {
    fontSize: "30px",
    lineHeight: "35px",
    fontWeight: 600,
    color: "#2E3A6B",
  },
  label: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "22px",
  },
  input: {
    width: "500px",
    border: "1px solid gray",
    height: "48px !important",
  },
  textarea: {
    border: "1px solid gray",
    height: "120px",
  },
  button: {
    background: "#C3242A !important",
    color: "#fff",
    fontWeight: "500 !important",
    width: "100px",
    height: "45px",
  },
  list: {
    justifyContent: "center",
    gap: "90px",
    alignItems: "center",
  },
  image: {
    height: "600px",
  },
};
