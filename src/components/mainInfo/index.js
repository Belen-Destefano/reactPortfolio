import React from "react";
import { Image, Box, Flex, Text } from "@chakra-ui/react";

function MainInfo() {
  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      id="containerMain"
      className="containerMain"
    >
      <Box className="containerMain__img">
        <Image
          id="bodyImg"
          // classname de aca abajo es left y visible NO, lo agregaba con intersection
          className="body__img visible"
          src="images/foto.jpg"
          alt=""
        />
      </Box>

      <Box className="containerMain__info">
        <Text variant="h2" className="subtittle">
          Sobre Mi
        </Text>
        <Text variant="p">
          Mi nombre es Belén De Stéfano y soy de Argentina. Me considero una
          apasionada por los códigos y estoy en constante busqueda de nuevos
          retos para continuar aprendiendo. Mi formación en Publicidad reafirmó
          la creatividad con la que siempre me identifiqué, y la utilizo con
          determinación para transformar en posible lo que aparenta no serlo. Mi
          desafío es convertirme en una excelente profesional Frontend, y asi
          seguir capacitándome con firmeza para hacer crecer todo proyecto que
          se me confíe.
        </Text>
      </Box>
    </Flex>
  );
}

export default MainInfo;
