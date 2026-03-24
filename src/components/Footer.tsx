import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <footer className="relative mt-20">
      <div className="max-w-7xl mx-auto px-6 pb-8">
        {/* Designed Footer Box */}
        <div className={`relative rounded-3xl overflow-hidden border-2 shadow-2xl ${isAboutPage ? 'border-white/10 bg-black/30 backdrop-blur-md' : 'border-slate-200 bg-white'}`}>
          {/* New Requested Footer Background (Light Gradient with Grid Mask) */}
          <div 
            className={`absolute inset-0 z-0 pointer-events-none ${isAboutPage ? 'opacity-0' : 'opacity-90'}`}
            style={{
              background: `linear-gradient(to bottom, #fff 0%, #fff 40%, rgba(255, 255, 255, 0) 100%), 
                           linear-gradient(to right, #0ed2da, #5f29c7)`,
            }}
          />
          {/* Vertical Grid Mask - Hide on About page to see the pastel glow clearly */}
          {!isAboutPage && (
            <div 
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ccc 1px, transparent 1px)',
                backgroundSize: '50px 100%',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%)',
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-10 px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src={isAboutPage ? "/alt logo.png" : "/logo.png"}
                  alt="RANDER.AI logo"
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                />
                <span className={`font-display font-extrabold text-2xl drop-shadow-sm ${isAboutPage ? 'text-white' : 'text-slate-900'}`}>
                  RANDER<span className="text-red-500">.AI</span>
                </span>
              </Link>

               {/* Navigation */}
               <div className="flex items-center gap-8">
                 {["Home", "About", "Services", "Contact"].map((item) => (
                   <Link
                     key={item}
                     to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                     className={`text-base font-semibold transition-all hover:scale-110 ${isAboutPage ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-primary'}`}
                   >
                     {item}
                   </Link>
                 ))}
               </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className={`font-bold text-base mb-1 ${isAboutPage ? 'text-white' : 'text-slate-900'}`}>
                  © 2026 RANDER<span className="text-red-500">.AI</span>
                </p>
                <p className={`text-sm font-medium ${isAboutPage ? 'text-white/70' : 'text-slate-600'}`}>
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
