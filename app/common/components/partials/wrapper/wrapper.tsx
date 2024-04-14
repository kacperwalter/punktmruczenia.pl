import './wrapper.scss'
import { type WrapperProps } from './wrapper.types'

const Wrapper = ({ children, isWide, additionalClass = "" }: WrapperProps) => {
  return (
    <div className={`wrapper ${isWide ? "wrapper--wide" : "" } ${additionalClass && additionalClass}`}>
      {children}
    </div>
  )
}

export default Wrapper