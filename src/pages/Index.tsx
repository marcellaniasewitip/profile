import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile2.jpg";

const Index = () => {
  const skills = [
    "App/Web Developer",
    "Network Configuration/Setup",
    "IT Support",
    "System Administration",
    "React & TypeScript",
    "Database Systems",
    "API Development",
    "GIS Integration"
  ];

  const workHistory = [
    {
      period: "2025-11 to 2025-04",
      title: "IT Specialist with KinaBoy",
      location: "Port Moresby, Papua New Guinea",
      responsibilities: ["App Developer and IT Support"]
    },
    {
      period: "2025-03 to 2024-01",
      title: "Freelancer",
      location: "Lae, Morobe",
      responsibilities: ["Fixing Computer related issues", "Windows setup", "Computer network setup"]
    },
    {
      period: "2023-09 to 2023-10",
      title: "Voluntary Assistant",
      location: "Divine Word University, Madang",
      responsibilities: ["Configuring and Deploying of MCS final year project (2023) application on server"]
    }
  ];

  const education = [
    {
      period: "2020 - 2023",
      degree: "Bachelor of Mathematics and Computing Science",
      institution: "Divine Word University - Madang",
      achievement: "Awarded Bachelor's Degree in Mathematics and Computing Science (GPA: 2.91)"
    },
    {
      period: "2018 - 2019",
      degree: "Secondary Education",
      institution: "Don Bosco Secondary - Vanimo",
      achievement: "Awarded Grade 12 Certificate"
    },
    {
      period: "2016 - 2017",
      degree: "High School Education",
      institution: "Lumi High School - Lumi",
      achievement: "Awarded Grade 10 Certificate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Marcellaniase <span className="text-primary">Witip</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  IT Specialist & Developer
                </p>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Mathematics & Computing Science graduate from Divine Word University, Papua New Guinea. 
                Specialized in software development, network configuration, and IT support with a passion 
                for creating functional solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:marcellancewitip15@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">marcellancewitip15@gmail.com</span>
                </a>
                <a href="tel:+67574809867" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+675 74809867</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/marcelaniase-witip-115977245/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" style={{ boxShadow: 'var(--shadow-glow)' }} />
                <img 
                  src={profileImage} 
                  alt="Marcellaniase Witip" 
                  className="relative rounded-2xl border-2 border-primary/30 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          Skills & <span className="text-primary">Expertise</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-sm md:text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="space-y-6">
          {workHistory.map((job, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="self-start md:self-auto">{job.period}</Badge>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          Education & <span className="text-primary">Qualifications</span>
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="self-start md:self-auto">{edu.period}</Badge>
                </div>
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>{edu.achievement}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Highlight Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          Featured <span className="text-primary">Project</span>
        </h2>
        <Card className="border-primary/50">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Project Tracking Management System
            </h3>
            <p className="text-muted-foreground mb-4">
              <span className="text-primary font-medium">Final Year Project (2023)</span> - Nuku District, West Sepik
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Developed a comprehensive project tracking and management system for Nuku District 
              administration, enabling efficient monitoring and coordination of district-level projects 
              and initiatives.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12 md:mt-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 Marcellaniase Witip. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Ensisi Valley, Port Moresby, Papua New Guinea</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
