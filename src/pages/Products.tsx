import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-20 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-5xl md:text-6xl mb-3">OUR PRODUCTS</h1>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium air conditioning units for every room size and budget. All units include
            professional installation.
          </p>
          <Link to="/btu" className="btn-primary inline-flex items-center gap-2">
            <Calculator size={18} /> Use BTU Calculator to find your ideal unit
          </Link>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}