import { motion } from "framer-motion"
import "./DevuHomePage.css";
import { Hero } from "./components/Hero/index";
import { Helmet } from "react-helmet-async";

export const DevuHomePage = () => {
  return (
    <>
      <Helmet>
        <title>Devu Community</title>
        <meta
          name="description"
          content="La comunidad abierta donde desarrolladores y aficionados a la tecnología comparten su conocimiento y brindan apoyo a quienes lo necesitan."
        />
        <meta property="og:image" content="/assets/devu-icon.png" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
      >
        <Hero />
      </motion.div>
    </>
  );
};
