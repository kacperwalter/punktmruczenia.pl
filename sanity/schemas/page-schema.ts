const page = {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fieldsets: [
    { name: "hero", title: "Hero" },
    { name: "SEO", title: "SEO" },
  ],
  groups: [
    { name: "hero", title: "Hero" },
    { name: "SEO", title: "SEO", default: true },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: "settings",
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: "SEO",
      group: "SEO",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: "SEO",
      group: 'SEO',
    },
    {
      name: "homepageHeroImage",
      title: "Hero Image",
      type: "image",
      group: "hero",
      fieldset: "hero",
    },
    {
      name: "homepageHeroLogo",
      title: "Logo",
      type: "image",
      group: "hero",
      fieldset: "hero",
    },
    {
      name: "homepageHeroHeading",
      title: "Heading",
      type: "text",
      group: "hero",
      fieldset: "hero",
    },
    {
      name: 'homepageHeroContent',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block'}],
      group: "hero",
      fieldset: "hero",
    },
    {
      name: "homepageHeroButton",
      title: "Button",
      type: "text",
      group: "hero",
      fieldset: "hero",
    },
  ],
}

export default page