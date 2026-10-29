import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/services',  label: 'Services' },
  { to: '/products',  label: 'Products' },
  { to: '/btu',       label: 'BTU Calc' },
  { to: '/contact',   label: 'Contact' },
  { to: '/callout',   label: 'Book Callout' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-md">
      <div className="container-narrow flex items-center justify-between px-4 md:px-8 py-3">
        
        {/* LOGO SECTION - Updated */}
        <Link to="/" className="flex items-center">
          {/* 
            If your logo has a white background, use mix-blend-multiply to blend it. 
            If it's a transparent PNG, you can remove the mix-blend class.
            Adjust 'h-12' to make the logo bigger or smaller.
          */}
          <img 
            src="/images/logo.png" 
            alt="Advanced Air Conditioning Logo" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-screen" 
            // Note: Use mix-blend-screen if the logo has a dark background, 
            // or remove the class if the logo is a transparent PNG.
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `hover:text-brand-babyBlue transition-colors ${isActive ? 'text-brand-babyBlue' : 'text-gray-200'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/quote" className="btn-primary text-sm py-2 px-5 ml-2">Get a Quote</Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gray-200 hover:text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-navy border-t border-white/10 px-4 py-4 space-y-3">
          {navLinks.map(l => (
            <NavLink 
              key={l.to} 
              to={l.to} 
              onClick={() => setOpen(false)} 
              className={({ isActive }) =>
                `block py-2 font-medium ${isActive ? 'text-brand-babyBlue' : 'text-gray-200'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/quote" onClick={() => setOpen(false)} className="btn-primary block text-center mt-4">Get a Quote</Link>
        </div>
      )}
    </header>
  );
}