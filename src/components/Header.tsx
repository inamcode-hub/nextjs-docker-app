'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li className="dropdown">
              <button
                onClick={() => toggleDropdown('products')}
                className="dropdown-toggle"
              >
                Our Products
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === 'products' && (
                <ul className="dropdown-menu">
                  <li><Link href="/products/moisture-sensors">Real-Time Moisture Sensors</Link></li>
                  <li><Link href="/products/dm510-controller">Dryer Master 510 Controller</Link></li>
                  <li><Link href="/products/dm510-embedded">DM510 Embedded Solution</Link></li>
                  <li><Link href="/products/dm-mobile">DM Mobile (Remote Access)</Link></li>
                  <li><Link href="/products/moisture-monitor-pro">Moisture Monitor Pro (MMP)</Link></li>
                  <li><Link href="/products/dm100">Dryer Master DM100</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <button
                onClick={() => toggleDropdown('customers')}
                className="dropdown-toggle"
              >
                Our Customers
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === 'customers' && (
                <ul className="dropdown-menu">
                  <li><Link href="/customers/experiences">Customer Experiences</Link></li>
                  <li><Link href="/customers/manufacturers">Dryer Manufacturers</Link></li>
                  <li><Link href="/customers/examples">Application Examples</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <button
                onClick={() => toggleDropdown('support')}
                className="dropdown-toggle"
              >
                Support
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === 'support' && (
                <ul className="dropdown-menu">
                  <li><Link href="/support/manuals">Manuals</Link></li>
                  <li><Link href="/support/videos">Videos</Link></li>
                  <li><Link href="/support/help">Support</Link></li>
                  <li><Link href="/support/register">Register</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/dealers">Find a Dealer Near You</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
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
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li>
                <button onClick={() => toggleDropdown('products-mobile')}>Our Products</button>
                {activeDropdown === 'products-mobile' && (
                  <ul className="mobile-submenu">
                    <li><Link href="/products/moisture-sensors" onClick={() => setIsMenuOpen(false)}>Real-Time Moisture Sensors</Link></li>
                    <li><Link href="/products/dm510-controller" onClick={() => setIsMenuOpen(false)}>Dryer Master 510 Controller</Link></li>
                    <li><Link href="/products/dm510-embedded" onClick={() => setIsMenuOpen(false)}>DM510 Embedded Solution</Link></li>
                    <li><Link href="/products/dm-mobile" onClick={() => setIsMenuOpen(false)}>DM Mobile (Remote Access)</Link></li>
                    <li><Link href="/products/moisture-monitor-pro" onClick={() => setIsMenuOpen(false)}>Moisture Monitor Pro (MMP)</Link></li>
                    <li><Link href="/products/dm100" onClick={() => setIsMenuOpen(false)}>Dryer Master DM100</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('customers-mobile')}>Our Customers</button>
                {activeDropdown === 'customers-mobile' && (
                  <ul className="mobile-submenu">
                    <li><Link href="/customers/experiences" onClick={() => setIsMenuOpen(false)}>Customer Experiences</Link></li>
                    <li><Link href="/customers/manufacturers" onClick={() => setIsMenuOpen(false)}>Dryer Manufacturers</Link></li>
                    <li><Link href="/customers/examples" onClick={() => setIsMenuOpen(false)}>Application Examples</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown('support-mobile')}>Support</button>
                {activeDropdown === 'support-mobile' && (
                  <ul className="mobile-submenu">
                    <li><Link href="/support/manuals" onClick={() => setIsMenuOpen(false)}>Manuals</Link></li>
                    <li><Link href="/support/videos" onClick={() => setIsMenuOpen(false)}>Videos</Link></li>
                    <li><Link href="/support/help" onClick={() => setIsMenuOpen(false)}>Support</Link></li>
                    <li><Link href="/support/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/dealers" onClick={() => setIsMenuOpen(false)}>Find a Dealer Near You</Link></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;