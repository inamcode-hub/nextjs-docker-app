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
              className="bg-white rounded-lg p-2 inline-flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary-1 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 shadow-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="relative w-6 h-6">
                {/* Hamburger lines */}
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={closeMenu}
        ></div>
        
        {/* Menu panel - Full screen */}
        <div className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-primary-1 to-white">
            <Image
              src="/header-logo.png"
              alt="Dryer Master"
              className="h-10 w-auto"
              width={160}
              height={40}
              priority
            />
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-white/50 transition-all duration-200 group"
              aria-label="Close menu"
            >
              <div className="relative w-6 h-6">
                <span className="absolute left-0 top-2.5 w-6 h-0.5 bg-gray-600 transform rotate-45 group-hover:bg-primary transition-colors duration-200"></span>
                <span className="absolute left-0 top-2.5 w-6 h-0.5 bg-gray-600 transform -rotate-45 group-hover:bg-primary transition-colors duration-200"></span>
              </div>
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="flex-1 p-6 space-y-3 bg-gradient-to-b from-white to-gray-50">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === '/' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-700 hover:bg-primary-1 hover:text-primary'
              }`}
            >
              <span className="mr-3 text-lg">🏠</span>
              Home
            </Link>

            <Link 
              href="/about" 
              onClick={closeMenu}
              className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === '/about' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-700 hover:bg-primary-1 hover:text-primary'
              }`}
            >
              <span className="mr-3 text-lg">ℹ️</span>
              About Us
            </Link>

            {/* Products Mobile Dropdown */}
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleDropdown('products-mobile')}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-200 ${
                  isProductsActive() 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary-1 hover:text-primary bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">📊</span>
                  Our Products
                </div>
                <svg className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'products-mobile' && (
                <div className="bg-white border-t border-gray-100 space-y-1 p-2">
                  <Link href="/products/moisture-sensors" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/moisture-sensors' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">🎯</span>
                    Real-Time Moisture Sensors
                  </Link>
                  <Link href="/products/dm510-controller" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm510-controller' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">🏛️</span>
                    Dryer Master 510 Controller
                  </Link>
                  <Link href="/products/dm510-embedded" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm510-embedded' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">💻</span>
                    DM510 Embedded Solution
                  </Link>
                  <Link href="/products/dm-mobile" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm-mobile' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">📱</span>
                    DM Mobile (Remote Access)
                  </Link>
                  <Link href="/products/moisture-monitor-pro" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/moisture-monitor-pro' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">📈</span>
                    Moisture Monitor Pro (MMP)
                  </Link>
                  <Link href="/products/dm100" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm100' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">🏭</span>
                    Dryer Master DM100
                  </Link>
                </div>
              )}
            </div>

            {/* Customers Mobile Dropdown */}
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleDropdown('customers-mobile')}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-200 ${
                  isCustomersActive() 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary-1 hover:text-primary bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">👥</span>
                  Our Customers
                </div>
                <svg className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'customers-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'customers-mobile' && (
                <div className="bg-white border-t border-gray-100 space-y-1 p-2">
                  <Link href="/customers/experiences" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/customers/experiences' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">⭐</span>
                    Customer Experiences
                  </Link>
                  <Link href="/customers/manufacturers" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/customers/manufacturers' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">🏭</span>
                    Dryer Manufacturers
                  </Link>
                  <Link href="/customers/examples" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/customers/examples' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">💡</span>
                    Application Examples
                  </Link>
                </div>
              )}
            </div>

            {/* Support Mobile Dropdown */}
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleDropdown('support-mobile')}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-200 ${
                  isSupportActive() 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary-1 hover:text-primary bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">🛠️</span>
                  Support
                </div>
                <svg className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'support-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'support-mobile' && (
                <div className="bg-white border-t border-gray-100 space-y-1 p-2">
                  <Link href="/support/manuals" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/manuals' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">📖</span>
                    Manuals
                  </Link>
                  <Link href="/support/videos" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/videos' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">🎥</span>
                    Videos
                  </Link>
                  <Link href="/support/help" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/help' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">💬</span>
                    Get Help
                  </Link>
                  <Link href="/support/register" onClick={closeMenu} className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/register' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <span className="mr-2">📝</span>
                    Register
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/dealers" 
              onClick={closeMenu}
              className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === '/dealers' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-700 hover:bg-primary-1 hover:text-primary'
              }`}
            >
              <span className="mr-3 text-lg">🗺️</span>
              Find a Dealer
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="flex items-center justify-center px-4 py-3 bg-secondary text-white rounded-xl text-base font-medium hover:bg-secondary-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span className="mr-2 text-lg">📧</span>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;