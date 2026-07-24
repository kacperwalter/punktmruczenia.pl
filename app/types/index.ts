import { PortableTextBlock } from "next-sanity"

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Color = 'dark' | 'white'

export type ButtonType = 'button' | 'link'


export interface HomepageData {
  _id: string
  _createdAt: string
  _updatedAt: string
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
  aboutMeContent: string;
  aboutMeSecondContentImage: string;
  qualificationsImage: string
  qualificationsHeading: string
  qualificationsContent: Array<{
    year: string
    items: string[]
  }>
  textAndImageHeading: string
  textAndImageContent: PortableTextBlock[]
  textAndImageImage: string
  textAndImageList: string[]
  benefitsGridHeading: string
  benefits: Array<{
    icon: string
    text: string
  }>
  richNumberedListHeading: string
  richNumberedListSections: Array<{
    text: string
  }>
  tiles: Array<{
    heading: string
    additionalInfo: string[]
    image: string
  }>
  contactHeading: string
  companyName: string
  contactName: string
  contactInfo: Array<{
    icon: string
    text: string
    href: string
  }>
  socialLinks: Array<{
    icon: string
    href: string
  }>
}
