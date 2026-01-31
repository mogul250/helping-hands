import { motion } from 'framer-motion';
import { Heart, Users, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-sage-100 via-cream-50 to-sage-200 py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-terracotta-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sage-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cream-300 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-terracotta-400 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Heart className="mx-auto text-terracotta-500 mb-6" size={80} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-sage-800 mb-6 leading-tight"
        >
          If not me and you, who else?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-sage-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Hands that serve, hearts that love. Join us in bringing hope and compassion to those in need.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group bg-gradient-to-r from-sage-600 to-sage-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-sage-700 hover:to-sage-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
            <Users size={20} />
            <span>Join Our Team</span>
          </button>
          <button className="group bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-terracotta-600 hover:to-terracotta-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
            <DollarSign size={20} />
            <span>Monthly Contribution</span>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex justify-center space-x-8 text-sage-600"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-800">500+</div>
            <div className="text-sm">Families Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-800">10k</div>
            <div className="text-sm">Lives Touched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-800">5</div>
            <div className="text-sm">Years of Service</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
