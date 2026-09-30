import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import type { Product } from '../data/products';
import { formatZAR, formatBTU } from '../lib/format';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-52 object-cover bg-gray-100"
      />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-bold leading-tight">{product.name}</h3>
          <span className="text-brand-red font-bold whitespace-nowrap">
            {formatZAR(product.price)}
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-3">Model: {product.model}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-brand-navy text-white text-xs px-2 py-1 rounded">
            {formatBTU(product.btu)}
          </span>
          <span className="bg-brand-lightBlue text-brand-navy text-xs px-2 py-1 rounded">
            {product.coverage}
          </span>
        </div>

        <ul className="space-y-1 mb-5 flex-1">
          {product.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
              <CheckCircle size={12} className="text-brand-red shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link to="/quote" className="btn-primary block text-center text-sm">
          Request Quote
        </Link>
      </div>
    </div>
  );
}