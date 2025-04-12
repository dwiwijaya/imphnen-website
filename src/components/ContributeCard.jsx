import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function ContributionCard() {
    return (
        <section className="">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">
                    Punya ide keren untuk <span className="text-blue-500">mengembangkan web komunitas?</span>
                </h2>
                <p className="text-gray-600 mt-2">
                    Silakan hubungi kami melalui platform berikut. Kami senang menerima masukan!
                </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left space-y-3">
                    <h3 className="text-xl font-semibold">Dwi Wijaya</h3>
                    <p className="text-sm text-gray-500">- Babu IMPHNEN</p>
                    <p>Saya adalah seorang fullstack web developer yang suka membuat website namun cuma mentok dibuat repository aja</p>
                    <div className="flex justify-center md:justify-start gap-4 text-2xl text-blue-400 mt-3">
                        <a href="https://github.com/dwi" target="_blank"><FaGithub /></a>
                        <a href="https://linkedin.com/in/dwi" target="_blank"><FaLinkedin /></a>
                        <a href="https://t.me/dwi" target="_blank"><FaTelegram /></a>
                    </div>
                </div>

                <img
                    src="/avatars/founders/1.svg"
                    alt="Avatar"
                    className="w-40 h-auto mt-6 md:mt-0"
                />
            </div>
        </section>
    );
}
