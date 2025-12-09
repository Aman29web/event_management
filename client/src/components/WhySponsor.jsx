import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBullhorn, FaChartBar, FaPhone, FaEnvelope } from 'react-icons/fa';

const WhySponsor = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    {
      icon: FaTrophy,
      title: 'Demonstrate Thought Leadership',
      description: 'Position your company as a thought leader by delivering standalone presentations or moderating panel discussions to a pre-qualified audience of decision-makers.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: FaBullhorn,
      title: 'Network & Generate Leads',
      description: 'Optimize networking opportunities by getting right in front of key decision-makers prequalified based on seniority, budget availability, and motivation to learn.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FaChartBar,
      title: 'Brand Positioning',
      description: 'Establish, strengthen, and re-position your brand in front of industry leaders who are looking to re-align and strengthen their strategies.',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Why Sponsor?
          </h2>
          <p className="section-subtitle">
            Unlock unparalleled opportunities to connect with key decision-makers and showcase your solutions
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="card p-8 group"
            >
              <div className={`bg-gradient-to-br ${benefit.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                <benefit.icon className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100"
        >
          <div className="gradient-bg p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-2">Sponsorship Opportunities</h3>
            <p className="text-blue-100 text-lg">Choose the package that best fits your objectives</p>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-6 border-2 border-slate-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-slate-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  PREMIUM
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4 mt-2">Platinum</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-slate-600">✓</span> Speaking Opportunity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-600">✓</span> Premium Booth Space
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-600">✓</span> Logo on All Materials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-600">✓</span> 10 Delegate Passes
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-6 border-2 border-amber-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
                <h4 className="text-2xl font-bold text-amber-800 mb-4 mt-2">Gold</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">✓</span> Panel Participation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">✓</span> Standard Booth Space
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">✓</span> Logo on Website
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-600">✓</span> 6 Delegate Passes
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 border-2 border-gray-300"
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Silver</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-600">✓</span> Branding Opportunity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-600">✓</span> Exhibition Space
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-600">✓</span> Digital Presence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-600">✓</span> 3 Delegate Passes
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={fadeInUp}
          className="gradient-bg rounded-2xl p-10 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Interested to Sponsor Our Event?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            To find out more about ROI-driven sponsorship and exhibition opportunities, contact us now
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+97142434677" className="bg-white text-primary-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2">
              <FaPhone />
              +971 4 243 4677
            </a>
            <a href="mailto:info@verve-management.com" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
              <FaEnvelope />
              info@verve-management.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySponsor;