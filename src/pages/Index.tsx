import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Code, Search, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud";

const logos = [
  { src: "/sri-sai-travels.jpg", alt: "Sri Sai Travels" },
  { src: "/madras-college.png", alt: "Madras Engineering College" },
  { src: "https://placehold.co/200x80/transparent/333333?text=TechFlow", alt: "TechFlow" },
  { src: "https://placehold.co/200x80/transparent/333333?text=Innovate+Inc", alt: "Innovate Inc" },
  { src: "https://placehold.co/200x80/transparent/333333?text=Global+Systems", alt: "Global Systems" },
  { src: "https://placehold.co/200x80/transparent/333333?text=NextGen+AI", alt: "NextGen AI" },
  { src: "https://placehold.co/200x80/transparent/333333?text=Future+Corp", alt: "Future Corp" },
];

const problemPoints = [
  { icon: Clock, text: "Manual debugging wastes time" },
  { icon: Code, text: "High developer dependency" },
  { icon: Search, text: "Complex error tracing" },
  { icon: Zap, text: "Delayed product releases" },
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problemPoints.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoScroll]);

  const handlePrev = () => {
    setAutoScroll(false);
    setActiveIndex((prev) => (prev - 1 + problemPoints.length) % problemPoints.length);
  };

  const handleNext = () => {
    setAutoScroll(false);
    setActiveIndex((prev) => (prev + 1) % problemPoints.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (activeIndex + i + problemPoints.length) % problemPoints.length;
      cards.push({ idx, position: i });
    }
    return cards;
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              AI-Powered Error Resolution
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            AI That Understands
            <br />
            <span className="inline-flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span className="group relative cursor-pointer inline-flex items-center justify-center align-middle" aria-label="Errors">
                <span className="text-red-400 font-mono text-3xl md:text-5xl border-2 border-red-500/30 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 ease-out group-hover:w-[180px] group-hover:bg-red-950/30 group-hover:border-red-500">
                  <span className="group-hover:hidden animate-pulse">!</span>
                  <span className="hidden group-hover:inline-block text-2xl md:text-3xl font-bold tracking-wider text-red-100 animate-fade-in">ERRORS</span>
                </span>
              </span>
              <span className="text-gradient glow-text">Like Humans</span>
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            RANDER<span className="text-red-500">.AI</span> is an intelligent LLM-powered platform that automatically
            detects, analyzes, and fixes bugs & errors in applications and products.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          <div
            className="glass-card p-6 sm:p-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-lg sm:text-xl italic text-foreground/90 font-display">
              "Every error is an opportunity to build something better."
            </p>
            <p className="text-sm text-muted-foreground mt-3">— RANDER<span className="text-red-500">.AI</span> Philosophy</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <section className="py-10 border-y border-border/40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6">Trusted by innovative teams worldwide</p>
          <LogoCloud logos={logos} />
        </div>
      </section>

      {/* Glow Divider with Animated Box */}
      <div className="w-full flex justify-center my-16">
        <div className="relative w-3/4 h-8 flex items-center">
          {/* Glow background */}
          <div className="absolute inset-y-1/2 left-0 right-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-primary blur-md opacity-70 animate-pulse" style={{ height: '50%' }} />
          {/* Main divider line */}
          <div className="relative z-10 w-full h-1 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-primary" />
          {/* Animated box model */}
          <div className="absolute z-20 left-0 top-1/2 -translate-y-1/2 animate-divider-box-move">
            <div className="w-8 h-8 bg-white/90 border-2 border-primary rounded-xl shadow-lg flex items-center justify-center">
              <span className="block w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Bugs <span className="text-primary">Slow Growth</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Understanding the challenges that slow down development teams worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 hidden lg:grid">
            {problemPoints.map((point, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="font-semibold text-foreground">{point.text}</p>
              </div>
            ))}
          </div>

          {/* Swipeable Carousel - Mobile/Tablet view */}
          <div className="lg:hidden mb-16 relative">
            {/* Vertical Carousel Container */}
            <div className="relative h-auto overflow-hidden">
              <div className="flex flex-col items-center justify-center gap-6">
                {getVisibleCards().map(({ idx, position }) => {
                  const point = problemPoints[idx];
                  const opacity = position === 0 ? 1 : 0.3;
                  const scale = position === 0 ? 1 : 0.85;
                  const translateY = position * 80;

                  return (
                    <div
                      key={idx}
                      className="w-80 h-60 glass-card p-6 transition-all duration-500 ease-out flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/30 relative"
                      style={{
                        transform: `translateY(${translateY}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: position === 0 ? 10 : 0,
                      }}
                    >

                      <div className="w-16 h-16 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors relative z-10">
                        <point.icon className="w-8 h-8 text-destructive" />
                      </div>
                      <p className="font-semibold text-foreground text-lg relative z-10">{point.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 shadow-lg"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 shadow-lg"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {problemPoints.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoScroll(false);
                    setActiveIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary" : "w-2 bg-primary/40 hover:bg-primary/60"
                    }`}
                  aria-label={`Go to card ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent group-hover:from-primary/10 transition-colors duration-300" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  The RANDER<span className="text-red-500">.AI</span> Solution
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our AI scans, understands, and resolves issues automatically
                  with minimal human intervention. Focus on building, not debugging.
                </p>
              </div>
              <div className="md:ml-auto flex-shrink-0">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Fix Bugs <span className="text-gradient">Intelligently</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the future of software maintenance. Let AI handle the complexity.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
