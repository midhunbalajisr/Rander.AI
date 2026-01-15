import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-4 mt-4">
        <nav className="relative px-6 py-4 flex items-center justify-between max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
          {/* Animated Background - High Visibility Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-[length:200%_200%] animate-gradient opacity-100 shadow-md" />

          {/* Animated Border Glow */}
          <div className="absolute inset-0 z-0 p-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:200%_200%] animate-[shimmer_3s_infinite] pointer-events-none rounded-xl" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>

          <div className="relative z-10 flex items-center justify-between w-full text-white">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg overflow-hidden border border-white/20 group-hover:bg-white/20 transition-colors">
                <img
                  src="/imgg/logo.png"
                  alt="Rander AI Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>

              <span className="font-display font-bold text-xl text-white group-hover:text-cyan-100 transition-colors">
                RANDER.AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium text-sm transition-colors ${location.pathname === link.path
                    ? "text-white font-bold"
                    : "text-blue-100 hover:text-white"
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              {/* Using a custom variant style directly since we want it to pop against the blue header */}
              <Button className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold shadow-lg" size="sm" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
          <div className="glass-card p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 px-4 rounded-lg transition-colors ${location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="default" asChild className="mt-2">
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
