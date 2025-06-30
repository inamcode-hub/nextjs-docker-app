'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Helper functions to check if parent menu is active
  const isProductsActive = useCallback(() => pathname.startsWith('/products'), [pathname]);
  const isCustomersActive = useCallback(() => pathname.startsWith('/customers'), [pathname]);
  const isSupportActive = useCallback(() => pathname.startsWith('/support'), [pathname]);

  // Auto-expand mobile dropdowns when on a child route
  useEffect(() => {
    if (isProductsActive()) {
      setActiveDropdown('products-mobile');
    } else if (isCustomersActive()) {
      setActiveDropdown('customers-mobile');
    } else if (isSupportActive()) {
      setActiveDropdown('support-mobile');
    } else {
      setActiveDropdown(null);
    }
  }, [pathname, isProductsActive, isCustomersActive, isSupportActive]);

  const handleMouseEnter = (menu: string) => {
    setHoverDropdown(menu);
  };

  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8">
        <nav className="flex justify-between items-center py-6">
          <Link href="/" className="block">
            <Image
              src="/header-logo.png"
              alt="Dryer Master"
              className="h-24 w-auto"
              width={200}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-4 list-none m-0">
            <li>
              <Link 
                href="/" 
                className={`inline-block px-4 py-2 no-underline font-medium border border-transparent rounded-lg transition-all duration-200 text-base whitespace-nowrap hover:-translate-y-px ${pathname === '/' ? 'text-white bg-primary font-semibold shadow-primary' : 'text-primary-17 hover:text-primary hover:bg-primary-1'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`inline-block px-4 py-2 no-underline font-medium border border-transparent rounded-lg transition-all duration-200 text-base whitespace-nowrap hover:-translate-y-px ${pathname === '/about' ? 'text-white bg-primary font-semibold shadow-primary' : 'text-primary-17 hover:text-primary hover:bg-primary-1'}`}
              >
                About Us
              </Link>
            </li>
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`inline-flex items-center gap-2 px-4 py-2 text-primary-text bg-transparent border border-transparent rounded-lg font-medium cursor-pointer transition-all duration-200 no-underline text-base whitespace-nowrap hover:text-primary hover:bg-primary-1 hover:-translate-y-px ${isProductsActive() ? 'text-white bg-primary font-semibold shadow-primary' : ''}`}>
                Our Products
                <span className={`text-base transition-transform duration-300 ${hoverDropdown === 'products' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {hoverDropdown === 'products' && (
                <ul className="absolute top-full left-0 bg-white border border-gray-5 rounded-lg shadow-strong min-w-72 z-50 py-3 list-none m-1 opacity-100 translate-y-0 transition-all duration-300">
                  <li><Link href="/products/moisture-sensors" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/products/moisture-sensors' ? 'bg-primary text-white font-semibold' : ''}`}>Real-Time Moisture Sensors</Link></li>
                  <li><Link href="/products/dm510-controller" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/products/dm510-controller' ? 'bg-primary text-white font-semibold' : ''}`}>Dryer Master 510 Controller</Link></li>
                  <li><Link href="/products/dm510-embedded" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/products/dm510-embedded' ? 'bg-primary text-white font-semibold' : ''}`}>DM510 Embedded Solution</Link></li>
                  <li><Link href="/products/dm-mobile" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/products/dm-mobile' ? 'bg-primary text-white font-semibold' : ''}`}>DM Mobile (Remote Access)</Link></li>
                  <li><Link href="/products/moisture-monitor-pro" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/products/moisture-monitor-pro' ? 'bg-primary text-white font-semibold' : ''}`}>Moisture Monitor Pro (MMP)</Link></li>
                  <li><Link href="/products/dm100" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/products/dm100' ? 'bg-primary text-white font-semibold' : ''}`}>Dryer Master DM100</Link></li>
                </ul>
              )}
            </li>
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('customers')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`inline-flex items-center gap-2 px-4 py-2 text-primary-text bg-transparent border border-transparent rounded-lg font-medium cursor-pointer transition-all duration-200 no-underline text-base whitespace-nowrap hover:text-primary hover:bg-primary-1 hover:-translate-y-px ${isCustomersActive() ? 'text-white bg-primary font-semibold shadow-primary' : ''}`}>
                Our Customers
                <span className={`text-base transition-transform duration-300 ${hoverDropdown === 'customers' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {hoverDropdown === 'customers' && (
                <ul className="absolute top-full left-0 bg-white border border-gray-5 rounded-lg shadow-strong min-w-72 z-50 py-3 list-none m-1 opacity-100 translate-y-0 transition-all duration-300">
                  <li><Link href="/customers/experiences" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/customers/experiences' ? 'bg-primary text-white font-semibold' : ''}`}>Customer Experiences</Link></li>
                  <li><Link href="/customers/manufacturers" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/customers/manufacturers' ? 'bg-primary text-white font-semibold' : ''}`}>Dryer Manufacturers</Link></li>
                  <li><Link href="/customers/examples" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/customers/examples' ? 'bg-primary text-white font-semibold' : ''}`}>Application Examples</Link></li>
                </ul>
              )}
            </li>
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('support')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`inline-flex items-center gap-2 px-4 py-2 text-primary-text bg-transparent border border-transparent rounded-lg font-medium cursor-pointer transition-all duration-200 no-underline text-base whitespace-nowrap hover:text-primary hover:bg-primary-1 hover:-translate-y-px ${isSupportActive() ? 'text-white bg-primary font-semibold shadow-primary' : ''}`}>
                Support
                <span className={`text-base transition-transform duration-300 ${hoverDropdown === 'support' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {hoverDropdown === 'support' && (
                <ul className="absolute top-full left-0 bg-white border border-gray-5 rounded-lg shadow-strong min-w-72 z-50 py-3 list-none m-1 opacity-100 translate-y-0 transition-all duration-300">
                  <li><Link href="/support/manuals" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/support/manuals' ? 'bg-primary text-white font-semibold' : ''}`}>Manuals</Link></li>
                  <li><Link href="/support/videos" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/support/videos' ? 'bg-primary text-white font-semibold' : ''}`}>Videos</Link></li>
                  <li><Link href="/support/help" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/support/help' ? 'bg-primary text-white font-semibold' : ''}`}>Support</Link></li>
                  <li><Link href="/support/register" className={`block py-3 px-6 text-primary-text no-underline transition-all duration-300 text-base font-medium rounded-lg mx-2 hover:bg-primary-1 hover:text-primary hover:translate-x-2 ${pathname === '/support/register' ? 'bg-primary text-white font-semibold' : ''}`}>Register</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link 
                href="/dealers" 
                className={`inline-block px-4 py-2 text-primary-text no-underline font-medium border border-transparent rounded-lg transition-all duration-200 text-base whitespace-nowrap hover:text-primary hover:bg-primary-1 hover:-translate-y-px ${pathname === '/dealers' ? 'text-white bg-primary font-semibold shadow-primary' : ''}`}
              >
                Find a Dealer Near You
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`inline-block px-4 py-2 text-primary-text no-underline font-medium border border-transparent rounded-lg transition-all duration-200 text-base whitespace-nowrap hover:text-primary hover:bg-primary-1 hover:-translate-y-px ${pathname === '/contact' ? 'text-white bg-primary font-semibold shadow-primary' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="bg-none border-none cursor-pointer p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="flex flex-col gap-1">
              <span className="w-10 h-1 bg-primary rounded-sm transition-all duration-300"></span>
              <span className="w-10 h-1 bg-primary rounded-sm transition-all duration-300"></span>
              <span className="w-10 h-1 bg-primary rounded-sm transition-all duration-300"></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-5 shadow-strong z-50 md:hidden">
            <ul className="list-none m-0 py-4">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)} className={`block py-6 px-8 text-primary-text no-underline border-none bg-none w-full text-left text-lg transition-all duration-300 hover:bg-primary-1 hover:text-primary ${pathname === '/' ? 'bg-primary text-white' : ''}`}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className={`block py-6 px-8 text-primary-text no-underline border-none bg-none w-full text-left text-lg transition-all duration-300 hover:bg-primary-1 hover:text-primary ${pathname === '/about' ? 'bg-primary text-white' : ''}`}>About Us</Link></li>
              <li>
                <button onClick={() => toggleDropdown('products-mobile')} className={`flex justify-between items-center py-6 px-8 text-primary-text border-none bg-none w-full text-left text-lg transition-all duration-300 hover:bg-primary-1 hover:text-primary ${isProductsActive() ? 'bg-primary text-white' : ''}`}>
                  Our Products
                  <span className={`text-lg transition-transform duration-300 ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {activeDropdown === 'products-mobile' && (
                  <ul className="list-none m-0 p-0 bg-gray-2 border-t border-gray-5">
                    <li><Link href="/products/moisture-sensors" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/products/moisture-sensors' ? 'bg-primary text-white font-semibold' : ''}`}>Real-Time Moisture Sensors</Link></li>
                    <li><Link href="/products/dm510-controller" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/products/dm510-controller' ? 'bg-primary text-white font-semibold' : ''}`}>Dryer Master 510 Controller</Link></li>
                    <li><Link href="/products/dm510-embedded" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/products/dm510-embedded' ? 'bg-primary text-white font-semibold' : ''}`}>DM510 Embedded Solution</Link></li>
                    <li><Link href="/products/dm-mobile" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/products/dm-mobile' ? 'bg-primary text-white font-semibold' : ''}`}>DM Mobile (Remote Access)</Link></li>
                    <li><Link href="/products/moisture-monitor-pro" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/products/moisture-monitor-pro' ? 'bg-primary text-white font-semibold' : ''}`}>Moisture Monitor Pro (MMP)</Link></li>
                    <li><Link href="/products/dm100" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/products/dm100' ? 'bg-primary text-white font-semibold' : ''}`}>Dryer Master DM100</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('customers-mobile')} className={`flex justify-between items-center py-6 px-8 text-primary-text border-none bg-none w-full text-left text-lg transition-all duration-300 hover:bg-primary-1 hover:text-primary ${isCustomersActive() ? 'bg-primary text-white' : ''}`}>
                  Our Customers
                  <span className={`text-lg transition-transform duration-300 ${activeDropdown === 'customers-mobile' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {activeDropdown === 'customers-mobile' && (
                  <ul className="list-none m-0 p-0 bg-gray-2 border-t border-gray-5">
                    <li><Link href="/customers/experiences" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/customers/experiences' ? 'bg-primary text-white font-semibold' : ''}`}>Customer Experiences</Link></li>
                    <li><Link href="/customers/manufacturers" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/customers/manufacturers' ? 'bg-primary text-white font-semibold' : ''}`}>Dryer Manufacturers</Link></li>
                    <li><Link href="/customers/examples" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/customers/examples' ? 'bg-primary text-white font-semibold' : ''}`}>Application Examples</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('support-mobile')} className={`flex justify-between items-center py-6 px-8 text-primary-text border-none bg-none w-full text-left text-lg transition-all duration-300 hover:bg-primary-1 hover:text-primary ${isSupportActive() ? 'bg-primary text-white' : ''}`}>
                  Support
                  <span className={`text-lg transition-transform duration-300 ${activeDropdown === 'support-mobile' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {activeDropdown === 'support-mobile' && (
                  <ul className="list-none m-0 p-0 bg-gray-2 border-t border-gray-5">
                    <li><Link href="/support/manuals" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/support/manuals' ? 'bg-primary text-white font-semibold' : ''}`}>Manuals</Link></li>
                    <li><Link href="/support/videos" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/support/videos' ? 'bg-primary text-white font-semibold' : ''}`}>Videos</Link></li>
                    <li><Link href="/support/help" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/support/help' ? 'bg-primary text-white font-semibold' : ''}`}>Support</Link></li>
                    <li><Link href="/support/register" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-12 text-primary-text no-underline text-sm transition-all duration-300 border-b border-gray-5 hover:bg-primary-1 hover:text-primary ${pathname === '/support/register' ? 'bg-primary text-white font-semibold' : ''}`}>Register</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/dealers" onClick={() => setIsMenuOpen(false)} className={`block py-6 px-8 text-primary-text no-underline border-none bg-none w-full text-left text-lg transition-all duration-300 hover:bg-primary-1 hover:text-primary ${pathname === '/dealers' ? 'bg-primary text-white' : ''}`}>Find a Dealer Near You</Link></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`block py-6 px-8 text-primary-text no-underline border-none bg-none w-full text-left text-lg transition-all duration-300 hover:bg-primary-1 hover:text-primary ${pathname === '/contact' ? 'bg-primary text-white' : ''}`}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;