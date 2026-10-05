import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { fetchProductById } from '../api/products';
import type { Product } from '../data/products';
import { formatZAR, formatBTU } from '../lib/format';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    fetchProductById(id)
      .then(setProduct)
      .catch(err => {
        console.error('Failed to fetch product:', err);
        setError('Product not found, or the backend is unavailable.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="section-padding text-center text-gray-500">
        Loading product…
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="section-padding text-center">
        <p className="text-brand-red mb-6">{error ?? 'Product not found.'}</p>
        <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* BREADCRUMB */}
      <section className="bg-brand-navy text-white py-6">
        <div className="container-narrow px-4 md:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>
      </section>

      {/* PRODUCT DETAIL */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-brand-navy text-white text-xs px-3 py-1 rounded">
                {formatBTU(product.btu)}
              </span>
              <span className="bg-brand-lightBlue text-brand-navy text-xs px-3 py-1 rounded">
                {product.coverage}
              </span>
              <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded">
                {product.brand}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl mb-2">
              {product.name}
            </h1>

            <p className="text-sm text-gray-500 mb-4">
              Model: {product.model}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="text-brand-red font-display text-4xl">
                {formatZAR(product.price)}
              </div>
              <div className="text-yellow-500 text-lg">
                {'★'.repeat(Math.round(product.rating))}
                <span className="text-gray-300">
                  {'★'.repeat(5 - Math.round(product.rating))}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <p className="text-gray-700 mb-8">{product.description}</p>

            <h3 className="font-bold mb-4">Key Features</h3>
            <ul className="space-y-2 mb-8">
              {product.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-brand-red shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link to="/quote" className="btn-primary flex items-center gap-2">
                Request a Quote
              </Link>
              <a
                href="tel:+27123456789"
                className="btn-secondary flex items-center gap-2"
              >
                <Phone size={16} /> Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}