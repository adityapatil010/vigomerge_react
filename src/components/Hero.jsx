import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden px-6 pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-up {
          animation: fadeUp 1s ease-out both;
        }

        .animate-fade-up-delay {
          animation: fadeUp 1s ease-out both;
          animation-delay: 0.3s;
        }

        .animate-scale-in {
          animation: scaleIn 1.2s ease-out both;
        }

        .bg-animated-gradient {
          background: linear-gradient(270deg, #ff80b5, #9089fc, #80ffea, #a0e7e5, #ffccf9);
          background-size: 1000% 1000%;
          animation: gradientBG 15s ease infinite;
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Background Gradient Animation */}
      <div className="absolute inset-0 -z-10 bg-animated-gradient opacity-20 blur-xl"></div>

      {/* Hero Content */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 animate-fade-up">
          Driving Success Through Strategic Guidance.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-700 animate-fade-up-delay">
          Our services are tailored to meet the needs of each client, providing expert support and impactful solutions to ensure business success.
        </p>
        <div className="mt-8 flex justify-center gap-x-6 animate-scale-in">
          <a
            href="mailto:info@vigomerge.com"
            className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition duration-300"
          >
            Contact Us
          </a>
          <Link
            to="/services"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-300"
          >
            Explore more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
