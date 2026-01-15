import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-6"}`}>
      <div className="mx-4">
        <nav className={`relative px-6 py-4 flex items-center justify-between max-w-7xl mx-auto rounded-xl overflow-hidden transition-all duration-500 ${scrolled ? "shadow-2xl shadow-primary/20 bg-black/40 backdrop-blur-md border border-white/10" : "bg-transparent"
          }`}>

          {/* Animated Background - Dynamic Opacity on Scroll */}
          <div className={`absolute inset-0 z-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-[length:200%_200%] animate-gradient transition-opacity duration-500 ${scrolled ? "opacity-95" : "opacity-0"}`} />

          {/* Glass effect for top state */}
          <div className={`absolute inset-0 z-0 bg-white/5 backdrop-blur-sm transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`} />

          {/* Animated Border Glow */}
          <div className="absolute inset-0 z-0 p-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:200%_200%] animate-[shimmer_3s_infinite] pointer-events-none rounded-xl" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>

          <div className="relative z-10 flex items-center justify-between w-full text-white">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg overflow-hidden border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/imgg/logo.png"
                  alt="Rander AI Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>

              <span className="font-display font-bold text-xl text-white group-hover:text-cyan-200 transition-colors drop-shadow-md">
                RANDER.AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium text-sm transition-all duration-300 ${location.pathname === link.path
                    ? "text-white font-bold scale-105"
                    : "text-blue-100/80 hover:text-white hover:scale-105"
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              {/* Premium Designed Button */}
              <Button
                variant="default" // Using default but overriding with custom classes
                className="bg-white text-blue-600 hover:bg-cyan-50 hover:text-blue-700 font-bold shadow-lg shadow-black/20 relative overflow-hidden group/btn hover:scale-105 transition-all duration-300 border-none"
                size="sm"
                asChild
              >
                <Link to="/contact">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 animate-fade-in">
          <div className="glass-card p-4 flex flex-col gap-4 bg-black/60 backdrop-blur-xl border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 px-4 rounded-lg transition-colors ${location.pathname === link.path
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold border-none" size="default" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
