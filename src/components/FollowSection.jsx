import { FaFacebookF, FaInstagram, FaDiscord, FaUsers } from 'react-icons/fa';

export default function FollowUsSection() {
    const socialLinks = [
        {
            name: "Komunitas Discord",
            url: "https://discord.gg/YOUR_INVITE",
            icon: <FaDiscord size={32} />,
            type: "Gabung",
            bgColor: "bg-indigo-100",
            border: "border border-indigo-300",
            textColor: "text-indigo-700",
            hover: "hover:bg-indigo-200",
        },
        {
            name: "Grup Facebook",
            url: "https://www.facebook.com/groups/YOUR_FB_GROUP",
            icon: <FaFacebookF size={32} />,
            type: "Gabung",
            bgColor: "bg-blue-100",
            border: "border border-blue-300",
            textColor: "text-blue-700",
            hover: "hover:bg-blue-200",
        },
        {
            name: "Fanspage",
            url: "https://www.facebook.com/YOUR_PAGE",
            icon: <FaFacebookF size={32} />,
            type: "Ikuti",
            bgColor: "bg-white",
            border: "border border-blue-500",
            textColor: "text-blue-600",
            hover: "hover:bg-blue-50",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/YOUR_INSTAGRAM",
            icon: <FaInstagram size={32} />,
            type: "Ikuti",
            bgColor: "bg-white",
            border: "border border-pink-400",
            textColor: "text-pink-500",
            hover: "hover:bg-pink-50",
        },
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-5xl mx-auto text-center">

                <div className="flex justify-center mb-4">
                    <FaUsers className="text-5xl text-blue-500" />
                </div>

                <h2 className="text-3xl font-bold mb-2">Gabung & Ikuti Kami</h2>
                <p className="text-gray-600 text-lg mb-8">
                    Ikuti update terbaru, diskusi komunitas, dan info menarik lewat kanal sosial media kami. Yuk jadi bagian dari komunitas!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-4 p-4 rounded-xl shadow-sm transition-all ${link.bgColor} ${link.border} ${link.hover}`}
                        >
                            <div className={`p-3 rounded-full bg-white shadow-inner`}>
                                {link.icon}
                            </div>
                            <div className="text-left flex-1">
                                <p className={`font-semibold text-lg ${link.textColor}`}>{link.name}</p>
                                <span className="text-sm text-gray-500">{link.type}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
