import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navigation from "./common/components/sections/navigation/navigation"
import Homepage from "@/app/modules/Homepage/Homepage"
import { getHomepageData } from "@/sanity/sanity-utils"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"

import "@/app/common/components/partials/header/header.scss" // just temporary

const fallbackTitle = "Punkt Mruczenia | Koci behawiorysta | Poznań"
const fallbackDescription = "Jestem kocią behawiorystką. Pomogę, jeśli Twój kot jest agresywny, lękliwy lub załatwia się poza kuwetą. Konsultacje behawioralne w Poznaniu oraz online."

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepageData()
  const title = homepage?.title || fallbackTitle
  const description = homepage?.description || fallbackDescription

  return {
    title,
    description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "pl_PL",
      title,
      description,
      url: "/",
      siteName: "Punkt Mruczenia",
      images: [
        {
          url: "/images/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Punkt Mruczenia – koci behawiorysta",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/opengraph-image.png"],
    },
  }
}

const Home = async () => {
  const homepage = await getHomepageData()

  if (!homepage) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <Homepage content={homepage} />
    </>
  )
}

export default Home
