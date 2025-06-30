import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-20 to-primary text-white mt-32 relative overflow-hidden">
      {/* Top accent line with shimmer animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary animate-shimmer"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 py-24">
          
          {/* Company Section */}
          <div className="lg:col-span-2 pr-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8">
              <Image
                src="/header-logo.png"
                alt="Dryer Master"
                width={200}
                height={60}
                className="mb-8 filter-none bg-white p-8 rounded-large border-2 border-gray-300 transition-all duration-300 shadow-lg max-w-72 w-auto h-auto object-contain block hover:scale-105 hover:shadow-xl hover:border-secondary"
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
            <h3 className="flex items-center gap-4 text-secondary text-xl font-semibold mb-8 relative cursor-default transition-all duration-300 hover:-translate-y-1">
              <span className="text-xl transition-all duration-300 inline-block hover:scale-120 hover:rotate-12 hover:drop-shadow-lg">📊</span>
              Products
              <span className="absolute bottom-[-0.5rem] left-0 w-12 h-0.5 bg-secondary rounded-sm transition-all duration-400"></span>
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-5">
                <Link href="/products/moisture-sensors" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">🎯</span>
                  Real-Time Moisture Sensors
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/products/dm510-controller" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">🎛️</span>
                  DM510 Controller
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/products/dm510-embedded" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">💻</span>
                  DM510 Embedded
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/products/dm-mobile" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">📱</span>
                  DM Mobile App
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/products/moisture-monitor-pro" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">📈</span>
                  Moisture Monitor Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="flex items-center gap-4 text-secondary text-xl font-semibold mb-8 relative cursor-default transition-all duration-300 hover:-translate-y-1">
              <span className="text-xl transition-all duration-300 inline-block hover:scale-120 hover:rotate-12 hover:drop-shadow-lg">🛠️</span>
              Support
              <span className="absolute bottom-[-0.5rem] left-0 w-12 h-0.5 bg-secondary rounded-sm transition-all duration-400"></span>
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-5">
                <Link href="/support/help" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">💬</span>
                  Get Help
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/support/manuals" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">📖</span>
                  Documentation
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/support/videos" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">🎥</span>
                  Video Tutorials
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/support/register" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">📝</span>
                  Product Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="flex items-center gap-4 text-secondary text-xl font-semibold mb-8 relative cursor-default transition-all duration-300 hover:-translate-y-1">
              <span className="text-xl transition-all duration-300 inline-block hover:scale-120 hover:rotate-12 hover:drop-shadow-lg">🏢</span>
              Company
              <span className="absolute bottom-[-0.5rem] left-0 w-12 h-0.5 bg-secondary rounded-sm transition-all duration-400"></span>
            </h3>
            <ul className="list-none m-0 p-0">
              <li className="mb-5">
                <Link href="/about" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">ℹ️</span>
                  About Us
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/customers/experiences" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">⭐</span>
                  Success Stories
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/dealers" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">🗺️</span>
                  Find Dealers
                </Link>
              </li>
              <li className="mb-5">
                <Link href="/contact" className="flex items-center gap-4 text-gray-300 no-underline text-sm py-4 px-5 transition-all duration-400 rounded-lg border border-transparent relative overflow-hidden hover:text-secondary hover:bg-secondary/15 hover:border-secondary/30 hover:translate-x-3 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-lg transition-all duration-400 inline-block hover:scale-130 hover:rotate-12 hover:drop-shadow-md">📧</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/5 p-8 rounded-x-large border border-white/10 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="flex items-center gap-4 text-secondary text-xl font-semibold mb-8">
            <span className="text-xl">📞</span>
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex items-start gap-6 p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12">
              <div className="text-xl min-w-8">📞</div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-400 font-medium">Phone</span>
                <a href="tel:1-519-725-4700" className="text-gray-300 text-sm no-underline transition-colors duration-300 hover:text-secondary">1.519.725.4700</a>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12">
              <div className="text-xl min-w-8">📱</div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-400 font-medium">Toll Free</span>
                <a href="tel:1-800-265-2757" className="text-gray-300 text-sm no-underline transition-colors duration-300 hover:text-secondary">1.800.265.2757</a>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12">
              <div className="text-xl min-w-8">✉️</div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-400 font-medium">Email</span>
                <a href="mailto:info@dryermaster.com" className="text-gray-300 text-sm no-underline transition-colors duration-300 hover:text-secondary">info@dryermaster.com</a>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-white/8 rounded-lg transition-all duration-300 hover:bg-white/12">
              <div className="text-xl min-w-8">📍</div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-400 font-medium">Visit Us</span>
                <span className="text-gray-300 text-sm">
                  DryerMaster Technologies Inc.<br />
                  115 Ardelt Ave., Building #2<br />
                  Kitchener, ON, Canada<br />
                  N2C 2E1
                </span>
                <a 
                  href="https://maps.google.com/?q=115+Ardelt+Ave+Building+2+Kitchener+ON+N2C+2E1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-4 py-3 px-6 bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/40 rounded-lg text-secondary no-underline text-xs font-semibold transition-all duration-300 relative overflow-hidden hover:bg-gradient-to-br hover:from-secondary/30 hover:to-secondary/20 hover:border-secondary hover:text-white hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-lg transition-transform duration-300 hover:scale-120 hover:rotate-12">🗺️</span>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-secondary/10 p-8 rounded-lg border border-secondary/30">
            <h4 className="text-secondary text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-xs mb-8">Get the latest agricultural insights and product updates.</p>
            <form className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 py-5 px-6 bg-white/10 border border-white/30 rounded-lg text-white text-sm transition-all duration-300 focus:outline-none focus:border-secondary focus:bg-white/15"
              />
              <button type="submit" className="py-5 px-8 bg-secondary text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap hover:bg-secondary-dark hover:-translate-y-1 hover:shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 border-t border-b border-white/20 gap-12">
          <div className="flex flex-col gap-6">
            <h4 className="text-secondary text-lg font-semibold m-0">Follow Us</h4>
            <div className="flex gap-8">
              <a href="#" className="flex items-center gap-3 text-gray-300 no-underline py-4 px-6 bg-white/10 rounded-lg transition-all duration-300 border border-white/20 hover:bg-secondary/20 hover:text-secondary hover:-translate-y-1 hover:shadow-lg" aria-label="LinkedIn">
                <span className="text-xl">💼</span>
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-300 no-underline py-4 px-6 bg-white/10 rounded-lg transition-all duration-300 border border-white/20 hover:bg-secondary/20 hover:text-secondary hover:-translate-y-1 hover:shadow-lg" aria-label="YouTube">
                <span className="text-xl">📺</span>
                YouTube
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-300 no-underline py-4 px-6 bg-white/10 rounded-lg transition-all duration-300 border border-white/20 hover:bg-secondary/20 hover:text-secondary hover:-translate-y-1 hover:shadow-lg" aria-label="Facebook">
                <span className="text-xl">👤</span>
                Facebook
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-300 no-underline py-4 px-6 bg-white/10 rounded-lg transition-all duration-300 border border-white/20 hover:bg-secondary/20 hover:text-secondary hover:-translate-y-1 hover:shadow-lg" aria-label="Twitter">
                <span className="text-xl">🐦</span>
                Twitter
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-secondary text-lg font-semibold m-0">Our Standards</h4>
            <div className="flex gap-8">
              <div className="flex items-center gap-3 text-gray-400 text-xs py-4 px-6 bg-white/8 rounded-lg border border-white/15">
                <span className="text-lg text-secondary">🛡️</span>
                ISO Certified
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-xs py-4 px-6 bg-white/8 rounded-lg border border-white/15">
                <span className="text-lg text-secondary">🌱</span>
                Eco Friendly
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-xs py-4 px-6 bg-white/8 rounded-lg border border-white/15">
                <span className="text-lg text-secondary">🔒</span>
                Secure Technology
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-16 bg-black/30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 px-8">
            <div className="flex items-center gap-8 text-gray-400 text-sm">
              <span>&copy; {new Date().getFullYear()} Dryer Master Corporation. All rights reserved.</span>
              <span className="bg-secondary/20 text-secondary py-2 px-4 rounded-full text-xs font-semibold border border-secondary/30">v2.5.0</span>
            </div>
            <div className="flex gap-12">
              <Link href="/privacy" className="text-gray-400 no-underline text-xs transition-colors duration-300 relative hover:text-secondary after:content-[''] after:absolute after:bottom-[-0.3rem] after:left-0 after:w-0 after:h-px after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 no-underline text-xs transition-colors duration-300 relative hover:text-secondary after:content-[''] after:absolute after:bottom-[-0.3rem] after:left-0 after:w-0 after:h-px after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 no-underline text-xs transition-colors duration-300 relative hover:text-secondary after:content-[''] after:absolute after:bottom-[-0.3rem] after:left-0 after:w-0 after:h-px after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Cookie Policy</Link>
              <Link href="/accessibility" className="text-gray-400 no-underline text-xs transition-colors duration-300 relative hover:text-secondary after:content-[''] after:absolute after:bottom-[-0.3rem] after:left-0 after:w-0 after:h-px after:bg-secondary after:transition-all after:duration-300 hover:after:w-full">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;