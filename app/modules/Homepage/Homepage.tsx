import { HomepageProps } from '@/app/types'
import Hero from '@/app/common/components/sections/hero/hero'

const Homepage = ({ content }: HomepageProps) => {
  const homepageData = content[0] || {}

  const {
    homepageHeroContent = [],
    homepageHeroHeading = '',
    homepageHeroButton = '',
    homepageHeroImage = '',
    homepageHeroLogo = ''
  } = homepageData

  const homepageHeroData = {
    homepageHeroContent,
    homepageHeroHeading,
    homepageHeroButton,
    homepageHeroImage,
    homepageHeroLogo
  }

  return (
    <main>
      <Hero content={homepageHeroData}/>
    </main>
  )
}

export default Homepage