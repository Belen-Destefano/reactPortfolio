"use client";

import Portfolio from "@/components/projects/projects";
import styles from "./page.module.css";
import { Button, Stack, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <nav className="containerHeader">
          <a href="#containerPresentation" className="firma">
            <Image src="/images/firma.png" alt="firma" />
          </a>

          <Stack
            spacing={2}
            direction={{ base: "row", lg: "column" }}
            align="center"
            mt={{ base: "0", lg: "5" }}
          >
            <a href="#containerPresentation">
              <Button
                color="white"
                borderColor="white"
                size="sm"
                variant="outline"
                _hover={{ color: "gray.800", bg: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  ></path>
                </svg>
              </Button>
            </a>

            <a href="#containerMain">
              <Button
                color="white"
                borderColor="white"
                size="sm"
                variant="outline"
                _hover={{ color: "gray.800", bg: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
              </Button>
            </a>
            <a href="#portfolio">
              <Button
                color="white"
                borderColor="white"
                size="sm"
                variant="outline"
                _hover={{ color: "gray.800", bg: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
              </Button>
            </a>
            <a href="#contact">
              <Button
                color="white"
                borderColor="white"
                size="sm"
                variant="outline"
                borderWidth="1px"
                _hover={{ color: "gray.800", bg: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </Button>
            </a>
          </Stack>
        </nav>
      </header>
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
      <section id="containerMain" className="containerMain">
        <div className="containerMain__img">
          <Image
            id="bodyImg"
            // classname de aca abajo es left y visible NO, lo agregaba con intersection
            className="body__img visible"
            src="images/foto.jpg"
            alt=""
          />
        </div>

        <div className="containerMain__info">
          <h2 className="subtittle">Sobre Mi</h2>
          <p>
            Mi nombre es Belén De Stéfano y soy de Argentina. Me considero una
            apasionada por los códigos y estoy en constante busqueda de nuevos
            retos para continuar aprendiendo. Mi formación en Publicidad
            reafirmó la creatividad con la que siempre me identifiqué, y la
            utilizo con determinación para transformar en posible lo que
            aparenta no serlo. Mi desafío es convertirme en una excelente
            profesional Frontend, y asi seguir capacitándome con firmeza para
            hacer crecer todo proyecto que se me confíe.
          </p>
        </div>
      </section>
      <div className="containerDevicons">
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
          alt="icon"
        />
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg"
          alt="icon"
        />
      </div>
      <section id="portfolio" className="portfolioContainer">
        <Portfolio />
      </section>
      <section id="contact">
        <div class="subtittle--background">
          <h2 class="subtittle subtittle--background">Contacto</h2>
        </div>
        <div class="contactFlex">
          <div class="contactContainer">
            <Stack spacing={2} direction={"row"} align="center" mt={5}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/belen-de-stefano/"
              >
                <Button
                  color="white"
                  borderColor="white"
                  size="sm"
                  variant="outline"
                  _hover={{ color: "gray.800", bg: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Button>
              </a>
              <a target="_blank" href="https://github.com/Belen-Destefano">
                <Button
                  color="white"
                  borderColor="white"
                  size="sm"
                  variant="outline"
                  _hover={{ color: "gray.800", bg: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Button>
              </a>
              <a
                target="_blank"
                href="images/CurriculumVitaeBelenDeStefano.pdf"
              >
                <Button
                  color="white"
                  borderColor="white"
                  size="sm"
                  variant="outline"
                  _hover={{ color: "gray.800", bg: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-file-earmark-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                  </svg>
                </Button>
              </a>
            </Stack>
          </div>
          <h3 class="mail">belen.destefano@gmail.com</h3>
          <p class="myproject">
            En cuanto a la creación de este portfolio, utilicé HTML, CSS,
            Javascript y Sass, lo cual me permitio trabajar con variables y
            funciones como each para crear clases de manera más dinámica.
            Además, los proyectos se encuentran en un archivo JSON, que es
            consumido a través de fetch. Para lograr la aparición de los
            proyectos de acuerdo al scroll, utilicé Intersection Observer,
            consiguiendo una carga más fluida y una experiencia de usuario más
            atractiva.
          </p>
        </div>
      </section>
    </main>
  );
}
