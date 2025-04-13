import Image from 'next/image'
import React from 'react'
import LOGO from '@/assets/logo-compressed.png'
import COVER from '@/assets/cover.jpg'
import { Pattern } from './Pattern'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-svh bg-gradient-to-t from-sky-50 to-slate-white ">

            <Pattern />
            <header className="z-10 h-svh flex flex-col items-center justify-start gap-8 p-6 pt-10 text-center">
                <nav className="z-10 sm:gap-4 w-full max-w-xl text-sky-700 flex justify-center px-12 font-semibold text-sm">
                    <a href="#home" aria-label="Beranda" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Beranda</a>
                    <a href="#about" aria-label="Tentang" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Tentang</a>
                    <a href="#activity" aria-label="Acara" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Acara</a>
                    <a href="#testimony" aria-label="Testimoni" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Testimoni</a>
                </nav>


                <div className="z-10 flex flex-1 h-full flex-col justify-center items-center gap-4">
                    <img
                        data-aos="zoom-in"
                        src="./logo-compressed.png"
                        alt="logo"
                        width="200"
                        height="200"
                        className="w-80 lg:w-96 drop-shadow-xl z-10"
                    />


                    <div data-aos="fade-up" className="flex flex-col  gap-3 items-center mt-4 sm:mt-8">
                        <div className="px-4 py-1 text-sm border-2 border-dashed bg-sky-100 border-sky-200 text-sky-700 rounded-full font-medium animate-pulse">
                            💤 Komunitas 24JAM Ngoding 💤
                        </div>
                        <h1 className="text-4xl font-bold text-sky-700">Selamat Datang di <strong>IMPHNEN</strong></h1>
                        <p className="max-w-xl text-gray-600 text-sm">
                            Hanya disini, dapatkan dopamin baru melalui postingan aneka ragam member,
                            Belajar skill baru? Bisa. Tapi kita lebih jago fesnukan sambil sabung framework. Yuk, gabung sekarang... atau enggak juga nggak apa-apa sih. Kita juga lagi mager promosi. Capek. #lanjut-scroll-fesnuk
                        </p>
                        <div className="flex gap-4 pt-4 text-sm w-full">
                            <a href="#join&follow" className="flex-1 whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-3 transition">
                                Bergabung Sekarang
                            </a>
                            <a href="#about" className="flex-1 whitespace-nowrap border-3 border-dashed border-sky-200 bg-white  text-sky-400 hover:bg-sky-50 font-semibold rounded-lg px-6 py-3 transition">
                                Jelajahi Fitur
                            </a>
                        </div>
                    </div>

                </div>
            </header>

        </section>
    )
}

export default Hero
