import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

const settings = {
    initialSlide: 0,
    adaptiveHeight: false,
    variableWidth: false,
    centerPadding: 0,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: dots => (
        <div>
            <ul className="slick-dots-custom flex justify-center gap-3">{dots}</ul>
        </div>
    ),
    customPaging: i => (
        <button aria-label={`Go to slide ${i + 1}`} className="w-3 h-3 rounded-full transition-all duration-300 ease-in-out bg-slate-300 hover:bg-slate-500"></button>
    ),
    responsive: [
        {
            breakpoint: 2560,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default function TestimonialSection() {
    const sliderRef = useRef(null);

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
        <section id="testimony" className="text-center relative pt-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimoni Member</h2>
            <p className="text-gray-600 mb-8">
                Kisah nyata dari para pemalas produktif: ngoding dikit, fesnukan banyak. Tapi tetap keren (kadang).
            </p>

            {/* Tombol Prev */}

            <button
                aria-label="Previous Testimonial"
                onClick={() => sliderRef.current?.slickPrev()}
                className="absolute left-0 sm:-left-1 top-[70%] -translate-y-1/2 z-10 p-3 bg-white border border-slate-200 rounded-full shadow-md hover:bg-slate-100 transition"
            >
                <FaChevronLeft className="text-xl text-slate-600" />
            </button>

            {/* Tombol Next */}
            <button
                aria-label="Next Testimonial"
                onClick={() => sliderRef.current?.slickNext()}
                className="absolute  -right-2 sm:-right-2 top-[70%] -translate-y-1/2 z-10 p-3 bg-white border border-slate-200 rounded-full shadow-md hover:bg-slate-100 transition"
            >
                <FaChevronRight className="text-xl text-slate-600" />
            </button>
            {/* Slider */}
            <Slider {...settings} ref={sliderRef}>
                {testimonials.map((t, idx) => (
                    <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 50} className="group flex flex-col !gap-4 h-full transition-transform hover:scale-[1.02] bg-white border border-slate-200 rounded-4xl p-6 text-left">

                        <div className="!flex items-center justify-between gap-4 !h-fit">
                            <div className="flex gap-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-gray-800">{t.name}</p>
                                    <p className="text-sm text-gray-500 line-clamp-1">{t.role}</p>
                                </div>
                            </div>
                            <div className={`relative bg-blue-50 rounded-full  min-w-11 !h-11 flex items-center justify-center`}>
                                <div className={`absolute w-full h-full border-2 border-dashed rounded-full border-blue-300 group-hover:animate-spin-slow`}></div>
                                {/* Icon tetap diam */}
                                <div className="text-xl z-10 !h-fit">
                                    <FaQuoteRight size={16} className="text-blue-400" />
                                </div>
                            </div>
                        </div>
                        <hr className="border-slate-200" />
                        <p className="text-gray-700 text-lg italic">"{t.message}"</p>
                    </div>
                ))}
            </Slider>

        </section>
    );
}
