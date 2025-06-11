import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Expertise',
    description:
      'Our team comprises industry experts with a wealth of experience in software development and AI technologies.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Innovation',
    description:
      'We are at the forefront of technological advances, ensuring our clients benefit from the latest solutions.',
    icon: LockClosedIcon,
  },
  {
    name: 'Quality Assurance',
    description:
      'We adhere to the highest standards of quality and reliability in our services, ensuring successful outcomes for our clients.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Customer-Centric Approach Strategies',
    description:
      "We prioritize our client's needs, delivering personalized service and support throughout our partnership.",
    icon: FingerPrintIcon,
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 sm:py-32 overflow-hidden"
    >
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-up.visible {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-6xl text-center fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '300ms' }}>
          <h2 className="text-base font-semibold text-indigo-600">Why Choose Vigomerge</h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our commitment to excellence and innovation sets us apart in the engineering industry
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative pl-16 fade-in-up ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${500 + index * 300}ms` }}
              >
                <dt className="text-lg font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
