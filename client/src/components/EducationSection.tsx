import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  const skillsLearned = [
    "Web Development",
    "Object-Oriented Programming (Java)",
    "Database Management",
    "Python Programming",
    "Data Structures & Algorithms",
    "Software Engineering",
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover-elevate"
            data-aos="fade-up"
            data-testid="card-education"
          >
            <div className="relative p-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-md bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-poppins font-bold mb-2">
                      Skills & Knowledge Acquired
                    </h3>
                    <p className="text-lg font-montserrat text-primary font-semibold mb-1">
                      Through Courses, Projects & Self-Learning
                    </p>
                    <p className="text-muted-foreground font-montserrat">
                      2023 – ∞ (Ongoing Learning)
                    </p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-pink-500 text-white border-0">
                    Learning
                  </Badge>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h4 className="font-poppins font-semibold text-lg">Key Skills & Topics</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {skillsLearned.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/10 rounded-md hover-elevate active-elevate-2"
                          data-testid={`skill-${index}`}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-pink-500"></div>
                          <span className="font-montserrat text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-5 w-5 text-primary" />
                      <h4 className="font-poppins font-semibold text-lg">Achievements</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <p className="font-montserrat text-sm text-muted-foreground">
                          Developed practical skills through real projects and challenges
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <p className="font-montserrat text-sm text-muted-foreground">
                          Completed multiple online courses and personal projects
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <p className="font-montserrat text-sm text-muted-foreground">
                          Gained expertise in web development, programming, and algorithms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
