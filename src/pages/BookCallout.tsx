import { useState } from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import FormField from '../components/FormField';

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
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return; 

    // 1. Build the email body
    const emailBody = `
NEW CALLOUT REQUEST
----------------------------------------
CUSTOMER DETAILS:
Name: ${fullName}
Phone: ${phone}
Email: ${email}
Preferred Contact: ${preferredContactMethod}

CALLOUT DETAILS:
Urgency: ${urgency}
Property Address: ${propertyAddress}
Preferred Visit Time: ${preferredVisitTime || 'As soon as possible'}

ISSUE DESCRIPTION:
${issueDescription}
    `.trim();

    // 2. Create mailto link
    const mailtoLink = `mailto:advancedair@absamail.co.za?subject=${urgency} Callout Request from ${fullName}&body=${encodeURIComponent(emailBody)}`;

    // 3. Open email client
    window.location.href = mailtoLink;

    // 4. Show success state
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-brand-navy text-white py-16 md:py-20 text-center px-4">
        <div className="container-narrow">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">BOOK A CALLOUT</h1>
          <p className="text-gray-300 mb-4 text-base md:text-lg">
            Request an engineer visit for emergency repairs, maintenance, or diagnostics.
          </p>
          <div className="text-brand-red font-semibold flex items-center justify-center gap-2 text-lg md:text-xl bg-red-500/10 p-3 rounded-lg inline-block border border-brand-red/20">
            <Phone size={20} /> Emergency? Call 031 505 0898
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-brand-red font-display text-3xl mb-4">CALLOUT REQUESTED</div>
                <p className="text-gray-600 text-lg mb-6">
                  Your email app should have opened with your callout details. Please click <strong>"Send"</strong> to complete the request.
                </p>
                
                {/* Emergency Fallback Box */}
                <div className="bg-red-50 border border-brand-red/20 p-6 rounded-lg inline-block text-left w-full max-w-md mx-auto">
                  <div className="flex items-center gap-2 text-brand-red font-bold mb-2">
                    <AlertCircle size={20} />
                    Is this an emergency?
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    If your AC is completely broken or you have an urgent issue, do not wait for an email reply.
                  </p>
                  <a href="tel:0315050898" className="btn-primary flex items-center justify-center gap-2 w-full">
                    <Phone size={18} /> Call 031 505 0898 Now
                  </a>
                </div>
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

                <label className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 p-4 rounded border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    className="mt-1 w-5 h-5 accent-brand-red"
                    required
                  />
                  <span className="font-medium">
                    I agree to being contacted regarding this callout request. <span className="text-brand-red">*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  className={`btn-primary w-full ${!agree ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!agree}
                >
                  Book Callout
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}