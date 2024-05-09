import type { HeadingProps } from "./heading.types"
import "./heading.scss"

const Heading = ({ type = 'h2', text }: HeadingProps) => {
  const Tag = type

  const typeClassMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  }

  // Determine the className and tabIndex based on the heading type
  const className = `heading ${typeClassMap[type] || ''}`
  const tabIndex = (type === 'h1' || type === 'h2') ? 0 : undefined

  return (
    <Tag
      className={className}
      tabIndex={tabIndex}
      dangerouslySetInnerHTML={{ __html: text }} 
    />
  )
}

export default Heading
