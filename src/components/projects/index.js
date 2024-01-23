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
import { useEffect, useState } from "react";
import InViewAnimation from "../inViewAnimation";

const Portfolio = () => {
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
        <InViewAnimation
          key={index}
          effect="opacity"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="end"
            // key={index}
            id={`proyect${data.length - index}`}
            className="portfolioContainer__project"
            style={{ background: background[index % background.length] }}
          >
            <Box
              w={{ base: "90%", lg: "40%" }}
              className="portfolioContainer__project__text"
            >
              <Text variant="h2">{proyecto.titulo}</Text>
              <Text variant="h3">{proyecto.subtitulo}</Text>

              <Text variant="pVariation">{proyecto.descripcion}</Text>

              <div className="portfolioContainer__project__btn">
                <a target="_blank" href={proyecto.link}>
                  Ver web
                </a>
              </div>
            </Box>
            <Box
              w={{ base: "90%", lg: "49%" }}
              h={"100%"}
              className="portfolioContainer__project__img"
              // className={`portfolioContainer__project__img b${
              //   data.length - index
              // }background`}
            >
              <a target="_blank" href={proyecto.link}>
                <Image
                  className="portfolioContainer__project__img--trait"
                  src={proyecto.fondoB}
                  alt=""
                />
              </a>
              <Text variant="pSmall">
                <List
                  spacing={1}
                  display="flex"
                  flexWrap="wrap"
                  align="flex-start"
                  mt="3%"
                >
                  {proyecto.tecnologias.split(", ").map((tecnologia, index) => (
                    <ListItem key={index} mt={1} mr={2}>
                      <ListIcon as={CheckIcon} color="green.500" />
                      {tecnologia}
                    </ListItem>
                  ))}
                </List>
              </Text>
            </Box>
          </Flex>
        </InViewAnimation>
      ))}
    </Box>
  );
};

export default Portfolio;