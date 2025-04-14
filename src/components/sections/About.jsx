import Image from 'next/image';
import { PiLightbulbFilamentDuotone, PiSlideshowDuotone, PiUsersDuotone } from 'react-icons/pi';

import Illust from '@/assets/social.svg';

export default function AboutSection() {
    const communityHighlights = [
        {
            icon: <PiUsersDuotone className="text-sky-500" />,
            highlight: "150K+",
            description: "anggota komunitas",
        },
        {
            icon: <PiSlideshowDuotone className="text-green-500" />,
            highlight: "Meme",
            description: "& obrolan seru tiap hari",
        },
        {
            icon: <PiLightbulbFilamentDuotone className="text-yellow-500" />,
            highlight: "ide-ide revolusioner",
            description: "Tempat lahirnya",
        },
    ];
    return (
        <section id="about" className="pt-12 z-10">
            <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">Tentang Imphnen</h2>
                    <p className="sm:text-lg mb-4">
                        <b className="font-bold text-sky-500 underline-offset-4">IMPHNEN</b> atau "Ingin Menjadi Programmer Handal, Namun Enggan Ngoding"
                        Bermula dari sebuah grup Facebook, komunitas ini menjadi tempat bagi orang-orang yang punya mimpi jadi <b>programmer handal</b>,  kalah sama <b>rasa malas</b> buat ngoding. Alih-alih produktif, mereka lebih asik scroll-scroll timeline. 😅
                        Dibentuk pada awal <b>2023</b> , IMPHNEN hadir buat bantu kamu yang mau tapi susah banget mulai. Jadi, mau tetap mager atau mulai ngoding? Pilihan ada di tanganmu! 😎
                    </p>

                    <div className="space-y-3 text-base">
                        {communityHighlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className={`${highlight.iconColor} text-xl`}>{highlight.icon}</span>
                                <span>
                                    <strong>{highlight.highlight}</strong> {highlight.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-aos="fade-left" className="">
                    <Image src={Illust} className="-rotate-y-180 hidden md:block" alt="preview" width={500} height={500} loading="lazy" />
                </div>
            </div>
        </section>
    );
}
