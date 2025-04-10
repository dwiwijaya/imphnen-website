import Image from 'next/image'
import React from 'react'
import LOGO from '@/assets/logo.png'

const Hero = () => {
    return (
        <header className="min-h-svh flex flex-col items-center justify-center gap-6 px-6 pt-0 pb-8 text-center bg-gradient-to-b from-sky-100 to-slate-50">
            <nav className="flex gap-6 mb-4 text-sky-700 font-semibold text-sm itemsce">
                <a href="#" className="hover:text-sky-500 transition">Home</a>
                <a href="#" className="hover:text-sky-500 transition">About</a>
                <a href="#" className="hover:text-sky-500 transition">Event</a>
                <a href="#" className="hover:text-sky-500 transition">Testimonial</a>
            </nav>

            <Image src={LOGO} alt="logo" width={200} height={200} className="w-64 drop-shadow-xl z-10" />

            <h1 className="text-4xl font-bold text-sky-700 mt-4">Welcome to IMPHNEN</h1>
            <p className="max-w-xl text-gray-600">
                Collaborate with passionate developers, get help from experts, learn new skills, 
                and grow together through exciting events, knowledge sharing, memes, and more.
            </p>

            <div className="flex gap-4 mt-6">
                <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-5 py-2 transition">
                    Join Our Community
                </a>
                <a href="#" className="bg-white border border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold rounded-lg px-5 py-2 transition">
                    Getting Started
                </a>
            </div>
        </header>
    )
}

export default Hero
