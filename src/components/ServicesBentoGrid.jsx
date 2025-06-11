import React from 'react';
import {
  LineChart,
  BrainCircuit,
  PieChart,
  Settings,
  Building2,
  Banknote,
  Shuffle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Market Insights & Analysis',
    description:
      'Help businesses optimize operations and stay competitive in today’s fast-paced market.',
    icon: <LineChart size={48} />,
    bg: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Strategic Planning Services',
    description:
      'Assist clients in developing strategic plans to achieve long-term goals.',
    icon: <BrainCircuit size={48} />,
    bg: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Market Research & Analysis',
    description:
      'Conduct market research to provide insights into trends and customer behaviors.',
    icon: <PieChart size={48} />,
    bg: 'from-pink-500 to-red-500',
  },
  {
    title: 'Operations Improvement',
    description:
      'Improve business processes and workflows to enhance productivity.',
    icon: <Settings size={48} />,
    bg: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Organizational Development',
    description:
      'Foster a productive environment through structure and leadership guidance.',
    icon: <Building2 size={48} />,
    bg: 'from-blue-500 to-sky-500',
  },
  {
    title: 'Financial Consulting',
    description:
      'Offer budgeting, forecasting, and investment advice for better financial health.',
    icon: <Banknote size={48} />,
    bg: 'from-purple-500 to-fuchsia-500',
  },
  {
    title: 'Change Management',
    description:
      'Help manage change effectively including during mergers and acquisitions.',
    icon: <Shuffle size={48} />,
    bg: 'from-teal-500 to-cyan-500',
  },
];

const ServicesBentoGrid = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">
          Our Consulting Services
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Empowering Businesses to Thrive
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl bg-gradient-to-br ${service.bg} p-8 shadow-lg transform transition-transform hover:scale-105 hover:brightness-90 text-white`}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center">{service.title}</h3>
              <p className="mt-3 text-sm text-center text-white/90">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBentoGrid;
