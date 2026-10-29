import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Calculator } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/products';
import type { Product } from '../data/products';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setError('Could not load products. Is the backend running?');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-16 md:py-20 text-center px-4">
        <div className="container-narrow">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">OUR PRODUCTS</h1>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Premium air conditioning units for every room size and budget. All units include
            professional installation.
          </p>
          <Link to="/btu" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
            <Calculator size={18} /> Use BTU Calculator to find your ideal unit
          </Link>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          {loading && (
            <div className="text-center py-16 text-gray-500">
              Loading products from API…
            </div>
          )}

          {error && (
            <div className="text-center py-16 text-brand-red">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}