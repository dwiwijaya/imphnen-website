import React from 'react'

const Activity = () => {
    return (
        <section id="activities" className="py-24 ">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Aktivitas Komunitas</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                    Imphnen bukan sekadar tempat bercanda—setiap hari ada aja kegiatan seru! Dari postingan lucu, debat framework,
                    sampe bantuin proyek sesama member.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: '🤣',
                            title: 'Share Meme & Curhat',
                            desc: 'Dari meme receh sampe curhat ngebug, semua ada!',
                        },
                        {
                            icon: '⚔️',
                            title: 'Debat Framework',
                            desc: 'Vue vs React? Laravel vs Express? Kami siap adu argumen santai!',
                        },
                        {
                            icon: '🚀',
                            title: 'Showcase Proyek',
                            desc: 'Tunjukkan hasil karyamu, dari portofolio sampai side hustle.',
                        },
                        {
                            icon: '🎁',
                            title: 'Giveaway',
                            desc: 'Kadang kami bagi-bagi hadiah karena iseng doang.',
                        },
                        {
                            icon: '👨‍💻',
                            title: 'Event',
                            desc: 'Dari workshop sampai hackathon.',
                        },
                        {
                            icon: '💬',
                            title: 'Diskusi Santai',
                            desc: 'Dari teknologi sampai quarter life crisis programmer.',
                        },
                    ].map((activity, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className="p-6 border rounded-xl hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-4">{activity.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                            <p className="text-sm opacity-80">{activity.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Activity