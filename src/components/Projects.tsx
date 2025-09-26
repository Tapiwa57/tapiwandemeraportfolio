import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Learning Dashboard",
      description:
        "Provisional Practice Exam Application that allows learners to take interactive practice tests, track progress, and review results.",
      youtubeId: "Jr0_tsjnCDY?si=gr9aqMqdsw2XQh6N",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Supabase"],
      liveUrl: "https://vista-vid-provisional-practice-exam.vercel.app/",
      githubUrl: "https://github.com/Tapiwa57/vista-vid-provisional-practice-exam-app",
      featured: true,
      category: "Web Development",
    },
    {
      title: "Construction Website (Steel Structure Zimbabwe)",
      description:
        "A responsive website for Steel Structure Zimbabwe, showcasing services, projects, and company information.",
      youtubeId: "DCNlmODDZzE",
      technologies: ["React", "Node.js"],
      liveUrl: "https://steelstructurezimbabwefinal2.vercel.app/",
      githubUrl: "https://github.com/Tapiwa57/steelstructurezimbabwefinal2",
      featured: true,
      category: "Web Development",
    },
    {
      title: "Africa Market Place (Work In Progress)",
      description:
        "A modern e-commerce platform designed to connect local African vendors with buyers across the continent and beyond. The platform allows small and medium enterprises (SMEs) to showcase their products, manage inventory, and securely process payments, while giving customers a seamless shopping experience.",
      youtubeId: "f2-FsFxDI-E?si=oZdLGgsA92RNA66q",
      technologies: ["Next.js", "Node.js"],
      liveUrl: "https://africa-market-place-e-com-vrvd.vercel.app/",
      githubUrl: "https://github.com/Tapiwa57/Africa-Market-Place-e-com",
      featured: false,
      category: "Web Development",
    },
    {
      title: "Coming soon...",
      description: ".....",
      youtubeId: "YOUR_VIDEO_ID_3",
      technologies: [""],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Web Development",
    },
    {
      title: "Coming soon...",
      description: ".....",
      youtubeId: "YOUR_VIDEO_ID_3",
      technologies: [""],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Web Development",
    },
    {
      title: "Coming soon...",
      description: ".....",
      youtubeId: "YOUR_VIDEO_ID_3",
      technologies: [""],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Web Development",
    },
    {
      title: "Micofinance App",
      description:
        "Secure mobile application with authentication and transaction history.",
      youtubeId: "SxP6wsAz_lQ?si=hAv_QC4eQbAVoc18",
      technologies: ["Figma"],
      liveUrl:
        "https://www.figma.com/proto/0vJxgiqBGEvgf1vqzJYYLc/Application-BIfinance?page-id=0%3A1&node-id=306-445&t=Ez3fSjgo15rysAgq-1",
      figmaUrl:
        "https://www.figma.com/proto/0vJxgiqBGEvgf1vqzJYYLc/Application-BIfinance?page-id=0%3A1&node-id=306-445&t=Ez3fSjgo15rysAgq-1",
      featured: false,
      category: "UI/UX Design",
    },
    {
      title: "Marketplace",
      description:
        "A modern e-commerce platform designed to connect local African vendors with buyers across the continent and beyond. The platform allows small and medium enterprises (SMEs) to showcase their products, manage inventory, and securely process payments, while giving customers a seamless shopping experience.",
      youtubeId: "f2-FsFxDI-E?si=oZdLGgsA92RNA66q",
      technologies: ["Figma"],
      liveUrl:
        "https://www.figma.com/proto/vdCmkM1SwNVXMeoB0osIeP/Market-place-website?page-id=0%3A1&node-id=126-847&scaling=scale-down-width&content-scaling=fixed&t=1XDqK22FCURdDD0h-1",
      figmaUrl:
        "https://www.figma.com/proto/vdCmkM1SwNVXMeoB0osIeP/Market-place-website?page-id=0%3A1&node-id=126-847&scaling=scale-down-width&content-scaling=fixed&t=1XDqK22FCURdDD0h-1",
      featured: false,
      category: "UI/UX Design",
    },
    {
      title: "Coming soon...",
      description:
        "Property listing platform with advanced search filters, virtual tours, and agent portal.",
      youtubeId: "YOUR_VIDEO_ID_6",
      technologies: ["React", "Node.js", "PostgreSQL", "MapBox"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "UI/UX Design",
    },
    // Graphic Design Section
    {
      title: "Graphic Poster for Steel Structures Zimbabwe",
      description:
        "A creative poster design showcasing modern typography and brand identity. Click the link for full post",
      imageUrl: "/assets/Instagram post - 1.png",
      technologies: ["Figma"],
      liveUrl: "https://www.figma.com/proto/0dt4JQYELMfDfUBtrN2Yqs/Steel-structure-Zimbabwe?page-id=0%3A1&node-id=182-18&viewport=239%2C425%2C0.06&t=yfMEsfYTE4LTfBFM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A2",
      figmaUrl: "https://www.figma.com/proto/0dt4JQYELMfDfUBtrN2Yqs/Steel-structure-Zimbabwe?page-id=0%3A1&node-id=182-18&viewport=239%2C425%2C0.06&t=yfMEsfYTE4LTfBFM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A2",
      featured: false,
      category: "Graphic Design",
    },
    {
      title: "ARIPO @50 Logo Design ",
      description:
        "Minimalist logo design crafted to represent a bold and professional brand.",
      imageUrl: "/assets/Logo.png",
      technologies: ["Figma"],
      liveUrl: "https://www.figma.com/design/GMEnGzUeBH6LCdkvohKpAF/Aripo-50-logo-design?node-id=6-280&t=N40McinznsRAN4Tz-1",
      figmaUrl: "https://www.figma.com/design/GMEnGzUeBH6LCdkvohKpAF/Aripo-50-logo-design?node-id=6-280&t=N40McinznsRAN4Tz-1",
      featured: false,
      category: "Graphic Design",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  const webProjects = projects.filter((p) => p.category === "Web Development" && !p.featured);
  const designProjects = projects.filter((p) => p.category === "UI/UX Design" && !p.featured);
  const graphicProjects = projects.filter((p) => p.category === "Graphic Design" && !p.featured);

  const [showMoreWeb, setShowMoreWeb] = useState(false);
  const [showMoreDesign, setShowMoreDesign] = useState(false);
  const [showMoreGraphic, setShowMoreGraphic] = useState(false);

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="bg-gradient-card rounded-2xl overflow-hidden glass hover-lift group">
      <div className="aspect-video w-full rounded-2xl overflow-hidden">
        {project.youtubeId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : null}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <a
            href={project.liveUrl}
            className="p-2 rounded-lg glass hover:bg-primary/20 flex-1 flex items-center justify-center text-sm"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-primary" />
            </a>
          ) : project.figmaUrl ? (
            <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
              <Figma className="w-5 h-5 hover:text-primary" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6 space-y-20">
        {/* Featured Projects */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my top highlighted projects with big previews
            </p>
          </div>
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center animate-slide-up`}
              >
                {/* Video */}
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-all duration-300" />
                    <div className="relative rounded-2xl overflow-hidden hover-lift">
                      <div className="aspect-video w-full">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${project.youtubeId}`}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="hero" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outlineHero" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gradient mb-10 text-center">
            Web Development Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showMoreWeb ? webProjects : webProjects.slice(0, 3)).map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
          {webProjects.length > 3 && (
            <div className="text-center mt-8">
              <Button variant="hero" onClick={() => setShowMoreWeb(!showMoreWeb)}>
                {showMoreWeb ? "Show Less" : "Show More"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* UI/UX Design Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gradient mb-10 text-center">
            UI/UX Design Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showMoreDesign ? designProjects : designProjects.slice(0, 3)).map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
          {designProjects.length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="hero"
                onClick={() => setShowMoreDesign(!showMoreDesign)}
              >
                {showMoreDesign ? "Show Less" : "Show More"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Graphic Design Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gradient mb-10 text-center">
            Graphic Design Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showMoreGraphic ? graphicProjects : graphicProjects.slice(0, 3)).map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
          {graphicProjects.length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="hero"
                onClick={() => setShowMoreGraphic(!showMoreGraphic)}
              >
                {showMoreGraphic ? "Show Less" : "Show More"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
