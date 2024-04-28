import type { Metadata } from 'next'
import Homepage from '@/app/modules/Homepage/Homepage'
import { getHomepageData } from '@/sanity/sanity-utils'

import '@/app/common/styles/colors.scss'
import '@/app/common/styles/fonts.scss'
import '@/app/common/styles/globals.scss'
import '@/app/common/styles/spacings.scss'

import '@/app/common/components/partials/header/header.scss' // just temporary

export const metadata: Metadata = {
  title: 'Punkt Mruczenia',
  description:
    'Wspieram opiekunów w zrozumieniu kociego języka i budowaniu relacji opartych na wzajemnym zaufaniu. Pomagam w znalezieniu punktu mruczenia i wyeliminowaniu problemów behawioralnych u kotów',
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
