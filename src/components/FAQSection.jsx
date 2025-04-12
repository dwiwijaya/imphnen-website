import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQSection() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            question: "Komunitas ini fokusnya ke mana sih?",
            answer:
                "Kita fokus di dunia web development, programming, open source, dan tentunya… meme yang relate sama dunia IT 😅",
        },
        {
            question: "Harus jago dulu buat gabung?",
            answer:
                "Nggak sama sekali. Banyak juga yang baru mulai belajar. Kita di sini saling bantu dan grow bareng.",
        },
        {
            question: "Platform komunitasnya di mana aja?",
            answer:
                "Kita aktif banget di Facebook Group dan Discord. Ada juga Page di Facebook & Instagram buat update santai.",
        },
        {
            question: "Ada kegiatan rutin atau proyek bareng?",
            answer:
                "Ada dong! Mulai dari ngoding event bareng, sharing session, sampai kontribusi open source via GitHub Organization.",
        },
        {
            question: "Boleh promosiin project pribadi?",
            answer:
                "Selama sopan dan bermanfaat buat yang lain, tentu boleh banget. Share ilmu juga dihitung kontribusi kok!",
        },
    ];

    const toggle = (index) => {
        setActive(index === active ? null : index);
    };

    return (
        <section className="text-center pt-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tanya-Tanya Dulu Yuk</h2>
            <p className="text-gray-600 mb-8">
                Beberapa pertanyaan yang sering banget muncul. Kalau masih penasaran, DM aja admin… kalau lagi online 😎
            </p>

            <div className="text-left space-y-4">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="cursor-pointer last:border-0 border-b border-slate-200 pb-4"
                        onClick={() => toggle(idx)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold sm:text-lg text-gray-800">{faq.question}</h3>
                            <span className="text-sky-500 text-2xl">
                                {active === idx ? '-' : '+'}
                            </span>
                        </div>

                        <AnimatePresence>
                            {active === idx && (
                                <motion.p
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-600 mt-2 overflow-hidden"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
