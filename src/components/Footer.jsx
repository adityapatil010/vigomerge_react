import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedin ,
  
} from 'react-icons/fa6';
import shortLogo from '../assets/short logo.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Logo + tagline + social icons */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Logo */}
          <div className="mb-2">
            <img
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              src={shortLogo}
              alt="Vigomerge Inc."
            />
          </div>

          {/* Tagline */}
          <p className="text-indigo-100 text-sm max-w-xl">
            Providing innovative engineering solutions with a commitment to excellence and client satisfaction.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a href="https://www.facebook.com/vigomerge" className="text-indigo-200 hover:text-white"><FaFacebookF /></a>
            <a href="https://www.instagram.com/vigomerge/" className="text-indigo-200 hover:text-white"><FaInstagram /></a>
<a href="https://www.linkedin.com/company/vigomerge/?originalSubdomain=in" className="text-indigo-200 hover:text-white">
  <FaLinkedin />
</a>           
          </div>
        </div>

        {/* Bottom Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-indigo-200">
          <div>
  <h3 className="font-semibold text-white mb-2">Our Services</h3>
  <ul className="space-y-1 text-indigo-200">
    {[
      'Software Development',
      'Robotic Process Automation',
      'Blockchain Development',
      'Cloud Solutions',
      'DevOps Automation',
    ].map((service) => (
      <li key={service}>
        <Link
          to="/services"
          className="hover:text-white"
        >
          {service}
        </Link>
      </li>
    ))}
  </ul>
</div>

          <div>
  <h3 className="font-semibold text-white mb-2">Industry</h3>
  <ul className="space-y-1 text-indigo-200">
    <li>
      <Link to="/industry/itindustry" className="hover:text-white">
        IT Industry
      </Link>
    </li>
    <li>
      <Link to="/industry/healthcare" className="hover:text-white">
        Health Care
      </Link>
    </li>
    <li>
      <Link to="/industry/manufacturing" className="hover:text-white">
        Manufacturing
      </Link>
    </li>
    <li>
      <Link to="/industry/ecommerce" className="hover:text-white">
        E‑Commerce
      </Link>
    </li>
    <li>
      <Link to="/industry/realestate" className="hover:text-white">
        Real Estate
      </Link>
    </li>
  </ul>
</div>
          <div>
  <h3 className="font-semibold text-white mb-2">Quick Links</h3>
  <ul className="space-y-1 text-indigo-200">
    <li>
      <Link to="/resources/developers" className="hover:text-white">
        Developer
      </Link>
    </li>
    <li>
      <Link to="/resources/community" className="hover:text-white">
        Community
      </Link>
    </li>
    <li>
      <Link to="/resources/privacypolicy" className="hover:text-white">
        Privacy &amp; Policy
      </Link>
    </li>
    <li>
      <Link to="/resources/termsandconditions" className="hover:text-white">
        Terms &amp; Conditions
      </Link>
    </li>
  </ul>
</div>

          <div>
  <h3 className="font-semibold text-white mb-2">Contact Information</h3>
  <ul className="space-y-1">
    <li>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Baner,+Pune,+Maharashtra+411027"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        Baner, Pune, Maharashtra 411027
      </a>
    </li>
    <li>
      <a
        href="https://wa.me/919529782361"
        className="hover:text-white"
      >
        +91 9529782361
      </a>
    </li>
    <li>
      <a
        href="mailto:info@vigomerge.com"
        className="hover:text-white"
      >
        info@vigomerge.com
      </a>
    </li>
  </ul>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-indigo-300">
          <p>Copyrights © Vigomerge Technology Pvt Ltd. All Rights Reserved</p>
         <div className="flex flex-wrap justify-center gap-4 mt-2">
  <Link to="/resources/privacypolicy" className="hover:text-white">
    Privacy Policy
  </Link>
  <Link to="/resources/termsandconditions" className="hover:text-white">
    Terms of Service
  </Link>
  <Link to="/resources/privacypolicy" className="hover:text-white">
    Cookies Policy
  </Link>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
