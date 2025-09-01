import { Code, Palette, Users, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "1", icon: Zap },
    { label: "Projects Completed", value: "2", icon: Code },
    { label: "Happy Clients", value: "1", icon: Users },
    { label: "Design Systems", value: "4", icon: Palette }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Bringing Ideas to Life Through Design & Code
              </h3>
              <div className="space-y-4 text-muted-foreground">
<p>
  I’m an upcoming UI/UX Designer and Frontend Developer. My software journey began in UI/UX 
  design, where I discovered a passion for crafting experiences from scratch and turning ideas 
  into intuitive digital solutions.
</p>
<p>
  Over time, my curiosity and love for building things naturally led me to software development. 
  It allows me to bring designs to life, learn continuously, and create applications that are both 
  functional and delightful for users.
</p>
<p>
  Beyond coding and design, I enjoy exploring new technologies, experimenting with creative 
  solutions, and sharing knowledge with the developer community. Every project is an opportunity 
  to grow and push the boundaries of what I can build.
</p>

              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl glass hover-lift text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Overview */}
          <div className="bg-gradient-card p-8 rounded-2xl glass animate-fade-in">
            <h4 className="text-xl font-semibold mb-4 text-center">Core Expertise</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React", "TypeScript", "Tailwind CSS", "Next.js", "Figma", 
                "Adobe Creative Suite", "Node.js", "Python", "Git",
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;