import { PortableTextBlock } from "next-sanity"
interface HeroContent {
  homepageHeroContent: PortableTextBlock[]
  homepageHeroHeading: string
  homepageHeroButton: string
  homepageHeroImage: string
  homepageHeroLogo: string
}

export interface HeroProps {
  content: HeroContent
}