import React from 'react';

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-6 sm:py-10">
      {/* Background Image */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      {/* Optional decorative blobs */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[36rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-10"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-2xl sm:-top-60 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[36rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-10"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center min-h-[220px]">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI-driven software, top branding and digital solutions for business
          </h2>
        </div>
      </div>
    </div>
  );
}
