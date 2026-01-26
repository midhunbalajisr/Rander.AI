import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="max-w-7xl mx-auto px-6 pb-8">
        {/* Designed Footer Box */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
          {/* Animated Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-pink-900 via-purple-900 to-blue-900 opacity-95 animate-gradient bg-[length:300%_300%]" />

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

          {/* Content */}
          <div className="relative z-10 px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src="/logo.png"
                    alt="RANDER.AI logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="font-display font-extrabold text-2xl text-white drop-shadow-lg">
                  RANDER<span className="text-red-400">.AI</span>
                </span>
              </Link>

              {/* Navigation */}
              <div className="flex items-center gap-8">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-base font-medium text-white/80 hover:text-white hover:scale-110 transition-all"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-white font-semibold text-base mb-1">
                  © 2026 RANDER<span className="text-red-400">.AI</span>
                </p>
                <p className="text-white/70 text-sm">
                  Built to Fix the Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
