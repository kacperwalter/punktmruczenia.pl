import { HomepageProps } from '@/app/types'

const Homepage = ({ content }: HomepageProps) => {
  console.log("Homepage", content )

  return (
    <main>
      <section>Home</section>
    </main>
  )
}

export default Homepage