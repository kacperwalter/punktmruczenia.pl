// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { HomepageProps } from '@/app/types'
import Hero from '@/app/common/components/sections/hero/hero'
import AboutMe from '@/app/common/components/sections/about-me/about-me'
import Qualifications from '@/app/common/components/sections/qualifications/qualifications'
import TextAndImage from '@/app/common/components/sections/text-and-image/text-and-image'
import BenefitsGrid from '@/app/common/components/sections/benefits-grid/benefits-grid'
import RichNumberedList from '@/app/common/components/sections/rich-numbered-list/rich-numbered-list'
import Tiles from '@/app/common/components/sections/tiles/tiles'
import Contact from '@/app/common/components/sections/contact/contact'
import Footer from '@/app/common/components/sections/footer/footer'
import { getHomepageData } from '@/sanity/sanity-utils'

const Homepage = () => {
  const [homepageData, setHomepageData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        const data = await getHomepageData()
        setHomepageData(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch homepage data:', error)
        setLoading(false)
      }
    }
  
    fetchHomepageData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!homepageData) {
    return <div>Error loading homepage data.</div>
  }

  const homepageDataObject = homepageData[0] || {}
  console.log(homepageDataObject)

  const {
    homepageHeroContent,
    homepageHeroHeading = '',
    homepageHeroButton = '',
    homepageHeroImage = '',
    homepageHeroLogo = '',
    aboutMeTopImage = '',
    aboutMeHeading = '',
    aboutMeCaption = '',
    aboutMeFirstContentImage = '',
    aboutMeContent = '',
    aboutMeSecondContentImage = '',
    qualificationsImage = '',
    qualificationsHeading = '',
    qualificationsContent = [],
    textAndImageHeading = '',
    textAndImageContent = [],
    textAndImageImage = '',
    textAndImageList = [],
    benefitsGridHeading = '', // New heading for the benefits grid
    benefits = [], // New benefits array
    richNumberedListHeading = '', // New heading for the numbered list
    richNumberedListSections = [], // New array for the numbered sections
    tiles = [],
  } = homepageDataObject

  const homepageHeroData = {
    homepageHeroContent,
    homepageHeroHeading,
    homepageHeroButton,
    homepageHeroImage,
    homepageHeroLogo
  }

  const homepageAboutMeData = {
    aboutMeTopImage,
    aboutMeHeading,
    aboutMeCaption,
    aboutMeFirstContentImage,
    aboutMeContent,
    aboutMeSecondContentImage
  }

  const homepageQualificationsData = {
    qualificationsImage,
    qualificationsHeading,
    qualificationsContent,
  }

  const homepageTextAndImageData = {
    textAndImageHeading,
    textAndImageContent,
    textAndImageImage,
    textAndImageList, // Pass the list to the component
  }

  const homepageBenefitsData = {
    benefitsGridHeading,
    benefits, // Pass the list of benefits
  }

  const homepageRichNumberedListData = {
    richNumberedListHeading,
    richNumberedListSections,
  }

  const homepageTilesData = {
    tiles,
  }

  return (
    <main>
      <Hero content={homepageHeroData}/>
      <AboutMe content={homepageAboutMeData} />
      <Qualifications content={homepageQualificationsData} />
      <TextAndImage content={homepageTextAndImageData} />
      <BenefitsGrid content={homepageBenefitsData} />
      <RichNumberedList content={homepageRichNumberedListData} />
      <Tiles content={homepageTilesData} />
      <Contact />
      <Footer />
    </main>
  )
}

export default Homepage