import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioImg from "@assets/generated_images/Portfolio_website_project_a2967c34.png";
import weatherImg from "@assets/generated_images/Weather_app_project_39fccd8c.png";
import studentImg from "@assets/generated_images/Student_management_system_5845eb99.png";
import blogImg from "@assets/generated_images/Blog_website_project_bb909ec2.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio showcasing my skills and projects with smooth animations and interactive elements.",
      image: portfolioImg,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather application using API integration to display current weather conditions and forecasts for any location.",
      image: weatherImg,
      tech: ["JavaScript", "API", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Student Management System",
      description: "Full-stack web application for managing student records, grades, and attendance with Django backend and responsive UI.",
      image: studentImg,
      tech: ["Python", "Django", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blog Website",
      description: "Content management system built with WordPress, featuring custom themes, plugins, and optimized for SEO and performance.",
      image: blogImg,
      tech: ["WordPress", "PHP", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:4xl font-poppins font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground font-montserrat max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover-elevate active-elevate-2 relative hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-project-${index}`}
            >
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1s_ease-in-out_infinite]"></div>
              <div className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1.2s_ease-in-out_0.2s_infinite]"></div>
              <div className="absolute top-6 right-3 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_0.9s_ease-in-out_0.4s_infinite]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/50 backdrop-blur-sm border-primary/30 hover-elevate"
                      onClick={() => console.log(`View demo: ${project.title}`)}
                      data-testid={`button-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/50 backdrop-blur-sm border-primary/30 hover-elevate"
                      onClick={() => console.log(`View code: ${project.title}`)}
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-montserrat text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <Button
            size="lg"
            onClick={() => console.log("View all projects")}
            className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-poppins font-semibold px-10 shadow-lg hover-elevate relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 hover:animate-[bounceScale_0.6s_ease-in-out]"
            data-testid="button-view-all-projects"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="absolute inset-0 rounded-md group-hover:animate-[ripple_0.6s_ease-out] bg-white/20"></span>
            <span className="relative flex items-center gap-2">
              View All Projects
              <ExternalLink className="h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}