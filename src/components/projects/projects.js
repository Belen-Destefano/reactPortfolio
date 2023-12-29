import React, { useEffect, useState } from "react";
import { Button, Stack, Image } from "@chakra-ui/react";

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
    <section id="portfolio" className="portfolioContainer">
      <h2 className="subtittle">Portfolio</h2>
      {data.map((proyecto, index) => (
        <div
          key={index}
          id={`proyect${data.length - index}`}
          className="portfolioContainer__project"
          style={{ background: background[index % background.length] }}
        >
          <div className="portfolioContainer__project__text">
            <h2>{proyecto.titulo}</h2>
            <h3>{proyecto.subtitulo}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="portfolioContainer__project__btn">
              <a target="_blank" href={proyecto.link}>
                Ver web
              </a>
            </div>
          </div>
          <div
            className={`portfolioContainer__project__img b${
              data.length - index
            }background`}
          >
            <Image
              className="portfolioContainer__project__img--trait"
              src={proyecto.fondoB}
              alt=""
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
