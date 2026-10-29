import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { fetchServices, type ServiceItem } from '../api/services';
import { getIcon } from '../lib/iconMap';

export default function Services() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices()
      .then(setServices)
      .catch(err => {
        console.error('Failed to fetch services:', err);
        setError('Could not load services. Is the backend running?');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-16 md:py-20 text-center px-4">
        <div className="container-narrow">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">OUR SERVICES</h1>
          <p className="text-gray-300 text-lg">
            Complete air conditioning solutions from first install to ongoing maintenance.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          {loading && (
            <div className="text-center py-16 text-gray-500">
              Loading services from API…
            </div>
          )}

          {error && (
            <div className="text-center py-16 text-brand-red">{error}</div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map(s => {
                const Icon = getIcon(s.iconName);
                return (
                  <div key={s.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-brand-navy text-white px-6 py-4 flex items-center gap-3">
                      <div className="bg-brand-red p-2 rounded">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-bold text-lg">{s.title}</h3>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-600 mb-5">{s.description}</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        {s.bullets.map(b => (
                          <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-brand-red shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/quote"
                        className="btn-secondary w-full block text-center text-sm mt-auto"
                      >
                        Request Quote for This Service
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="bg-brand-red text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">AC BROKEN DOWN?</h2>
          <p className="mb-8 text-white/90 text-sm md:text-base">
            Emergency callout service: 24 hours a day, 7 days a week, 365 days a year.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <a
              href="tel:0315050898"
              className="bg-white text-brand-red font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone size={18} /> 031 505 0898
            </a>
            <Link to="/callout" className="btn-outline w-full sm:w-auto">Book Emergency Callout</Link>
          </div>
        </div>
      </section>
    </>
  );
}