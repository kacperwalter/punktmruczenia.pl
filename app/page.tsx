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
  title: "Kocia behawiorystka | Poznan | Konsultacje behawioralne",
  description: "Rozwiąż problem behawioralny Twojego kota. Konsultacje w Poznaniu i okolicach oraz online.",
  alternates: {
    canonical: "https://www.punktmruczenia.pl",
  },
  openGraph: {
    title: "Kocia behawiorystka | Poznan | Konsultacje behawioralne",
    description: "Rozwiąż problem behawioralny Twojego kota. Konsultacje w Poznaniu i okolicach oraz online.",
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