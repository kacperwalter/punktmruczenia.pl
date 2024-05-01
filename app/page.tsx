import type { Metadata } from 'next'
import Homepage from '@/app/modules/Homepage/Homepage'
import { getHomepageData } from '@/sanity/sanity-utils'

import '@/app/common/styles/colors.scss'
import '@/app/common/styles/fonts.scss'
import '@/app/common/styles/globals.scss'
import '@/app/common/styles/spacings.scss'

import '@/app/common/components/partials/header/header.scss' // just temporary

export const metadata: Metadata = {
  title: 'Punkt Mruczenia - kocia behawiorystka',
  description:
    'Jestem Natalia i jestem kocią behawiorystką. Pomogę Ci rozwiązać problem behawioralny u Twojego kota. ',
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
