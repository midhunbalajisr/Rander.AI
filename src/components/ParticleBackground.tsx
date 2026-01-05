import { useMemo, useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const ParticleBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(190 95% 55% / 0.12) 0%, transparent 50%)"
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 80%, hsl(220 90% 60% / 0.08) 0%, transparent 40%)"
        }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 animate-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsl(190 95% 55% / 0.4) 0%, transparent 70%)",
          left: "10%",
          top: "20%",
          filter: "blur(60px)",
        }}
      />
      
      <div
        className="absolute w-80 h-80 rounded-full opacity-15 animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsl(220 90% 60% / 0.4) 0%, transparent 70%)",
          right: "15%",
          bottom: "30%",
          filter: "blur(60px)",
          animationDelay: "2s",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
