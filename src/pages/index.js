// File: pages/index.js
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { PiCodeBlockLight, PiWrenchLight, PiRocketLight, PiCodesandboxLogoLight, PiGithubLogo, PiSlidersHorizontalLight } from 'react-icons/pi'
import {
  PiSparkleLight,            // AOS - animasi
  PiCloudLightningLight,     // Axios - networking/API
  PiBracketsCurlyLight,      // clsx - class manipulation
  PiPlayCircleLight,         // Framer Motion - animasi interaktif
  PiGlobeLight,              // next-seo - SEO dan web
  PiCloudArrowDownLight,     // next-pwa - offline/download/PWA
  PiNotePencilLight,         // react-hook-form - form input
  PiPaintBrushBroadLight,    // next-themes - tema/light-dark
  PiShieldCheckLight,        // zod - validasi / keamanan
  PiArrowLineRightLight      // nprogress - progress indicator
} from 'react-icons/pi';

import { useEffect, useState } from 'react'
// Tambahkan di paling atas file `pages/index.js`
import { Plus_Jakarta_Sans } from 'next/font/google'

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
      <main className={`${plusJakarta.className} bg-slate-50 text-slate-800`}>

        <div className="bg-gradient-to-b from-indigo-100 to-slate-50 min-h-[100svh] px-6 pt-12 pb-6 flex flex-col items-center justify-between">

          <div className="max-w-6xl mx-auto text-center flex-1 flex items-center">
            <div>
              <div className="inline-block px-3 py-2 text-sm bg-indigo-200 text-indigo-700 rounded-full font-medium mb-4 animate-pulse">
                🚀 Developer Starter Template
              </div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl text-2xl md:text-4xl lg:text-6xl font-extrabold text-slate-900"
              >
                Build Fast with <span className="text-indigo-600">Landing Page Starter</span> for Developers
              </motion.h1>
              <p className="mt-4 text-sm md:text-lg text-slate-600 max-w-lg md:max-w-2xl mx-auto">
                Developer-focused starter using <strong>Next.js Pages Router</strong>, Tailwind CSS, Framer Motion, AOS, and SEO — all in one powerful template.
              </p>
              <a
                href="https://github.com/dwiwijaya/nextjs-landing-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex gap-1 items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-sm transition"
              >
                <PiGithubLogo size={18} />
                View on GitHub
              </a>
              {/* Terminal / Command Preview */}
              <div className="my-8 max-w-[616px] mx-auto text-sm" data-aos="fade-up">
                <div className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('npx create-next-app -e https://github.com/dwiwijaya/nextjs-landing-starter')
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="text-xs text-white/80 hover:text-white transition"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Terminal Body */}
                  <div className="px-4 py-4 text-green-400 font-mono text-sm text-left">
                    <code className="text-slate-400 mb-1">// Quick Start (Pages Router)</code> <br />
                    <code className="space-x-1">
                      <span className="text-green-400 font-semibold">npx</span>{' '}
                      <span className="text-white">create-next-app</span>{' '}
                      <span className="text-green-400">-e</span>{' '}
                      <span className="text-yellow-300">https://github.com/dwiwijaya/nextjs-landing-starter</span>
                    </code>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Section */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              What’s Inside This Starter?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              Everything you need to build fast, responsive, and production-ready websites — with zero setup.
            </p>
          </section>
        </div>

        <div className="px-6 pb-6 sm:pb-12 max-w-3xl sm:max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { icon: <PiCodeBlockLight className="text-3xl text-indigo-500 mb-2" />, title: "Modern Stack", desc: "Includes Tailwind, Framer Motion, SEO, AOS, and more — ready to go.", delay: 0 },
              { icon: <PiWrenchLight className="text-3xl text-indigo-500 mb-2" />, title: "Built for Devs", desc: "Clean folder structure, customizable components, and clear comments.", delay: 100 },
              { icon: <PiRocketLight className="text-3xl text-indigo-500 mb-2" />, title: "Deploy in Seconds", desc: "Optimized for Vercel with minimal setup and blazing-fast performance.", delay: 200 },
              { icon: <PiCodesandboxLogoLight className="text-3xl text-indigo-500 mb-2" />, title: "Open Source", desc: "Free to use and fully open-source. Clone it, fork it, make it your own!", delay: 300 },
            ].map(({ i, icon, title, desc, delay }) => (
              <div key={i} data-aos="fade-up" data-aos-delay={delay} className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 transition">
                {icon}
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <section className="max-w-4xl mx-auto text-center" >
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">
              Pre-installed & Configured Tools
            </h2>
            <p className="text-slate-600 mb-12 text-sm sm:text-base max-w-3xl mx-auto">
              Start building without the hassle — these popular libraries are already integrated and ready to go:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                { icon: <PiSparkleLight className="text-2xl text-indigo-500" />, title: "AOS", desc: "Animate on Scroll — adds smooth entrance animations to your elements." },
                { icon: <PiCloudLightningLight className="text-2xl text-indigo-500" />, title: "Axios", desc: "Promise-based HTTP client for easy API calls and data fetching." },
                { icon: <PiPlayCircleLight className="text-2xl text-indigo-500" />, title: "Framer Motion", desc: "Add interactive animations to your components with ease." },
                { icon: <PiGlobeLight className="text-2xl text-indigo-500" />, title: "next-seo", desc: "Easily manage SEO meta tags and Open Graph data." },
                { icon: <PiCloudArrowDownLight className="text-2xl text-indigo-500" />, title: "next-pwa", desc: "Enable offline support & PWA capabilities out of the box." },
                { icon: <PiPaintBrushBroadLight className="text-2xl text-indigo-500" />, title: "next-themes", desc: "Easily switch theme mode with theme context." },
                { icon: <PiNotePencilLight className="text-2xl text-indigo-500" />, title: "React Hook Form", desc: "Efficient and flexible form management for React." },
                { icon: <PiSlidersHorizontalLight className="text-2xl text-indigo-500" />, title: "React Slick", desc: "Carousel component for React with slick-style transitions." },
                { icon: <PiBracketsCurlyLight className="text-2xl text-indigo-500" />, title: "clsx", desc: "Utility for conditionally joining classNames — great for dynamic styling." },
                { icon: <PiArrowLineRightLight className="text-2xl text-indigo-500" />, title: "nprogress", desc: "Progress bar for page transitions and async loading indicators." },
              ].map((tool, i) => (
                <div
                  key={tool.title}
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                  className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {tool.icon}
                    <h3 className="font-semibold text-slate-800">{tool.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
