import { useState } from 'react';
import { Phone } from 'lucide-react';
import FormField from '../components/FormField';
import { sendCalloutRequest } from '../api/callout';

export default function BookCallout() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [urgency, setUrgency] = useState('Immediate (Emergency)');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState('Phone Call');
  const [preferredVisitTime, setPreferredVisitTime] = useState('');
  const [agree, setAgree] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      await sendCalloutRequest({
        fullName,
        phone,
        email,
        urgency,
        propertyAddress,
        issueDescription,
        preferredContactMethod,
        preferredVisitTime: preferredVisitTime || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Could not book your callout. Is the backend running?');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-brand-navy text-white py-16 md:py-20 text-center px-4">
        <div className="container-narrow">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">BOOK A CALLOUT</h1>
          <p className="text-gray-300 mb-4 text-base md:text-lg">
            Request an engineer visit for emergency repairs, maintenance, or diagnostics.
          </p>
          <div className="text-brand-red font-semibold flex items-center justify-center gap-2 text-lg md:text-xl">
            <Phone size={20} /> Emergency? Call 031 505 0898
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-brand-red font-display text-3xl mb-4">CALLOUT REQUESTED</div>
                <p className="text-gray-600">
                  We'll contact you shortly to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Full Name" required>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="input-field"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                    />
                  </FormField>
                  <FormField label="Phone Number" required>
                    <input
                      required
                      type="tel"
                      placeholder="+27 82 000 0000"
                      className="input-field"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Email Address" required>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="input-field"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </FormField>
                  <FormField label="Urgency">
                    <select
                      className="input-field"
                      value={urgency}
                      onChange={e => setUrgency(e.target.value)}
                    >
                      <option>Immediate (Emergency)</option>
                      <option>Today</option>
                      <option>Within a Week</option>
                      <option>Not Urgent – Planned</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Property Address" required>
                  <input
                    required
                    type="text"
                    placeholder="Full address including postcode"
                    className="input-field"
                    value={propertyAddress}
                    onChange={e => setPropertyAddress(e.target.value)}
                  />
                </FormField>

                <FormField label="Describe the Issue" required>
                  <textarea
                    required
                    rows={4}
                    placeholder="e.g. Unit not cooling, making a loud noise, not switching on..."
                    className="input-field"
                    value={issueDescription}
                    onChange={e => setIssueDescription(e.target.value)}
                  />
                </FormField>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Preferred Contact Method">
                    <select
                      className="input-field"
                      value={preferredContactMethod}
                      onChange={e => setPreferredContactMethod(e.target.value)}
                    >
                      <option>Phone Call</option>
                      <option>Email</option>
                    </select>
                  </FormField>
                  <FormField label="Preferred Visit Time (optional)">
                    <input
                      type="datetime-local"
                      className="input-field"
                      value={preferredVisitTime}
                      onChange={e => setPreferredVisitTime(e.target.value)}
                    />
                  </FormField>
                </div>

                <label className="flex items-start gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    className="mt-1 w-4 h-4"
                    required
                  />
                  <span>I agree to being contacted regarding this callout request.</span>
                </label>

                {error && <div className="text-brand-red text-sm bg-red-50 p-3 rounded">{error}</div>}

                <button
                  type="submit"
                  className="btn-primary w-full disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? 'Booking…' : 'Book Callout'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}