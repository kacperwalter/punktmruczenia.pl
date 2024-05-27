import type { Metadata } from "next"
import Navigation from "./common/components/sections/navigation/navigation"
import Homepage from "@/app/modules/Homepage/Homepage"
import { getHomepageData } from "@/sanity/sanity-utils"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"

import "@/app/common/components/partials/header/header.scss" // just temporary

export const metadata: Metadata = {
  title: "Punkt Mruczenia - Natalia Szajowska-Tomczak kocia behawiorystka",
  description: "Jestem Natalia i jestem kocią behawiorystką. Pomogę Ci rozwiązać problem behawioralny u Twojego kota.",
  openGraph: {
    title: "Punkt Mruczenia - Natalia Szajowska-Tomczak kocia behawiorystka",
    description: "Jestem Natalia i jestem kocią behawiorystką. Pomogę Ci rozwiązać problem behawioralny u Twojego kota.",
    url: "puntmruczenia.pl",
    siteName: "Punkt Mruczenia",
    images: [
      {
        url: "https://www.punktmruczenia.pl/images/opengraph-image.png",
      }
    ]
  }
}

const Home = async () => {
  const homepageData = await getHomepageData()

  return (
    <>
      <Navigation />
      <Homepage content={homepageData} />
    </>
  )
}

export default Home