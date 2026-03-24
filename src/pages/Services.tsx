import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bug, Cpu, RefreshCw, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "AI Bug & Error Fixing",
    description: "Paste your GitHub or project code and let our AI detect and fix issues. Intelligent analysis that understands context and provides accurate solutions.",
    features: ["GitHub Integration", "Multi-language Support", "Smart Suggestions"],
    color: "from-primary to-glow-secondary",
  },
  {
    icon: Cpu,
    title: "Product-Based AI Services",
    description: "Custom AI solutions for startups and enterprises. We build tailored systems that integrate seamlessly with your existing infrastructure.",
    features: ["Custom Models", "API Integration", "Scalable Solutions"],
    color: "from-glow-secondary to-accent",
  },
  {
    icon: RefreshCw,
    title: "Automation & Maintenance",
    description: "Continuous error monitoring and auto-resolution. Set it and forget it — our AI keeps your systems healthy around the clock.",
    features: ["24/7 Monitoring", "Auto-Resolution", "Real-time Alerts"],
    color: "from-accent to-primary",
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen relative">
      {/* Permanent Full-Screen Fixed Background */}
      <div className="fixed inset-0 w-full h-full z-[-1] services-bg-pattern pointer-events-none" />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            What We Offer
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            Comprehensive AI-powered solutions designed to revolutionize how you handle software maintenance and debugging.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="motion-carousel mb-20 animate-fade-in">
          <div className="motion-carousel__viewport">
            <div 
              className="motion-carousel__container"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.title} className="motion-carousel__slide flex justify-center py-8">
                  <div className="card-3d">
                    <div className="card-3d-glass" />
                    <div className="card-3d-bg" />
                    <div className="card-3d-glow" />
                    <div className="card-3d-glow-center" />
                    <div className="card-3d-border" />

                    <div className="card-3d-content">
                      <div className="card-3d-icon">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="card-3d-title">
                        {service.title}
                      </h3>

                      <p className="card-3d-desc">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6 flex-grow">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-[#ccc]">
                            <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_white] bg-white opacity-80" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact" className="card-3d-link mt-auto">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="motion-carousel__button motion-carousel__button--prev flex items-center justify-center p-3 hover:scale-110 transition-transform" onClick={prevSlide}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="motion-carousel__button motion-carousel__button--next flex items-center justify-center p-3 hover:scale-110 transition-transform" onClick={nextSlide}>
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="motion-carousel__dots">
            {services.map((_, idx) => (
              <div
                key={idx}
                className={`motion-carousel__dot ${currentSlide === idx ? "motion-carousel__dot--active" : ""}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="relative">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how RANDER<span className="text-red-500">.AI</span> can help streamline your development process and eliminate debugging headaches.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
