
import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden opacity-0"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-5 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-primary/5 rounded-tr-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/5 dark:bg-primary/10 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-2xl blur-dot">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hello, I'd like to discuss a project..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="glass-card p-8 rounded-2xl mb-8 blur-dot">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:sagarlade94@gmail.com"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      sagarlade94@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href="tel:+919359336746"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      +91-9359336746
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl blur-dot">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/sagarlade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-4 rounded-xl hover:bg-primary/20 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 text-foreground" />
                </a>
                
                <a
                  href="https://linkedin.com/in/sagarlade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-4 rounded-xl hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                </a>
                
                <a
                  href="mailto:sagarlade94@gmail.com"
                  className="bg-primary/10 p-4 rounded-xl hover:bg-primary/20 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="h-6 w-6 text-foreground" />
                </a>
              </div>
              
              <div className="mt-8">
                <p className="text-muted-foreground">Available for freelance and full-time positions. Let's talk about your project!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
