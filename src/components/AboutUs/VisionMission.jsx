import { EyeIcon, LightBulbIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Mission from '../../assets/mission.jpg'
const features = [
  {
    name: 'Our Vision',
    description:
      'To be a global leader in innovative software products and services, transforming how businesses and individuals harness the power of technology.',
    icon: EyeIcon,
  },
  {
    name: 'Our Mission',
    description:
      'To harness the power of artificial intelligence to solve complex problems, enhance human productivity, and drive innovation across various industries.',
    icon: LightBulbIcon,
  },
]

export default function VisionMission() {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-indigo-600">Who We Are</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Driven by Innovation, Fueled by AI
              </p>
              <p className="mt-6 text-lg text-gray-700">
                At Vigomerge, our mission and vision drive every solution we deliver. We combine innovation, intelligence,
                and dedication to craft impactful digital experiences.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-700 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-10">
                    <dt className="font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-6 text-indigo-600" />
                      {feature.name}
                    </dt>
                    <dd className="mt-1">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="AI Vision and Mission"
            src={Mission}
            width={2432}
            height={1442}
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
