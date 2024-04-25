import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: 'alrke5ve',
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
        "aboutMeSecondContentImage": aboutMeSecondContentImage.asset->url
      }
    `
  )
}