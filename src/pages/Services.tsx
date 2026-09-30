import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-20 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-5xl md:text-6xl mb-3">OUR SERVICES</h1>
          <p className="text-gray-300">
            Complete air conditioning solutions — from first install to ongoing maintenance.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map(s => (
              <div key={s.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-brand-navy text-white px-6 py-4 flex items-center gap-3">
                  <div className="bg-brand-red p-2 rounded">
                    <s.icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-5">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-brand-red shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/quote" className="btn-secondary w-full block text-center text-sm">
                    Request Quote for This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="bg-brand-red text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4">AC BROKEN DOWN?</h2>
          <p className="mb-8 text-white/90">
            Emergency callout service — 24 hours a day, 7 days a week, 365 days a year.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+27123456789"
              className="bg-white text-brand-red font-semibold px-6 py-3 rounded-md flex items-center gap-2"
            >
              <Phone size={18} /> +27 12 345 6789
            </a>
            <Link to="/callout" className="btn-outline">Book Emergency Callout</Link>
          </div>
        </div>
      </section>
    </>
  );
}