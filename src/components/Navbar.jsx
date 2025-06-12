import React, { useState, Fragment } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import shortLogo from '../assets/long_logo-removebg-preview.png';


const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  {
    name: 'Resources',
    submenu: [
      { name: 'Developers', href: '/resources/developers' },
      { name: 'Community', href: '/resources/community' },
      { name: 'Privacy Policy', href: '/resources/privacypolicy' },
      { name: 'Terms and Conditions', href: '/resources/termsandconditions' },
    ],
  },
  {
    name: 'Industry',
    submenu: [
      { name: 'IT Industry', href: '/industry/itindustry' },
      { name: 'Healthcare', href: '/industry/healthcare' },
      { name: 'Manufacturing', href: '/industry/manufacturing' },
      { name: 'E-Commerce', href: '/industry/ecommerce' },
      { name: 'Real Estate', href: '/industry/realestate' },
    ],
  },
  { name: 'About Us', href: '/aboutus' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-indigo-50 via-white to-purple-50/80 backdrop-blur">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
           <img
  className="h-8 w-auto transition-transform duration-300 hover:scale-105"
  src={shortLogo}
  alt="Vigomerge Inc."
/>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) =>
            item.submenu ? (
              <Menu as="div" key={item.name} className="relative">
                <Menu.Button className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-indigo-600">
                  {item.name}
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items className="absolute z-50 mt-2 w-48 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2 focus:outline-none">
                    {item.submenu.map((subitem) => (
                      <Menu.Item key={subitem.name}>
                        {({ active }) => (
                          <Link
                            to={subitem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-indigo-100 text-indigo-700' : ''
                              }`}
                          >
                            {subitem.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold text-gray-800 hover:text-indigo-600"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="mailto:info@vigomerge.com"
            className="text-sm font-semibold text-gray-800 hover:text-indigo-600"
          >
            Get in Touch <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white px-6 py-6 overflow-y-auto ring-1 ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src={shortLogo}
                alt="Vigomerge Inc."
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.submenu ? (
                    <details key={item.name} className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between cursor-pointer px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100 rounded-lg">
                        {item.name}
                        <ChevronDownIcon className="h-5 w-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-2 space-y-2 pl-4">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <div className="py-6">
                <Link
                  to="mailto:info@vigomerge.com"
                  className="-mx-3 block px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </div>
  );
}
