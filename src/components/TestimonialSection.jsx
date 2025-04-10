import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToScroll: 1,
};

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Reza Pahlawan Bug",
            role: "Meme Hunter",
            message: "Sejak gabung grup ini, saya jadi lebih sering fesnukan daripada ngoding. Tapi nggak nyesel 😎",
            avatar: "/avatars/avatar1.png"
        },
        {
            name: "Anindya D.",
            role: "Backend Beginner",
            message: "Awalnya cuma scroll meme, eh sekarang malah belajar contribute ke open source. Gila sih komunitas ini!",
            avatar: "/avatars/avatar2.png"
        },
        {
            name: "Agus Script",
            role: "Ngulik Framework Enthusiast",
            message: "Gabung IMPHNEN tuh kayak buka YouTube, niatnya 5 menit, taunya 3 jam. Worth it.",
            avatar: "/avatars/avatar3.png"
        },
        {
            name: "Caca N.",
            role: "HTML Enjoyer",
            message: "Dulu benci JavaScript, sekarang… masih sih. Tapi sekarang lebih paham kenapa wajar benci.",
            avatar: "/avatars/avatar4.png"
        },
        {
            name: "Riko K.",
            role: "Kontributor Project Komunitas",
            message: "Kesan serius dikit: komunitas ini bantu aku berani sharing dan kontribusi project bareng orang lain. Salut 🙌",
            avatar: "/avatars/avatar5.png"
        },
        {
            name: "Joko J.S",
            role: "Frontend Feeling Good",
            message: "Setelah gabung, saya langsung uninstall TikTok, karena feed grup ini lebih chaotic dan menyenangkan.",
            avatar: "/avatars/avatar6.png"
        },
    ];


    return (
        <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimoni Member</h2>
                <p className="text-gray-600 mb-8">
                    Kombinasi antara pengalaman receh dan serius dari para member setia.
                </p>
                <Slider {...settings}>
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white shadow-lg rounded-xl p-6 text-left mx-4">
                            <FaQuoteLeft className="text-sky-500 text-2xl mb-3" />
                            <p className="text-gray-700 text-lg italic mb-4">"{t.message}"</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
