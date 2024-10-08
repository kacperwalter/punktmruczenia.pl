import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: '8gffmcxk',
  dataset: 'production',
  apiVersion: '2024-04-10',
})

export async function getHomepageData() {
  return client.fetch(
    groq`
      *[_type == "page"] {
        _id,
        _createdAt,
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
          "icon": icon.asset->url, // Fetch the icon's image URL
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
  )
}