import React from 'react';
import { Brain, Code, Smartphone, Cloud, Settings, Cpu, ShieldCheck, Blocks, Bot } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-white" />,
    title: "Software Development",
    description:
      "Tailored software solutions enhancing efficiency, scalability, and innovation aligned with your business goals.",
    bg: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-white" />,
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps with intuitive UI/UX, seamless performance, and user-focused design.",
    bg: "from-pink-500 to-red-500"
  },
  {
    icon: <Cloud className="h-10 w-10 text-white" />,
    title: "Cloud Solutions",
    description:
      "Optimize infrastructure and scale effortlessly with cloud migration, consulting, and automation services.",
    bg: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Cpu className="h-10 w-10 text-white" />,
    title: "Artificial Intelligence",
    description:
      "Build intelligent systems that learn and adapt using machine learning, NLP, and computer vision.",
    bg: "from-green-500 to-emerald-500"
  },
  {
    icon: <Settings className="h-10 w-10 text-white" />,
    title: "DevOps Automation",
    description:
      "Faster and more reliable deployments through CI/CD, infrastructure as code, and workflow optimization.",
    bg: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: "Web Application Development",
    description:
      "Modern, scalable, responsive web apps optimized for performance, engagement, and functionality.",
    bg: "from-rose-500 to-pink-400"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-white" />,
    title: "Quality Assurance",
    description:
      "Reliable, bug-free products through tailored test plans, automation, and cross-platform validation.",
    bg: "from-blue-600 to-sky-500"
  },
  {
    icon: <Blocks className="h-10 w-10 text-white" />,
    title: "Blockchain Development",
    description:
      "Decentralized, secure systems with transparent smart contract integration and DApp development.",
    bg: "from-gray-700 to-gray-900"
  },
  {
    icon: <Bot className="h-10 w-10 text-white" />,
    title: "Robotic Process Automation",
    description:
      "Boost productivity by automating repetitive tasks using bots integrated with business systems.",
    bg: "from-purple-600 to-fuchsia-500"
  }
];

export default function Servicegrid() {
  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">Our Services</h2>
        <p className="mt-2 text-center text-4xl font-bold text-gray-900 sm:text-5xl">
          Empowering Your Digital Transformation
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bg} p-6 transition-transform hover:scale-[1.02] shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white bg-opacity-10 ring-1 ring-white/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
