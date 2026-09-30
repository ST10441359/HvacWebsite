import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import FormField from '../components/FormField';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-20 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-5xl md:text-6xl mb-3">CONTACT US</h1>
          <p className="text-gray-300">
            We respond to all inquiries within 2 hours during business hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div>
            <h2 className="font-display text-2xl mb-6">GET IN TOUCH</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-brand-babyBlue text-white p-2 rounded">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-semibold">+27 12 345 6789</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-babyBlue text-white p-2 rounded">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-semibold">info@advancedair.co.za</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-babyBlue text-white p-2 rounded">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Address</div>
                  <div className="font-semibold">12 Industrial Road, Pretoria, 0001</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-brand-red" />
                <h3 className="font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold">07:30 – 17:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">08:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="text-brand-red font-semibold pt-2 border-t mt-2">
                  Emergency callouts: 24/7, all year
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-brand-red font-display text-3xl mb-4">THANK YOU</div>
                <p className="text-gray-600">
                  Your message has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Full Name" required>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      className="input-field"
                    />
                  </FormField>
                  <FormField label="Email Address" required>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
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
                  <FormField label="Subject" required>
                    <input
                      required
                      type="text"
                      placeholder="How can we help?"
                      className="input-field"
                    />
                  </FormField>
                </div>

                <FormField label="Message" required>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your enquiry..."
                    className="input-field"
                  />
                </FormField>

                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <span>
                    I agree to being contacted regarding my inquiry and consent to my data being
                    used to respond to this message.
                  </span>
                </label>

                <button type="submit" className="btn-secondary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}