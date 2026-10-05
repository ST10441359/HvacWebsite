import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import BtuCalculator from './pages/BtuCalculator';
import Contact from './pages/Contact';
import BookCallout from './pages/BookCallout';
import RequestQuote from './pages/RequestQuote';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/about"           element={<About />} />
            <Route path="/services"        element={<Services />} />
            <Route path="/products"        element={<Products />} />
            <Route path="/products/:id"    element={<ProductDetail />} />
            <Route path="/btu"             element={<BtuCalculator />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="/callout"         element={<BookCallout />} />
            <Route path="/quote"           element={<RequestQuote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}