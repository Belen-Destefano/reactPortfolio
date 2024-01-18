import { extendTheme } from "@chakra-ui/react";
// import Avenir from "./fonts";
import { black, book, heavy, light, medium } from "./fonts";
import components from "./components";

const breakpoints = {
  base: "0px",
  sm: "360px",
  md: "768px",
  lg: "993px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = extendTheme({
  components,
  fonts: {
    "default-normal": black?.style.fontFamily,
    "default-book": book?.style.fontFamily,
    "default-heavy": heavy?.style.fontFamily,
    "default-light": light?.style.fontFamily,
    "default-medium": medium?.style.fontFamily,
  },
  // fonts: {
  //   "default-normal": Avenir.black.style.fontFamily,
  //   "default-book": Avenir.book.style.fontFamily,
  //   "default-heavy": Avenir.heavy.style.fontFamily,
  //   "default-light": Avenir.light.style.fontFamily,
  //   "default-medium": Avenir.medium.style.fontFamily,
  // },
  components,
  breakpoints,
});
