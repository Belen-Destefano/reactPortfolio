const sharedParagraphStyles = {
  fontFamily: "default-light",
  color: "whitesmoke",
};

const sharedH2Styles = {
  fontSize: ["30px", "35px", "45px"],
  fontFamily: "default-light",
  letterSpacing: [null, null, "-2px"],
  color: "whitesmoke",
};

const Text = {
  variants: {
    center: {
      textAlign: "center",
    },
    primary: {
      fontSize: "16px",
      lineHeight: "20px",
      fontFamily: "default-light",
    },
    h1: {
      fontSize: ["55px", "60px", "72px", "72px"],
      // fontSize: ["4.5em", "5em", "4em", "4.5em"],
      lineHeight: ["70px", null, null, "90px"],
      fontFamily: "default-medium",
      backgroundImage:
        "linear-gradient(-225deg, #d3d5d5, #a7aaaf 29%, #a9d1e6 67%, #c9cfd4)",
      letterSpacing: "-5px",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
    h2: {
      ...sharedH2Styles,
    },
    h2Center: {
      ...sharedH2Styles,
      textAlign: "center",
    },
    h3: {
      fontSize: ["20px", "25px", "30px", "30px"],
      ...sharedParagraphStyles,
    },
    p: {
      fontSize: ["14px", "18px", "23px", "20px"],
      fontFamily: "default-light",
      color: "whitesmoke",
    },
    pVariation: {
      fontSize: ["14px", "18px", "23px", "17px"],
      ...sharedParagraphStyles,
    },
    pSmall: {
      fontSize: ["12px", "15px", "21px", "15px"],
      ...sharedParagraphStyles,
    },
  },
};
export default Text;
