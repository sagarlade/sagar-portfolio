
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hospital Management System",
    description: "A comprehensive system for managing hospital operations, patient records, and appointments with role-based access control.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: [".NET Core", "SQL Server", "React", "Azure"],
    link: "#"
  },
  {
    title: "Pharmacy Management System",
    description: "An inventory and sales management solution for pharmacies with expiry tracking and automated reordering capabilities.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
    link: "#"
  },
  {
    title: "Spotify Clone",
    description: "A music streaming application with user authentication, playlist creation, and audio playback functionality.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Movie API",
    description: "RESTful API for movie information with search, filtering, and user review functionality.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["ASP.NET Core", "SQL", "Azure Functions", "Swagger"],
    link: "#"
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const projectsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectItems = entry.target.querySelectorAll(".project-card");
            projectItems.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("animate-fadeIn");
                (item as HTMLElement).classList.remove("opacity-0");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
      projectsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden opacity-0"
    >
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-primary/5 rounded-tl-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/5 dark:bg-primary/10 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card opacity-0 group relative overflow-hidden rounded-xl blur-dot"
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="aspect-video overflow-hidden rounded-xl border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-primary/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
              
              {/* Non-hover overlay with title only */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
