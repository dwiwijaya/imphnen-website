import { FaGithub, FaLinkedin, FaTelegramPlane, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const founders = [
  {
    name: 'Dwi',
    role: 'Founder / Lead Dev',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/founders/1.svg',
  },
  {
    name: 'Rara',
    role: 'Co-Founder / Community',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/founders/2.svg',
  },
  {
    name: 'Yuda',
    role: 'UI/UX Designer',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/founders/3.svg',
  },
  {
    name: 'Adit',
    role: 'Moderator / Meme Lord',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/founders/4.svg',
  },
  {
    name: 'Ayu',
    role: 'Frontend Dev',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/founders/5.svg',
  },
  {
    name: 'Zaki',
    role: 'Backend Wizard',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/founders/6.svg',
  },
];

export default function FoundersSection() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-12">
        Here are the <span className="text-sky-500">minds</span> behind <span className="italic">Imphnen</span>
      </h2>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="rounded-4xl px-6 pt-3 pb-5 border border-slate-200 transition-all text-left bg-white"
          >
            <div className="flex items-center space-x-4">
              <div className="w-28 h-32 relative overflow-hidden">
                <Image
                  src={founder.avatar}
                  alt={founder.name}
                  fill
                  className=""
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-1">
                  {founder.name}
                  <FaCheckCircle className="text-sky-500" />
                </h3>
                <p className="text-gray-600 text-sm">{founder.role}</p>
                <div className="flex justify-start mt-4 space-x-2 ">
                  <a href={founder.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-700 hover:text-sky-500 text-xl" />
                  </a>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-700 hover:text-sky-500 text-xl" />
                  </a>
                  <a href={founder.telegram} target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="text-gray-700 hover:text-sky-500 text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
