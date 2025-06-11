import React from 'react';
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

const TrustedClients = () => {
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
          We are proud to collaborate with leading organizations in the industry, driving innovation and excellence in every project.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Clients
        </p>

        <div className="mt-12 relative w-full overflow-hidden">
          <div className="scrolling-wrapper">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="logo-container">
                <img src={client.src} alt={client.alt} className="logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
