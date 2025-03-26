
import { useEffect, useRef } from "react";

const skills = [
  { name: ".NET", icon: "💻" },
  { name: "ASP .NET Core", icon: "💻" },
  { name: "JavaScript", icon: "⚡" },
  { name: "C#", icon: "C#"},
  { name: "React.js", icon: "⚛️" },
  { name: "SQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "HTML/CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Git", icon: "📝" },
  { name: "Docker", icon: "🐳" },
  { name: "RESTful APIs", icon: "🔌" },
  { name: "Agile/Scrum", icon: "🔄" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll(".skill-item");
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("animate-fadeIn");
                (item as HTMLElement).classList.remove("opacity-0");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden opacity-0"
    >
      <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-primary/5 rounded-bl-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary/5 dark:bg-primary/10 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Background
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-lg glass-card">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-balance">
              I am a Full Stack Developer with expertise in .NET, C#, JavaScript, React.js, SQL, Entity Framework and MongoDB. 
              With 2.1 years of experience, I have worked on  e-commerce APIs, and hospital management systems. 
              Passionate about building scalable applications and optimizing databases.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
          
          <div 
            ref={skillsRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item opacity-0 group glass-card p-5 rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 blur-dot"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl sm:text-3xl mb-3">{skill.icon}</span>
                <h4 className="font-medium">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
