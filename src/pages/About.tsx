import { Users, Target, Lightbulb } from "lucide-react";
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
    name: "Arivumathi",
    role: "CTO",
    color: "from-red-700 to-orange-300",
    image: "/team/arivumathin.png",
  },
  {
    name: "Ajay S",
    role: "CIO",
    color: "from-purple-500 to-pink-500",
    image: "/team/ajay.png",
  },
  {
    name: "Subash Chandrabose",
    color: "from-green-500 to-emerald-500",
    image: "/team/subash.png",
  },
  {
    name: "Philips Vincent",
    color: "from-indigo-500 to-purple-500",
    image: "/team/philips.png",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
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

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
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
            <p className="text-muted-foreground leading-relaxed">
              Inspired by modern AI-first platforms, we focus on clarity, simplicity,
              and reliability. Every feature we build is designed to make developers'
              lives easier and products more stable.
            </p>
          </div>
        </div>

        {/* Team Section with Fire Effect Background */}
        <div className="relative -mx-6 px-6 py-20 my-20">
          {/* Fire Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 opacity-95 animate-gradient bg-[length:200%_400%]" />

          {/* Animated Fire Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-700/80 via-orange-600/60 to-yellow-500/40 animate-fire-rise" />

          {/* Fire Particles/Sparks */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-yellow-300 opacity-70 animate-fire-rise"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${-10 + Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  boxShadow: '0 0 10px rgba(255, 200, 0, 0.8)',
                }}
              />
            ))}
          </div>

          {/* Flame Waves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-800/40 to-transparent animate-pulse-slow" />
            <div className="absolute bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-orange-700/30 to-transparent animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-20 left-0 right-0 h-48 bg-gradient-to-t from-yellow-600/20 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/50 animate-pulse-slow border-2 border-yellow-300/30">
                <Users className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Meet the <span className="text-yellow-300">Team</span>
              </h2>
              <p className="text-white/90 max-w-lg mx-auto font-medium drop-shadow-md">
                The brilliant minds behind RANDER<span className="text-yellow-200">.AI</span>, dedicated to building the future of intelligent debugging.
              </p>
            </div>

            <div className="flex justify-center w-full px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full max-w-5xl"
              >
                <CarouselContent className="-ml-4">
                  {teamMembers.map((member, index) => (
                    <CarouselItem key={member.name} className={`pl-4 ${member.isFounder ? 'md:basis-full lg:basis-full' : 'md:basis-1/2 lg:basis-1/3'}`}>
                      <div className={`relative text-center group transition-all duration-300 h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl ${member.isFounder ? 'p-10 min-h-[450px] border-4 border-yellow-400/60 shadow-2xl shadow-yellow-400/40' : 'p-6 min-h-[300px] border-2 border-white/10'}`}>

                        {member.isFounder ? (
                          <>
                            {/* Water Flowing Background for Founder */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-cyan-500 to-blue-600 opacity-95" />

                            {/* Animated Water Waves */}
                            <div className="absolute inset-0">
                              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-700/60 to-transparent animate-pulse-slow" style={{ animationDuration: '3s' }} />
                              <div className="absolute bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-cyan-600/40 to-transparent animate-pulse-slow" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                              <div className="absolute bottom-20 left-0 right-0 h-48 bg-gradient-to-t from-blue-500/30 to-transparent animate-pulse-slow" style={{ animationDelay: '2s', animationDuration: '5s' }} />
                            </div>

                            {/* Water Ripples */}
                            <div className="absolute inset-0 overflow-hidden">
                              {Array.from({ length: 15 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute rounded-full border-2 border-white/20"
                                  style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: `${20 + Math.random() * 60}px`,
                                    height: `${20 + Math.random() * 60}px`,
                                    animation: `ping ${3 + Math.random() * 4}s ease-in-out infinite`,
                                    animationDelay: `${Math.random() * 3}s`,
                                  }}
                                />
                              ))}
                            </div>

                            {/* Highlighted Border Glow */}
                            <div className="absolute inset-0 rounded-2xl border-4 border-yellow-300/40 animate-pulse-slow" />

                            {/* Photo */}
                            <div className="relative z-10 w-40 h-40 rounded-full p-1 bg-gradient-to-br from-yellow-300 to-yellow-500 mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/40">
                                {member.image ? (
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    <span className="text-5xl font-display font-bold text-white">
                                      {member.name.charAt(0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Floating Name on Water */}
                            <h3 className="relative z-10 font-display text-2xl md:text-3xl font-extrabold mb-4 drop-shadow-2xl text-white px-4 leading-tight text-center animate-float">
                              {member.name}
                            </h3>

                            {/* Founder Badge */}
                            {member.role && (
                              <div className="relative z-10 inline-block">
                                <div className="absolute inset-0 bg-yellow-300/50 blur-xl animate-pulse-slow" />
                                <p className="relative text-lg md:text-xl text-white font-extrabold px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 backdrop-blur-sm border-3 border-yellow-200/70 shadow-2xl shadow-yellow-500/60">
                                  ⭐ {member.role} ⭐
                                </p>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            {/* Regular Vibrant Animated Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-90 animate-gradient bg-[length:200%_200%]`} />

                            {/* Glowing Pulse Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse-slow" />

                            {/* Photo or Initial */}
                            <div className="relative z-10 w-24 h-24 rounded-full p-1 bg-white mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
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

                            <h3 className="relative z-10 font-display text-lg md:text-xl font-extrabold mb-3 drop-shadow-lg bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent px-2 leading-tight text-center">
                              {member.name}
                            </h3>

                            {member.role && (
                              <div className="relative z-10 inline-block">
                                <div className="absolute inset-0 bg-yellow-400/30 blur-lg animate-pulse-slow" />
                                <p className="relative text-sm md:text-base text-white font-bold px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-sm border-2 border-yellow-400/50 shadow-xl shadow-orange-500/50">
                                  {member.role}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-primary hover:text-white border-primary/20" />
                <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-primary hover:text-white border-primary/20" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
