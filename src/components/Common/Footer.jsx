
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Navigation links for footer
  const footerLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Skills", path: "/skills" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ];
  
  // Social media links
  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/yourusername" }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* About/Logo Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Mylogo
            </Link>
            <p className="text-gray-400 mt-4 pr-4">
              A passionate frontend developer focused on creating modern, responsive web experiences.
              I&apos;m always open to new challenges and opportunities to grow.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, CA</li>
              <li>United States</li>
              <li className="pt-2">
                <a 
                  href="mailto:your.email@example.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  your.email@example.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-blue-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Subscription - Optional */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 pb-4 mb-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Subscribe to my newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on my projects and articles</p>
            <form className="flex flex-col sm:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;