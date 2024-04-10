import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

const config = defineConfig({
  projectId: 'alrke5ve',
  dataset: 'production',
  title: 'punktmruczenia.pl',
  apiVersion: '2024-04-10',
  basePath: '/admin',
  plugins: [
    structureTool(),
  ]
})

export default config