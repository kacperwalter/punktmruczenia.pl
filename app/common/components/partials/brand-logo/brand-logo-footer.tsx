import logoWhite from '@/public/icons/logo-footer.svg'
import Image from 'next/image'

type BrandLogoProps = {
  className?: string
}

const BrandLogoWhite = ({ className }: BrandLogoProps) => {
  return (
    <Image
      className={className}
      src={logoWhite}
      alt="logo"
      width={120}
      height={40}
    />
  )
}

export default BrandLogoWhite
