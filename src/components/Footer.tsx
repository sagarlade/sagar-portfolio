
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/80 text-sm">
              © {new Date().getFullYear()} Sagar Lade. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#home"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-primary/80 backdrop-blur-sm text-primary-foreground rounded-full shadow-lg hover:bg-primary transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
