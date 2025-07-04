
import { Heart, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-vanilla to-warm-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-blush" />
              <h3 className="text-2xl font-rounded font-bold text-gray-800">lovable.dev</h3>
            </div>
            <p className="text-gray-600 font-rounded leading-relaxed mb-6 max-w-md">
              Handcrafted with love in Portland, Oregon. Each soft companion is made with organic materials 
              and filled with dreams. Creating gentle stories, one stitch at a time.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-blush/20 to-turquoise/20 rounded-full flex items-center justify-center hover:from-blush hover:to-turquoise hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-br from-turquoise/20 to-blush/20 rounded-full flex items-center justify-center hover:from-turquoise hover:to-blush hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rounded font-bold text-gray-800 mb-6">Quick Links</h4>
            <ul className="space-y-3 font-rounded text-gray-600">
              <li><a href="#" className="hover:text-blush transition-colors duration-300">Shop All</a></li>
              <li><a href="#" className="hover:text-blush transition-colors duration-300">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blush transition-colors duration-300">Custom Orders</a></li>
              <li><a href="#" className="hover:text-blush transition-colors duration-300">Gift Cards</a></li>
              <li><a href="#" className="hover:text-blush transition-colors duration-300">Care Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-rounded font-bold text-gray-800 mb-6">Get in Touch</h4>
            <div className="space-y-4 font-rounded text-gray-600">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href="mailto:hello@lovable.dev" className="hover:text-blush transition-colors">
                    hello@lovable.dev
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-blush mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Instagram</p>
                  <a href="#" className="hover:text-blush transition-colors">
                    @lovable.handmade
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-turquoise mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Studio</p>
                  <p>Portland, Oregon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 text-center">
          <h3 className="font-story text-2xl text-gray-800 mb-3">
            Join Our Gentle Community
          </h3>
          <p className="text-gray-600 font-rounded mb-6 max-w-2xl mx-auto">
            Be the first to know about new companions, behind-the-scenes stories, and special collections. 
            We promise to keep your inbox as gentle as our toys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:border-turquoise focus:outline-none font-rounded"
            />
            <button className="bg-gradient-to-r from-turquoise to-blush hover:from-blush hover:to-turquoise text-white px-8 py-3 rounded-full font-rounded font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 font-rounded text-sm mb-4 md:mb-0">
            © 2024 lovable.dev. Made with love in Portland, Oregon.
          </p>
          <div className="flex gap-6 text-sm font-rounded text-gray-600">
            <a href="#" className="hover:text-blush transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blush transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blush transition-colors">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
