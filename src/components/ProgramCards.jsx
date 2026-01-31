import { motion } from 'framer-motion';
import { Heart, BookOpen, Home } from 'lucide-react';

const ProgramCards = () => {
  const programs = [
    {
      title: 'Health Support',
      description: 'Providing insurance and compassion to those in need. We ensure families have access to medical care and support during challenging times.',
      icon: Heart,
      color: 'from-red-400 to-pink-500',
    },
    {
      title: 'Education Aid',
      description: 'Supporting students with uniforms, notebooks, and supplies. Education is the foundation of a brighter future for our children.',
      icon: BookOpen,
      color: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Basic Needs',
      description: 'Ensuring access to food like rice, beans, oil, and clothing. No one should go without the essentials of daily life.',
      icon: Home,
      color: 'from-green-400 to-teal-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-sage-800 mb-4">Our Programs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-400 to-sage-500 mx-auto rounded-full"></div>
          <p className="text-xl text-sage-600 mt-6 max-w-2xl mx-auto">
            Through targeted programs, we address the most pressing needs in our community with compassion and dedication.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-sage-100 group"
              >
                <div className={`bg-gradient-to-r ${program.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4 text-center">{program.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{program.description}</p>
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-sage-500 to-sage-600 text-white px-6 py-2 rounded-full hover:from-sage-600 hover:to-sage-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
