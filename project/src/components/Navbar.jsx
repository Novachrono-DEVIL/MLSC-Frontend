import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-[0_0_30px_rgba(220,38,38,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1
              className="text-3xl font-black tracking-wider"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                textShadow: '0 0 20px rgba(220,38,38,0.8), 0 0 40px rgba(220,38,38,0.4)',
                background: 'linear-gradient(to right, #dc2626, #ef4444, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              INNOVERGENCE XXV
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-110"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-300 hover:text-red-500 font-bold uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="block px-3 py-2 bg-red-600 text-white font-bold uppercase tracking-wider rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
