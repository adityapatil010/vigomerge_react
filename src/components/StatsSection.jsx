import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, name: 'Satisfied Customers', value: '25+' },
  { id: 2, name: 'Years Experience', value: '7+' },
  { id: 3, name: 'Branch Offices', value: '2+' },
  { id: 4, name: 'Projects Completed', value: '25+' },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 bg-gray-100 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
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

export default StatsSection;
