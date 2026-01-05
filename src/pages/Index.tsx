import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Code, Search, CheckCircle } from "lucide-react";

const problemPoints = [
  { icon: Clock, text: "Manual debugging wastes time" },
  { icon: Code, text: "High developer dependency" },
  { icon: Search, text: "Complex error tracing" },
  { icon: Zap, text: "Delayed product releases" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
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
            <span className="text-gradient glow-text">Errors Like Humans</span>
          </h1>

          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            RANDER.AI is an intelligent LLM-powered platform that automatically
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
            <p className="text-sm text-muted-foreground mt-3">— RANDER.AI Philosophy</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

          {/* Solution */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-glow-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  The RANDER.AI Solution
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
