import type { Metadata } from "next"
import Homepage from "@/app/modules/Homepage/Homepage"
import { getHomepageData } from "@/sanity/sanity-utils"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"

export const metadata: Metadata = {
  title: "Strona główna",
  description: "",
}

const Home = async () => {
  const homepageData = await getHomepageData()
  console.log(homepageData)

  return (
    <>
      <Homepage />
    </>
  )
}

export default Home