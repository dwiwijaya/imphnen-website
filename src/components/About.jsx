import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaSmileBeam, FaDiscord, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Illust from '@/assets/social.svg';
const stats = [
    { icon: <FaUsers />, label: 'Anggota Aktif', value: '10.000+' },
    { icon: <FaDiscord />, label: 'Server Discord', value: 'Seru dan chaos 🤙' },
    { icon: <FaSmileBeam />, label: 'Meme Terunggah', value: '5000+ lol moments' },
];

export default function AboutSection() {
    return (
        <section id="about" className="">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">Tentang Imphnen</h2>
                    <p className="text-lg mb-4">
                        Imphnen, atau lengkapnya <strong>"Ingin Menjadi Programmer Handal Namun Enggan Ngoding"</strong>,
                        adalah komunitas yang lahir dari keresahan para dev mageran tapi niat.
                        Awalnya cuma grup meme di Facebook, sekarang udah jadi tempat nongkrongnya para pejuang bug,
                        tukang commit typo, dan kolektor error lucu.
                    </p>

                    {/* Fakta Menarik */}
                    <div className="space-y-3 text-base">
                        <div className="flex items-start gap-3">
                            <span className="text-sky-500 text-xl">🔥</span>
                            <span><strong>150K+</strong> anggota komunitas</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-sky-500 text-xl">👾</span>
                            <span><strong>Meme</strong> & obrolan seru tiap hari</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-sky-500 text-xl">💼</span>
                            <span>Tempat lahirnya <strong>ide-ide kreatif</strong></span>
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
