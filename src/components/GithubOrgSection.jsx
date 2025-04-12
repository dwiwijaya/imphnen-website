import { FaGithub } from 'react-icons/fa';
import {
  PiBookBookmarkDuotone,
  PiGitForkDuotone,
  PiStarDuotone,
  PiUsersFourDuotone,
} from 'react-icons/pi';
import { AnimatedCounter } from './AnimatedCounter';

export default function GithubOrgSection() {
  const githubStatistics = [
    { label: 'Repositories', value: 42, icon: <PiBookBookmarkDuotone size={24} className="text-blue-600" />, color: "bg-blue-50 border-blue-300" },
    { label: 'Contributors', value: 357, icon: <PiUsersFourDuotone size={24} className="text-green-600" />, color: "bg-green-50 border-green-300" },
    { label: 'Stars', value: 781, icon: <PiStarDuotone size={24} className="text-yellow-500" />, color: "bg-yellow-50 border-yellow-300" },
    { label: 'Forks', value: 266, icon: <PiGitForkDuotone size={24} className="text-pink-500" />, color: "bg-pink-50 border-pink-300" },
  ];

  return (
    <section className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 bg-gradient-to-br from-slate-50 to-blue-50  rounded-3xl p-8 border border-slate-200">

      {/* KONTEN KIRI */}
      <div className="flex flex-col justify-between">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            Lihat dan ikuti <span className="text-blue-500">GitHub</span> kami
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Kami cinta FLOSS (Free/Libre and Open Source Software) — bukan cuma karena gratisan, tapi karena seru ngebangun bareng komunitas.
            Di organisasi GitHub kami, kamu bisa nemuin proyek-proyek open-source hasil kolaborasi bareng member. Mau kontribusi? Nambahin fitur? Atau cuma liat-liat sambil nyari inspirasi? Boleh banget.
          </p>

          <a
            href="https://github.com/YOUR_ORG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            <FaGithub size={20} />
            <div className="flex flex-col">
              Kunjungi GitHub Kami
            </div>
          </a>
        </div>

        {/* STATISTICS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-8 mt-10">
          {githubStatistics.map((stat, index) => (
            <div
              key={index}
              className={`group relative  !bg-white border border-slate-200  rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300`}
            >
              <div className={`absolute -top-6 w-14 h-14 flex items-center justify-center`}>
                <div className={`absolute w-full h-full border-2 border-dashed rounded-full ${stat.color} group-hover:animate-spin-slow`}></div>
                <div className="text-3xl z-10 ">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-6">

                <div className="text-xl font-semibold text-gray-800">
                  <AnimatedCounter value={stat.value} />
                </div>

                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex justify-center mt-10">
        <FaGithub className="text-[260px] text-gray-800 " />
      </div>
    </section>
  );
}
