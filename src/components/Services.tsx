import { Palette, Code, Smartphone, Zap, Globe, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, performant web applications using modern technologies and best practices.",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Designing and developing with mobile users in mind, ensuring perfect experiences across all devices.",
      features: ["Responsive Design", "Progressive Web Apps", "Cross-browser Testing", "Mobile Optimization"]
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-stack web application development from concept to deployment with modern frameworks.",
      features: ["Full-stack Development", "API Integration", "Database Design", "Cloud Deployment"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, accessibility, and search engine visibility.",
      features: ["Core Web Vitals", "SEO Optimization", "Accessibility", "Bundle Optimization"]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to deliver projects that meet business goals and user needs.",
      features: ["Agile Methodology", "Team Leadership", "Client Communication", "Project Management"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Services & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of services to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-2xl glass hover-lift animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card p-8 rounded-2xl glass max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and create something amazing together. I'm always excited 
              to work on new challenges and innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/263715039928">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold">
                Start a Project
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;