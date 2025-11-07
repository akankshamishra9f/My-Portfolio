import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPython, 
  SiDjango, 
  SiCplusplus,
  SiWordpress,
  SiReact,
  SiGit,
  SiGithub,
  SiFigma,
  SiMysql,
  SiTailwindcss
} from "react-icons/si";
import { Code2 } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26", level: 90 },
    { name: "CSS", icon: SiCss3, color: "#1572B6", level: 85 },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 80 },
    { name: "Java", icon: Code2, color: "#007396", level: 75 },
    { name: "Python", icon: SiPython, color: "#3776AB", level: 85 },
    { name: "Django", icon: SiDjango, color: "#092E20", level: 70 },
    { name: "C++", icon: SiCplusplus, color: "#00599C", level: 75 },
    { name: "WordPress", icon: SiWordpress, color: "#21759B", level: 80 },
    { name: "React.js", icon: SiReact, color: "#61DAFB", level: 75 },
    { name: "Git", icon: SiGit, color: "#F05032", level: 80 },
    { name: "GitHub", icon: SiGithub, color: "#181717", level: 80 },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 70 },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 75 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground font-montserrat max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover-elevate active-elevate-2 cursor-pointer group"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="h-8 w-8" style={{ color: skill.color }} />
                </div>
                <div className="w-full">
                  <h4 className="font-poppins font-semibold mb-2">{skill.name}</h4>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    {skill.level}%
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
