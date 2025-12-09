import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHandshake, FaProjectDiagram, FaMicroscope, FaNetworkWired } from 'react-icons/fa';

const WhyAttend = ({ event }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const reasons = [
    {
      icon: FaGraduationCap,
      title: 'Gain Knowledge & Insights',
      description: 'Learn from top industry leaders and experts from across the globe',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaHandshake,
      title: 'Network with Peers',
      description: 'Connect with industry peers in a solution-oriented environment',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaProjectDiagram,
      title: 'Strategic Partnerships',
      description: 'Discuss significant partnerships and collaborations with industry leaders',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FaMicroscope,
      title: 'Real-Time Case Studies',
      description: 'Deep dive into insights derived from real-time case studies',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: FaNetworkWired,
      title: 'Industry Collaboration',
      description: 'Build industry ecosystem collaboration to address latest challenges',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            Why Attend?
          </h2>
          <p className="section-subtitle">
            Discover the compelling reasons that make this summit a must-attend event for industry professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card p-8 group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <reason.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
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
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 border border-blue-100"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-primary-600 mb-4">"</div>
            <p className="text-2xl text-gray-700 font-medium mb-6 italic">
              This summit brings together the brightest minds in the industry. It's not just an event—it's a transformative experience that shapes the future of our sector.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full"></div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Industry Leader</p>
                <p className="text-sm text-gray-600">Previous Attendee</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '95%', label: 'Attendee Satisfaction' },
            { value: '20+', label: 'Expert Sessions' },
            { value: '100+', label: 'Networking Opportunities' },
            { value: '30+', label: 'Industry Partners' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-black gradient-text mb-2">
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

export default WhyAttend;