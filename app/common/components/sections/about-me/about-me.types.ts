import { PortableTextBlock } from 'next-sanity'

export interface AboutMeContent {
  aboutMeTopImage: string
  aboutMeHeading: string
  aboutMeCaption: string
  aboutMeFirstContentImage: string
  aboutMeContent: PortableTextBlock | PortableTextBlock[]
  aboutMeSecondContentImage: string
}

export interface AboutMeProps {
  content: AboutMeContent
}