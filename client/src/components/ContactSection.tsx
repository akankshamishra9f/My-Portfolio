import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:akanksha@example.com",
      label: "akanksha@example.com",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com/in/akankshamishra",
      label: "linkedin.com/in/akankshamishra",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/akankshaM",
      label: "github.com/akankshaM",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground font-montserrat max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div data-aos="fade-right">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 h-full">
              <h3 className="text-2xl font-poppins font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-montserrat font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    required
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 font-montserrat font-semibold shadow-lg shadow-primary/50 hover-elevate active-elevate-2"
                  data-testid="button-submit"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
              <h3 className="text-2xl font-poppins font-semibold mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    data-testid={`link-${social.name.toLowerCase()}`}
                  >
                    <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-primary/20 hover-elevate active-elevate-2 cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-md bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <social.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-semibold">{social.name}</h4>
                          <p className="text-sm text-muted-foreground font-montserrat">
                            {social.label}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-pink-500/10 border-primary/20">
              <h3 className="text-xl font-poppins font-semibold mb-3">Let's work together!</h3>
              <p className="text-muted-foreground font-montserrat text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you need a website, want to collaborate on a project, or just want to say hi, my inbox is always open!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
