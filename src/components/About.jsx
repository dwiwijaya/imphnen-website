import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaSmileBeam, FaDiscord, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Illust from '@/assets/social.svg';
import { PiLightbulbFilamentDuotone, PiLightbulbLight, PiSlideshowDuotone, PiUsersDuotone, PiUsersLight } from 'react-icons/pi';
const stats = [
    { icon: <FaUsers />, label: 'Anggota Aktif', value: '10.000+' },
    { icon: <FaDiscord />, label: 'Server Discord', value: 'Seru dan chaos 🤙' },
    { icon: <FaSmileBeam />, label: 'Meme Terunggah', value: '5000+ lol moments' },
];

export default function AboutSection() {
    return (
        <section id="about" className="pt-12 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">Tentang Imphnen</h2>
                    <p className="sm:text-lg mb-4">
                        <b className="font-bold text-sky-500 underline-offset-4">IMPHNEN</b> atau "Ingin Menjadi Programmer Handal, Namun Enggan Ngoding"
                        Bermula dari sebuah grup Facebook, komunitas ini menjadi tempat bagi orang-orang yang punya mimpi jadi <b>programmer handal</b>,  kalah sama <b>rasa malas</b> buat ngoding. Alih-alih produktif, mereka lebih asik scroll-scroll timeline. 😅
                        Dibentuk pada awal <b>2023</b> , IMPHNEN hadir buat bantu kamu yang mau tapi susah banget mulai. Jadi, mau tetap mager atau mulai ngoding? Pilihan ada di tanganmu! 😎
                    </p>

                    {/* Fakta Menarik */}
                    <div className="space-y-3 text-base">
                        <div className="flex items-start gap-3">
                            <span className="text-sky-500 text-xl"><PiUsersDuotone /></span>
                            <span><strong>150K+</strong> anggota komunitas</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-500 text-xl"><PiSlideshowDuotone /></span>
                            <span><strong>Meme</strong> & obrolan seru tiap hari</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-500 text-xl"><PiLightbulbFilamentDuotone /></span>
                            <span>Tempat lahirnya <strong>ide-ide revolusioner</strong></span>
                        </div>

                    </div>
                </div>

                <div className="">
                    <Image src={Illust} className="-rotate-y-180 hidden md:block" alt="preview" width={500} height={500} />
                </div>
            </div>
        </section>
    );
}
