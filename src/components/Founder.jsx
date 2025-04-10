import { FaGithub, FaLinkedin, FaTelegramPlane, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const founders = [
  {
    name: 'Dwi',
    role: 'Founder / Lead Dev',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/avatar1.png',
  },
  {
    name: 'Rara',
    role: 'Co-Founder / Community',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/avatar2.png',
  },
  {
    name: 'Yuda',
    role: 'UI/UX Designer',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/avatar3.png',
  },
  {
    name: 'Adit',
    role: 'Moderator / Meme Lord',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/avatar4.png',
  },
  {
    name: 'Ayu',
    role: 'Frontend Dev',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/avatar5.png',
  },
  {
    name: 'Zaki',
    role: 'Backend Wizard',
    github: '#',
    linkedin: '#',
    telegram: '#',
    avatar: '/avatars/avatar6.png',
  },
];

export default function FoundersSection() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">
        Here are the <span className="text-sky-500">minds</span> behind <span className="italic">Imphnen</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 shadow hover:shadow-lg transition-all text-left bg-white"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image
                  src={founder.avatar}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-1">
                  {founder.name}
                  <FaCheckCircle className="text-sky-500" />
                </h3>
                <p className="text-gray-600 text-sm">{founder.role}</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-4 pl-20">
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
        ))}
      </div>
    </section>
  );
}
