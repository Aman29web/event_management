import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'CX & Loyalty', path: '/events/cx-loyalty' },
    { name: 'PropTech', path: '/events/proptech' },
    { name: 'Future Banks', path: '/events/future-banks' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2">
            <div className={`text-2xl font-black ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              VERVE<span className="text-accent-600">.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-colors relative group ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
                } ${location.pathname === item.path ? (isScrolled ? 'text-primary-600' : 'text-white') : ''}`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  } transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}
                ></span>
              </Link>
            ))}
            <a
              href="#contact"
              className={`font-bold px-6 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white text-primary-600 hover:bg-blue-50'
              }`}
            >
              Contact Us
            </a>
          </div>

        
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4 bg-white mt-4 rounded-lg shadow-xl">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-6 py-3 font-semibold transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-6">
                  <a
                    href="#contact"
                    className="block w-full text-center bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;