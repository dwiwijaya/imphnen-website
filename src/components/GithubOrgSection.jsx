import { FaGithub } from 'react-icons/fa';

export default function GithubOrgSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-100 to-white rounded-3xl mx-4 lg:mx-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* KONTEN KIRI */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Lihat <span className="text-blue-500">GitHub</span> kami untuk source code
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Kami percaya pada semangat <span className="font-semibold text-sky-600">kolaborasi terbuka</span>. Organisasi GitHub kami berisi berbagai proyek open-source yang dikembangkan bersama komunitas.
            Baik kamu ingin eksplorasi, berkontribusi, atau sekadar belajar — kamu selalu diterima di sini.
          </p>
          <p className="text-gray-600 mb-6">
            GitHub menjadi rumah bagi ide, kode, dan kerja tim kami. Yuk lihat proyek-proyek yang sedang berjalan, kirim kontribusi lewat PR, atau beri bintang kalau kamu suka 🌟.
          </p>
          <a
            href="https://github.com/YOUR_ORG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
          >
            Kunjungi GitHub Kami
          </a>
        </div>

        {/* IKON GITHUB */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <FaGithub className="text-[180px] text-gray-800" />
        </div>
      </div>
    </section>
  );
}
