import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { eventsData } from '../data/eventsData';

const HomePage = () => {
  const events = Object.values(eventsData);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-bg min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-shadow-lg"
            >
              World-Class <br />
              Industry <span className="text-accent-300">Summits</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl mb-12 text-blue-100 font-light"
            >
              Connect. Learn. Transform. Lead the Future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#events"
                className="bg-white text-primary-600 hover:bg-blue-50 font-bold py-5 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2 group"
              >
                Explore Events
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-5 px-10 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {[
              { value: '1500+', label: 'Total Attendees' },
              { value: '150+', label: 'Industry Speakers' },
              { value: '3', label: 'Major Events' },
              { value: '25+', label: 'Countries' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <div className="text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="events" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our Events
            </h2>
            <p className="section-subtitle">
              Discover industry-leading summits designed to drive innovation and foster meaningful connections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group"
              >
                <div className="gradient-bg p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-white/20 w-32 h-32 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                      {event.badge}
                    </span>
                    <h3 className="text-2xl font-bold mt-4 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {event.tagline}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaCalendarAlt className="text-primary-600" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaMapMarkerAlt className="text-primary-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <Link
                    to={`/events/${event.id}`}
                    className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Don't miss out on the opportunity to connect with industry leaders and shape the future of your sector
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary-600 hover:bg-blue-50 font-bold py-5 px-12 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;