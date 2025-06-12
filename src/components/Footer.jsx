import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa6';
import shortLogo from '../assets/long logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white pt-12 pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Logo + Tagline + Social Icons */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <img src={shortLogo} alt="Vigomerge" className="h-10 w-auto" />
            <p className="text-sm text-indigo-100">
              Providing innovative engineering solutions with a commitment to excellence and client satisfaction.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/vigomerge" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/vigomerge/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/vigomerge/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-white mb-2">Our Services</h4>
            <ul className="space-y-1 text-indigo-200 text-sm">
              {[
                'Software Development',
                'Robotic Process Automation',
                'Blockchain Development',
                'Cloud Solutions',
                'DevOps Automation',
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry */}
          <div>
            <h4 className="font-semibold text-white mb-2">Industry</h4>
            <ul className="space-y-1 text-indigo-200 text-sm">
              <li><Link to="/industry/itindustry" className="hover:text-white">IT Industry</Link></li>
              <li><Link to="/industry/healthcare" className="hover:text-white">Health Care</Link></li>
              <li><Link to="/industry/manufacturing" className="hover:text-white">Manufacturing</Link></li>
              <li><Link to="/industry/ecommerce" className="hover:text-white">E‑Commerce</Link></li>
              <li><Link to="/industry/realestate" className="hover:text-white">Real Estate</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-1 text-indigo-200 text-sm">
              <li><Link to="/resources/developers" className="hover:text-white">Developer</Link></li>
              <li><Link to="/resources/community" className="hover:text-white">Community</Link></li>
              <li><Link to="/resources/privacypolicy" className="hover:text-white">Privacy & Policy</Link></li>
              <li><Link to="/resources/termsandconditions" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-2">Contact Information</h4>
            <ul className="space-y-1 text-indigo-200 text-sm">
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Baner,+Pune,+Maharashtra+411027"
                   target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Baner, Pune, Maharashtra 411027
                </a>
              </li>
              <li>
                <a href="https://wa.me/919529782361" className="hover:text-white">
                  +91 9529782361
                </a>
              </li>
              <li>
                <a href="mailto:info@vigomerge.com" className="hover:text-white">
                  info@vigomerge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-indigo-600 my-4" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-indigo-300">
          <p className="text-center md:text-left">
            Copyrights © <span className="text-white font-medium">Vigomerge Technology Pvt Ltd</span>. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/resources/privacypolicy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/resources/termsandconditions" className="hover:text-white">Terms of Service</Link>
            <Link to="/resources/privacypolicy" className="hover:text-white">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
