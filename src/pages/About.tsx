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
    role: "Founder & CBA",
    color: "from-primary to-glow-secondary",
  },
  {
    name: "Ajay S",
    role: "CEO",
    color: "from-glow-secondary to-accent",
  },
  {
    name: "Arivumathi",
    role: "CTO & CEO",
    color: "from-accent to-primary",
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
            About <span className="text-gradient">RANDER.AI</span>
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
              RANDER.AI was built with a vision to remove complexity from software
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

        {/* Team Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The brilliant minds behind RANDER.AI, dedicated to building the future of intelligent debugging.
          </p>
        </div>

        <div className="flex justify-center w-full px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={member.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden min-h-[320px]">

                    {/* Glowing Background Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className={`relative z-10 w-32 h-32 rounded-full p-1 bg-gradient-to-br ${member.color} mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-transparent">
                        <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    <h3 className="relative z-10 font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>

                    <p className="relative z-10 text-base text-muted-foreground font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                      {member.role}
                    </p>
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
  );
};

export default About;
