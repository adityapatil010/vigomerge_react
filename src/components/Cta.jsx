import React from "react";
import businessMeeting from '../assets/businesspeople-meeting.png';

const Cta = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* Gradient Background Decoration */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>

          {/* Text Section */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Your Trusted Advisors in Business Success.
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              We understand the challenges and complexities that businesses face in today's dynamic marketplace. That’s why we offer a comprehensive suite of consulting services. Founded on the principles of innovation, integrity, and excellence, we are a team of seasoned professionals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              {/* Optional CTA buttons go here */}
            </div>
          </div>

          {/* Image Sticker Section */}
         <div className="relative mt-16 h-80 lg:mt-0 lg:h-auto lg:flex-1">
  <img
    src={businessMeeting}
    alt="Business Meeting"
    className="absolute bottom-0 right-0 w-[28rem] lg:w-[36rem] max-w-none rounded-md"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default Cta;
