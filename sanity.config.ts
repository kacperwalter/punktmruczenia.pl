import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from '@/sanity/schemas'

const config = defineConfig({
  projectId: '8gffmcxk',
  dataset: 'production',
  title: 'punktmruczenia.pl',
  apiVersion: '2024-04-10',
  basePath: '/admin',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemas,
  },
})

export default config