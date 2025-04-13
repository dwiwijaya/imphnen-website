import "@/styles/globals.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { DefaultSeo } from "next-seo";
import SEO from "../../seo-config";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {React, useEffect} from 'react'

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500, // durasi animasi
      easing: 'ease-out', // jenis transisi
    });
    
  }, [])
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
