import logoNav from '@/public/icons/logo-nav.svg'
import Image from 'next/image'

type BrandLogoProps = {
  className?: string
}

const BrandLogo = ({ className }: BrandLogoProps) => {
  return (
    <Image
      className={className}
      src={logoNav}
      alt="logo"
      width={120}
      height={40}
    />
  )
}

export default BrandLogo
