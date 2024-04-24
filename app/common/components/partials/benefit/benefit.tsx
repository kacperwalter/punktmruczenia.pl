import Image from 'next/image'

interface BenefitProps {
  icon: string
  text: string
}

const Benefit: React.FC<BenefitProps> = ({ icon, text }) => {
  return (
    <article className="benefit">
      <Image
        src={icon}
        alt={text}
        width={100}
        height={100}
        unoptimized // Use this if your SVGs are local and optimizations are not needed
      />
      <p>{text}</p>
    </article>
  )
}

export default Benefit
