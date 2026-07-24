import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://www.punktmruczenia.pl/sitemap.xml",
    host: "https://www.punktmruczenia.pl",
  }
}
