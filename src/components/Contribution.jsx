import { motion } from 'framer-motion';
import { DollarSign, Heart, CreditCard } from 'lucide-react';

const Contribution = () => {
  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-terracotta-50 to-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-terracotta-800 mb-4">Make a Contribution</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-400 to-sage-500 mx-auto rounded-full"></div>
          <p className="text-2xl text-sage-600 mt-6 font-medium">
            10k won can change someone's life
          </p>
          <p className="text-lg text-sage-500 mt-4 max-w-2xl mx-auto">
            Your generosity provides hope, nourishment, and opportunity to families in need. Every contribution, no matter the size, makes a real difference.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-terracotta-400 to-terracotta-500 p-3 rounded-full">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sage-800">Direct Impact</h3>
                <p className="text-gray-600">Your donation goes directly to helping families in our community.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-sage-400 to-sage-500 p-3 rounded-full">
                <DollarSign className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sage-800">Transparent</h3>
                <p className="text-gray-600">100% of funds are used for program support and community aid.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-full">
                <CreditCard className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sage-800">Easy Giving</h3>
                <p className="text-gray-600">Simple bank transfer or contact us for other donation methods.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-sage-100"
          >
            <h3 className="text-3xl font-bold text-sage-800 mb-6 text-center">Banking Details</h3>
            <div className="space-y-4">
              <div className="bg-cream-50 p-4 rounded-lg border border-sage-200">
                <p className="text-sm text-sage-600 mb-1">Bank</p>
                <p className="text-lg font-semibold text-sage-800">Shinhan Bank</p>
              </div>
              <div className="bg-cream-50 p-4 rounded-lg border border-sage-200">
                <p className="text-sm text-sage-600 mb-1">Account Number</p>
                <p className="text-lg font-semibold text-sage-800 font-mono">110495876224</p>
              </div>
              <div className="bg-cream-50 p-4 rounded-lg border border-sage-200">
                <p className="text-sm text-sage-600 mb-1">Account Holder</p>
                <p className="text-lg font-semibold text-sage-800">Chantal</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                For international transfers or questions, please contact us.
              </p>
              <button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white px-8 py-3 rounded-full hover:from-terracotta-600 hover:to-terracotta-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
