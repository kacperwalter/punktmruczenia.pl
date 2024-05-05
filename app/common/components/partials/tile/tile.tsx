// @ts-nocheck
"use client"

import { useState } from "react"
import Heading from "../../partials/heading/heading"
import Image from "next/image"
import arrow from "@/public/utils/arrow.svg"
import "./tile.scss"

// TODO typing
const Tile = ({ heading, additionalInfo, image }) => {
  const [isActive, setIsActive] = useState(false)
  const toggleContent = () => setIsActive(!isActive)

  return (
    <article className={`tile ${isActive ? "tile--active" : ""}`}>
      <div
        className="tile__cover"
        style={{ "--background-image-url": `url(${image})` }}
        onClick={toggleContent}
      >
        <Heading 
          type="h3"
          text={heading}
        />
        <Image
          className={`tile__arrow ${isActive ? "tile__arrow--active" : ""}`}
          src={arrow}
          alt="arrow"
          width={100}
          height={100}
        />
      </div>
      
      <div
        className={`tile__content ${isActive ? "tile__content--active" : ""}`}
        dangerouslySetInnerHTML={{ __html: additionalInfo }}
      />
    </article>
  )
}

export default Tile