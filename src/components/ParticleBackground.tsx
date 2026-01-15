
import { useMemo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

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

  // Theme configuration for different routes (Vibrant Glowing Light Theme)
  const theme = useMemo(() => {
    switch (location.pathname) {
      case "/about":
        return {
          gradient1: "radial-gradient(circle at 50% 50%, hsl(300 100% 85%) 0%, transparent 60%)", // Glowing Pink
          gradient2: "radial-gradient(circle at 80% 20%, hsl(260 100% 85%) 0%, transparent 50%)", // Glowing Purple
          orb1: "radial-gradient(circle, hsl(300 100% 70%) 0%, transparent 70%)",
          orb2: "radial-gradient(circle, hsl(260 100% 70%) 0%, transparent 70%)",
          particleColor: "bg-fuchsia-500"
        };
      case "/services":
        return {
          gradient1: "radial-gradient(circle at 30% 60%, hsl(140 100% 85%) 0%, transparent 60%)", // Glowing Green
          gradient2: "radial-gradient(circle at 70% 30%, hsl(170 100% 80%) 0%, transparent 50%)", // Glowing Teal
          orb1: "radial-gradient(circle, hsl(140 100% 60%) 0%, transparent 70%)",
          orb2: "radial-gradient(circle, hsl(170 100% 60%) 0%, transparent 70%)",
          particleColor: "bg-emerald-500"
        };
      case "/contact":
        return {
          gradient1: "radial-gradient(circle at 40% 40%, hsl(30 100% 85%) 0%, transparent 60%)", // Glowing Orange
          gradient2: "radial-gradient(circle at 60% 60%, hsl(0 100% 90%) 0%, transparent 50%)", // Glowing Red
          orb1: "radial-gradient(circle, hsl(30 100% 60%) 0%, transparent 70%)",
          orb2: "radial-gradient(circle, hsl(0 100% 60%) 0%, transparent 70%)",
          particleColor: "bg-orange-500"
        };
      case "/testimonials":
        return {
          gradient1: "radial-gradient(circle at 20% 80%, hsl(50 100% 80%) 0%, transparent 60%)", // Glowing Yellow/Gold
          gradient2: "radial-gradient(circle at 80% 20%, hsl(30 100% 85%) 0%, transparent 50%)", // Glowing Amber
          orb1: "radial-gradient(circle, hsl(50 100% 60%) 0%, transparent 70%)",
          orb2: "radial-gradient(circle, hsl(30 100% 60%) 0%, transparent 70%)",
          particleColor: "bg-yellow-500"
        };
      default: // Home - Electric Cyan/Blue Glow
        return {
          gradient1: "radial-gradient(circle at 50% 0%, hsl(190 100% 85%) 0%, transparent 60%)",
          gradient2: "radial-gradient(circle at 80% 80%, hsl(210 100% 85%) 0%, transparent 50%)",
          orb1: "radial-gradient(circle, hsl(190 100% 60%) 0%, transparent 70%)",
          orb2: "radial-gradient(circle, hsl(210 100% 60%) 0%, transparent 70%)",
          particleColor: "bg-cyan-500"
        };
    }
  }, [location.pathname]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none transition-colors duration-1000 ease-in-out">
      {/* Base Light Background with Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Fluid Blob 1 */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{
          background: theme.gradient1,
          animationDelay: "0s"
        }}
      />

      {/* Fluid Blob 2 */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        style={{
          background: theme.gradient2,
        }}
      />

      {/* Fluid Blob 3 */}
      <div
        className="absolute -bottom-32 left-20 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        style={{
          background: theme.orb1,
        }}
      />

      {/* Rain Drops */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`rain-${i}`}
          className="absolute w-[2px] bg-blue-400/30"
          style={{
            height: Math.random() * 20 + 10 + 'px',
            left: Math.random() * 100 + '%',
            top: -20,
            animation: `rain-drop ${Math.random() * 2 + 1}s linear infinite`,
            animationDelay: Math.random() * 2 + 's',
          }}
        />
      ))}

      {/* Fire Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`fire-${i}`}
          className="absolute w-4 h-4 rounded-full bg-orange-500/20 blur-sm"
          style={{
            left: Math.random() * 100 + '%',
            bottom: -20,
            animation: `fire-rise ${Math.random() * 4 + 3}s ease-in infinite`,
            animationDelay: Math.random() * 2 + 's',
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full animate-float transition-colors duration-1000 ${theme.particleColor}`}
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
    </div>
  );
};

export default ParticleBackground;
