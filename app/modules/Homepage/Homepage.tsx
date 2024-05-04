import { HomepageProps } from '@/app/types'
import Hero from '@/app/common/components/sections/hero/hero'
import AboutMe from '@/app/common/components/sections/about-me/about-me'
import Qualifications from '@/app/common/components/sections/qualifications/qualifications'
import BenefitsGrid from '@/app/common/components/sections/benefits-grid/benefits-grid'
import RichNumberedList from '@/app/common/components/sections/rich-numbered-list/rich-numbered-list'

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
    aboutMeSecondContentImage = ''
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

  return (
    <main>
      <Hero content={homepageHeroData}/>
      {/* @ts-ignore */}
      <AboutMe content={homepageAboutMeData} />
      <Qualifications />
      <BenefitsGrid />
      <RichNumberedList />
    </main>
  )
}

export default Homepage