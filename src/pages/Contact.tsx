import { Phone, Mail, MapPin, Clock, Smartphone, Printer } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-16 md:py-20 text-center px-4">
        <div className="container-narrow">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">CONTACT US</h1>
          <p className="text-gray-300 text-lg">
            We're here to help with all your air conditioning needs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Details */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-6 md:mb-8">GET IN TOUCH</h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-babyBlue/10 text-brand-babyBlue p-3 rounded-lg shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Telephone / Office</div>
                  <a href="tel:0315050898" className="font-semibold text-base md:text-lg hover:text-brand-red transition-colors block">
                    031 505 0898
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-babyBlue/10 text-brand-babyBlue p-3 rounded-lg shrink-0">
                  <Smartphone size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Cell / Mobile</div>
                  <a href="tel:0829240268" className="font-semibold text-base md:text-lg hover:text-brand-red transition-colors block">
                    082 924 0268
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-babyBlue/10 text-brand-babyBlue p-3 rounded-lg shrink-0">
                  <Printer size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-1">Fax</div>
                  <div className="font-semibold text-gray-700 block text-base md:text-lg">
                    031 505 0899
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-babyBlue/10 text-brand-babyBlue p-3 rounded-lg shrink-0">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500 font-medium mb-1">Email</div>
                  <a href="mailto:advancedair@absamail.co.za" className="font-semibold text-base md:text-lg hover:text-brand-red transition-colors block break-all">
                    advancedair@absamail.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Hours & Service Area */}
          <div className="flex flex-col justify-center mt-4 lg:mt-0">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 mb-6 md:mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={24} className="text-brand-red" />
                <h3 className="font-display text-xl md:text-2xl">Business Hours</h3>
              </div>
              
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Monday – Friday</span>
                  <span className="font-semibold">07:30 – 17:30</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">08:00 – 14:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="text-brand-red font-semibold pt-2 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
                  </span>
                  Emergency callouts: 24/7
                </div>
              </div>
            </div>

            {/* Service Area Box */}
            <div className="bg-brand-navy text-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-brand-babyBlue" />
                <h3 className="font-display text-xl md:text-2xl">Service Area</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                We are proud to provide expert HVAC services, sales, and repairs to residential and commercial clients across the entire <strong className="text-white">KwaZulu-Natal (KZN)</strong> region.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}