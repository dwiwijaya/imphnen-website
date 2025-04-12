import React from 'react'
import {
    PiSmileyLight,
    PiSwordLight,
    PiRocketLight,
    PiGiftLight,
    PiLaptopLight,
    PiChatTeardropTextLight,
    PiFireLight,
} from 'react-icons/pi'

const Activity = () => {
    const activities = [
        {
            icon: <PiSmileyLight className="text-pink-500" />,
            title: 'Fresh Meme',
            desc: 'Dari shitpost, absurd sampai mengocok ferut, lengkap semua ada',
            color: 'bg-pink-100 border-pink-300',
        },
        {
            icon: <PiFireLight className="text-purple-500" />,
            title: 'Adu Framework',
            desc: 'PHP vs Python? React vs Vue? Kita sabung semua framework yang ada.',
            color: 'bg-purple-100 border-purple-300',
        },
        {
            icon: <PiRocketLight className="text-indigo-500" />,
            title: 'Showcase',
            desc: 'Tunjukkan hasil karyamu disini tidak ada batasan implementasi.',
            color: 'bg-indigo-100 border-indigo-300',
        },
        {
            icon: <PiGiftLight className="text-yellow-500" />,
            title: 'Giveaway',
            desc: 'Admin baik hati kadang bagi-bagi Merchant menarik disini.',
            color: 'bg-yellow-100 border-yellow-300',
        },
        {
            icon: <PiLaptopLight className="text-green-500" />,
            title: 'Event Waktu',
            desc: 'Berbagai acara yang menarik, berhadiah & seru yang bisa diikuti.',
            color: 'bg-green-100 border-green-300',
        },
        {
            icon: <PiChatTeardropTextLight className="text-sky-500" />,
            title: 'Diskusi Santai',
            desc: 'Dari teknologi sampai kapan jadi seorang petani dari seorang programmer.',
            color: 'bg-sky-100 border-sky-300',
        },
    ]

    return (
        <section id="activity" className="text-center pt-4">
            <h2 className="text-4xl font-bold mb-4">Aktivitas Komunitas</h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600">
                Imphnen bukan sekadar tempat bercanda—setiap hari ada aja kegiatan seru! Dari postingan lucu, debat framework,
                sampe bantuin proyek sesama member.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-y-8 gap-x-10 sm:gap-x-6 gap-y-12">
                {activities.map((activity, i) => (
                    <div
                        key={i}
                        data-aos-delay={i * 100}
                        className={`relative p-6 border border-gray-200 rounded-2xl text-left transition-all duration-300 bg-white hover:scale-[1.02] group`}
                    >
                        {/* Border wrapper that spins on hover */}
                        <div className={`absolute -top-6 w-14 h-14 flex items-center justify-center mb-4`}>
                            <div className={`absolute w-full h-full border-2 border-dashed rounded-full ${activity.color} group-hover:animate-spin-slow`}></div>

                            {/* Icon tetap diam */}
                            <div className="text-3xl z-10 ">
                                {activity.icon}
                            </div>
                        </div>

                        <h3 className="mt-5 text-xl font-semibold mb-1 text-gray-800">
                            {activity.title}
                        </h3>
                        <hr className="my-2 border border-slate-200" />
                        <p className="text-sm text-gray-600">{activity.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Activity
