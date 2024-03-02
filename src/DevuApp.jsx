import { Helmet, HelmetProvider } from "react-helmet-async";
import { AppRouter } from "./router/AppRouter"
import { Layout } from "./ui"

export const DevuApp = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="La comunidad abierta donde desarrolladores y aficionados a la tecnología comparten su conocimiento y brindan apoyo a quienes lo necesitan."
        />
        <meta property="og:image" content="/assets/devu-icon.png" />
      </Helmet>
      <Layout>
        <AppRouter/>
      </Layout>
    </HelmetProvider>
  )
}
