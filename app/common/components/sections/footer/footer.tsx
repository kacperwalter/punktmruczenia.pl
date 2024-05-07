import Image from "next/image"
import "./footer.scss"

import whiteLogo from "@/public/images/logos/punkt_mruczenia_logo_white.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <Image
        src={whiteLogo}
        height={800}
        width={800}
        alt="Punkt mruczenia white logo"
      />
    </footer>
  )
}

export default Footer