import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, BadgeCheck, Calculator } from 'lucide-react';
import { services } from '../data/services';
import { products } from '../data/products';
import { formatZAR, formatBTU } from '../lib/format';

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-brand-navy text-white min-h-[85vh] flex items-center"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/85" />
        <div className="container-narrow relative px-4 md:px-8 py-20">
          <div className="inline-flex items-center gap-2 border border-brand-red/40 text-brand-red text-xs font-semibold tracking-widest px-3 py-1 rounded mb-6">
            <BadgeCheck size={14} /> CERTIFIED AC PROFESSIONALS
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-4">
            STAY COOL.<br />
            <span className="text-brand-red">STAY COMFORTABLE.</span>
          </h1>
          <p className="max-w-xl text-gray-300 mb-8 text-lg">
            Advanced Air Conditioning delivers expert installation, repair, and maintenance
            for homes and businesses across the region. Over 15 years of certified excellence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary flex items-center gap-2">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/callout" className="btn-secondary">Book a Callout</Link>
            <Link to="/btu" className="btn-secondary flex items-center gap-2">
              <Calculator size={16} /> BTU Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-blue text-white py-8">
        <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8 text-center">
          {['500+', '15+', '24/7', '100%'].map(v => (
            <div key={v} className="font-display text-3xl md:text-4xl text-brand-red">{v}</div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-3">OUR SERVICES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From single-room splits to commercial multi-zone systems — every aspect of air conditioning covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.id} className="card p-6">
                <div className="bg-brand-red w-10 h-10 rounded flex items-center justify-center text-white mb-4">
                  <s.icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{s.description}</p>
                <Link to="/quote" className="text-brand-red text-sm font-semibold hover:underline">
                  Request Quote →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary inline-flex">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              WHY CHOOSE<br /><span className="text-brand-red">ADVANCED AIR?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              We built our reputation on technical excellence, transparent pricing, and aftercare that goes beyond the job sheet.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Fully certified F-Gas engineers on all refrigerant work',
                'Manufacturer-approved installer status — warranties protected',
                'Fixed-price quotes with no hidden charges, ever',
                '12-month guarantee on all parts and labour',
                'Same-day emergency callouts, 365 days a year',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <ShieldCheck size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline inline-block">Learn About Us</Link>
          </div>
          <div className="relative">
            <img
              src="/images/technician.jpg"
              alt="Technician at work"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute bottom-4 left-4 bg-brand-red text-white px-4 py-2 rounded font-display text-2xl">
              15+ <span className="text-sm font-sans">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED UNITS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-3">FEATURED UNITS</h2>
            <p className="text-gray-600">Top-of-the-range air conditioning units for every room size and budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(p => (
              <div key={p.id} className="card">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2 gap-3">
                    <h3 className="font-bold leading-tight">{p.name}</h3>
                    <span className="text-brand-red font-bold whitespace-nowrap">{formatZAR(p.price)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Model: {p.model}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-brand-navy text-white text-xs px-2 py-1 rounded">{formatBTU(p.btu)}</span>
                    <span className="bg-brand-lightBlue text-brand-navy text-xs px-2 py-1 rounded">{p.coverage}</span>
                  </div>
                  <Link to="/quote" className="btn-primary block text-center text-sm">Request Quote</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary inline-flex">View All Products</Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="bg-brand-red text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4">NEED A TECHNICIAN TODAY?</h2>
          <p className="mb-8 text-white/90">
            Our team handles installations, repairs, and emergency callouts all year round.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+27123456789"
              className="bg-white text-brand-red font-semibold px-6 py-3 rounded-md flex items-center gap-2"
            >
              <Phone size={18} /> Call Now +27 12 345 6789
            </a>
            <Link to="/callout" className="btn-outline">Book a Callout Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}