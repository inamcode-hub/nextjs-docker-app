'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Target, 
  Settings, 
  Laptop, 
  Smartphone, 
  BarChart3, 
  Book, 
  Video, 
  MessageCircle, 
  FileText,
  Star,
  Building2,
  Clipboard,
  Home,
  Info,
  Map,
  Mail
} from 'lucide-react';

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
    <header className="bg-gradient-to-r from-amber-50 via-green-50 to-primary-1 shadow-md sticky top-0 z-50 border-b border-gray-100">
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
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 2xl:space-x-2">
            {/* Main nav items with enhanced hover */}
            <Link 
              href="/" 
              className={`relative flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 ${
                pathname === '/' 
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105'
              }`}
            >
              <span className="whitespace-nowrap">Home</span>
              {pathname === '/' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
            </Link>

            <Link 
              href="/about" 
              className={`relative flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 ${
                pathname === '/about' 
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105'
              }`}
            >
              <span className="whitespace-nowrap">About Us</span>
              {pathname === '/about' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleButtonMouseEnter('products')}
              onMouseLeave={handleButtonMouseLeave}
            >
              <Link 
                href="/products" 
                className={`relative z-10 flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 ${
                  isProductsActive() 
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 scale-105' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105'
                }`}
                onClick={(e) => {
                  // Ensure the link works even if dropdown is showing
                  e.stopPropagation();
                }}
              >
                <span className="whitespace-nowrap">Products</span>
                <svg className={`ml-0.5 h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-300 ${hoverDropdown === 'products' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {isProductsActive() && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
              </Link>
              {hoverDropdown === 'products' && (
                <div 
                  className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl ring-1 ring-primary/10 z-50 border border-gray-100 animate-in slide-in-from-top-5 duration-200 overflow-hidden"
                  onMouseEnter={() => handleDropdownMouseEnter('products')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div>
                    {/* View All Products */}
                    <Link href="/products" className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors duration-150 border-b border-gray-100 rounded-t-2xl ${pathname === '/products' ? 'bg-primary text-white' : 'text-primary hover:bg-primary-5'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      View All Products
                    </Link>
                    {/* Sub-menu items: remove hover:text-primary and hover:bg-primary-5, use only secondary color for hover */}
                    <Link href="/products/moisture-sensors" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/moisture-sensors' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Target size={16} />
                      Real-Time Moisture Sensors
                    </Link>
                    <Link href="/products/dm510-controller" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/dm510-controller' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Settings size={16} />
                      Dryer Master 510 Controller
                    </Link>
                    <Link href="/products/dm510-embedded" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/dm510-embedded' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Laptop size={16} />
                      DM510 Embedded Solution
                    </Link>
                    <Link href="/products/dm-mobile" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/dm-mobile' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Smartphone size={16} />
                      DM Mobile (Remote Access)
                    </Link>
                    <Link href="/products/moisture-monitor-pro" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/products/moisture-monitor-pro' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <BarChart3 size={16} />
                      Moisture Monitor Pro (MMP)
                    </Link>
                    <Link href="/products/dm100" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 rounded-b-2xl ${pathname === '/products/dm100' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Settings size={16} />
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
              <button className={`relative flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 ${
                isCustomersActive() 
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105'
              }`}>
                <span className="whitespace-nowrap">Customers</span>
                <svg className={`ml-0.5 h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-300 ${hoverDropdown === 'customers' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {isCustomersActive() && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
              </button>
              {hoverDropdown === 'customers' && (
                <div 
                  className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl ring-1 ring-primary/10 z-50 border border-gray-100 animate-in slide-in-from-top-5 duration-200 overflow-hidden"
                  onMouseEnter={() => handleDropdownMouseEnter('customers')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div>
                    <Link href="/customers/experiences" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 rounded-t-2xl ${pathname === '/customers/experiences' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Star size={16} />
                      Customer Experiences
                    </Link>
                    <Link href="/customers/manufacturers" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/customers/manufacturers' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Building2 size={16} />
                      Dryer Manufacturers
                    </Link>
                    <Link href="/customers/applications" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 rounded-b-2xl ${pathname === '/customers/applications' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Clipboard size={16} />
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
              <button className={`relative flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 ${
                isSupportActive() 
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105'
              }`}>
                <span className="whitespace-nowrap">Support</span>
                <svg className={`ml-0.5 h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-300 ${hoverDropdown === 'support' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {isSupportActive() && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
              </button>
              {hoverDropdown === 'support' && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl ring-1 ring-primary/10 z-50 border border-gray-100 animate-in slide-in-from-top-5 duration-200 overflow-hidden"
                  onMouseEnter={() => handleDropdownMouseEnter('support')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div>
                    <Link href="/support/manuals" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 rounded-t-2xl ${pathname === '/support/manuals' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Book size={16} />
                      Manuals
                    </Link>
                    <Link href="/support/videos" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/support/videos' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <Video size={16} />
                      Videos
                    </Link>
                    <Link href="/support/help" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 ${pathname === '/support/help' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <MessageCircle size={16} />
                      Support
                    </Link>
                    <Link href="/support/register" className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-150 rounded-b-2xl ${pathname === '/support/register' ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-secondary-1 hover:text-secondary'}`}>
                      <FileText size={16} />
                      Register
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/dealers" 
              className={`relative flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-300 ${
                pathname === '/dealers' 
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105'
              }`}
            >
              <span className="whitespace-nowrap">Find a Dealer</span>
              {pathname === '/dealers' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>}
            </Link>

            <Link 
              href="/contact" 
              className="ml-1 lg:ml-2 xl:ml-4 flex items-center gap-0.5 lg:gap-1 bg-gradient-to-r from-secondary to-secondary-dark text-white px-2 lg:px-3 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold hover:from-secondary-dark hover:to-secondary hover:shadow-xl hover:shadow-secondary/25 hover:scale-105 transition-all duration-300 shadow-lg shadow-secondary/20"
            >
              <span className="whitespace-nowrap">Contact Us</span>
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
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-amber-50 via-green-50 to-primary-1">
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
          <div className="flex-1 p-6 space-y-3 bg-gradient-to-b from-amber-50/30 via-white to-green-50/30">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === '/' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-700 hover:bg-primary-1 hover:text-primary'
              }`}
            >
              <Home size={20} />
              Home
            </Link>

            <Link 
              href="/about" 
              onClick={closeMenu}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === '/about' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-700 hover:bg-primary-1 hover:text-primary'
              }`}
            >
              <Info size={20} />
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
                <div className="flex items-center gap-3">
                  <BarChart3 size={20} />
                  Products
                </div>
                <svg className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'products-mobile' && (
                <div className="bg-white border-t border-gray-100 space-y-1 p-2">
                  {/* View All Products */}
                  <Link href="/products" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border-b border-gray-100 mb-1 ${pathname === '/products' ? 'bg-primary text-white shadow-sm' : 'text-primary hover:bg-primary-5'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    View All Products
                  </Link>
                  <Link href="/products/moisture-sensors" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/moisture-sensors' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Target size={16} />
                    Real-Time Moisture Sensors
                  </Link>
                  <Link href="/products/dm510-controller" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm510-controller' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Settings size={16} />
                    Dryer Master 510 Controller
                  </Link>
                  <Link href="/products/dm510-embedded" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm510-embedded' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Laptop size={16} />
                    DM510 Embedded Solution
                  </Link>
                  <Link href="/products/dm-mobile" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm-mobile' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Smartphone size={16} />
                    DM Mobile (Remote Access)
                  </Link>
                  <Link href="/products/moisture-monitor-pro" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/moisture-monitor-pro' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <BarChart3 size={16} />
                    Moisture Monitor Pro (MMP)
                  </Link>
                  <Link href="/products/dm100" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/products/dm100' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Settings size={16} />
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
                <div className="flex items-center gap-3">
                  <Star size={20} />
                  Customers
                </div>
                <svg className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'customers-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'customers-mobile' && (
                <div className="bg-white border-t border-gray-100 space-y-1 p-2">
                  <Link href="/customers/experiences" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/customers/experiences' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Star size={16} />
                    Customer Experiences
                  </Link>
                  <Link href="/customers/manufacturers" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/customers/manufacturers' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Building2 size={16} />
                    Dryer Manufacturers
                  </Link>
                  <Link href="/customers/applications" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/customers/applications' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Clipboard size={16} />
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
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} />
                  Support
                </div>
                <svg className={`h-5 w-5 transform transition-transform duration-200 ${activeDropdown === 'support-mobile' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'support-mobile' && (
                <div className="bg-white border-t border-gray-100 space-y-1 p-2">
                  <Link href="/support/manuals" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/manuals' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Book size={16} />
                    Manuals
                  </Link>
                  <Link href="/support/videos" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/videos' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <Video size={16} />
                    Videos
                  </Link>
                  <Link href="/support/help" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/help' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <MessageCircle size={16} />
                    Support
                  </Link>
                  <Link href="/support/register" onClick={closeMenu} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${pathname === '/support/register' ? 'bg-secondary text-white shadow-sm' : 'text-gray-600 hover:text-secondary hover:bg-secondary-1'}`}>
                    <FileText size={16} />
                    Register
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/dealers" 
              onClick={closeMenu}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                pathname === '/dealers' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-sm'
              }`}
            >
              <Map size={20} />
              Find a Dealer
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 px-4 py-3 bg-secondary text-white rounded-xl text-base font-medium hover:bg-secondary-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Mail size={20} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;