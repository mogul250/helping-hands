import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Heart, CreditCard, X, Mail, Phone } from 'lucide-react';

const Contribution = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

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
            Membership fee: 10,000 won per member. Your generosity provides hope, nourishment, and opportunity to families in need. Every contribution, no matter the size, makes a real difference.
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
                <p className="text-lg font-semibold text-sage-800">AHOBANTEGEYE Chantal</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                For international transfers or questions, please contact us.
              </p>
              <button 
                onClick={() => setShowContactPopup(true)}
                className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white px-8 py-3 rounded-full hover:from-terracotta-600 hover:to-terracotta-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Contact Popup */}
        {showContactPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowContactPopup(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowContactPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-sage-800 mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="mailto:ahchantal95@gmail.com" className="flex items-center space-x-4 p-4 rounded-xl bg-cream-50 hover:bg-terracotta-50 transition-colors border border-sage-100 group">
                  <div className="bg-white p-2 rounded-full text-terracotta-500 shadow-sm group-hover:text-terracotta-600">
                    <Mail size={20} />
                  </div>
                  <span className="text-sage-700 font-medium break-all">ahchantal95@gmail.com</span>
                </a>
                
                <a href="tel:+8201021328995" className="flex items-center space-x-4 p-4 rounded-xl bg-cream-50 hover:bg-terracotta-50 transition-colors border border-sage-100 group">
                  <div className="bg-white p-2 rounded-full text-terracotta-500 shadow-sm group-hover:text-terracotta-600">
                    <Phone size={20} />
                  </div>
                  <span className="text-sage-700 font-medium">+82-010-21-328-995</span>
                </a>

                <a href="tel:+250788245476" className="flex items-center space-x-4 p-4 rounded-xl bg-cream-50 hover:bg-terracotta-50 transition-colors border border-sage-100 group">
                  <div className="bg-white p-2 rounded-full text-terracotta-500 shadow-sm group-hover:text-terracotta-600">
                    <Phone size={20} />
                  </div>
                  <span className="text-sage-700 font-medium">Tel: 250 788245476</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contribution;
