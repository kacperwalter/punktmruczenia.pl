import type { Metadata } from "next"
import Homepage from "@/app/modules/Homepage/Homepage"
import { getHomepageData } from "@/sanity/sanity-utils"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"

import "@/app/common/components/partials/header/header.scss" // just temporary

export const metadata: Metadata = {
  title: "Strona główna",
  description: "",
}

const Home = async () => {
  const homepageData = await getHomepageData()

  return (
    <>
      <Homepage content={homepageData} />
    </>
  )
}

export default Home