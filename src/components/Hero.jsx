import React from 'react'
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-3 lg:px-8 bg-gradient-to-tr from-purple-50 via-indigo-50 to-pink-50 transition-all duration-700">
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
      `}</style>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 transition-all duration-500">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl animate-fade-up">
            Driving Success Through Strategic Guidance.
          </h1>
          <p className="mt-8 text-lg text-gray-600 sm:text-xl animate-fade-up-delay">
            These services can be tailored to meet the specific needs and challenges of each client, providing valuable expertise and support to drive business success.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-scale-in">
            <a
              href="mailto:info@vigomerge.com"
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition"
            >
              Contact Us
            </a>
            <Link
              to="/services"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
            >
              Explore more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
