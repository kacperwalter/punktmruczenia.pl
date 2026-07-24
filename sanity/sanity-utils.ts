import 'server-only'

import { createClient, groq } from 'next-sanity'
import type { HomepageData } from '@/app/types'

const client = createClient({
  projectId: '8gffmcxk',
  dataset: 'production',
  apiVersion: '2024-04-10',
  useCdn: false,
})

const homepageQuery = groq`
  *[_type == "page"] | order(_createdAt asc)[0] {
        _id,
        _createdAt,
        _updatedAt,
        "slug": slug.current,
        title,
        description,
        "homepageHeroImage": homepageHeroImage.asset->url,
        "homepageHeroLogo": homepageHeroLogo.asset->url,
        homepageHeroHeading,
        homepageHeroContent,
        homepageHeroButton,
        "aboutMeTopImage": aboutMeTopImage.asset->url,
        aboutMeHeading,
        aboutMeCaption,
        "aboutMeFirstContentImage": aboutMeFirstContentImage.asset->url,
        aboutMeContent,
        "aboutMeSecondContentImage": aboutMeSecondContentImage.asset->url,
        "qualificationsImage": qualificationsImage.asset->url,
        qualificationsHeading,
        qualificationsContent[]{
          year,
          items
        },
        textAndImageHeading,
        textAndImageContent,
        "textAndImageImage": textAndImageImage.asset->url,
        textAndImageList,
        benefitsGridHeading,
        benefits[]{
          "icon": icon.asset->url,
          text
        },
        richNumberedListHeading,
        richNumberedListSections[] {
          text
        },
        tiles[] {
          heading,
          additionalInfo,
          "image": image.asset->url
        },
        contactHeading,
        companyName,
        contactName,
        contactInfo[] {
          "icon": icon.asset->url,
          text,
          href
        },
        socialLinks[] {
          "icon": icon.asset->url,
          href
        }
      }
`

export async function getHomepageData(): Promise<HomepageData | null> {
  return client.fetch<HomepageData | null>(
    homepageQuery,
    {},
    {
      next: {
        revalidate: 3600,
        tags: ['homepage'],
      },
    },
  )
}
