
import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Associate Product Engineer",
    company: "Bizdata360 Inc.",
    period: "July 2022 - Present",
    description: "Leading development of scalable web applications using .NET Core and React. Designing and optimizing database schemas for improved performance."
  },
  {
    title: "Jr. Software Engineer",
    company: "Codemind Technology",
    period: "Jan 2021 - June 2022",
    description: "Implemented RESTful APIs for e-commerce platforms and contributed to hospital management system backend development."
  },
  {
    title: ".NET Developer",
    company: "Orinova Innovation and Technology Private Limited",
    period: "May 2020 - Dec 2020",
    description: "Developed and maintained ERP modules using .NET Framework and SQL Server. Created responsive user interfaces using HTML, CSS, and JavaScript."
  },
  {
    title: "Frontend Developer Intern",
    company: "Ux-Prodx",
    period: "Jan 2020 - Apr 2020",
    description: "Designed and developed responsive web interfaces using modern frontend technologies. Collaborated with UX designers to implement pixel-perfect designs."
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = entry.target.querySelectorAll(".timeline-item");
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add(index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight");
                (item as HTMLElement).classList.remove("opacity-0");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => {
      observer.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden opacity-0"
    >
      <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-primary/5 rounded-br-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/5 dark:bg-primary/10 rounded-full text-sm font-medium mb-4">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          {/* Timeline Center Line */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[2px] h-full bg-border"></div>
          </div>
          
          {/* Timeline Items */}
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`timeline-item opacity-0 flex mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="glass-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 h-full blur-dot">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="text-primary/80 font-medium mt-1">{exp.company}</div>
                    <div className="text-sm text-muted-foreground mt-1">{exp.period}</div>
                    <p className="mt-3 text-sm sm:text-base">{exp.description}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 border-4 border-background"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
