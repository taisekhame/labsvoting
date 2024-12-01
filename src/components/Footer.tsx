import { Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About ACES Awards</h3>
            <p className="text-gray-600">
              Celebrating excellence and recognizing outstanding achievements in various categories.
              Join us in honoring the most catalytic behaviors that drive positive change.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600">Email: acesuniben24@gmail.com</p>
            <p className="text-gray-600">Phone: +234 704 547 8445</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/acesuniben" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/aces_uniben23" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:acesuniben24@gmail.com" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} ACES Awards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;