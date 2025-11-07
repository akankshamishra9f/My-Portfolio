import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Sc Computer Science at St. John College (2023-2026)",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Merging creativity and logic to build amazing experiences",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring new technologies and AI innovations",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 shadow-lg hover-elevate">
              <h3 className="text-2xl font-poppins font-semibold mb-4">
                Hello! I'm Akanksha Mishra
              </h3>
              <p className="text-muted-foreground font-montserrat leading-relaxed mb-4">
                I'm currently pursuing B.Sc Computer Science at St. John College, expected to
                graduate in 2025–26. I love merging creativity and logic to develop modern,
                user-friendly web experiences.
              </p>
              <p className="text-muted-foreground font-montserrat leading-relaxed mb-4">
                My goal is to become a full-stack developer and work on innovative projects
                that make a real impact. I believe in continuous learning and pushing the
                boundaries of what's possible with code.
              </p>
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-md">
                <h4 className="font-poppins font-semibold text-primary mb-2">
                  Fun Facts & Hobbies
                </h4>
                <ul className="space-y-2 text-muted-foreground font-montserrat text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    I love exploring new technologies and frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    Designing creative UIs is my creative outlet
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    Reading about AI innovations and their applications
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover-elevate active-elevate-2 cursor-pointer group"
                data-testid={`card-highlight-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-poppins font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground font-montserrat">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
