import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bug, Cpu, RefreshCw, ArrowRight } from "lucide-react";

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
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            What We Offer
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered solutions designed to revolutionize how you handle software maintenance and debugging.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300 flex flex-col animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 flex-grow">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="glass" className="w-full group-hover:border-primary/50" asChild>
                <Link to="/contact">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
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
    </div >
  );
};

export default Services;
