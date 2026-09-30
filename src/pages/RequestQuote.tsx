import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import FormField from '../components/FormField';

interface Room {
  id: number;
  size: string;
  type: string;
  notes: string;
}

export default function RequestQuote() {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, size: '', type: 'Bedroom', notes: '' },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);

  const addRoom = () => {
    setRooms(prev => [...prev, { id: Date.now(), size: '', type: 'Bedroom', notes: '' }]);
  };

  const removeRoom = (id: number) => {
    setRooms(prev => prev.filter(r => r.id !== id));
  };

  const updateRoom = (id: number, patch: Partial<Room>) => {
    setRooms(prev => prev.map(r => (r.id === id ? { ...r, ...patch } : r)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-brand-navy text-white py-20 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-5xl md:text-6xl mb-3">REQUEST A QUOTE</h1>
          <p className="text-gray-300">
            Tell us about your requirements and receive a detailed, obligation-free quote.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-brand-red font-display text-3xl mb-4">QUOTE REQUESTED</div>
                <p className="text-gray-600">
                  Thank you. Our team will prepare your quote and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* SECTION 1 */}
                <div>
                  <h2 className="font-display text-2xl mb-4">YOUR DETAILS</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField label="Full Name" required>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          className="input-field"
                        />
                      </FormField>
                      <FormField label="Email Address" required>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          className="input-field"
                        />
                      </FormField>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField label="Phone Number" required>
                        <input
                          required
                          type="tel"
                          placeholder="+27 82 000 0000"
                          className="input-field"
                        />
                      </FormField>
                      <FormField label="Preferred Contact Method">
                        <select className="input-field" defaultValue="Email">
                          <option>Email</option>
                          <option>Phone Call</option>
                          <option>WhatsApp</option>
                        </select>
                      </FormField>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField label="Urgency Level">
                        <select className="input-field" defaultValue="Planning Stage">
                          <option>Planning Stage</option>
                          <option>Immediate</option>
                          <option>Within a Week</option>
                          <option>Not Urgent</option>
                        </select>
                      </FormField>
                      <FormField label="Service Type">
                        <select className="input-field" defaultValue="New Install">
                          <option>New Install</option>
                          <option>Repair</option>
                          <option>Maintenance</option>
                          <option>Gas Recharge</option>
                          <option>Relocation</option>
                          <option>Other</option>
                        </select>
                      </FormField>
                    </div>
                  </div>
                </div>

                {/* SECTION 2 */}
                <div>
                  <h2 className="font-display text-2xl mb-2">ROOM DETAILS</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Add each room or area you need serviced. We tailor the quote to each space.
                  </p>

                  <div className="space-y-4">
                    {rooms.map((room, index) => (
                      <div key={room.id} className="bg-gray-50 rounded-lg p-4 border">
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-semibold text-sm">ROOM {index + 1}</div>
                          {rooms.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeRoom(room.id)}
                              className="text-brand-red hover:bg-red-50 p-1 rounded"
                              aria-label="Remove room"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <FormField label="Room Size (m²)" required>
                            <input
                              required
                              type="number"
                              placeholder="e.g. 25"
                              value={room.size}
                              onChange={e => updateRoom(room.id, { size: e.target.value })}
                              className="input-field"
                            />
                          </FormField>
                          <FormField label="Room Type">
                            <select
                              className="input-field"
                              value={room.type}
                              onChange={e => updateRoom(room.id, { type: e.target.value })}
                            >
                              <option>Bedroom</option>
                              <option>Living Room</option>
                              <option>Office</option>
                              <option>Kitchen</option>
                              <option>Other</option>
                            </select>
                          </FormField>
                          <FormField label="Notes (optional)">
                            <input
                              type="text"
                              placeholder="e.g. sun-facing, high ceiling"
                              value={room.notes}
                              onChange={e => updateRoom(room.id, { notes: e.target.value })}
                              className="input-field"
                            />
                          </FormField>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={addRoom}
                    className="mt-4 text-brand-red font-semibold flex items-center gap-2 hover:underline"
                  >
                    <Plus size={16} /> Add Another Room
                  </button>
                </div>

                {/* SECTION 3 */}
                <div className="space-y-4">
                  <FormField label="Preferred Date (optional)">
                    <input type="date" className="input-field" />
                  </FormField>
                  <FormField label="Additional Information">
                    <textarea
                      rows={4}
                      placeholder="Property details, access notes, existing units, anything else..."
                      className="input-field"
                    />
                  </FormField>
                </div>

                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <span>I agree to being contacted regarding my inquiry.</span>
                </label>

                <button type="submit" className="btn-primary w-full">
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}