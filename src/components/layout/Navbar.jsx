import React from 'react'

export default function Navbar() {
    return (
        <nav className="z-10 sm:gap-4 w-full max-w-xl text-sky-700 flex justify-center px-12 font-semibold text-sm">
            <a href="#home" aria-label="Beranda" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Beranda</a>
            <a href="#about" aria-label="Tentang" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Tentang</a>
            <a href="#activity" aria-label="Aktivitas" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Acara</a>
            <a href="#testimony" aria-label="Testimoni" className="hover:text-white hover:bg-sky-500 px-3 py-1 rounded-xl transition">Testimoni</a>
        </nav>
    )
}

