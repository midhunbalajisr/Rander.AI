import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
        <nav className={`relative px-4 md:px-6 py-3 md:py-4 flex items-center justify-between max-w-7xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 ${scrolled ? "shadow-glow bg-black/40 backdrop-blur-xl border border-white/20" : "bg-transparent"
          }`}>

          {/* Animated Dark Gradient Background */}
          <div className={`absolute inset-0 z-0 bg-gradient-to-r from-blue-900 via-purple-900 via-pink-900 to-green-900 bg-[length:300%_300%] animate-gradient transition-opacity duration-700 ${scrolled ? "opacity-95" : "opacity-85"}`} />

          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

          {/* Glass Highlight */}
          <div className={`absolute inset-0 z-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

          <div className="relative z-10 flex items-center justify-between w-full text-white">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg overflow-hidden border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <img
                  src="/logo.png"
                  alt="Rander AI Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>

              <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-white group-hover:text-cyan-200 transition-colors drop-shadow-lg">
                RANDER<span className="text-red-500">.AI</span>
              </span>
            </Link>

            {/* Desktop Navigation - Button Style */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  variant="ghost"
                  asChild
                  className={`rounded-full px-5 font-bold text-base transition-all duration-300 ${location.pathname === link.path
                    ? "bg-white/15 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] border border-white/20"
                    : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </Button>
              ))}
            </div>

            {/* CTA Button - Merely Animated */}
            <div className="hidden md:block">
              <Button
                variant="default"
                className="bg-white text-blue-600 hover:bg-white/90 hover:text-blue-700 font-extrabold text-base shadow-lg shadow-cyan-500/30 relative overflow-hidden group/btn hover:-translate-y-1 hover:scale-105 transition-all duration-300 border-none px-6"
                size="sm"
                asChild
              >
                <Link to="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]" />
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
