import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/imgg/logo.png"
              alt="RANDER.AI logo"
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="font-display font-bold text-lg text-foreground">
              RANDER<span className="text-primary">.AI</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 RANDER.AI — Built to Fix the Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
