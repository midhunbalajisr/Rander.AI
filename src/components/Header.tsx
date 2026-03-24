import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
      <div
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${
          isOpen ? "rotate-45 translate-y-3" : ""
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out origin-center ${
          isOpen ? "-rotate-45 -translate-y-3" : ""
        }`}
      />
    </div>
  );
};

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4">
      <div className="mx-4">
        <nav className="relative px-4 md:px-6 py-3 md:py-4 flex items-center justify-between max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-glow bg-black/40 backdrop-blur-xl border border-white/20">

          {/* Animated Vibrant Gradient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-95" />

          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

          {/* Glass Highlight */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-100" />

          <div className="relative z-10 flex items-center justify-between w-full text-white">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/alt logo.png"
                alt="Rander AI Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />

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
          </div>
        </nav>
      </div>

      {/* Mobile Menu Button - Outside Header */}
      <button
        className="md:hidden fixed top-6 right-6 z-50 text-white p-3 rounded-full bg-transparent border-2 border-white/20 shadow-lg hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-blue-500/40 hover:border-cyan-400/60 hover:shadow-xl transition-all duration-300 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <AnimatedHamburger isOpen={mobileMenuOpen} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex flex-col items-center justify-center animate-fade-in mt-0">
          <div className="bg-gradient-to-b from-slate-900 to-black rounded-3xl shadow-2xl p-8 w-4/5 max-w-sm flex flex-col gap-5">
            <div className="text-center mb-2">
              <h3 className="text-white text-xl font-bold">Menu</h3>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 relative group overflow-hidden ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {/* Transparent background with hover effect */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 z-0 ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                    : "bg-gradient-to-r from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/40 group-hover:to-blue-600/40 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                }`} />
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
            
            <Button 
              className="w-full bg-transparent text-white font-extrabold text-lg py-6 rounded-xl border-2 border-white/20 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400/40 hover:to-orange-500/40 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-orange-500/20" 
              size="default" 
              asChild
            >
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
