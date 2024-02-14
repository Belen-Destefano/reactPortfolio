import { Box, Flex, Image, Text } from "@chakra-ui/react";
import InViewAnimation from "../inViewAnimation";
import Icons from "../icons";

function MainInfo() {
  return (
    <Flex
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      height={{ base: "auto", lg: "100vh" }}
      id="containerMain"
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        // id="containerMain"
        className="containerMain"
      >
        <InViewAnimation
          effect="fadeInLeft"
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Box className="containerMain__img">
            <Image
              id="bodyImg"
              className="body__img visible"
              src="images/foto.jpg"
              alt=""
            />
          </Box>
        </InViewAnimation>

        <Box className="containerMain__info">
          <InViewAnimation transition={{ duration: 1.0 }} effect="opacity">
            <Text variant="h2" className="subtittle" textAlign="center">
              Sobre Mi
            </Text>

            <Text variant="p" textAlign={{ base: "justify", lg: "center" }}>
              Mi nombre es Belén De Stéfano y soy de Argentina. Aspiro a
              destacar como profesional junior, comprometiendome con la
              resolución de desafíos y el aprendizaje continuo en cada proyecto.
              Además, busco complementar mi formación en Frontend con la
              perspectiva creativa que obtuve de mis estudios en Publicidad.
              Estoy en constante búsqueda de nuevos retos con el fin de
              continuar aprendiendo. Mi meta es convertirme en una excelente
              profesional Frontend, con el propósito de seguir capacitándome con
              firmeza para hacer crecer todo proyecto que se me confíe.
            </Text>
          </InViewAnimation>
        </Box>
      </Flex>
      <Icons />
    </Flex>
  );
}

export default MainInfo;
