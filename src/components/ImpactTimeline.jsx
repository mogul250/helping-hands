import { motion } from 'framer-motion';
import { Calendar, Users, Heart, Home } from 'lucide-react';
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const ImpactTimeline = () => {
  const activities = [
    { month: 'Sept 2025', description: 'Supported a family of 6 with school supplies (introduced by Claudine).', image: 'img1' , icon: Home },
    { month: 'Oct 2025', description: 'Aided 3 families, including an elderly lady, a disabled woman, and 4 children (introduced by Isabella).', image: img2, icon: Users },
    { month: 'Nov 2025', description: 'Provided food and clothing to 2 widows and their children (introduced by Charlotte).', image: img3, icon: Heart },
    { month: 'Dec 2025', description: 'Supported 9 families with rice and oil (introduced by Josiane).', image: img4, icon: Calendar },
    { month: 'Jan 2026', description: 'Delivered a massive supply of food, charcoal, and hygiene products to a family with 8 children (introduced by Dr. Miriam).', image: img5, icon: Home },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-sage-800 mb-16"
        >
          Our Impact Timeline
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-terracotta-400 to-sage-500 h-full rounded-full"></div>
          {activities.map((activity, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-full md:w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-sage-200 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-terracotta-400 to-sage-500 p-3 rounded-full mr-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-sage-800">{activity.month}</h3>
                    </div>
                    <img src={activity.image} alt={activity.description} className="w-full h-[420px] object-contain rounded-lg mb-4 shadow-md" />
                    <p className="text-gray-700 text-lg leading-relaxed">{activity.description}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-terracotta-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactTimeline;
