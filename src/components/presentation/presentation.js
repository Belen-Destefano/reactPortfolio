import React from "react";
import { Button, Stack, Image } from "@chakra-ui/react";

function Presentation() {
  return (
    <section className="containerPresentation" id="containerPresentation">
      <div className="containerPresentation__info">
        <h3>Hola, soy</h3>
        <h1>Belén </h1>
        <h1> De Stéfano</h1>
        <h3>Desarrolladora Web Front End</h3>

        <Stack spacing={2} direction="row" align="center" mt={10}>
          <a target="_blank" href="images/CurriculumVitaeBelenDeStefano.pdf">
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
          </a>

          <a href="#contact">
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
          </a>
        </Stack>
      </div>

      <div className="containerPresentation__mobiles">
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
      </div>
    </section>
  );
}

export default Presentation;
