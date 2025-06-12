import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import client1 from '../assets/Clients/client1.png';
import client2 from '../assets/Clients/client2.png';
import client3 from '../assets/Clients/client3.png';
import client4 from '../assets/Clients/client4.png';
import client5 from '../assets/Clients/client5.png';
import client6 from '../assets/Clients/client6.png';
import client7 from '../assets/Clients/client7.png';
import client8 from '../assets/Clients/client8.png';
import client9 from '../assets/Clients/client9.png';
import client10 from '../assets/Clients/client10.png';

const clientLogos = [
  { src: client1, alt: 'Client 1' },
  { src: client2, alt: 'Client 2' },
  { src: client3, alt: 'Client 3' },
  { src: client4, alt: 'Client 4' },
  { src: client5, alt: 'Client 5' },
  { src: client6, alt: 'Client 6' },
  { src: client7, alt: 'Client 7' },
  { src: client8, alt: 'Client 8' },
  { src: client9, alt: 'Client 9' },
  { src: client10, alt: 'Client 10' },
];

const stats = [
  { id: 1, name: 'Satisfied Customers', value: '25+' },
  { id: 2, name: 'Years Experience', value: '7+' },
  { id: 3, name: 'Branch Offices', value: '2+' },
  { id: 4, name: 'Projects Completed', value: '25+' },
];

const ClientStatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div
      style={{ background: 'linear-gradient(to right, #f0f4ff, #dfe9f3)' }}
      className="pt-16 pb-16 overflow-hidden"
      ref={ref}
    >
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-wrapper {
          display: flex;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
          white-space: nowrap;
        }
        .logo-container {
          flex-shrink: 0;
          width: 10%;
          padding: 0 2rem;
        }
        .logo-img {
          height: 3rem;
          width: 100%;
          object-fit: contain;
        }
      `}</style>

      {/* Clients Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">
          We are proud to collaborate with leading organizations in the industry, driving innovation and excellence in every project.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Clients
        </p>
        <div className="mt-10 relative w-full overflow-hidden">
          <div className="scrolling-wrapper">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="logo-container">
                <img src={client.src} alt={client.alt} className="logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i}
            >
              <dt className="text-base text-gray-600">{stat.name}</dt>
              <dd className="order-first text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ClientStatsSection;
