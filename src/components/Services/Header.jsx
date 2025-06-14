import React from 'react';

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-14">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Key Features of Our Services</h2>
          <p className="mt-4 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            When you choose Vigomerge, you are not just hiring a consulting firm — you are collaborating with a team of dedicated professionals who are invested in your success.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-none">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-10 list-disc list-inside">
            <li>Customization</li>
            <li>Scalability</li>
            <li>24/7 Support</li>
            <li>Collaborative Partnership</li>
            <li>Ethical Standards</li>
            <li>Result-Driven Approach</li>
          </ul>
          <div className="mt-8 sm:mt-10">
            <a
              href="mailto:info@vigomerge.com"
              className="inline-block text-lg font-semibold text-white hover:text-indigo-400 transition"
            >
              Contact Us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
