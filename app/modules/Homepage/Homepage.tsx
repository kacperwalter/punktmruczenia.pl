import { HomepageProps } from '@/app/types'
import Hero from '@/app/common/components/sections/hero/hero'
import AboutMe from '@/app/common/components/sections/about-me/about-me'
import Qualifications from '@/app/common/components/sections/qualifications/qualifications'
import BenefitsGrid from '@/app/common/components/sections/benefits-grid/benefits-grid'
import BehavioralProblems from '@/app/common/components/sections/behavioral-problems/behavioral-problems'
import Consultations from '@/app/common/components/sections/consultation/consultation'
import Pricing from '@/app/common/components/sections/pricing/pricing'
import Contact from '@/app/common/components/sections/contact/contact'
import Image from 'next/image'

const Homepage = ({ content }: HomepageProps) => {
  const homepageData = content[0] || {}

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
  } = homepageData

  const homepageHeroData = {
    homepageHeroContent,
    homepageHeroHeading,
    homepageHeroButton,
    homepageHeroImage,
    homepageHeroLogo,
  }

  const homepageAboutMeData = {
    aboutMeTopImage,
    aboutMeHeading,
    aboutMeCaption,
    aboutMeFirstContentImage,
    aboutMeContent,
    aboutMeSecondContentImage,
  }

  return (
    <main>
      <Hero content={homepageHeroData} />

      <div className="hidden md:block md:ml-[18rem] lg:ml-[24rem] relative xl:ml-[30rem]">
        <Image src="/icons/line-1.svg" alt="hero" width={600} height={400} />
      </div>
      <div className="md:hidden flex justify-center mb-2">
        <Image
          src="/icons/line-phone-1.svg"
          alt="hero"
          width={100}
          height={100}
        />
      </div>
      {/* @ts-ignore */}
      <AboutMe content={homepageAboutMeData} />
      <div className="md:hidden flex justify-center mb-12 -mt-24">
        <Image
          src="/icons/line-phone-2.svg"
          alt="hero"
          width={300}
          height={300}
        />
      </div>
      <div className="hidden md:-mt-64 md:flex md:justify-center md:items-center">
        <Image src="/icons/line-3.svg" alt="hero" width={300} height={240} />
      </div>
      <Qualifications />
      <div className="hidden   md:block  lg:ml-[24rem] relative xl:ml-[58rem] z-[-1]">
        <Image src="/icons/line-4.svg" alt="hero" width={400} height={400} />
      </div>
      <div className="md:hidden flex justify-center">
        <Image
          src="/icons/line-phone-3.svg"
          alt="hero"
          width={280}
          height={280}
        />
      </div>
      <div className="md:block md:-mt-[34rem] md:mx-24">
        <BehavioralProblems />
      </div>
      <div className="hidden -mt-64  md:block md:mr-[18rem] lg:ml-[24rem] relative xl:ml-[78rem] z-[-1]">
        <Image src="/icons/line-5.svg" alt="hero" width={400} height={400} />
      </div>
      <BenefitsGrid />
      <Consultations />
      <div className="hidden md:flex md:justify-center md:items-center">
        <Image src="/icons/line-6.svg" alt="hero" width={300} height={240} />
      </div>
      <div className="-mt-32">
        <Pricing />
      </div>

      <Contact />
    </main>
  )
}

export default Homepage
