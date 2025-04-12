import Image from 'next/image'
import React from 'react'
import LOGO from '@/assets/logo.png'
import COVER from '@/assets/cover.jpg'

const Hero = () => {
    return (
        <header id="home" className="min-h-svh flex flex-col items-center justify-start gap-8 p-6 pt-4 text-center">
            

            <nav className="w-full max-w-xl  text-sky-700 flex justify-center px-12 font-semibold text-sm">
                <a href="#home" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Beranda</a>
                <a href="#about" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Tentang</a>
                <a href="#activity" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Acara</a>
                <a href="#testimony" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Testimoni</a>
            </nav>

            <div className="flex flex-col justify-center items-center gap-4">
                <Image src={LOGO} alt="logo" width={200} height={200} className="w-80 drop-shadow-xl z-10 mt-18 xl:mt-28" />

                <div className="flex flex-col  gap-3 items-center">
                    <div className="px-4 py-1 text-sm border border-sky-100 text-sky-700 rounded-full font-medium animate-pulse">
                        💤 Komunitas 24JAM Ngoding 💤
                    </div>
                    <h1 className="text-4xl font-bold text-sky-700">Selamat Datang di <strong>IMPHNEN</strong></h1>
                    <p className="max-w-xl text-gray-600 text-sm">
                        Hanya disini, dapatkan dopamin baru melalui postingan aneka ragam member,
                        Belajar skill baru? Bisa. Tapi kita lebih jago fesnukan sambil sabung framework. Yuk, gabung sekarang... atau enggak juga nggak apa-apa sih. Kita juga lagi mager promosi. Capek. #lanjut-scroll-fesnuk
                    </p>
                </div>

                <div className="flex gap-4 pt-4 text-sm w-full">
                    <a href="#" className="flex-1 whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-2.5 transition">
                        Bergabung Sekarang
                    </a>
                    <a href="#" className="flex-1 whitespace-nowrap bg-white border border-sky-200 text-sky-600 hover:bg-sky-50 font-semibold rounded-lg px-6 py-2.5 transition">
                        Jelajahi Fitur
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Hero
