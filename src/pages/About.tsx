import { Target, Eye, Heart, Award } from 'lucide-react';

const certifications = [
  'F-Gas Certified',
  'RACCA Member',
  'Samsung Approved',
  'Daikin Partner',
  'Midea Certified',
  'Mitsubishi Partner',
  'ISO 9001',
  'Safe Contractor',
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-navy text-white py-20 text-center">
        <div className="container-narrow px-4">
          <h1 className="font-display text-5xl md:text-6xl mb-3">ABOUT US</h1>
          <p className="text-gray-300">Over 15 years of trusted air conditioning expertise across the region.</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl mb-6">OUR STORY</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Advanced Air Conditioning was founded in 2009 with a single mission: to provide honest,
                professional air conditioning services that residents and businesses could truly rely on.
                Starting with residential split-unit installations, we expanded rapidly into large commercial
                projects, multi-zone VRF systems, and national maintenance contracts.
              </p>
              <p>
                Today, our team of fully certified engineers brings decades of combined experience to every
                project. We work with all major brands — Samsung, Daikin, Mitsubishi, Midea, LG, and Carrier —
                and hold manufacturer-approved installer status with several of them.
              </p>
              <p>
                Every quote is free and obligation-free. Every job is backed by our 12-month labour and parts
                guarantee. We don't subcontract — the team that quotes your job installs it.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/technician.jpg"
              alt="Technician at work"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <img
              src="/images/hero.jpg"
              alt="AC maintenance"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">WHAT WE STAND FOR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 border-t-4 border-brand-red">
              <Target className="text-brand-red mb-4" size={32} />
              <h3 className="font-bold text-lg mb-3">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To deliver expert, honest, and reliable air conditioning solutions that improve comfort and
                efficiency for every client — residential or commercial.
              </p>
            </div>
            <div className="card p-6 border-t-4 border-brand-red">
              <Eye className="text-brand-red mb-4" size={32} />
              <h3 className="font-bold text-lg mb-3">Our Vision</h3>
              <p className="text-sm text-gray-600">
                To be the most trusted air conditioning company in the region, known for technical excellence,
                fair pricing, and outstanding aftercare.
              </p>
            </div>
            <div className="card p-6 border-t-4 border-brand-red">
              <Heart className="text-brand-red mb-4" size={32} />
              <h3 className="font-bold text-lg mb-3">Our Values</h3>
              <p className="text-sm text-gray-600">
                Integrity in every quote. Quality in every installation. Respect for every client's time and
                property. These aren't just words — they shape every job we take on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-narrow">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">CERTIFICATIONS & AFFILIATIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map(c => (
              <div
                key={c}
                className="border border-white/20 rounded-lg p-6 text-center hover:bg-white/5 transition"
              >
                <Award className="text-brand-red mx-auto mb-3" size={28} />
                <div className="text-sm font-semibold">{c}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="mailto:info@advancedair.co.za" className="btn-primary inline-block">Get in Touch</a>
          </div>
        </div>
      </section>
    </>
  );
}