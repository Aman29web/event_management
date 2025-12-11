import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa';

const EventOverview = ({ event }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const highlights = [
    { icon: FaRocket, title: 'Innovations', desc: 'Latest trends & technologies' },
    { icon: FaUsers, title: 'Networking', desc: 'Connect with industry leaders' },
    { icon: FaChartLine, title: 'Growth', desc: 'Strategic insights & opportunities' },
    { icon: FaLightbulb, title: 'Knowledge', desc: 'Expert-led sessions & workshops' }
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
            Event Overview
          </h2>
         
        </motion.div>

    
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
      
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {event.overview}
              </p>
              {event.overviewExtra && (
                <p className="text-gray-600 leading-relaxed text-base">
                  {event.overviewExtra}
                </p>
              )}
            </div>

            {/* Key Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
                <div className="text-4xl font-black text-primary-600 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Industry Leaders
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl border border-accent-200">
                <div className="text-4xl font-black text-accent-600 mb-2">
                  2 Days
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Intensive Learning
                </div>
              </div>
            </div>
          </motion.div>

   
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center"
              >
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-3xl text-primary-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

  
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={fadeInUp}
          className="gradient-bg rounded-2xl p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join industry pioneers and thought leaders at this must-attend summit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Secure Your Spot
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-lg transition-all duration-300 backdrop-blur-sm">
              View Agenda
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventOverview;