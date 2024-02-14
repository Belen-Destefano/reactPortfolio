import { Box, Button, Image, Stack, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import InViewAnimation from "../inViewAnimation";

function Presentation() {
  return (
    <Flex
      className="containerPresentation"
      justifyContent={{ base: "space-around", md: "center" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      height={{ base: "auto", md: "100vh" }}
      bgGradient="radial(#96584e 0%, #1a0a0a 100%)"
      id="containerPresentation"
    >
      <Box className="containerPresentation__info">
        <InViewAnimation transition={{ duration: 0.4 }}>
          <Text variant="h3" ml={"1%"}>
            Hola, soy{" "}
          </Text>
        </InViewAnimation>
        <InViewAnimation transition={{ duration: 0.7 }}>
          {/* <Text variant="h1">Belén De Stéfano</Text> */}
          <Text variant="h1">
            <span style={{ display: "inline-block" }}>Belen</span>{" "}
            <span style={{ display: "inline-block" }}>De Stefano</span>
          </Text>
        </InViewAnimation>
        <InViewAnimation transition={{ duration: 1.0 }}>
          <Text variant="h3" ml={"1%"}>
            Desarrolladora Front End{" "}
          </Text>
        </InViewAnimation>

        <InViewAnimation transition={{ duration: 1.5 }} margin="-5%">
          <Stack spacing={2} direction="row" align="center" mt={10} ml={"1%"}>
            <Link
              target="_blank"
              href="images/CurriculumVitaeBelenDeStefano.pdf"
            >
              <Button
                colorScheme="teal"
                size="md"
                bg="white"
                color="black"
                borderColor="white"
                borderWidth="1px"
                _hover={{
                  bg: "transparent",
                  borderColor: "white",
                  color: "white",
                  borderWidth: "1px",
                }}
              >
                CURRICULUM
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                colorScheme="teal"
                size="md"
                bg="white"
                color="black"
                borderColor="white"
                borderWidth="1px"
                _hover={{
                  bg: "transparent",
                  borderColor: "white",
                  color: "white",
                  borderWidth: "1px",
                }}
              >
                CONTACTO
              </Button>
            </Link>
          </Stack>
        </InViewAnimation>
      </Box>
      <InViewAnimation transition={{ duration: 1.0 }} effect="opacity">
        <Flex
          className="containerPresentation__mobiles"
          flexDirection="row"
          width="auto"
        >
          <Image
            className="mobile1"
            src="/images/ilserranoMobile.png"
            alt="mobile1"
            boxSize="40%"
          />
          <Image
            className="mobile2"
            src="/images/selvageMobile.png"
            alt="mobile2"
            boxSize="40%"
          />
          <Image
            className="mobile3"
            src="/images/creativaMobile.png"
            alt="mobile3"
            boxSize="40%"
          />
        </Flex>
      </InViewAnimation>
    </Flex>
  );
}

export default Presentation;
