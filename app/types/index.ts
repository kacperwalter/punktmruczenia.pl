export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Color = 'dark' | 'white'

export type ButtonType = 'button' | 'link'

interface HomepageData {
  _id: string
  _createdAt: string
  slug: string
  title: string
  description: string
  homepageHeroImage: string
  homepageHeroLogo: string
  homepageHeroHeading: string
  homepageHeroContent: string[]
  homepageHeroButton: string
}

interface HomepageProps {
  content: HomepageData[]
}