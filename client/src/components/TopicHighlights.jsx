import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa';

const TopicHighlights = ({ event }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  // Sample topics for demo
  const sampleTopics = [
    'Digital Transformation Strategies for Modern Enterprises',
    'Sustainable Innovation and Environmental Impact',
    'AI Integration and Machine Learning Applications',
    'Data Security and Privacy in the Digital Age',
    'Customer Experience Excellence in 2025',
    'Supply Chain Optimization and Resilience',
    'Leadership in Times of Change',
    'Emerging Technologies and Market Trends',
    'Strategic Partnerships and Collaboration Models',
    'Regulatory Compliance and Risk Management'
  ];

  const topics = event?.topics || sampleTopics;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
   
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900">
            Topic Highlights
          </h2>
          <p className="section-subtitle text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge topics and strategic discussions that will shape the future of the industry
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {topics.slice(0, 6).map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="card p-6 border-l-4 border-blue-600 bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <FaStar className="text-blue-600 group-hover:text-white text-xl transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {topic}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {topics.length > 6 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaCheckCircle className="text-pink-600" />
              Additional Topics We'll Cover
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {topics.slice(6).map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200"
                >
                  <FaCheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">
                    {topic}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-12"
        >
          <div className="bg-blue-600 rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
    
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full opacity-20 -ml-32 -mb-32"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Don't Miss Out on These Insights!
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Access exclusive content, expert panels, and networking opportunities that will transform your business perspective
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3 group">
                Download Full Agenda
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopicHighlights;