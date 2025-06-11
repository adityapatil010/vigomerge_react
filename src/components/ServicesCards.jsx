import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Example() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:max-w-7xl lg:px-8">
        <motion.h2
          className="text-center text-base font-semibold text-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Explore Our Services
        </motion.h2>

        <motion.p
          className="mx-auto mt-2 max-w-7xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Comprehensive engineering solutions tailored to your specific needs
        </motion.p>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="relative bg-white rounded-2xl p-6 shadow ring-1 ring-black/5 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4">
                <Icon name={service.icon} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Cloud Solutions",
    description: "Optimize infrastructure, enhance security, and ensure scalability with expert cloud guidance.",
    icon: "cloud",
  },
  {
    title: "DevOps Automation",
    description: "Streamline development, testing, and deployment with integrated DevOps tools and practices.",
    icon: "settings",
  },
  {
    title: "Artificial Intelligence",
    description: "Innovative AI-driven R&D solutions for complex engineering challenges.",
    icon: "brain-circuit",
  },
  {
    title: "Quality Assurance",
    description: "Ensure software reliability with rigorous testing and defect identification.",
    icon: "check-circle",
  },
  {
    title: "Blockchain Development",
    description: "Connect and secure systems with seamless blockchain and integration tech.",
    icon: "link",
  },
  {
    title: "Robotic Process Automation",
    description: "Automate repetitive tasks across departments using software bots.",
    icon: "robot",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs and growth.",
    icon: "code",
  },
  {
    title: "Web Application Development",
    description: "Create scalable and dynamic web solutions for modern business challenges.",
    icon: "globe",
  },
  {
    title: "Mobile App Development",
    description: "Build high-performing apps across mobile platforms with intuitive UX.",
    icon: "smartphone",
  },
];

const icons = {
  cloud: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 15a4 4 0 0 0 4 4h11a4 4 0 0 0 0-8h-1a5 5 0 0 0-9.9-.8A4 4 0 0 0 3 15z" />
    </svg>
  ),
  settings: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.42 1.24 1.02 1.47z" />
    </svg>
  ),
  'brain-circuit': (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M9 2v20M15 2v20M5 6h4M15 6h4M5 12h4M15 12h4M5 18h4M15 18h4" />
    </svg>
  ),
  'check-circle': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 12l-4 4-2-2" />
    </svg>
  ),
  link: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7 7l4-4a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7-7L3 8a5 5 0 0 0 7 7l1-1" />
    </svg>
  ),
  robot: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <circle cx="8" cy="13" r="1" />
      <circle cx="16" cy="13" r="1" />
      <path d="M12 3v4M9 3h6" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
    </svg>
  ),
  smartphone: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
};

const Icon = ({ name }) => {
  return icons[name] || <div className="w-6 h-6 bg-gray-300 rounded-full" />;
};
