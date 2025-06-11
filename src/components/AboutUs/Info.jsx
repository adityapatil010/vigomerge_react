import React from 'react'
import logo from '../../assets/long_logo-removebg-preview.png'
export default function Info() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt="Vigomerge Logo"
          src={logo}
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              Born and raised in Pune, Maharashtra, India, I have spread to Maharashtra, India, and Japan,
              helping clients across the globe. Founded in 2024 by Prakash Ray in Pune, Maharashtra, Vigomerge Inc.
              grew from 11 to 50 team members. In 2024, we expanded to Prakash Ray, opening our second office and embracing
              a global outlook. Since then, we've helped companies from almost every part of the globe.
            </p>
          </blockquote>
          <figcaption className="mt-10 text-center">
            <div className="text-base font-semibold text-gray-900">Vigomerge Inc.</div>
            <div className="text-gray-600">Founded by Prakash Ray</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
