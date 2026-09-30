import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Wind } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-narrow px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-brand-red p-2 rounded"><Wind size={18} /></div>
            <div className="font-bold">ADVANCED <span className="text-brand-red">AIR</span></div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Professional air conditioning installation, repair, and maintenance across the region.
            Licensed, insured, and F-Gas certified.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Home','About','Services','Products','Contact'].map(p => (
              <li key={p}><Link to={`/${p.toLowerCase()}`} className="hover:text-white">{p}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {['New Installations','Repairs','Maintenance','Commercial','Gas Recharge','Relocation'].map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Hours & Contact</h4>
          <div className="text-sm text-gray-300 space-y-1">
            <div className="flex justify-between"><span>Mon – Fri</span><span>07:30 – 17:30</span></div>
            <div className="flex justify-between"><span>Saturday</span><span>08:00 – 14:00</span></div>
            <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
            <div className="text-brand-red font-semibold mt-2">Emergency callouts: 24/7</div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2"><Phone size={14}/> +27 12 345 6789</div>
            <div className="flex items-center gap-2"><Mail size={14}/> info@advancedair.co.za</div>
            <div className="flex items-center gap-2"><MapPin size={14}/> 12 Industrial Road, Pretoria, 0001</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-400">
        © 2025 Advanced Air Conditioning. All rights reserved.
      </div>
    </footer>
  );
}