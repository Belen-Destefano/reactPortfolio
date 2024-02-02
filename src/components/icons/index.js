import { Image, Wrap, WrapItem } from "@chakra-ui/react";
import InViewAnimation from "../inViewAnimation";

function Icons() {
  return (
    <Wrap
      className="containerDevicons"
      justify={"center"}
      align={"center"}
      m="2em"
    >
      <InViewAnimation transition={{ duration: 0.4 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 0.5 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 0.6 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 0.7 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 0.8 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 0.9 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 1 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 1.1 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 1.2 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
      <InViewAnimation transition={{ duration: 1.3 }}>
        <WrapItem>
          <Image
            className="containerDevicons__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg"
            alt="icon"
          />
        </WrapItem>
      </InViewAnimation>
    </Wrap>
  );
}

export default Icons;
