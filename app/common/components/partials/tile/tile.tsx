// @ts-nocheck
"use client"

import { useState, useCallback, useRef } from "react"
import Heading from "../../partials/heading/heading"
import Image from "next/image"
import arrow from "@/public/utils/arrow.svg"
import "./tile.scss"

const Tile = ({ heading, additionalInfo, image }) => {
  const [isActive, setIsActive] = useState(false)
  const contentRef = useRef(null)

  const toggleContent = useCallback((event) => {
    if (window.innerWidth > 1024) return
    setIsActive(prev => !prev)

    // Manage focus for accessibility
    if (!isActive && contentRef.current) {
      contentRef.current.focus()
    }
  }, [isActive])

  return (
    <article className={`tile ${isActive ? "tile--active" : ""}`} tabIndex={0} onKeyPress={toggleContent}>
      <div
        className="tile__cover"
        style={{ "--background-image-url": `url(${image})` }}
        onClick={toggleContent}
        role="button" // Role button as it is clickable
        aria-expanded={isActive} // Indicates if the tile is expanded or not
      >
        <Heading 
          type="h3"
          text={heading}
        />
        <Image
          className={`tile__arrow ${isActive ? "tile__arrow--active" : ""}`}
          src={arrow}
          alt="Toggle details" // Descriptive alt text
          width={100}
          height={100}
        />
      </div>
      
      <div
        className={`tile__content ${isActive ? "tile__content--active" : ""}`}
        dangerouslySetInnerHTML={{ __html: additionalInfo }}
        tabIndex="-1" // Make content focusable for scripting but not via tab
        ref={contentRef}
        aria-hidden={!isActive} // Only expose to accessibility tree when active
      />
    </article>
  )
}

export default Tile
