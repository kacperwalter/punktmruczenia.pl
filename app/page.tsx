import type { Metadata } from "next"
import Homepage from "@/app/modules/Homepage/Homepage"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"

export const metadata: Metadata = {
  title: "Strona główna",
  description: "",
}


const Home = () => {
  return (
    <>
      <Homepage />
    </>
  )
}

export default Home