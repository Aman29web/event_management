import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaBriefcase, FaIndustry } from 'react-icons/fa';

const WhoWillMeet = ({ event }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Who Will You Meet
          </h2>
          <p className="section-subtitle">
            Connect with senior decision-makers and industry leaders from across the region
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 h-full border border-primary-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <FaUserTie className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Key Attendees
                </h3>
              </div>
              
              <ul className="space-y-3">
                {event.attendees?.map((attendee, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {attendee}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-br from-accent-50 to-pink-50 rounded-2xl p-8 h-full border border-accent-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent-600 p-3 rounded-lg">
                  <FaIndustry className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Target Industries
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {event.industries?.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-accent-100 to-accent-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaBriefcase className="text-accent-600 text-xl" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">
                      {industry}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '500+', label: 'Senior Executives' },
            { value: '50+', label: 'Industry Speakers' },
            { value: '30+', label: 'Solution Providers' },
            { value: '15+', label: 'Countries Represented' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="card p-6 text-center bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWillMeet;