import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tapiwandemera45@gmail.com",
      href: "mailto:tapiwandemera45@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+263 715 039 928",
      href: "#"
    },
    {
      icon: MapPin,
      label: "Harare",
      value: "Zimbabwe",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Tapiwa57",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href:  "https://www.linkedin.com/in/tapiwa-ndemera-373704348/",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/263715039928"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xwpnqnkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  First Name
                </label>
                <Input 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John" 
                  className="bg-surface-elevated border-border/50 focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Last Name
                </label>
                <Input 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe" 
                  className="bg-surface-elevated border-border/50 focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Email
              </label>
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com" 
                className="bg-surface-elevated border-border/50 focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Subject
              </label>
              <Input 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion" 
                className="bg-surface-elevated border-border/50 focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Message
              </label>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..." 
                rows={5}
                className="bg-surface-elevated border-border/50 focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <Button variant="hero" size="lg" className="w-full group" type="submit">
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {status === "success" && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>
            )}
          </form>

          {/* Contact Information */}
          <div className="animate-slide-up space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-card p-8 rounded-2xl glass">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="text-foreground font-medium">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-card p-8 rounded-2xl glass">
              <h4 className="text-xl font-bold text-foreground mb-6">
                Follow me
              </h4>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-card p-8 rounded-2xl glass text-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
              <h4 className="text-lg font-bold text-foreground mb-2">
                Available for Work
              </h4>
              <p className="text-muted-foreground text-sm">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
