import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, Phone, ShieldCheck, BadgeCheck, Calculator } from 'lucide-react';
import { fetchServices, type ServiceItem } from '../api/services';
import { fetchProducts } from '../api/products';
import type { Product } from '../data/products';
import { getIcon } from '../lib/iconMap';
import { formatZAR, formatBTU } from '../lib/format';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(err => console.error(err));
    fetchServices().then(setServices).catch(err => console.error(err));
  }, []);

  const featured = products.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-brand-navy text-white min-h-[85vh] flex items-center"
        style={{ backgroundImage: 'url(/images/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-brand-navy/90" />
        
        <div className="container-narrow relative px-4 md:px-8 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 border border-brand-red/40 text-brand-red text-xs font-semibold tracking-widest px-3 py-1 rounded mb-6 bg-brand-red/10">
            <BadgeCheck size={14} /> CERTIFIED AC PROFESSIONALS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-none mb-4 tracking-wide">
            STAY COOL.<br />
            <span className="text-brand-red">STAY COMFORTABLE.</span>
          </h1>
          <p className="max-w-xl text-gray-300 mb-8 text-base md:text-lg">
            Advanced Air Conditioning delivers expert installation, repair, and maintenance
            for homes and businesses across the region. Over 15 years of certified excellence.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link to="/quote" className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/callout" className="btn-secondary border border-white/20 w-full sm:w-auto">Book a Callout</Link>
            <Link to="/btu" className="btn-secondary border border-white/20 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Calculator size={16} /> BTU Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-3">OUR SERVICES</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              From single-room splits to commercial multi-zone systems. Every aspect of air conditioning covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => {
              const Icon = getIcon(s.iconName);
              return (
                <div key={s.id} className="card p-6">
                  <div className="bg-brand-red w-10 h-10 rounded flex items-center justify-center text-white mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{s.description}</p>
                  <Link to="/quote" className="text-brand-red text-sm font-semibold hover:underline">
                    Request Quote →
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link to="/services" className="btn-secondary inline-flex w-full sm:w-auto">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              WHY CHOOSE<br /><span className="text-brand-red">ADVANCED AIR?</span>
            </h2>
            <p className="text-gray-300 mb-8 text-sm md:text-base">
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
                <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                  <ShieldCheck size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline inline-block w-full sm:w-auto text-center">Learn About Us</Link>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <img
              src="/images/Technician image.jpg"
              alt="Technician at work"
              className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
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
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-3">FEATURED UNITS</h2>
            <p className="text-gray-600 text-sm md:text-base">Top-of-the-range air conditioning units for every room size and budget.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(p => (
              <div key={p.id} className="card flex flex-col">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold leading-tight">{p.name}</h3>
                    <span className="text-brand-red font-bold whitespace-nowrap">{formatZAR(p.price)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Model: {p.model}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-brand-navy text-white text-xs px-2 py-1 rounded">{formatBTU(p.btu)}</span>
                    <span className="bg-brand-lightBlue text-brand-navy text-xs px-2 py-1 rounded">{p.coverage}</span>
                  </div>
                  <Link to="/quote" className="btn-primary block text-center text-sm mt-auto">Request Quote</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link to="/products" className="btn-secondary inline-flex w-full sm:w-auto">View All Products</Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="bg-brand-red text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">NEED A TECHNICIAN TODAY?</h2>
          <p className="mb-8 text-white/90 text-sm md:text-base">
            Our team handles installations, repairs, and emergency callouts all year round.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <a
              href="tel:0315050898"
              className="bg-white text-brand-red font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone size={18} /> Call Now 031 505 0898
            </a>
            <Link to="/callout" className="btn-outline w-full sm:w-auto">Book a Callout Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}