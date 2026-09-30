import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Wind } from 'lucide-react';

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
    <header className="bg-brand-navy text-white sticky top-0 z-50">
      <div className="container-narrow flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-red p-2 rounded">
            <Wind size={20} />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg">ADVANCED <span className="text-brand-red">AIR</span></div>
            <div className="text-[10px] tracking-widest text-gray-300">CONDITIONING</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `hover:text-brand-red transition-colors ${isActive ? 'text-brand-red font-semibold' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/quote" className="btn-primary text-sm py-2 px-4">Get a Quote</Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-navy border-t border-white/10 px-4 py-4 space-y-3">
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2">
              {l.label}
            </NavLink>
          ))}
          <Link to="/quote" onClick={() => setOpen(false)} className="btn-primary block text-center">Get a Quote</Link>
        </div>
      )}
    </header>
  );
}