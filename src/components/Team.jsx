import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Team = () => {
  const members = [
    { name: 'Chantal', role: 'Coordinator/Account', color: 'from-terracotta-400 to-terracotta-500' },
    { name: 'Dr. Miriam', role: 'Medical Advisor', color: 'from-blue-400 to-blue-500' },
    { name: 'Isabella', role: 'Education Coordinator', color: 'from-green-400 to-green-500' },
    { name: 'Claudine', role: 'Community Outreach', color: 'from-purple-400 to-purple-500' },
    { name: 'Josiane', role: 'Volunteer Manager', color: 'from-pink-400 to-pink-500' },
    { name: 'Eric', role: 'Logistics Coordinator', color: 'from-indigo-400 to-indigo-500' },
    { name: 'Charlotte', role: 'Fundraising Lead', color: 'from-yellow-400 to-yellow-500' },
    { name: 'Yvan', role: 'Program Director', color: 'from-red-400 to-red-500' },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-sage-800 mb-4">Our Dedicated Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-400 to-sage-500 mx-auto rounded-full"></div>
          <p className="text-xl text-sage-600 mt-6 max-w-2xl mx-auto">
            Meet the compassionate hearts behind Helping Hands, working tirelessly to make a difference.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-sage-100 text-center group"
            >
              <div className={`bg-gradient-to-r ${member.color} w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-sage-800 mb-2">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role || 'Team Member'}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
