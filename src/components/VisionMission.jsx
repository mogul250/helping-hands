import { motion } from 'framer-motion';
import { Quote, Heart, Target } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-sage-800 mb-4">Our Vision & Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-400 to-sage-500 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-sage-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-terracotta-400 to-terracotta-500 p-4 rounded-full mr-4">
                <Quote className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-sage-800">Biblical Foundation</h3>
            </div>
            <blockquote className="text-xl italic text-sage-700 leading-relaxed mb-6 relative">
              <span className="text-6xl text-terracotta-300 absolute -top-2 -left-2">"</span>
              "Give to the poor, you will have treasure in heaven."
              <span className="text-6xl text-terracotta-300 absolute -bottom-8 -right-2">"</span>
            </blockquote>
            <p className="text-sage-600 font-medium">- Luke 12:33</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-sage-400 to-sage-500 p-3 rounded-full mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-sage-800">Our Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building a happy community by bringing hope to the hopeless.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-terracotta-400 to-terracotta-500 p-3 rounded-full mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-sage-800">Our Mission</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To bring hope to the hopeless by providing essential support, education, and care to families in need, guided by faith and driven by love.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-sage-400 to-sage-500 p-3 rounded-full mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-sage-800">Community Profile</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We serve families, children, and individuals facing limited resources and opportunities, helping them build brighter futures through compassion and support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
