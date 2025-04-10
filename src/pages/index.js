// File: pages/index.js
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
// Tambahkan di paling atas file `pages/index.js`
import { Plus_Jakarta_Sans } from 'next/font/google'
import Hero from '@/components/Hero'
import AboutSection from '@/components/About'
import Activity from '@/components/Activity'
import FoundersSection, { Founder } from '@/components/Founder'
import GithubOrgSection from '@/components/GithubOrgSection'
import FollowUsSection from '@/components/FollowSection'
import TestimonialSection from '@/components/TestimonialSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import ContributionCard from '@/components/ContributeCard'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export default function Home() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])

  return (
    <>
      <NextSeo
        title="Next.js Pages Router Starter"
        description="A modern starter template using Next.js Pages Router — perfect for developer-focused landing pages with Tailwind, Framer Motion, AOS, and more."
      />
      <Head>
        <title>Next.js Starter Landing</title>
      </Head>
      <main className={`${plusJakarta.className} relative bg-slate-50`}>

        <Hero />
        <AboutSection/>
        <Activity/>
        <GithubOrgSection/>
        <FollowUsSection/>
        <TestimonialSection/>
        <ContributionCard/>
        <FoundersSection/>
        <FAQSection/>
        <Footer/>
        
      </main>
    </>
  )
}
