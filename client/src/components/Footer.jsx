import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Summit Events</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating world-class industry summits that bring together thought leaders, innovators, and decision-makers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaFacebook />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FaInstagram />
              </a>
            </div>
          </div>

     
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Our Events</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/events/cx-loyalty" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> CX & Loyalty Summit
                </Link>
              </li>
              <li>
                <Link to="/events/proptech" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> PropTech Summit
                </Link>
              </li>
              <li>
                <Link to="/events/future-banks" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> Future Banks Summit
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> All Events
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-white text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> Event Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> Sponsorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> Speaking Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span className="text-primary-600">→</span> Exhibition
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-primary-600 mt-1 flex-shrink-0" />
                <a href="tel:+97142434677" className="text-sm hover:text-primary-400 transition-colors">
                  +971 4 243 4677
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-primary-600 mt-1 flex-shrink-0" />
                <a href="mailto:info@verve-management.com" className="text-sm hover:text-primary-400 transition-colors break-all">
                  info@verve-management.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Verve Management. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;