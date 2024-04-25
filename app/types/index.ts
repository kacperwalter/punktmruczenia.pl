import { PortableTextBlock } from "next-sanity"

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Color = 'dark' | 'white'

export type ButtonType = 'button' | 'link'


export interface HomepageData {
  _id: string
  _createdAt: string
  slug: string
  title: string
  description: string
  homepageHeroImage: string
  homepageHeroLogo: string
  homepageHeroHeading: string
  homepageHeroContent: PortableTextBlock[]
  homepageHeroButton: string
  aboutMeTopImage: string;
  aboutMeHeading: string;
  aboutMeCaption: string;
  aboutMeFirstContentImage: string;
  aboutMeContent: any;  // Use a more specific type if available
  aboutMeSecondContentImage: string;
}

export interface HomepageProps {
  content: HomepageData[]
}