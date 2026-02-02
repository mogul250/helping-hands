import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sage-800 to-sage-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-terracotta-400" size={32} />
              <h3 className="text-3xl font-bold">Helping Hands</h3>
            </div>
            <p className="text-sage-200 mb-6 text-lg">Bringing hope to the hopeless through compassion and action.</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-terracotta-400" />
                <span>ahchantal95@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-terracotta-400" />
                <span>+82-010-21-328-995</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-terracotta-400" />
                <span>Tel: 250 788245476</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-terracotta-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-terracotta-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-terracotta-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#impact" className="hover:text-terracotta-400 transition-colors duration-300">Our Impact</a></li>
              <li><a href="#team" className="hover:text-terracotta-400 transition-colors duration-300">Our Team</a></li>
              <li><a href="#donate" className="hover:text-terracotta-400 transition-colors duration-300">Donate</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-terracotta-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-sage-700 p-3 rounded-full hover:bg-terracotta-500 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="bg-sage-700 p-3 rounded-full hover:bg-terracotta-500 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="bg-sage-700 p-3 rounded-full hover:bg-terracotta-500 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.084.588c-.693.286-1.279.672-1.87 1.263C1.523 2.442 1.137 3.028.851 3.721c-.286.691-.468 1.5-.521 2.706C.27 7.633.256 8.033.256 11.654c0 3.621.014 4.021.067 5.227.053 1.206.235 2.015.521 2.706.286.693.672 1.279 1.263 1.87.591.591 1.177.977 1.87 1.263.691.286 1.5.468 2.706.521C7.996 23.743 8.396 23.757 12.017 23.757c3.621 0 4.021-.014 5.227-.067 1.206-.053 2.015-.235 2.706-.521.693-.286 1.279-.672 1.87-1.263.591-.591.977-1.177 1.263-1.87.286-.691.468-1.5.521-2.706.053-1.206.067-1.606.067-5.227 0-3.621-.014-4.021-.067-5.227-.053-1.206-.235-2.015-.521-2.706-.286-.693-.672-1.279-1.263-1.87-.591-.591-1.177-.977-1.87-1.263C18.242.302 17.433.12 16.227.067 15.021.014 14.621 0 12 0zm0 2.163c3.574 0 4.021.014 5.227.067 1.055.049 1.632.218 2.006.382.418.186.765.43 1.107.772.342.342.586.689.772 1.107.164.374.333.951.382 2.006.053 1.206.067 1.653.067 5.227 0 3.574-.014 4.021-.067 5.227-.049 1.055-.218 1.632-.382 2.006-.186.418-.43.765-.772 1.107-.342.342-.689.586-1.107.772-.374.164-.951.333-2.006.382-1.206.053-1.653.067-5.227.067-3.574 0-4.021-.014-5.227-.067-1.055-.049-1.632-.218-2.006-.382-.418-.186-.765-.43-1.107-.772-.342-.342-.586-.689-.772-1.107-.164-.374-.333-.951-.382-2.006-.053-1.206-.067-1.653-.067-5.227 0-3.574.014-4.021.067-5.227.049-1.055.218-1.632.382-2.006.186-.418.43-.765.772-1.107.342-.342.689-.586 1.107-.772.374-.164.951-.333 2.006-.382 1.206-.053 1.653-.067 5.227-.067zm0 3.774a7.077 7.077 0 100 14.154 7.077 7.077 0 000-14.154zm0 11.664a4.587 4.587 0 110-9.174 4.587 4.587 0 010 9.174zm8.163-11.664a1.687 1.687 0 110-3.374 1.687 1.687 0 010 3.374z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-sage-700 text-center">
          <p className="text-sage-300">&copy; {new Date().getFullYear()} Helping Hands. All rights reserved.</p>
          <p className="text-sage-300 mt-2">Building Kindness. Change together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
