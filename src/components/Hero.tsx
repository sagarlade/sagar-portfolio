
import { ArrowDownToLine, Send } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const profileImageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !profileImageRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Subtle tilt effect
      profileImageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg) translateZ(10px)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-10"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <div className="inline-block animate-fadeIn opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
                <span className="inline-block px-3 py-1 bg-primary/5 dark:bg-primary/10 rounded-full text-sm font-medium">
                  Full Stack Developer
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight animate-fadeIn opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] text-balance">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Sagar Lade
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 animate-fadeIn opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] text-balance">
                I build responsive and scalable web applications with modern technologies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeIn opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="mr-2 h-4 w-4" />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-300 border border-border"
              >
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div 
            ref={containerRef}
            className="lg:col-span-2 flex justify-center animate-fadeIn opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-spin [animation-duration:15s]"></div>
              <div className="absolute inset-[6px] rounded-full bg-background"></div>
              <div className="absolute inset-[10px] rounded-full overflow-hidden">
                <img
                  ref={profileImageRef}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Sagar Lade"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <div className="w-8 h-12 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-1 h-2 bg-primary rounded-full animate-fadeInSlow opacity-0 [animation-delay:1.5s] [animation-fill-mode:forwards]"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
