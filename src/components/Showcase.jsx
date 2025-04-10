import React from 'react'

const Showcase = () => {
    return (
        <section id="showcase" className="py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Showcase Proyek Member</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                    Dari tools internal sampai produk beneran, ini dia karya-karya keren buatan anggota Imphnen. Siapa tahu kamu jadi tertarik kolaborasi bareng!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Lazyplay',
                            image: '/img/lazyplay-thumb.jpg',
                            url: 'https://lazyplay.vercel.app',
                            creator: 'Dwi',
                        },
                        {
                            title: 'Frontend Snippet',
                            image: '/img/snippet.jpg',
                            url: 'https://frontendsnippet.dev',
                            creator: 'Agung',
                        },
                        {
                            title: 'API Kuliner',
                            image: '/img/kuliner.jpg',
                            url: 'https://kulinerapi.dev',
                            creator: 'Farhan',
                        },
                    ].map((project, i) => (
                        <a
                            key={i}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-left rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">by {project.creator}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Showcase