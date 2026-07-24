import type { MetadataRoute } from "next"
import { getHomepageData } from "@/sanity/sanity-utils"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homepage = await getHomepageData()

  return [
    {
      url: "https://www.punktmruczenia.pl",
      lastModified: homepage?._updatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
