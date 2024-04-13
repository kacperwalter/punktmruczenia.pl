import { HomepageProps } from '@/app/types'

const Homepage = ({ content }: HomepageProps) => {
  const homepageData = content[0] || {}

  const {
    homepageHeroContent = [],
    homepageHeroHeading = '',
    homepageHeroButton = '',
    homepageHeroImage = '',
    homepageHeroLogo = ''
  } = homepageData

  return (
    <main>
      <section>Home</section>
    </main>
  )
}

export default Homepage