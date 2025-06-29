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
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo-link">
            <Image
              src="/header-logo.png"
              alt="Dryer Master"
              className="logo"
              width={200}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu hidden md:flex">
            <li>
              <Link 
                href="/" 
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
              >
                About Us
              </Link>
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`dropdown-toggle ${isProductsActive() ? 'active' : ''}`}>
                Our Products
                <span className="dropdown-arrow">▼</span>
              </button>
              {hoverDropdown === 'products' && (
                <ul className="dropdown-menu">
                  <li><Link href="/products/moisture-sensors" className={pathname === '/products/moisture-sensors' ? 'active' : ''}>Real-Time Moisture Sensors</Link></li>
                  <li><Link href="/products/dm510-controller" className={pathname === '/products/dm510-controller' ? 'active' : ''}>Dryer Master 510 Controller</Link></li>
                  <li><Link href="/products/dm510-embedded" className={pathname === '/products/dm510-embedded' ? 'active' : ''}>DM510 Embedded Solution</Link></li>
                  <li><Link href="/products/dm-mobile" className={pathname === '/products/dm-mobile' ? 'active' : ''}>DM Mobile (Remote Access)</Link></li>
                  <li><Link href="/products/moisture-monitor-pro" className={pathname === '/products/moisture-monitor-pro' ? 'active' : ''}>Moisture Monitor Pro (MMP)</Link></li>
                  <li><Link href="/products/dm100" className={pathname === '/products/dm100' ? 'active' : ''}>Dryer Master DM100</Link></li>
                </ul>
              )}
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('customers')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`dropdown-toggle ${isCustomersActive() ? 'active' : ''}`}>
                Our Customers
                <span className="dropdown-arrow">▼</span>
              </button>
              {hoverDropdown === 'customers' && (
                <ul className="dropdown-menu">
                  <li><Link href="/customers/experiences" className={pathname === '/customers/experiences' ? 'active' : ''}>Customer Experiences</Link></li>
                  <li><Link href="/customers/manufacturers" className={pathname === '/customers/manufacturers' ? 'active' : ''}>Dryer Manufacturers</Link></li>
                  <li><Link href="/customers/examples" className={pathname === '/customers/examples' ? 'active' : ''}>Application Examples</Link></li>
                </ul>
              )}
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('support')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`dropdown-toggle ${isSupportActive() ? 'active' : ''}`}>
                Support
                <span className="dropdown-arrow">▼</span>
              </button>
              {hoverDropdown === 'support' && (
                <ul className="dropdown-menu">
                  <li><Link href="/support/manuals" className={pathname === '/support/manuals' ? 'active' : ''}>Manuals</Link></li>
                  <li><Link href="/support/videos" className={pathname === '/support/videos' ? 'active' : ''}>Videos</Link></li>
                  <li><Link href="/support/help" className={pathname === '/support/help' ? 'active' : ''}>Support</Link></li>
                  <li><Link href="/support/register" className={pathname === '/support/register' ? 'active' : ''}>Register</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link 
                href="/dealers" 
                className={`nav-link ${pathname === '/dealers' ? 'active' : ''}`}
              >
                Find a Dealer Near You
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <ul className="mobile-nav">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)} className={pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className={pathname === '/about' ? 'active' : ''}>About Us</Link></li>
              <li>
                <button onClick={() => toggleDropdown('products-mobile')} className={`mobile-dropdown-toggle ${isProductsActive() ? 'active' : ''}`}>
                  Our Products
                  <span className={`mobile-dropdown-arrow ${activeDropdown === 'products-mobile' ? 'open' : ''}`}>▼</span>
                </button>
                {activeDropdown === 'products-mobile' && (
                  <ul className="mobile-submenu">
                    <li><Link href="/products/moisture-sensors" onClick={() => setIsMenuOpen(false)} className={pathname === '/products/moisture-sensors' ? 'active' : ''}>Real-Time Moisture Sensors</Link></li>
                    <li><Link href="/products/dm510-controller" onClick={() => setIsMenuOpen(false)} className={pathname === '/products/dm510-controller' ? 'active' : ''}>Dryer Master 510 Controller</Link></li>
                    <li><Link href="/products/dm510-embedded" onClick={() => setIsMenuOpen(false)} className={pathname === '/products/dm510-embedded' ? 'active' : ''}>DM510 Embedded Solution</Link></li>
                    <li><Link href="/products/dm-mobile" onClick={() => setIsMenuOpen(false)} className={pathname === '/products/dm-mobile' ? 'active' : ''}>DM Mobile (Remote Access)</Link></li>
                    <li><Link href="/products/moisture-monitor-pro" onClick={() => setIsMenuOpen(false)} className={pathname === '/products/moisture-monitor-pro' ? 'active' : ''}>Moisture Monitor Pro (MMP)</Link></li>
                    <li><Link href="/products/dm100" onClick={() => setIsMenuOpen(false)} className={pathname === '/products/dm100' ? 'active' : ''}>Dryer Master DM100</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('customers-mobile')} className={`mobile-dropdown-toggle ${isCustomersActive() ? 'active' : ''}`}>
                  Our Customers
                  <span className={`mobile-dropdown-arrow ${activeDropdown === 'customers-mobile' ? 'open' : ''}`}>▼</span>
                </button>
                {activeDropdown === 'customers-mobile' && (
                  <ul className="mobile-submenu">
                    <li><Link href="/customers/experiences" onClick={() => setIsMenuOpen(false)} className={pathname === '/customers/experiences' ? 'active' : ''}>Customer Experiences</Link></li>
                    <li><Link href="/customers/manufacturers" onClick={() => setIsMenuOpen(false)} className={pathname === '/customers/manufacturers' ? 'active' : ''}>Dryer Manufacturers</Link></li>
                    <li><Link href="/customers/examples" onClick={() => setIsMenuOpen(false)} className={pathname === '/customers/examples' ? 'active' : ''}>Application Examples</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('support-mobile')} className={`mobile-dropdown-toggle ${isSupportActive() ? 'active' : ''}`}>
                  Support
                  <span className={`mobile-dropdown-arrow ${activeDropdown === 'support-mobile' ? 'open' : ''}`}>▼</span>
                </button>
                {activeDropdown === 'support-mobile' && (
                  <ul className="mobile-submenu">
                    <li><Link href="/support/manuals" onClick={() => setIsMenuOpen(false)} className={pathname === '/support/manuals' ? 'active' : ''}>Manuals</Link></li>
                    <li><Link href="/support/videos" onClick={() => setIsMenuOpen(false)} className={pathname === '/support/videos' ? 'active' : ''}>Videos</Link></li>
                    <li><Link href="/support/help" onClick={() => setIsMenuOpen(false)} className={pathname === '/support/help' ? 'active' : ''}>Support</Link></li>
                    <li><Link href="/support/register" onClick={() => setIsMenuOpen(false)} className={pathname === '/support/register' ? 'active' : ''}>Register</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/dealers" onClick={() => setIsMenuOpen(false)} className={pathname === '/dealers' ? 'active' : ''}>Find a Dealer Near You</Link></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;