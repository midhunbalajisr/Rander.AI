import { useState } from "react";
import { Users, Target, Lightbulb, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Midhunbalaji S",
    role: "Founder & CEO",
    color: "from-blue-500 to-cyan-500",
    image: "/team/midhunbalaji.png",
    isFounder: true,
  },
  {
    name: "Anandkumar K",
    role: "Co-founder & CTO",
    color: "from-purple-500 to-indigo-500",
    image: "/team/anandkumar.jpg",
    isFounder: true,
  },
];

const mobileMenuButtons = [
  { label: "Home", href: "/", icon: <Target className="w-5 h-5" /> },
  { label: "Services", href: "/services", icon: <Lightbulb className="w-5 h-5" /> },
  { label: "Contact", href: "/contact", icon: <Users className="w-5 h-5" /> },
];

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-white">
      {/* Blur Blob Background */}
      <div className="about-blob-bg" />
      
      {/* Scrollable Content Container */}
      <div className="pt-32 pb-20 px-6">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex flex-col items-center justify-center animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-4/5 max-w-xs flex flex-col gap-6">
            {mobileMenuButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {btn.icon}
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Rain effect overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            style={{
              left: `${(i * 5) + Math.random() * 3}%`,
              height: `${Math.random() * 100 + 50}px`,
              animation: `rain-drop ${Math.random() * 2 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            Our Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            About <span className="text-gradient">RANDER<span className="text-red-500">.AI</span></span>
          </h1>
        </div>

        {/* Team Section */}
        <div className="relative -mx-6 px-6 pb-20 mb-20 overflow-hidden z-10">
          {/* Geometric Background */}
          <div className="absolute inset-0 custom-team-bg" />

          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(6,182,212,0.6)] border-2 border-cyan-300/50">
                <Users className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ textShadow: '0 0 20px rgba(6,182,212,0.5), 0 2px 10px rgba(0,0,0,0.5)' }}>
                Meet the <span className="text-cyan-300">Team</span>
              </h2>
              <p className="text-white/90 max-w-lg mx-auto font-medium" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                The brilliant minds behind RANDER<span className="text-cyan-200">.AI</span>, dedicated to building the future of intelligent debugging.
              </p>
            </div>

            <div className="flex justify-center w-full px-12">
              <Carousel
                opts={{ align: "start", loop: false }}
                className="w-full max-w-5xl"
              >
                <CarouselContent className="-ml-4">
                  {teamMembers.map((member) => (
                    <CarouselItem key={member.name} className="pl-4 md:basis-1/2 lg:basis-1/2">
                      {member.isFounder ? (
                        <div className="flex h-full items-center justify-center py-4">
                          <div className="founder-flip-card">
                            {/* Base Content (Shown initially) */}
                            <div className="founder-flip-base-content">
                              <h3 className="font-display text-2xl font-bold mb-2 tracking-wide">{member.name}</h3>
                              <p className="text-base font-bold text-white/90 uppercase tracking-widest">{member.role}</p>
                            </div>

                            {/* Hover Content (Revealed on hover) */}
                            <div className="founder-flip-hover-content">
                              {member.image ? (
                                <img src={member.image} alt={member.name} />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-800 absolute inset-0 z-[-1] rounded-[15px]">
                                  <span className="text-5xl font-display font-bold text-white">{member.name.charAt(0)}</span>
                                </div>
                              )}
                              {/* Dark gradient overlay for text readability over image */}
                              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent rounded-b-[15px] z-0" />
                              
                              <div className="relative z-10 text-center font-display drop-shadow-lg">
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-sm font-bold text-white/90">{member.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative text-center group transition-all duration-300 h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl p-10 min-h-[450px] border-4 border-yellow-400/60 shadow-2xl shadow-yellow-400/40">
                          {/* Vibrant Animated Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-90 animate-gradient bg-[length:200%_200%]`} />

                          {/* Glowing Pulse */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse-slow" />

                          {/* Photo */}
                          <div className="relative z-10 w-36 h-36 rounded-full p-1 bg-white mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                  <span className="text-3xl font-display font-bold text-white">
                                    {member.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Name */}
                          <h3 className="relative z-10 font-display text-xl font-extrabold mb-3 text-white drop-shadow-lg whitespace-nowrap">
                            {member.name}
                          </h3>

                          {/* Role Badge */}
                          {member.role && (
                            <div className="relative z-10 inline-block">
                              <div className="absolute inset-0 bg-yellow-400/30 blur-lg animate-pulse-slow" />
                              <p className="relative text-sm text-white font-bold px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-sm border-2 border-yellow-400/50 shadow-xl shadow-orange-500/50">
                                {member.role}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>

        {/* Vision & Philosophy */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-800 font-medium leading-relaxed">
              RANDER<span className="text-red-500">.AI</span> was built with a vision to remove complexity from software
              maintenance. Our AI understands code, detects errors, and fixes them
              intelligently — transforming how development teams work.
            </p>
          </div>

          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Our Philosophy</h3>
            <p className="text-slate-800 font-medium leading-relaxed">
              Inspired by modern AI-first platforms, we focus on clarity, simplicity,
              and reliability. Every feature we build is designed to make developers'
              lives easier and products more stable.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
