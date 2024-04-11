import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: 'alrke5ve',
  dataset: 'production',
  apiVersion: '2024-04-10',
})

export async function getHomepageData() {
  client.fetch(
    groq`
      *[_type == "page"] {
        slug,
        SEO {
          title,
          description
        },
        hero {
          homepageHeroImage,
          homepageHeroLogo,
          homepageHeroHeading,
          homepageHeroContent,
          homepageHeroButton
        }
      }
    `
  )
}