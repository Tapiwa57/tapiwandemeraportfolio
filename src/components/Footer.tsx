import { Github, Linkedin, Twitter, ArrowUp, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Tapiwa57",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tapiwa-ndemera-373704348/",
      label: "LinkedIn"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/263715039928",
      label: "WhatsApp"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border/50 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Tagline */}
          <div className="text-center">
            <a href="#hero" className="text-3xl font-bold text-gradient mb-2 block">
              Tapiwa Ndemera
            </a>
            <p className="text-muted-foreground">
              UI/UX Designer & Web Developer
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center space-y-4 text-center pt-8 border-t border-border/50 w-full">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with  by Tapiwa Ndemera
            </p>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tapiwa Ndemera. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 hover-lift"
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;