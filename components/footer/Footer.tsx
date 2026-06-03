'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">WorkPulse</h3>
            <p className="text-white/80 text-sm mb-4">
              Real‑time workforce marketplace connecting skilled workers and employers.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-accent transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 hover:text-accent transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-accent transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-accent transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-accent transition">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-accent transition">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-white/80 hover:text-accent transition">How It Works</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-white/80 hover:text-accent transition">Help Center</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-accent transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-accent transition">Privacy Policy</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-accent transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-2 text-white/80">
              <li>Email: support@workpulse.com</li>
              <li>Phone: +233 123 456 789</li>
              <li>Accra, Ghana</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} WorkPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;