import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          
          {/* Company Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <Image
                src="/header-logo.png"
                alt="Dryer Master"
                width={200}
                height={60}
                className="footer-logo-img"
              />
            </div>
            <p className="footer-tagline">
              Revolutionizing agriculture with intelligent moisture monitoring solutions for the modern farm.
            </p>
            <div className="footer-stats">
              <div className="stat-item">
                <div className="stat-icon">🌾</div>
                <div className="stat-content">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Farms Served</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⏱️</div>
                <div className="stat-content">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="footer-section">
            <h3 className="footer-heading">
              <span className="heading-icon">📊</span>
              Products
            </h3>
            <ul className="footer-links">
              <li>
                <Link href="/products/moisture-sensors" className="footer-link">
                  <span className="link-icon">🎯</span>
                  Real-Time Moisture Sensors
                </Link>
              </li>
              <li>
                <Link href="/products/dm510-controller" className="footer-link">
                  <span className="link-icon">🎛️</span>
                  DM510 Controller
                </Link>
              </li>
              <li>
                <Link href="/products/dm510-embedded" className="footer-link">
                  <span className="link-icon">💻</span>
                  DM510 Embedded
                </Link>
              </li>
              <li>
                <Link href="/products/dm-mobile" className="footer-link">
                  <span className="link-icon">📱</span>
                  DM Mobile App
                </Link>
              </li>
              <li>
                <Link href="/products/moisture-monitor-pro" className="footer-link">
                  <span className="link-icon">📈</span>
                  Moisture Monitor Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="footer-section">
            <h3 className="footer-heading">
              <span className="heading-icon">🛠️</span>
              Support
            </h3>
            <ul className="footer-links">
              <li>
                <Link href="/support/help" className="footer-link">
                  <span className="link-icon">💬</span>
                  Get Help
                </Link>
              </li>
              <li>
                <Link href="/support/manuals" className="footer-link">
                  <span className="link-icon">📖</span>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support/videos" className="footer-link">
                  <span className="link-icon">🎥</span>
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/support/register" className="footer-link">
                  <span className="link-icon">📝</span>
                  Product Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3 className="footer-heading">
              <span className="heading-icon">🏢</span>
              Company
            </h3>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">
                  <span className="link-icon">ℹ️</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/customers/experiences" className="footer-link">
                  <span className="link-icon">⭐</span>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/dealers" className="footer-link">
                  <span className="link-icon">🗺️</span>
                  Find Dealers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  <span className="link-icon">📧</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-section footer-contact">
            <h3 className="footer-heading">
              <span className="heading-icon">�</span>
              Get In Touch
            </h3>
            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <a href="tel:1-519-725-4700" className="contact-value">1.519.725.4700</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <span className="contact-label">Toll Free</span>
                  <a href="tel:1-800-265-2757" className="contact-value">1.800.265.2757</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:info@dryermaster.com" className="contact-value">info@dryermaster.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <span className="contact-label">Visit Us</span>
                  <span className="contact-value">
                    DryerMaster Technologies Inc.<br />
                    115 Ardelt Ave., Building #2<br />
                    Kitchener, ON, Canada<br />
                    N2C 2E1
                  </span>
                  <a 
                    href="https://maps.google.com/?q=115+Ardelt+Ave+Building+2+Kitchener+ON+N2C+2E1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    <span className="map-icon">🗺️</span>
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter-section">
              <h4 className="newsletter-title">Stay Updated</h4>
              <p className="newsletter-description">Get the latest agricultural insights and product updates.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="footer-social">
          <div className="social-section">
            <h4 className="social-title">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span className="social-icon">📺</span>
                YouTube
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">👤</span>
                Facebook
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
                Twitter
              </a>
            </div>
          </div>
          <div className="certifications-section">
            <h4 className="certifications-title">Our Standards</h4>
            <div className="certifications">
              <div className="cert-item">
                <span className="cert-icon">🛡️</span>
                ISO Certified
              </div>
              <div className="cert-item">
                <span className="cert-icon">🌱</span>
                Eco Friendly
              </div>
              <div className="cert-item">
                <span className="cert-icon">🔒</span>
                Secure Technology
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>&copy; {new Date().getFullYear()} Dryer Master Corporation. All rights reserved.</span>
              <span className="version">v2.5.0</span>
            </div>
            <div className="footer-bottom-links">
              <Link href="/privacy" className="legal-link">Privacy Policy</Link>
              <Link href="/terms" className="legal-link">Terms of Service</Link>
              <Link href="/cookies" className="legal-link">Cookie Policy</Link>
              <Link href="/accessibility" className="legal-link">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;