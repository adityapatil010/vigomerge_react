import React from 'react';
import { Smartphone, HeartPulse, Car, Users } from 'lucide-react'; // lucide-react icons

export default function ProductsList() {
  return (
    <div className="bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">Explore Our Services</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Digital Solutions for Modern Business
        </p>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Mobile Application */}
          <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg hover:scale-105">
            <div className="flex justify-center mb-4">
              <Smartphone size={48} className="text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900">Mobile Application</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              User-focused apps with seamless UX and robust features tailored for every industry.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
              <li>User-Centric Design</li>
              <li>Cross-Platform</li>
              <li>Scalable Solutions</li>
              <li>Robust Security</li>
              <li>Timely Delivery</li>
            </ul>
          </div>

          {/* Healthcare Data Management */}
          <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg hover:scale-105">
            <div className="flex justify-center mb-4">
              <HeartPulse size={48} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900">Healthcare Data Management</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Empowering healthcare systems with secure, efficient data processing tools.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 text-sm text-gray-600 list-disc list-inside">
              <li>EHRs</li>
              <li>HIEs</li>
              <li>Demographics</li>
              <li>Clinical Data</li>
              <li>Warehouses</li>
              <li>Billing Info</li>
              <li>Medications</li>
              <li>History</li>
            </ul>
          </div>

          {/* VMCar */}
          <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg hover:scale-105">
            <div className="flex justify-center mb-4">
              <Car size={48} className="text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900">VMCar – Every ride is first-class</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Book luxurious, punctual rides with ease and experience top-tier travel.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
              <li>Spotless vehicles</li>
              <li>Courteous drivers</li>
              <li>Punctual rides</li>
              <li>Great service</li>
            </ul>
          </div>

          {/* CRM Software */}
          <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg hover:scale-105">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900">CRM Software</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Streamline customer relationships, sales pipelines, and team collaboration.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 text-sm text-gray-600 list-disc list-inside">
              <li>Sales Automation</li>
              <li>Customer Service</li>
              <li>Marketing</li>
              <li>Collaboration</li>
              <li>Integration</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
