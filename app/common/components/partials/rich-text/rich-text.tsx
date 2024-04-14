import { type RichTextProps } from "./rich-text.types"
import "./rich-text.scss"

const RichText = ({ text, children, color = 'dark' }: RichTextProps) => {
  const content = text || children

  if (!content) return null

  const colorClassMap = {
    dark: 'rich-text--dark',
    white: 'rich-text--white',
  }

  const className = `rich-text ${colorClassMap[color] || ''}`

  return (
    <p 
      className={className} 
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default RichText