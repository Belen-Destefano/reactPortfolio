import Loader from "@/components/loader/loading-page";
import { Providers } from "@/lib/providers";
import Fonts from "@/styles/fonts";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://americanchip.io"),
  title: "Belen De Stéfano. Portfolio Frontend",
  description:
    "Dentro de mi portfolio encontrarás algunos de los proyectos que he realizado hasta el momento mientras sigo en constante búsqueda y aprendizaje, explorando nuevas oportunidades y mejorando mis habilidades.",
  keywords:
    "JavaScript, Registro de Usuario, Inicio de Sesión, LocalStorage, Fetch API, Diseño Web Responsive, ReactJS, React Router Dom, Context, Firestore Database, MaterializeCSS, React-Toastify, jQuery, JSON, AJAX, API emailjs, Desarrollo Web, HTML, CSS, SASS, Bootstrap, GIT, Next.js, Chakra UI, Estructura Modular, Componentización, JSON, Fetch Function, Animaciones CSS, Framer Motion, Interfaz Atractiva",
  robots: "index,follow",
  openGraph: {
    title: "Belen De Stéfano. Portfolio Frontend",
    description:
      "Dentro de mi portfolio encontrarás algunos de los proyectos que he realizado hasta el momento mientras sigo en constante búsqueda y aprendizaje, explorando nuevas oportunidades y mejorando mis habilidades.",
    images: [
      {
        url: "/images/portfolio_OG.jpg",
        width: 1200,
        height: 630,
        alt: "Belen De Stéfano. Portfolio Frontend",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bodyBackground">
        <Providers>
          {children}
          {/* <Loader>{children}</Loader> */}
        </Providers>
      </body>
    </html>
  );
}
