import Head from 'next/head'
import { Plus_Jakarta_Sans } from 'next/font/google'
import HeroSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import ActivitySection from '@/components/sections/Activity'
import FollowUsSection from '@/components/sections/JoinUs'
import TestimonialSection from '@/components/sections/Testimonial'
import FoundersSection from '@/components/sections/Founder'
import ContributionSection from '@/components/sections/Contribution'
import FAQSection from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>IMPHNEN - Komunitas Enggan Ngoding</title>
      </Head>
      <main className={`${plusJakarta.className} relative bg-slate-50 `}>
        <HeroSection />
        <div className="max-w-6xl mx-auto px-6 pb-8 flex flex-col gap-18">
          <AboutSection />
          <ActivitySection />
          <FollowUsSection />
          <TestimonialSection />
          <FoundersSection />
          <ContributionSection />
          <FAQSection />
        </div>
        <Footer />

      </main>
    </>
  )
}
