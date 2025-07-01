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
    <footer className="bg-gradient-to-br from-amber-50 via-green-50 to-primary-1 text-gray-800 mt-32 relative overflow-hidden border-t border-gray-200">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-amber-100/30 to-green-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16 py-16 lg:py-24">
          
          {/* Company Section */}
          <div className="lg:col-span-2 sm:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8">
              <Image
                src="/header-logo.png"
                alt="Dryer Master"
                width={160}
                height={48}
                className="mb-6 w-auto h-auto object-contain block max-w-48 sm:max-w-64 transition-all duration-300 hover:scale-105"
              />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              🌾 Empowering farmers with intelligent grain drying solutions since 2001 🌾
            </p>
            <div className="text-primary text-sm mb-8 italic font-medium">
              &quot;Trusted by 50,000+ farms worldwide for superior grain quality&quot;
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white/90">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">50K</div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-amber-700">Farms</span>
                  <span className="text-xs text-amber-600">Protected</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white/90">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">99%</div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-green-700">Quality</span>
                  <span className="text-xs text-green-600">Assured</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-light hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white/90">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold text-sm">24/7</div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary-dark">Support</span>
                  <span className="text-xs text-primary">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="flex items-center gap-3 text-primary text-lg font-bold mb-6">
              <BarChart3 size={20} />
              Products
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-3">
                <Link href="/products/moisture-sensors" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Target size={16} />
                  Real-Time Moisture Sensors
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/dm510-controller" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Settings size={16} />
                  Dryer Master 510 Controller
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/dm510-embedded" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Laptop size={16} />
                  DM510 Embedded Solution
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/dm-mobile" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Smartphone size={16} />
                  DM Mobile (Remote Access)
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/moisture-monitor-pro" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <BarChart3 size={16} />
                  Moisture Monitor Pro (MMP)
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/products/dm100" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Settings size={16} />
                  Dryer Master DM100
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="flex items-center gap-3 text-primary text-lg font-bold mb-6">
              <Wrench size={20} />
              Support
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-3">
                <Link href="/support/help" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <MessageCircle size={16} />
                  Support
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/support/manuals" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Book size={16} />
                  Manuals
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/support/videos" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Video size={16} />
                  Videos
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/support/register" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <FileText size={16} />
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="flex items-center gap-3 text-primary text-lg font-bold mb-6">
              <Building2 size={20} />
              Company
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-3">
                <Link href="/about" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Info size={16} />
                  About Us
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/customers/experiences" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Star size={16} />
                  Customer Experiences
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/customers/applications" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Target size={16} />
                  Application Examples
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/dealers" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Map size={16} />
                  Find a Dealer
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact" className="flex items-center gap-3 text-gray-700 no-underline text-sm py-2 px-3 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:shadow-lg hover:scale-105">
                  <Mail size={16} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/40 mb-12 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="flex items-center gap-3 text-primary text-lg font-bold mb-8">
            <MessageCircle size={20} />
            Get In Touch
          </h3>
          
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-1 hover:to-white hover:shadow-lg hover:scale-105 border border-gray-200">
              <div className="text-secondary flex-shrink-0"><Phone size={20} /></div>
              <div className="flex flex-col gap-2 min-w-0 w-full">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</span>
                <a href="tel:1-519-725-4700" className="text-gray-700 text-sm no-underline transition-colors duration-300 hover:text-secondary break-words">1.519.725.4700</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-1 hover:to-white hover:shadow-lg hover:scale-105 border border-gray-200">
              <div className="text-secondary flex-shrink-0"><Smartphone size={20} /></div>
              <div className="flex flex-col gap-2 min-w-0 w-full">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Toll Free</span>
                <a href="tel:1-800-265-2757" className="text-gray-700 text-sm no-underline transition-colors duration-300 hover:text-secondary break-words">1.800.265.2757</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-1 hover:to-white hover:shadow-lg hover:scale-105 border border-gray-200">
              <div className="text-secondary flex-shrink-0"><Mail size={20} /></div>
              <div className="flex flex-col gap-2 min-w-0 w-full">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</span>
                <a href="mailto:info@dryermaster.com" className="text-gray-700 text-sm no-underline transition-colors duration-300 hover:text-secondary break-words">info@dryermaster.com</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-1 hover:to-white hover:shadow-lg hover:scale-105 border border-gray-200">
              <div className="text-secondary flex-shrink-0"><MapPin size={20} /></div>
              <div className="flex flex-col gap-3 min-w-0 w-full">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Visit Us</span>
                <div className="text-gray-700 text-sm leading-relaxed">
                  <div className="font-bold text-primary mb-1">DryerMaster Technologies Inc.</div>
                  <div>115 Ardelt Ave., Building #2</div>
                  <div>Kitchener, ON, Canada</div>
                  <div>N2C 2E1</div>
                </div>
                <a 
                  href="https://maps.google.com/?q=115+Ardelt+Ave+Building+2+Kitchener+ON+N2C+2E1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 py-2 px-4 bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/40 rounded-xl text-secondary no-underline text-xs font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark hover:text-white hover:shadow-lg hover:scale-105 w-fit"
                >
                  <Map size={14} />
                  View on Maps
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 lg:p-8 rounded-2xl border border-secondary/20 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h4 className="flex items-center gap-2 text-secondary text-lg font-bold mb-3">
                  <Send size={18} />
                  Stay Updated
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">Get the latest agricultural insights and product updates delivered to your inbox.</p>
              </div>
              <div className="flex-1 lg:max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 py-3 px-4 bg-white border border-gray-300 rounded-xl text-gray-700 text-sm placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/20"
                  />
                  <button type="submit" className="py-3 px-6 bg-gradient-to-r from-secondary to-secondary-dark text-white border-none rounded-xl font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap hover:shadow-xl hover:scale-105 flex items-center gap-2 justify-center">
                    <Send size={16} />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 lg:py-12 border-t border-b border-gray-300 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-lg font-bold m-0">Follow Us</h4>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#" className="flex items-center gap-2 text-gray-700 no-underline py-3 px-4 bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 border border-white/50 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:border-blue-500 hover:shadow-xl hover:scale-105" aria-label="LinkedIn">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 no-underline py-3 px-4 bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 border border-white/50 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:border-red-500 hover:shadow-xl hover:scale-105" aria-label="YouTube">
                <Youtube size={16} />
                YouTube
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 no-underline py-3 px-4 bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 border border-white/50 hover:text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:border-blue-600 hover:shadow-xl hover:scale-105" aria-label="Facebook">
                <Facebook size={16} />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 no-underline py-3 px-4 bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 border border-white/50 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:border-gray-700 hover:shadow-xl hover:scale-105" aria-label="Twitter">
                <Twitter size={16} />
                Twitter
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-primary text-lg font-bold m-0">Our Standards</h4>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-3 text-gray-700 text-xs py-4 px-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 hover:border-secondary/50 transition-all duration-300 hover:scale-105">
                <Shield size={16} className="text-secondary" />
                ISO Certified
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-xs py-4 px-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <Leaf size={16} className="text-green-500" />
                Eco Friendly
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-xs py-4 px-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
                <Lock size={16} className="text-amber-500" />
                Secure Technology
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 py-6 lg:py-8 bg-white/60 backdrop-blur-sm border-t border-white/40">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-6 text-center lg:text-left">
                <span className="text-gray-700 text-sm">&copy; {new Date().getFullYear()} Dryer Master Corporation. All rights reserved.</span>
                <span className="bg-secondary/20 text-secondary py-1.5 px-3 rounded-full text-xs font-semibold border border-secondary/30">v1.0.0</span>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
                <Link href="/privacy" className="text-gray-600 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-600 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-600 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="text-gray-600 no-underline text-sm transition-all duration-200 hover:text-secondary hover:underline">
                  Accessibility
                </Link>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="pt-4 border-t border-white/40">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                <span>🌾 Proudly serving farmers since 2001 🌾</span>
                <span>🚜 Protecting harvests across North America 🚜</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;