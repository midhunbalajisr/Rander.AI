import { Users, Target, Lightbulb } from "lucide-react";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * index + 0.3}s` }}
            >
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-3xl font-display font-bold text-primary-foreground">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
