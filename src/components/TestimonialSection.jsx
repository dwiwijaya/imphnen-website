import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect } from "react";

const settings = {
    adaptiveHeight: false,
    variableWidth: false,
    centerPadding: 0,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // default mobile
    autoplaySpeed: 4500,
    slidesToScroll: 1,
    appendDots: dots => (
        <div style={{ marginTop: "32px" }}>
            <ul className="slick-dots-custom flex justify-center gap-3">{dots}</ul>
        </div>
    ),
    customPaging: i => (
        <button className="w-3 h-3 rounded-full transition-all duration-300 ease-in-out"></button>
    ),
    responsive: [
        {
            breakpoint: 640, // sm (mobile)
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768, // md (tablet)
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1024, // lg (small desktop)
            settings: {
                slidesToShow: 2,
            }
        },

    ]
};



export default function TestimonialSection() {
    useEffect(() => {
        const slides = document.querySelectorAll('.slick-slide');
        let maxHeight = 0;

        slides.forEach(slide => {
            const h = slide.offsetHeight;
            if (h > maxHeight) maxHeight = h;
        });

        slides.forEach(slide => {
            slide.style.height = `${maxHeight}px`;
        });
    }, []);

    const testimonials = [
        {
            name: "Agus Script",
            role: "Ngulik Framework Enthusiast",
            message: "Gabung IMPHNEN tuh kayak buka YouTube, niatnya 5 menit, taunya 3 jam. Worth it.",
            avatar: "/avatars/testimonials/3.svg"
        },
        {
            name: "Reza Pahlawan Bug",
            role: "Meme Hunter",
            message: "Sejak gabung grup ini, saya jadi lebih sering fesnukan daripada ngoding. Tapi nggak nyesel 😎",
            avatar: "/avatars/testimonials/1.svg"
        },
        {
            name: "Anindya D.",
            role: "Backend Beginner",
            message: "Awalnya cuma scroll meme, eh sekarang malah belajar contribute ke open source. Gila sih komunitas ini!",
            avatar: "/avatars/testimonials/2.svg"
        },
        {
            name: "Caca N.",
            role: "HTML Enjoyer",
            message: "Dulu benci JavaScript, sekarang… masih sih. Tapi sekarang lebih paham kenapa wajar benci.",
            avatar: "/avatars/testimonials/4.svg"
        },
        {
            name: "Riko K.",
            role: "Kontributor Project Komunitas",
            message: "Kesan serius dikit: komunitas ini bantu aku berani sharing dan kontribusi project bareng orang lain. Salut 🙌",
            avatar: "/avatars/testimonials/5.svg"
        },
        {
            name: "Joko J.S",
            role: "Frontend Feeling Good",
            message: "Setelah gabung, saya langsung uninstall TikTok, karena feed grup ini lebih chaotic dan menyenangkan.",
            avatar: "/avatars/testimonials/6.svg"
        },
    ];


    return (
        <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimoni Member</h2>
            <p className="text-gray-600 mb-8">
                Kombinasi antara pengalaman receh dan serius dari para member setia.
            </p>
            <Slider {...settings}>
                {testimonials.map((t, idx) => (
                    <div key={idx} className="flex flex-col !gap-4 justify-between h-full transition-transform hover:scale-[1.02] bg-white border border-slate-200 rounded-xl p-6 text-left">
                        <div className="flex flex-col gap-4">
                            <FaQuoteLeft className="text-sky-500 text-2xl mb-" />
                            <p className="text-gray-700 text-lg italic ">"{t.message}"</p>
                        </div>
                        <div className="!flex items-center gap-4 !h-fit">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <p className="font-semibold text-gray-800">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
