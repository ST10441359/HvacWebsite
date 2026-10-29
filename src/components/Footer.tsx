import { Link } from 'react-router-dom';
import { Phone, Mail, Wind, Printer, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container-narrow px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand & Description */}
        <div>
          <div className="flex items-center gap-3 mb-6">
             {/* If you have the logo file, replace this div with the <img> tag */}
            <div className="bg-brand-red p-2 rounded text-white">
              <Wind size={24} />
            </div>
            <div className="font-display text-xl leading-none tracking-wide">
              ADVANCED <span className="text-brand-red">AIR</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Professional air conditioning installation, repair, and maintenance. 
            Service, Sales, Repairs. HVAC Specialists in KZN.
          </p>
          {/* Manufacturer Logos (Text placeholders for now) */}
          <div className="flex gap-4 opacity-50 grayscale">
            <span className="text-xs font-bold">LG</span>
            <span className="text-xs font-bold">SAMSUNG</span>
            <span className="text-xs font-bold italic">Carrier</span>
            <span className="text-xs font-bold text-brand-babyBlue">DAIKIN</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-brand-babyBlue transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-babyBlue transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-babyBlue transition-colors">Services</Link></li>
            <li><Link to="/products" className="hover:text-brand-babyBlue transition-colors">Products</Link></li>
            <li><Link to="/btu" className="hover:text-brand-babyBlue transition-colors">BTU Calculator</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-6 text-lg">Our Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-brand-babyBlue transition-colors">New Installations</Link></li>
            <li><Link to="/services" className="hover:text-brand-babyBlue transition-colors">Repairs & Diagnostics</Link></li>
            <li><Link to="/services" className="hover:text-brand-babyBlue transition-colors">Scheduled Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-brand-babyBlue transition-colors">Commercial Solutions</Link></li>
            <li><Link to="/services" className="hover:text-brand-babyBlue transition-colors">Gas Recharge</Link></li>
          </ul>
        </div>

        {/* Contact Details (From Business Card) */}
        <div>
          <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-brand-red shrink-0" />
              <div>
                <div className="text-xs text-gray-500 mb-1">Tel</div>
                <a href="tel:0315050898" className="hover:text-white transition-colors">031 505 0898</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Smartphone size={18} className="text-brand-red shrink-0" />
              <div>
                <div className="text-xs text-gray-500 mb-1">Cell</div>
                <a href="tel:0829240268" className="hover:text-white transition-colors">082 924 0268</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Printer size={18} className="text-brand-red shrink-0" />
              <div>
                <div className="text-xs text-gray-500 mb-1">Fax</div>
                <span>031 505 0899</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-brand-red shrink-0" />
              <div>
                <div className="text-xs text-gray-500 mb-1">Email</div>
                <a href="mailto:advancedair@absamail.co.za" className="hover:text-white transition-colors">
                  advancedair@absamail.co.za
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 container-narrow px-4 md:px-8">
        <p>© {new Date().getFullYear()} Advanced Air Conditioning. All rights reserved.</p>
        <p>Specialists in KZN • Service • Sales • Repairs</p>
      </div>
    </footer>
  );
}