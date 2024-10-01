// @ts-nocheck
import { HomepageProps } from '@/app/types'
import Hero from '@/app/common/components/sections/hero/hero'
import AboutMe from '@/app/common/components/sections/about-me/about-me'
import Qualifications from '@/app/common/components/sections/qualifications/qualifications'
import TextAndImage from '@/app/common/components/sections/text-and-image/text-and-image'
import BenefitsGrid from '@/app/common/components/sections/benefits-grid/benefits-grid'
import RichNumberedList from '@/app/common/components/sections/rich-numbered-list/rich-numbered-list'
import Tiles from '@/app/common/components/sections/tiles/tiles'
import Contact from '@/app/common/components/sections/contact/contact'
import Footer from '@/app/common/components/sections/footer/footer'

const Homepage = ({ content }: HomepageProps) => {
  const homepageData = content[0] || {}

  const {
    homepageHeroContent,
    homepageHeroHeading = '',
    homepageHeroButton = '',
    homepageHeroImage = '',
    homepageHeroLogo = '',
    aboutMeTopImage = '',
    aboutMeHeading = '',
    aboutMeCaption = '',
    aboutMeFirstContentImage = '',
    aboutMeContent = '',
    aboutMeSecondContentImage = '',
    qualificationsImage = '',
    qualificationsHeading = '',
    qualificationsContent = [],
  } = homepageData

  const homepageHeroData = {
    homepageHeroContent,
    homepageHeroHeading,
    homepageHeroButton,
    homepageHeroImage,
    homepageHeroLogo
  }

  const homepageAboutMeData = {
    aboutMeTopImage,
    aboutMeHeading,
    aboutMeCaption,
    aboutMeFirstContentImage,
    aboutMeContent,
    aboutMeSecondContentImage
  }

  const homepageQualificationsData = {
    qualificationsImage,
    qualificationsHeading,
    qualificationsContent,
  }

  return (
    <main>
      <Hero content={homepageHeroData}/>
      {/* @ts-ignore */}
      <AboutMe content={homepageAboutMeData} />
      <Qualifications content={homepageQualificationsData} />
      <TextAndImage />
      <BenefitsGrid />
      <RichNumberedList />
      <Tiles />
      <Contact />
      <Footer />
    </main>
  )
}

export default Homepage