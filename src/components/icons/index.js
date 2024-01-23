import { Image, Wrap, WrapItem } from "@chakra-ui/react";

function Icons() {
  return (
    <Wrap className="containerDevicons" justify={"center"} align={"center"}>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          alt="icon"
        />
      </WrapItem>

      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          alt="icon"
        />
      </WrapItem>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="icon"
        />
      </WrapItem>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="icon"
        />
      </WrapItem>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="icon"
        />
      </WrapItem>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          alt="icon"
        />
      </WrapItem>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
          alt="icon"
        />
      </WrapItem>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
          alt="icon"
        />
      </WrapItem>
      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
          alt="icon"
        />
      </WrapItem>

      <WrapItem>
        <Image
          className="containerDevicons__icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg"
          alt="icon"
        />
      </WrapItem>
    </Wrap>
  );
}

export default Icons;
