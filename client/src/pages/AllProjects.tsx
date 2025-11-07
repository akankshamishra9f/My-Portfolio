
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AllProjects() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const projects = [
    { id: "001", title: "Expanding Cards", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "002", title: "Progress Steps", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "003", title: "Rotating Navigation Animation", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "004", title: "Hidden Search Widget", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "005", title: "Blurry Loading", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "006", title: "Scroll Animation", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "007", title: "Split Landing Page", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "008", title: "Form Wave", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "009", title: "Sound Board", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "010", title: "Dad Jokes", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "011", title: "Event Keycodes", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "012", title: "FAQ Collapse", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "013", title: "Random Choice Picker", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "014", title: "Animated Navigation", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "015", title: "Incrementing Counter", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "016", title: "Drink Water", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "017", title: "Movie App", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "018", title: "Background Slider", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "019", title: "Theme Clock", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "020", title: "Button Ripple Effect", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "021", title: "Drag 'N Drop", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "022", title: "Drawing App", tech: ["HTML", "CSS", "JavaScript", "Canvas"] },
    { id: "023", title: "Kinetic Loader", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "024", title: "Content Placeholder", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "025", title: "Sticky Navbar", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "026", title: "Double Vertical Slider", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "027", title: "Toast Notification", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "028", title: "GitHub Profiles", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "029", title: "Double Click Heart", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "030", title: "Auto Text Effect", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "031", title: "Password Generator", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "032", title: "Good Cheap Fast", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "033", title: "Notes App", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "034", title: "Animated Countdown", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "035", title: "Image Carousel", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "036", title: "Hoverboard", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "037", title: "Pokedex", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "038", title: "Mobile Tab Navigation", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "039", title: "Password Strength Background", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "040", title: "3D Background Boxes", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "041", title: "Verify Account UI", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "042", title: "Live User Filter", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "043", title: "Feedback UI Design", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "044", title: "Custom Range Slider", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "045", title: "Netflix Mobile Navigation", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "046", title: "Quiz App", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "047", title: "Testimonial Box Switcher", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "048", title: "Random Image Feed", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "049", title: "Todo List", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "050", title: "Insect Catch Game", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "051", title: "Video Background", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "052", title: "Portfolio with CSS Grid", tech: ["HTML", "CSS"] },
    { id: "053", title: "Touch Slider", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "054", title: "CSS Loaders", tech: ["HTML", "CSS"] },
    { id: "055", title: "Glass Dashboard", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "056", title: "Image Comparison Slider", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "057", title: "Parallax Background with SVG", tech: ["HTML", "CSS", "SVG"] },
    { id: "058", title: "3D Product Card", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "059", title: "Form Validator", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "060", title: "Movie Seat Booking", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "061", title: "Custom Video Player", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "062", title: "Exchange Rate Calculator", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "063", title: "DOM Array Methods", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "064", title: "Menu Slider & Modal", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "065", title: "Hangman Game", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "066", title: "Meal Finder", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "067", title: "Expense Tracker", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "068", title: "Music Player", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "069", title: "Infinite Scroll Posts", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "070", title: "Typing Game", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "071", title: "Speech Text Reader", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "072", title: "Memory Cards", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "073", title: "Lyrics Search App", tech: ["HTML", "CSS", "JavaScript", "API"] },
    { id: "074", title: "Relaxer App", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "075", title: "Breakout Game", tech: ["HTML", "CSS", "JavaScript", "Canvas"] },
    { id: "076", title: "New Year Countdown", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "077", title: "Sortable List", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "078", title: "Speak Number Guessing Game", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "079", title: "Creative Agency Website", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "080", title: "Health Dashboard", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "081", title: "Animated SVG", tech: ["HTML", "CSS", "SVG"] },
    { id: "082", title: "Parallax Landing Page", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "083", title: "Full-Screen Image Slider", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "084", title: "Fluid Image Lightbox", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "085", title: "Sneaker Shop", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "086", title: "Coming Soon Page", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "087", title: "Sliding Sign-In & Sign-Up Form", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "088", title: "Promo Code", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "089", title: "One Color UI", tech: ["HTML", "CSS"] },
    { id: "090", title: "Tooltip", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "091", title: "Chat Interface", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "092", title: "Music Streaming Service", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "093", title: "Creative Portfolio", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "094", title: "Laptop UI", tech: ["HTML", "CSS"] },
    { id: "095", title: "Headphones Product Page", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "096", title: "Cloud Hosting Service", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "097", title: "Terminal Style Landing Page", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "098", title: "Magazine Layout", tech: ["HTML", "CSS"] },
    { id: "099", title: "Parallax Website", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "100", title: "Hulu Webpage Clone", tech: ["HTML", "CSS", "JavaScript"] },
    { id: "101", title: "Cascade Layers", tech: ["HTML", "CSS"] },
    { id: "102", title: "Container Queries", tech: ["HTML", "CSS"] },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6 hover-elevate"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              All My{" "}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground font-montserrat max-w-2xl mx-auto">
              A complete collection of {projects.length} HTML, CSS & JavaScript projects
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover-elevate relative hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 20, 400)}
            >
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    #{project.id}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 hover-elevate opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => console.log(`View project: ${project.title}`)}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <h3 className="text-lg font-poppins font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
