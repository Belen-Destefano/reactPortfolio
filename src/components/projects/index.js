import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import InViewAnimation from "../inViewAnimation";

const Projects = () => {
  const [data, setData] = useState([]);
  const background = [
    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(150,88,78,1) 73%)",
    "linear-gradient(90deg, black 0%, #621818 73%)",
    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(226,177,177,1) 73%)",
  ];

  useEffect(() => {
    fetch("mockdata.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box id="portfolio" className="portfolioContainer">
      <Text variant="h2Center">Portfolio</Text>
      {data.map((proyecto, index) => (
        <Flex
          key={index}
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="end"
          id={`proyect${data.length - index}`}
          className="portfolioContainer__project"
          style={{ background: background[index % background.length] }}
        >
          <Box
            w={{ base: "90%", lg: "40%" }}
            className="portfolioContainer__project__text"
          >
            <InViewAnimation transition={{ duration: 0.4 }}>
              <Text variant="h2">{proyecto.titulo}</Text>
            </InViewAnimation>
            <InViewAnimation transition={{ duration: 0.5 }}>
              <Text variant="h3">{proyecto.subtitulo}</Text>
            </InViewAnimation>
            <InViewAnimation transition={{ duration: 0.6 }}>
              <Text
                variant="pVariation"
                textAlign={{ base: "justify", lg: "start" }}
              >
                {proyecto.descripcion}
              </Text>
            </InViewAnimation>

            <InViewAnimation transition={{ duration: 0.6 }} margin="10%">
              <Box
                className="portfolioContainer__project__btn"
                bg="whitesmoke"
                border="1px solid whitesmoke"
                borderRadius="5px"
                padding="11px"
                textAlign="center"
                display="inline-block"
                transition="all 0.1s ease-in"
                margin="30px 0px"
                _hover={{
                  bg: "#f5f5f500",
                  border: "1px solid white",
                  "& a": {
                    color: "white",
                  },
                }}
              >
                <Link
                  target="_blank"
                  href={proyecto.link}
                  color="#1f282d"
                  textDecoration="none"
                  textTransform="uppercase"
                >
                  Ver web
                </Link>
              </Box>
            </InViewAnimation>
          </Box>
          <Box
            w={{ base: "90%", lg: "49%" }}
            h={"100%"}
            className="portfolioContainer__project__img"
          >
            {" "}
            <InViewAnimation
              effect="opacity"
              transition={{ duration: 0.7 }}
              margin="-25%"
            >
              <Link target="_blank" href={proyecto.link}>
                <Image
                  className="portfolioContainer__project__img--trait"
                  src={proyecto.fondoB}
                  alt=""
                />
              </Link>
              <Text variant="pSmall">
                <List
                  spacing={1}
                  display="flex"
                  flexWrap="wrap"
                  align="flex-start"
                  mt="3%"
                  mb="3%"
                >
                  {proyecto.tecnologias.split(", ").map((tecnologia, index) => (
                    <ListItem key={index} mt={1} mb={1} mr={2}>
                      <ListIcon as={CheckIcon} color="green.500" />
                      {tecnologia}
                    </ListItem>
                  ))}
                </List>
              </Text>
            </InViewAnimation>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Projects;
