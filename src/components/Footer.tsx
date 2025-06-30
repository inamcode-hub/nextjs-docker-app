import Link from 'next/link';
import Image from 'next/image';
import { 
  BarChart3, 
  Wrench, 
  Building2, 
  Phone, 
  Smartphone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Twitter,
  Shield,
  Leaf,
  Lock,
  Target,
  Settings,
  Laptop,
  MessageCircle,
  Book,
  Video,
  FileText,
  Info,
  Star,
  Map,
  Send
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-20 to-primary text-white mt-32 relative overflow-hidden">
      {/* Top accent line with shimmer animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary animate-shimmer"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16 py-16 lg:py-24">
          
          {/* Company Section */}
          <div className="lg:col-span-2 sm:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8">
              <Image
                src="/header-logo.png"
                alt="Dryer Master"
                width={160}
                height={48}
                className="mb-6 filter-none bg-white p-4 sm:p-6 rounded-lg border-2 border-gray-300 transition-all duration-200 shadow-md max-w-48 sm:max-w-64 w-auto h-auto object-contain block hover:shadow-lg hover:border-secondary"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Revolutionizing agriculture with intelligent moisture monitoring solutions for the modern farm.
            </p>
            <div className="flex gap-8 mt-8">
              <div className="flex items-center gap-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="text-xl">🌾</div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-secondary">50K+</span>
                  <span className="text-xs text-gray-300">Farms Served</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="text-xl">⏱️</div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-secondary">99.9%</span>
                  <span className="text-xs text-gray-300">Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="flex items-center gap-3 text-secondary text-lg font-semibold mb-6">
              <BarChart3 size={20} />
              Products
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-3">
                <Link href="/products/moisture-sensors" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Target size={16} />
                  Real-Time Moisture Sensors
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/dm510-controller" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Settings size={16} />
                  DM510 Controller
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/dm510-embedded" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Laptop size={16} />
                  DM510 Embedded
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/dm-mobile" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Smartphone size={16} />
                  DM Mobile App
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/moisture-monitor-pro" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <BarChart3 size={16} />
                  Moisture Monitor Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="flex items-center gap-3 text-secondary text-lg font-semibold mb-6">
              <Wrench size={20} />
              Support
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-3">
                <Link href="/support/help" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <MessageCircle size={16} />
                  Get Help
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/support/manuals" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Book size={16} />
                  Documentation
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/support/videos" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Video size={16} />
                  Video Tutorials
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/support/register" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <FileText size={16} />
                  Product Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="flex items-center gap-3 text-secondary text-lg font-semibold mb-6">
              <Building2 size={20} />
              Company
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-3">
                <Link href="/about" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Info size={16} />
                  About Us
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/customers/experiences" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Star size={16} />
                  Success Stories
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/dealers" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Map size={16} />
                  Find Dealers
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact" className="flex items-center gap-3 text-gray-300 no-underline text-sm py-2 px-3 transition-all duration-200 rounded-md border border-transparent hover:text-white hover:bg-secondary hover:shadow-sm">
                  <Mail size={16} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/5 p-6 lg:p-8 rounded-lg border border-white/10 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="flex items-center gap-3 text-secondary text-lg font-semibold mb-8">
            <MessageCircle size={20} />
            Get In Touch
          </h3>
          
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12 hover:shadow-md">
              <div className="text-secondary flex-shrink-0"><Phone size={20} /></div>
              <div className="flex flex-col gap-2 min-w-0 w-full">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</span>
                <a href="tel:1-519-725-4700" className="text-gray-300 text-sm no-underline transition-colors duration-300 hover:text-secondary break-words">1.519.725.4700</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12 hover:shadow-md">
              <div className="text-secondary flex-shrink-0"><Smartphone size={20} /></div>
              <div className="flex flex-col gap-2 min-w-0 w-full">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Toll Free</span>
                <a href="tel:1-800-265-2757" className="text-gray-300 text-sm no-underline transition-colors duration-300 hover:text-secondary break-words">1.800.265.2757</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12 hover:shadow-md">
              <div className="text-secondary flex-shrink-0"><Mail size={20} /></div>
              <div className="flex flex-col gap-2 min-w-0 w-full">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</span>
                <a href="mailto:info@dryermaster.com" className="text-gray-300 text-sm no-underline transition-colors duration-300 hover:text-secondary break-words">info@dryermaster.com</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12 hover:shadow-md">
              <div className="text-secondary flex-shrink-0"><MapPin size={20} /></div>
              <div className="flex flex-col gap-3 min-w-0 w-full">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Visit Us</span>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <div className="font-medium text-white mb-1">DryerMaster Technologies Inc.</div>
                  <div>115 Ardelt Ave., Building #2</div>
                  <div>Kitchener, ON, Canada</div>
                  <div>N2C 2E1</div>
                </div>
                <a 
                  href="https://maps.google.com/?q=115+Ardelt+Ave+Building+2+Kitchener+ON+N2C+2E1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 py-2 px-4 bg-secondary/20 border border-secondary/40 rounded-md text-secondary no-underline text-xs font-semibold transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-md w-fit"
                >
                  <Map size={14} />
                  View on Maps
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-secondary/10 p-6 lg:p-8 rounded-lg border border-secondary/30">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h4 className="flex items-center gap-2 text-secondary text-lg font-semibold mb-3">
                  <Send size={18} />
                  Stay Updated
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">Get the latest agricultural insights and product updates delivered to your inbox.</p>
              </div>
              <div className="flex-1 lg:max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 py-3 px-4 bg-white/10 border border-white/30 rounded-md text-white text-sm placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-secondary focus:bg-white/15 focus:ring-2 focus:ring-secondary/20"
                  />
                  <button type="submit" className="py-3 px-6 bg-secondary text-white border-none rounded-md font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-secondary-dark hover:shadow-md flex items-center gap-2 justify-center">
                    <Send size={16} />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 lg:py-12 border-t border-b border-white/20 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <h4 className="text-secondary text-lg font-semibold m-0">Follow Us</h4>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#" className="flex items-center gap-2 text-gray-300 no-underline py-2 px-4 bg-white/10 rounded-md transition-all duration-300 border border-white/20 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:scale-105" aria-label="LinkedIn">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-300 no-underline py-2 px-4 bg-white/10 rounded-md transition-all duration-300 border border-white/20 hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-lg hover:scale-105" aria-label="YouTube">
                <Youtube size={16} />
                YouTube
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-300 no-underline py-2 px-4 bg-white/10 rounded-md transition-all duration-300 border border-white/20 hover:text-white hover:bg-blue-700 hover:border-blue-700 hover:shadow-lg hover:scale-105" aria-label="Facebook">
                <Facebook size={16} />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-300 no-underline py-2 px-4 bg-white/10 rounded-md transition-all duration-300 border border-white/20 hover:text-white hover:bg-black hover:border-gray-800 hover:shadow-lg hover:scale-105" aria-label="Twitter">
                <Twitter size={16} />
                Twitter
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-secondary text-lg font-semibold m-0">Our Standards</h4>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-3 text-gray-400 text-xs py-4 px-6 bg-white/8 rounded-lg border border-white/15">
                <Shield size={16} className="text-secondary" />
                ISO Certified
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-xs py-4 px-6 bg-white/8 rounded-lg border border-white/15">
                <Leaf size={16} className="text-secondary" />
                Eco Friendly
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-xs py-4 px-6 bg-white/8 rounded-lg border border-white/15">
                <Lock size={16} className="text-secondary" />
                Secure Technology
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 lg:py-8 bg-primary-dark/50 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-6 text-center lg:text-left">
                <span className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Dryer Master Corporation. All rights reserved.</span>
                <span className="bg-secondary/20 text-secondary py-1.5 px-3 rounded-full text-xs font-semibold border border-secondary/30">v1.0.0</span>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
                <Link href="/privacy" className="text-gray-400 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="text-gray-400 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Accessibility
                </Link>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
                <span>Built with ❤️ for modern agriculture</span>
                <span>Trusted by 50,000+ farms worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;