import { FaDiscord, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-10 px-6 border-t border-slate-200">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm">
                <div className="text-center md:text-left space-y-2">
                    <p className="font-semibold text-lg text-gray-800">
                        IMPHNEN
                    </p>
                    <p>&copy; {new Date().getFullYear()} IMPHNEN. Dibuat dengan 💙 oleh komunitas.</p>
                </div>

                <div className="flex gap-4 text-xl text-gray-500">
                    <a href="https://discord.gg/xxx" target="_blank" aria-label="Discord">
                        <FaDiscord />
                    </a>
                    <a href="https://facebook.com/groups/xxx" target="_blank" aria-label="Facebook Group">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com/xxx" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/imphnen" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}
