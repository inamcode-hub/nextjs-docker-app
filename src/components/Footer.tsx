import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Image
                src="/footer-logo.png"
                alt="Dryer Master"
                width={180}
                height={60}
                className="footer-logo-img"
              />
            </div>
            <p className="footer-description">
              Leading provider of real-time moisture monitoring solutions for grain dryers and agricultural applications.
            </p>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul className="footer-links">
              <li><Link href="/products/moisture-sensors">Real-Time Moisture Sensors</Link></li>
              <li><Link href="/products/dm510-controller">DM510 Controller</Link></li>
              <li><Link href="/products/dm510-embedded">DM510 Embedded</Link></li>
              <li><Link href="/products/dm-mobile">DM Mobile</Link></li>
              <li><Link href="/products/moisture-monitor-pro">Moisture Monitor Pro</Link></li>
              <li><Link href="/products/dm100">Dryer Master DM100</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><Link href="/support/manuals">Manuals</Link></li>
              <li><Link href="/support/videos">Videos</Link></li>
              <li><Link href="/support/help">Support</Link></li>
              <li><Link href="/support/register">Register</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/customers/experiences">Customer Experiences</Link></li>
              <li><Link href="/dealers">Find a Dealer</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="phone-contact">
                <Image
                  src="/phone-icon.png"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="phone-icon"
                />
                <span>1-800-DRYER-MASTER</span>
              </div>
              <p>Email: info@dryermaster.com</p>
              <p>Address: Agricultural Technology Center<br />
                 123 Innovation Drive<br />
                 Farm City, FC 12345</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Dryer Master. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;