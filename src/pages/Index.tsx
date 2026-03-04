import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile2.jpg";
import cvFile from "@/assets/Marcellaniase_Witip_CV.pdf";

const Index = () => {
  const skills = [
    "Full-Stack Development",
    "Database Architecture",
    "System Ownership & Support",
    "AI-Augmented Engineering"
  ];

  const workHistory = [
    {
      period: "04-2025 to 02-2026",
      title: "IT Specialist with KinaBoy",
      location: "Port Moresby, Papua New Guinea",
      responsibilities: ["App Developer"]
    },
    {
      period: "01-2024 to 03-2025",
      title: "Freelancer",
      location: "Lae, Morobe",
      responsibilities: ["Fixing Computer related issues", "Windows setup", "Computer network setup"]
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
    },
    {
      period: "2009 - 2015",
      degree: "Primary School Education",
      institution: "Primary School - Anguganak",
      achievement: "Awarded Grade 8 Certificate"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background gradient for visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 space-y-7 animate-fade-in">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
                  Marcellaniase <span className="text-primary">Witip</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  Application Developer
                </p>
              </div>

              <p className="text-base leading-relaxed max-w-xl">
                High-impact Application Developer with a Bachelor's in Mathematics and Computer Science from Divine Word University.
                I specialized in full-stack development using React, TypeScript, and Laravel, with a proven track record of owning projects
                from initial goal-setting to product support. Notably, I am a disciplined problem-solver who leverages AI-driven engineering 
                workflows to deliver secure, scalable, and maintainable software tailored for the unique digital landscape of Papua
                New Guinea.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="mailto:marcellancewitip15@gmail.com">
                  <Button size="lg" className="gap-2 shadow-lg hover:shadow-primary/30 transition-shadow">
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Button>
                </a>
               <a 
        // Use the base path of your GitHub Pages deployment + filename
        href="/profile/Marcellaniase_Witip_CV.pdf"
        download="Marcellaniase_Witip_CV.pdf" // Ensures the downloaded file name is correct
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" variant="outline" className="gap-2 hover:bg-accent transition-colors">
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </a>
              {/* NEW: Download Certificate of Completion Button */}
               <a 
                 href="/profile/Marcellaniase_Witip_Cert.pdf" // **Ensure this file is in your public folder!**
                 download="Marcellaniase_Witip_Cert.pdf" 
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Button size="lg" variant="outline" className="gap-2 hover:bg-accent transition-colors">
                   <Download className="w-4 h-4" />
                   Download Certificates
                 </Button>
               </a>
              </div>


              {/* Contact/Social Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-border/50">
                <a href="mailto:marcellancewitip15@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">marcellancewitip15@gmail.com</span>
                </a>
                <a href="tel:+67575758836" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>+675 75758836/ 74809867</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/marcelaniase-witip-115977245/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-scale-in">
              <div className="relative">
                {/* Visual border/glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl opacity-50" />
                <img 
                  src={profileImage} 
                  alt="Marcellaniase Witip" 
                  // Adjusted size for better responsiveness: w-64 for mobile, w-72 for sm, w-80 for md, w-96 for lg
                  className="relative rounded-2xl border-4 border-primary/50 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Skills & <span className="text-primary">Expertise</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-sm sm:text-base px-4 py-2 font-medium border-2 border-transparent hover:border-primary transition-all cursor-default"
              // Removed inline style animation delay for cleaner code; animation should typically be handled by CSS frameworks or utility classes if desired.
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>
      
      <hr className="container mx-auto px-4 border-border" />

      {/* Work Experience Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="space-y-8">
          {workHistory.map((job, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg hover:border-primary transition-all duration-300">
              <CardContent className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary">{job.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-2 mt-1 text-sm sm:text-base">
                      <MapPin className="w-4 h-4 text-accent-foreground" />
                      {job.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="self-start sm:self-auto min-w-[100px] justify-center">{job.period}</Badge>
                </div>
                <ul className="space-y-2 mt-4">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2 text-base">
                      <span className="text-primary mt-1 flex-shrink-0">●</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <hr className="container mx-auto px-4 border-border" />

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Education & <span className="text-primary">Qualifications</span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg hover:border-primary transition-all duration-300">
              <CardContent className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="self-start sm:self-auto min-w-[100px] justify-center">{edu.period}</Badge>
                </div>
                <p className="text-muted-foreground flex items-start gap-2 mt-4 text-base">
                  <span className="text-primary flex-shrink-0">●</span>
                  <span>Achievement: {edu.achievement}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <hr className="container mx-auto px-4 border-border" />

      {/* Project Highlight Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Detailed <span className="text-primary">Project</span>
        </h2>
        <Card className="border-primary/50 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-primary">
              Startrip App (2026)
            </h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base font-medium">
              The app provide all the information about the Startrip App, how to download the app, how it 
              operates with all the necessary features in it. It is hosted in Hostinger.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              https://www.startripapp.com
            </p>
          </CardContent>
        </Card>
         <Card className="border-primary/50 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-primary">
              Star Giveaway (2026)
            </h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base font-medium">
              It is a giveaway app that is build basically for giveaway. It is connected to Stripe.
              Currently the giveaway is still free. The app is hosted in the Hostinger.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
             https://www.stargiveaway.com 
            </p>
          </CardContent>
        </Card>
         <Card className="border-primary/50 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-primary">
              Gutpla (2025)
            </h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base font-medium">
              Gutpla is the app that works similar to the LinkedIn but it is a platform in
              which the job seekers signup and saved all their respective documents including
              CV so when recruiters wanted a potential candidate then they can go and search for the job
              with appropriate Qualification and Experience so potential candidate can be obtain.
              The app is hosted in the Hostinger.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
             https://www.gutpla.com
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12 md:mt-20 bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center sm:text-left text-sm">
              © 2025 Marcellaniase Witip. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Ensisi Valley, Port Moresby, Papua New Guinea</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;