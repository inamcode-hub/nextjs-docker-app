'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const [isMouseInDropdownArea, setIsMouseInDropdownArea] = useState(false);
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  const handleButtonMouseEnter = (menu: string) => {
    setHoverDropdown(menu);
    setIsMouseInDropdownArea(true);
  };

  const handleButtonMouseLeave = () => {
    setIsMouseInDropdownArea(false);
    // Small delay to allow moving to dropdown
    setTimeout(() => {
      if (!isMouseInDropdownArea) {
        setHoverDropdown(null);
      }
    }, 50);
  };

  const handleDropdownMouseEnter = (menu: string) => {
    setHoverDropdown(menu);
    setIsMouseInDropdownArea(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsMouseInDropdownArea(false);
    setHoverDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/header-logo.png"
              alt="Dryer Master"
              className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-200"
              width={160}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                pathname === '/' 
                  ? 'bg-primary text-white shadow-md border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary-2 hover:shadow-sm'
              }`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                pathname === '/about' 
                  ? 'bg-primary text-white shadow-md border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary-2 hover:shadow-sm'
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleButtonMouseEnter('products')}
              onMouseLeave={handleButtonMouseLeave}
            >
              <button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isProductsActive() 
                  ? 'bg-primary text-white shadow-md border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary-2 hover:shadow-sm'
              }`}>
                Our Products
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {hoverDropdown === 'products' && (
                <div 
                  className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => handleDropdownMouseEnter('products')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-1">
                    <Link href="/products/moisture-sensors" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/moisture-sensors' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Real-Time Moisture Sensors
                    </Link>
                    <Link href="/products/dm510-controller" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/dm510-controller' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Dryer Master 510 Controller
                    </Link>
                    <Link href="/products/dm510-embedded" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/dm510-embedded' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      DM510 Embedded Solution
                    </Link>
                    <Link href="/products/dm-mobile" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/dm-mobile' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      DM Mobile (Remote Access)
                    </Link>
                    <Link href="/products/moisture-monitor-pro" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/moisture-monitor-pro' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Moisture Monitor Pro (MMP)
                    </Link>
                    <Link href="/products/dm100" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/dm100' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Dryer Master DM100
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Customers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleButtonMouseEnter('customers')}
              onMouseLeave={handleButtonMouseLeave}
            >
              <button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isCustomersActive() 
                  ? 'bg-primary text-white shadow-md border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary-2 hover:shadow-sm'
              }`}>
                Our Customers
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {hoverDropdown === 'customers' && (
                <div 
                  className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => handleDropdownMouseEnter('customers')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-1">
                    <Link href="/customers/experiences" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/customers/experiences' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Customer Experiences
                    </Link>
                    <Link href="/customers/manufacturers" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/customers/manufacturers' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Dryer Manufacturers
                    </Link>
                    <Link href="/customers/examples" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/customers/examples' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Application Examples
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleButtonMouseEnter('support')}
              onMouseLeave={handleButtonMouseLeave}
            >
              <button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isSupportActive() 
                  ? 'bg-primary text-white shadow-md border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary-2 hover:shadow-sm'
              }`}>
                Support
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {hoverDropdown === 'support' && (
                <div 
                  className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  onMouseEnter={() => handleDropdownMouseEnter('support')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-1">
                    <Link href="/support/manuals" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/support/manuals' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Manuals
                    </Link>
                    <Link href="/support/videos" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/support/videos' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Videos
                    </Link>
                    <Link href="/support/help" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/support/help' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Support
                    </Link>
                    <Link href="/support/register" className={`block px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/support/register' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary-2 hover:text-primary'}`}>
                      Register
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/dealers" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                pathname === '/dealers' 
                  ? 'bg-primary text-white shadow-md border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary-2 hover:shadow-sm'
              }`}
            >
              Find a Dealer
            </Link>

            <Link 
              href="/contact" 
              className="ml-4 bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-dark transition-colors duration-200 shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeMenu}
        ></div>
        
        {/* Menu panel */}
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 max-h-screen overflow-y-auto border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                pathname === '/' 
                  ? 'bg-primary text-white shadow-lg border-l-4 border-secondary border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                pathname === '/about' 
                  ? 'bg-primary text-white shadow-lg border-l-4 border-secondary border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              About Us
            </Link>

            {/* Products Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('products-mobile')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isProductsActive() 
                    ? 'bg-primary text-white shadow-lg border-l-4 border-secondary border-2 border-primary-dark' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50 hover:shadow-sm'
                }`}
              >
                Our Products
                <svg className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'products-mobile' && (
                <div className="mt-1 space-y-1 pl-4">
                  <Link href="/products/moisture-sensors" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/products/moisture-sensors' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Real-Time Moisture Sensors
                  </Link>
                  <Link href="/products/dm510-controller" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/products/dm510-controller' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Dryer Master 510 Controller
                  </Link>
                  <Link href="/products/dm510-embedded" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/products/dm510-embedded' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    DM510 Embedded Solution
                  </Link>
                  <Link href="/products/dm-mobile" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/products/dm-mobile' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    DM Mobile (Remote Access)
                  </Link>
                  <Link href="/products/moisture-monitor-pro" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/products/moisture-monitor-pro' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Moisture Monitor Pro (MMP)
                  </Link>
                  <Link href="/products/dm100" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/products/dm100' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Dryer Master DM100
                  </Link>
                </div>
              )}
            </div>

            {/* Customers Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('customers-mobile')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isCustomersActive() 
                    ? 'bg-primary text-white shadow-lg border-l-4 border-secondary border-2 border-primary-dark' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50 hover:shadow-sm'
                }`}
              >
                Our Customers
                <svg className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'customers-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'customers-mobile' && (
                <div className="mt-1 space-y-1 pl-4">
                  <Link href="/customers/experiences" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/customers/experiences' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Customer Experiences
                  </Link>
                  <Link href="/customers/manufacturers" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/customers/manufacturers' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Dryer Manufacturers
                  </Link>
                  <Link href="/customers/examples" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/customers/examples' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Application Examples
                  </Link>
                </div>
              )}
            </div>

            {/* Support Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('support-mobile')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isSupportActive() 
                    ? 'bg-primary text-white shadow-lg border-l-4 border-secondary border-2 border-primary-dark' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50 hover:shadow-sm'
                }`}
              >
                Support
                <svg className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'support-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'support-mobile' && (
                <div className="mt-1 space-y-1 pl-4">
                  <Link href="/support/manuals" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/support/manuals' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Manuals
                  </Link>
                  <Link href="/support/videos" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/support/videos' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Videos
                  </Link>
                  <Link href="/support/help" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/support/help' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Support
                  </Link>
                  <Link href="/support/register" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-sm ${pathname === '/support/register' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                    Register
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/dealers" 
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                pathname === '/dealers' 
                  ? 'bg-primary text-white shadow-lg border-l-4 border-secondary border-2 border-primary-dark' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              Find a Dealer
            </Link>

            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="block w-full text-center bg-secondary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-dark transition-colors duration-200 mt-4 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;