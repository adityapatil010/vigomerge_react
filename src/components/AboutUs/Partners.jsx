import React from 'react';
import partner1 from '../../assets/Partners/Partner (1).png';
import partner2 from '../../assets/Partners/partner (2).png';
import partner3 from '../../assets/Partners/partner (3).png';
import partner4 from '../../assets/Partners/partner (4).png';
import partner5 from '../../assets/Partners/partner (5).png';
import partner6 from '../../assets/Partners/partner (6).png';

const partnerLogos = [
  { src: partner1, alt: 'Partner 1' },
  { src: partner2, alt: 'Partner 2' },
  { src: partner3, alt: 'Partner 3' },
  { src: partner4, alt: 'Partner 4' },
  { src: partner5, alt: 'Partner 5' },
  { src: partner6, alt: 'Partner 6' },
];

const Partners = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #f0f4ff, #dfe9f3)' }} className="py-16 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">
          Partnering with top innovators to expand opportunities and deliver lasting value.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Our Partners
        </p>

        <div className="mt-12 relative w-full overflow-hidden">
          <div className="scrolling-wrapper">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div key={index} className="logo-container">
                <img src={partner.src} alt={partner.alt} className="logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
