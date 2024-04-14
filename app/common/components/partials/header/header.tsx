import type { HeaderProps } from './header.types'
import './header.scss'

import Heading from '@/app/common/components/partials/heading/heading'
import RichText from '@/app/common/components/partials/rich-text/rich-text'

const Header = ({ heading, headingType, caption, color = 'dark', id }: HeaderProps) => {
  return (
    <header id={id} className="header">
      <Heading
        type={headingType}
        text={heading}
        color={color}
      />
      <RichText
        color={color}
        text={caption}
      />
    </header>
  )
}

export default Header