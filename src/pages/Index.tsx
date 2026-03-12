import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink, Code, GraduationCap, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile2.jpg";

const Index = () => {
  const skills = [
    "FULL-STACK DEVELOPMENT",
    "DATABASE ARCHITECTURE",
    "SYSTEM OWNERSHIP & SUPPORT",
    "AI-AUGMENTED ENGINEERING"
  ];

  const workHistory = [
    {
      period: "04/2025 - 02/2026",
      title: "IT SPECIALIST (APP DEVELOPER & IT SUPPORT)",
      company: "Kinaboy Limited",
      location: "Port Moresby, NCD",
      responsibilities: ["Lead application development projects", "Provided comprehensive IT support and system maintenance"]
    },
    {
      period: "01/2024 - 03/2025",
      title: "IT SUPPORT",
      company: "Freelancer",
      location: "Lae, Morobe",
      responsibilities: ["Fixing computer related issues", "Windows setup", "Computer network setup"]
    }
  ];

  const education = [
    {
      period: "2020 - 2023",
      degree: "BACHELOR'S DEGREE IN MATHEMATICS AND COMPUTING SCIENCE",
      institution: "Divine Word University - Madang",
      detail: "Focused on advanced computing principles and mathematical modeling."
    },
    {
      period: "2018 - 2019",
      degree: "GRADE 12 CERTIFICATE",
      institution: "Don Bosco Technical Secondary School - Vanimo",
      detail: "Technical education foundation."
    }
  ];

  const projects = [
    {
      title: "STARTRIP APP",
      year: "2026",
      description: "Information platform detailing app operations and download features.",
      link: "https://www.startripapp.com",
      host: "Hostinger"
    },
    {
      title: "STAR GIVEAWAY",
      year: "2026",
      description: "Giveaway application integrated with Stripe for payment processing.",
      link: "https://www.stargiveaway.com",
      host: "Hostinger"
    },
    {
      title: "GUTPLA",
      year: "2025",
      description: "Professional networking and recruitment platform for job seekers and recruiters in PNG.",
      link: "https://www.gutpla.com",
      host: "Hostinger"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-[#0077cc] text-white py-16 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full scale-110" />
              <img 
                src={profileImage} 
                alt="Marcellaniase Witip" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white object-cover shadow-xl"
              />
            </div>
            <div className="text-center md:text-left space-y-4">
              <div className="space-y-1">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                  Marcellaniase <span className="text-blue-100">Witip</span>
                </h1>
                <p className="text-xl md:text-2xl font-bold tracking-widest text-blue-50 opacity-90 uppercase">
                  Application Developer
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a href="mailto:marcellancewitip15@gmail.com">
                  <Button variant="secondary" className="font-bold">
                    <Mail className="mr-2 w-4 h-4" /> Email Me
                  </Button>
                </a>
                <a href="/profile/Marcellaniase_Witip_CV.pdf" download>
                  <Button className="bg-white text-[#0077cc] hover:bg-blue-50 font-bold">
                    <Download className="mr-2 w-4 h-4" /> Download CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Contact & Skills */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-black border-b-4 border-[#0077cc] pb-2 inline-block uppercase">Contact</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-5 h-5 text-[#0077cc]" />
                <span>Ensisi Valley, Port Moresby, PNG</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="w-5 h-5 text-[#0077cc]" />
                <span>+675 75758836 / 74809867</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Linkedin className="w-5 h-5 text-[#0077cc]" />
                <a href="https://www.linkedin.com/in/marcellaniase-witip-115977245/" className="hover:underline">LinkedIn Profile</a>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black border-b-4 border-[#0077cc] pb-2 inline-block uppercase">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <Badge key={i} className="bg-slate-200 text-slate-700 hover:bg-[#0077cc] hover:text-white transition-colors py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black border-b-4 border-[#0077cc] pb-2 inline-block uppercase">Hobbies</h2>
            <div className="grid grid-cols-2 gap-2 text-slate-600 font-medium">
              <div className="flex items-center gap-2"><span>♡</span> Coding</div>
              <div className="flex items-center gap-2"><span>♡</span> Swimming</div>
              <div className="flex items-center gap-2"><span>♡</span> Footy</div>
            </div>
          </section>
        </div>

        {/* Right Column: Experience, Education, Projects */}
        <div className="lg:col-span-2 space-y-12">
          {/* Summary Section */}
          <section className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-[#0077cc]">
            <h2 className="text-2xl font-black mb-3 uppercase">Summary</h2>
            <p className="text-slate-600 leading-relaxed italic">
              "High-impact Application Developer with a Bachelor's in Mathematics and Computing Science from Divine Word University. 
              Specialized in full-stack development... delivering secure, scalable software tailored for the unique digital landscape of Papua New Guinea."
            </p>
          </section>

          {/* Work History */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-3 uppercase">
              <Briefcase className="text-[#0077cc]" /> Work History
            </h2>
            <div className="space-y-6">
              {workHistory.map((job, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0077cc]" />
                  <div className="flex flex-col md:flex-row md:justify-between mb-1">
                    <h3 className="font-bold text-lg text-[#0077cc]">{job.title}</h3>
                    <span className="text-sm font-bold text-slate-400">{job.period}</span>
                  </div>
                  <p className="font-bold text-slate-700">{job.company}</p>
                  <ul className="mt-2 space-y-1 text-slate-600 list-disc list-inside">
                    {job.responsibilities.map((res, j) => <li key={j}>{res}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-3 uppercase">
              <Code className="text-[#0077cc]" /> Project Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj, i) => (
                <Card key={i} className="hover:border-[#0077cc] transition-all">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-black text-lg">{proj.title} <span className="text-slate-400 text-sm">({proj.year})</span></h3>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-600">{proj.description}</p>
                    <div className="pt-2">
                      <a href={proj.link} target="_blank" className="text-[#0077cc] text-xs font-bold hover:underline">
                        {proj.link.replace('https://', '')}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-3 uppercase">
              <GraduationCap className="text-[#0077cc]" /> Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold uppercase text-slate-800">{edu.degree}</h3>
                    <span className="font-bold text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-[#0077cc] font-medium">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 Marcellaniase Witip | Port Moresby, Papua New Guinea</p>
      </footer>
    </div>
  );
};

export default Index;