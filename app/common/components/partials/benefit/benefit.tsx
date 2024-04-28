import Image from 'next/image'
import { BenefitProps } from './benefit.types'
import './benefit.scss'

const Benefit: React.FC<BenefitProps> = ({ icon, text }) => {
  return (
    <article className="benefit">
      <Image
        src={icon}
        alt={text}
        width={80}
        height={80}
        unoptimized // Use this if your SVGs are local and optimizations are not needed
        className="benefit__icon"
      />

      <p className="benefit__text">{text}</p>
    </article>
  )
}

export default Benefit
