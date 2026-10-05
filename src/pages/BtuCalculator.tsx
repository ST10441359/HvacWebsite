import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, RotateCcw } from 'lucide-react';
import {
  calculateBtu,
  findMatchingProducts,
  type RoomType,
  type BtuResult,
} from '../lib/btu';
import { fetchProducts } from '../api/products';
import type { Product } from '../data/products';
import { formatZAR, formatBTU } from '../lib/format';

const ROOM_TYPES: RoomType[] = ['Bedroom', 'Living Room', 'Kitchen', 'Office'];

export default function BtuCalculator() {
  const [products, setProducts] = useState<Product[]>([]);
  const [roomSize, setRoomSize] = useState<string>('25');
  const [occupants, setOccupants] = useState<number>(2);
  const [roomType, setRoomType] = useState<RoomType>('Bedroom');
  const [result, setResult] = useState<BtuResult | null>(null);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const handleCalculate = () => {
    const size = parseFloat(roomSize);
    if (isNaN(size) || size <= 0) return;

    const calc = calculateBtu({ roomSize: size, occupants, roomType });
    setResult(calc);
    setMatchedIndices(findMatchingProducts(calc, products));
  };

  const handleClear = () => {
    setRoomSize('');
    setOccupants(2);
    setRoomType('Bedroom');
    setResult(null);
    setMatchedIndices([]);
  };

  const matched = matchedIndices.map(i => products[i]);

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-20 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-5xl md:text-6xl mb-3">BTU CALCULATOR</h1>
          <p className="text-gray-300">
            Estimate the cooling capacity you need for any room in seconds.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input form */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="font-display text-2xl mb-6">ENTER ROOM DETAILS</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Room Size (m²) *</label>
                <input
                  type="number"
                  value={roomSize}
                  onChange={e => setRoomSize(e.target.value)}
                  placeholder="e.g. 25"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Regular Occupants</label>
                <select
                  value={occupants}
                  onChange={e => setOccupants(parseInt(e.target.value))}
                  className="input-field"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                  <option value={11}>10+ people</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Room Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {ROOM_TYPES.map(t => (
                    <button
                      key={t}
                      onClick={() => setRoomType(t)}
                      className={`px-4 py-3 rounded border text-sm font-medium transition ${
                        roomType === t
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : 'bg-white text-brand-navy border-gray-300 hover:border-brand-navy'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleCalculate}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  <Calculator size={18} /> Calculate
                </button>
                <button onClick={handleClear} className="btn-secondary flex items-center gap-2">
                  <RotateCcw size={16} /> Clear
                </button>
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {!result ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-20">
                <Calculator size={48} className="mb-4" />
                <p>
                  Enter your room details and click{' '}
                  <strong className="text-brand-navy">Calculate</strong> to see the recommended BTU
                  range and matching products.
                </p>
              </div>
            ) : (
              <>
                <div className="bg-brand-navy text-white rounded-lg p-6 mb-6">
                  <div className="text-xs tracking-widest text-gray-300 mb-2">
                    RECOMMENDED BTU RANGE
                  </div>
                  <div className="text-sm text-gray-300 mb-4">
                    Based on your {roomSize}m² {roomType} with {occupants}{' '}
                    {occupants === 1 ? 'occupant' : 'occupants'}
                  </div>
                  <div className="font-display text-4xl md:text-5xl text-brand-red">
                    {result.minBtu.toLocaleString()} – {result.maxBtu.toLocaleString()}
                    <span className="text-lg ml-2 text-white">BTU</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-6">
                  This is an estimate. Ceiling height, insulation quality, sun exposure, and
                  heat-generating appliances may affect the ideal unit size. Our engineers confirm
                  the right spec during a free site survey.
                </p>

                <h3 className="font-bold mb-4">MATCHING UNITS FOR YOUR ROOM</h3>
                {matched.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No matching units found. Try adjusting your inputs.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {matched.map(p => (
                      <div key={p.id} className="flex gap-4 border rounded-lg p-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-24 h-24 object-cover rounded bg-gray-100"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <h4 className="font-bold text-sm leading-tight">{p.name}</h4>
                            <span className="text-brand-red font-bold text-sm whitespace-nowrap">
                              {formatZAR(p.price)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">Model: {p.model}</p>
                          <div className="flex flex-wrap gap-2 text-xs mb-2">
                            <span className="bg-brand-navy text-white px-2 py-0.5 rounded">
                              {formatBTU(p.btu)}
                            </span>
                            <span className="bg-brand-lightBlue text-brand-navy px-2 py-0.5 rounded">
                              {p.coverage}
                            </span>
                          </div>
                          <Link
                            to="/quote"
                            className="btn-primary text-xs py-1.5 px-3 inline-block"
                          >
                            Request Quote
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}