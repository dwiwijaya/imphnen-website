import { FaFacebookF, FaInstagram, FaDiscord, FaUsers } from 'react-icons/fa';
import { PiArrowRightFill, PiArrowRightLight } from 'react-icons/pi';
import GithubOrgSection from './GithubOrgSection';

export default function FollowUsSection() {

    const socialLinks = [
        {
            name: "Server Discord",
            url: "https://discord.gg/YOUR_INVITE",
            icon: <FaDiscord size={36} className="text-white" />,
            desc: "Tempat nongkrong online, entah lagi ngobrol kodingan, ngeluh hidup, atau sekadar nyalain mic biar nggak sepi, tenang disini ga disirkelin.",
            type: "Gabung",
            badgeText: "76k+ anggota",
            bgIcon: "bg-indigo-500",
            bgColor: "bg-indigo-100",
            borderColor: "border-indigo-300",
            textColor: "text-indigo-800",
            cardButtonClass: "bg-indigo-100 border-indigo-300 text-indigo-800",
            cardBadgeClass: "bg-indigo-100 text-indigo-700",
        },
        {
            name: "Grup Facebook",
            url: "https://www.facebook.com/groups/YOUR_FB_GROUP",
            icon: <FaFacebookF size={36} className="text-white" />,
            desc: "Sumber dopamin utama para orang yang pengen jadi programmer handal yang gada motivasi selalu ada postingan menarik setiap hari.",
            type: "Gabung",
            badgeText: "150k+ anggota",
            bgIcon: "bg-blue-600",
            bgColor: "bg-blue-100",
            borderColor: "border-blue-300",
            textColor: "text-blue-800",
            cardButtonClass: "bg-blue-100 border-blue-300 text-blue-800",
            cardBadgeClass: "bg-blue-100 text-blue-700",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/YOUR_INSTAGRAM",
            icon: <FaInstagram size={36} className="text-white" />,
            desc: "Isi feed random banget. Kadang meme, kadang polling ngoding, kadang postingan aesthetic dengan caption galau dev life.",
            type: "Ikuti",
            badgeText: "7k+ followers",
            bgIcon: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
            bgColor: "bg-pink-100",
            borderColor: "border-pink-300",
            textColor: "text-pink-800",
            cardButtonClass: "bg-pink-100 border-pink-300 text-pink-800",
            cardBadgeClass: "bg-pink-100 text-pink-700",
        },
        {
            name: "Page Facebook",
            url: "https://www.facebook.com/YOUR_PAGE",
            icon: <FaFacebookF size={36} className="text-white" />,
            desc: "Follow buat update atau liat pengumuman penting (kadang nggak penting), dan giveaway random dari admin waras setengah.",
            type: "Ikuti",
            badgeText: "42k+ followers",
            bgIcon: "bg-blue-500",
            bgColor: "bg-blue-100",
            borderColor: "border-blue-300",
            textColor: "text-blue-800",
            cardButtonClass: "bg-blue-100 border-blue-300 text-blue-800",
            cardBadgeClass: "bg-blue-100 text-blue-700",
        },
    ];



    return (
        <section className="text-center pt-4">
            <h2 className="text-4xl font-extrabold mb-2 text-gray-800">Gabung & Ikuti Kami</h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                Yuk, ikut nimbrung bareng komunitas. Mau ngobrol, curhat, belajar, atau nyari hiburan? Kita ada tempatnya semua!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialLinks.map((link, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                        rel="noopener noreferrer"
                        className={`p-4 relative border-1 bg-white border-gray-200 rounded-2xl transition-transform hover:scale-[1.02]  text-left group`}
                    >
                        <div className={`flex items-center gap-2  rounded-t-2xl`}>
                            <div className={`${link.bgIcon} p-2 rounded-xl`}>
                                {link.icon}
                            </div>
                            <div>
                                <p className={`text-lg font-bold leading-4 mb-2 ${link.textColor}`}>{link.name}</p>
                                <span className={`text-xs px-2 font-light py-1 leading-2 rounded-lg ${link.cardBadgeClass}`}>
                                    {link.badgeText}
                                </span>
                            </div>
                        </div>
                        <hr className="my-4 border-2 border-gray-200" />
                        <p className="leading-5 text-sm text-gray-600  group-hover:text-gray-800 transition-colors duration-300">
                            {link.desc}
                        </p>

                        <a
                            href={link.url}
                            aria-label={`${link.type} ${link.name} IMPHNEN`}
                            className={`group/button mt-3 border-2 border-dashed ${link.cardButtonClass} rounded-xl relative w-fit h-10 px-4 flex items-center justify-center transition-all duration-300`}
                        >
                            <span className="text-sm font-semibold">{link.type}</span>
                            <PiArrowRightLight
                                size={20}
                                title="Ikuti"
                                className="ml-1 transition-transform duration-300 group-hover/button:translate-x-1"
                            />
                        </a>

                    </div>
                ))}
            </div>
            <GithubOrgSection/>
        </section>
    );
}
