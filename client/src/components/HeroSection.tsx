import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@assets/generated_images/Profile_photo_placeholder_05b41d0d.png";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current && typeof window !== "undefined" && (window as any).Typed) {
      const typed = new (window as any).Typed(typedRef.current, {
        strings: [
          "Web Developer",
          "Python Programmer",
          "Creative Designer",
          "Problem Solver",
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true,
        backDelay: 2000,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-purple-950/20 to-pink-950/20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <div className="inline-block mb-4">
              <span className="text-sm font-montserrat font-medium px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Akanksha Mishra
              </span>{" "}
              <span className="inline-block animate-float">👋</span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-semibold mb-6 h-12">
              <span ref={typedRef} className="text-primary"></span>
            </div>

            <p className="text-lg text-muted-foreground font-montserrat mb-8 max-w-2xl mx-auto lg:mx-0">
              B.Sc Computer Science Student at St. John College, passionate about creating
              beautiful and functional web experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-poppins font-semibold px-8 shadow-lg hover-elevate relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">About Me</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-primary/50 text-primary hover:bg-primary/10 font-poppins font-semibold px-8 hover-elevate hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-pink-500/50 text-pink-500 hover:bg-pink-500/10 font-poppins font-semibold px-8 hover-elevate hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:scale-105 transition-all duration-300"
              >
                Contact
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-500 rounded-full blur-2xl opacity-50 animate-glow-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
                <img
                  src={profileImage}
                  alt="Akanksha Mishra"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="rounded-full hover-elevate active-elevate-2"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
}