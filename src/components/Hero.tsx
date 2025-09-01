import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/Ellipse 2.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">Hi, I am</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4">
                Tapiwa Ndemera
              </h1>
              <h2 className="text-xl md:text-3xl text-secondary font-medium">
                UI/UX Designer & Web Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              I bring ideas to life through thoughtful design and clean code.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="https://github.com/Tapiwa57" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover-lift"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tapiwa-ndemera-373704348/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover-lift"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/263715039928">
              <Button variant="hero" size="xl" className="group">
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
              <Button variant="outlineHero" size="xl" asChild>
                <a href="/src/assets/Tapiwa_Ndemera_CV.pdf" download className="inline-flex items-center">
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src={profileImage}
                alt="Tapiwa Ndemera - UI/UX Designer & Frontend Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/20 shadow-xl hover-lift"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;