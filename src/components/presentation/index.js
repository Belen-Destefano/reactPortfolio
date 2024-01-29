import { Box, Button, Image, Stack, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

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
        <Text variant="h3">Hola, soy </Text>
        <Text variant="h1">Belén </Text>
        <Text variant="h1">De Stéfano </Text>
        <Text variant="h3">Desarrolladora Web </Text>
        <Text variant="h3">Front End </Text>

        <Stack spacing={2} direction="row" align="center" mt={10}>
          <Link target="_blank" href="images/CurriculumVitaeBelenDeStefano.pdf">
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
      </Box>

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
    </Flex>
  );
}

export default Presentation;
