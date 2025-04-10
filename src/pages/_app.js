import "@/styles/globals.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { DefaultSeo } from "next-seo";
import SEO from "../../seo-config";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
