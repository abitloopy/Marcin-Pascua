import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { achievementsData } from '../data/achievements';

const projectsData = [
  {
    title: "Diaworld",
    year: "2023",
    subtitle: "First webdev passion project of an online jewelry store",
    badge: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Multivape Shop",
    year: "2024",
    subtitle: "First group project of an online extension of a physical vape store",
    badge: ["Java"]
  },
  {
    title: "Beedget",
    year: "2025",
    subtitle: "A simple budget planner system that helps you track your savings and expense. User and admin side are made using C# windows forms",
    badge: ["C#", "SQL Server Management Studio"]
  },
  {
    title: "Saligra",
    year: "2026",
    subtitle: "An advanced Model Context Protocol (MCP) powered borrower reliability system designed to evaluate creditworthiness through intelligent risk-scoring.",
    badge: ["React", "Tailwind CSS", "MCP Server (Tools)", "Express (Client)", "TypeScript", "Node.js"]
  },
  {
    title: "RECAP",
    year: "2026",
    subtitle: "A mobile-responsive quiz bowl management and automated scoring system that streamlines event organization, answer recognition, scoring, participant monitoring, and real-time leaderboard updates.",
    badge: ["Computer Vision", "OCR", "CNN", "React", "Supabase"]
  },
  {
    title: "Chew!",
    year: "2026",
    subtitle: "[UI/UX] A comprehensive design case study for an AI-powered smart meal planner, featuring personalized recipe recommendations and intuitive user flows.",
    badge: ["Figma"]
  },
  {
    title: "Zura",
    year: "2026",
    subtitle: "[UI/UX] An IoT-enabled smart waste management system that provides real-time monitoring of waste-bin levels and conditions to support timely collection and more efficient waste management.",
    badge: ["Figma"]
  },
  {
    title: "Scholaria",
    year: "2026",
    subtitle: "A system for recommending scholarship to a student based on the students eligibility.",
    badge: ["React", "Supabase", "Tailwind CSS"]
  }
].sort((a, b) => parseInt(b.year) - parseInt(a.year));

export default function ResumePage() {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin:       0.5,
      filename:     'Marcin_Pascua_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 flex flex-col items-center">
      
      {/* Action Bar */}
      <div className="w-full max-w-[800px] flex justify-end mb-6">
        <button 
          onClick={handleDownload}
          className="bg-[#637C50] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#A1C680] hover:-translate-y-0.5 transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <i className="fa-solid fa-download"></i> Download PDF
        </button>
      </div>

      {/* Resume Container (A4 / Letter aspect ratio) */}
      <div className="w-full max-w-[794px] bg-white shadow-xl flex flex-col mx-auto overflow-hidden p-8 md:p-12">
        <div ref={resumeRef} className="w-full h-full bg-white text-black text-[12px]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          
          {/* HEADER */}
          <div className="text-center mb-2">
            <h1 className="text-[18px] font-bold mb-1 tracking-tight">Marcin A. Pascua</h1>
            <h2 className="italic text-gray-700 mb-2">Full-Stack Developer | UI/UX Designer</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1"><i className="fa-solid fa-envelope"></i> pascua.marcin1@gmail.com</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-location-dot"></i> Lapu-Lapu City, Cebu, Philippines</span>
              <span className="flex items-center gap-1"><i className="fa-brands fa-github"></i> github.com/abitloopy</span>
              <span className="flex items-center gap-1"><i className="fa-brands fa-linkedin"></i> linkedin.com/in/marcinpascua</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-globe"></i> marcin-pascua.vercel.app</span>
            </div>
          </div>

          {/* TWO COLUMNS */}
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            
            {/* LEFT COLUMN */}
            <div className="flex-1 w-full md:w-1/2 flex flex-col gap-4">
              
              {/* EXPERIENCE */}
              <section>
                <div className="border-t-2 border-b-2 border-black py-0.5 mb-1 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-briefcase"></i>
                  <h3 className="font-bold text-[12px] uppercase tracking-wider">Professional Experience</h3>
                </div>
                
                <div className="mb-2">
                  <h4 className="font-bold">IT Student / Developer</h4>
                  <div className="flex justify-between mb-1 italic">
                    <span>University of Cebu - Lapu-Lapu and Mandaue</span>
                    <span>2023 - Present | Cebu, Philippines</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-1">
                    <li>Gaining comprehensive knowledge in software engineering, UI/UX design, and database management.</li>
                    <li>Achieved Level 3 proficiency in the Test of Practical Competency in IT (TOPCIT).</li>
                    <li>Actively participating and winning awards in regional hackathons and programming competitions.</li>
                    <li>Collaborating with peers to design, develop, and deploy software solutions and case studies.</li>
                  </ul>
                </div>
              </section>

              {/* AWARDS */}
              <section>
                <div className="border-t-2 border-b-2 border-black py-0.5 mb-1 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-award"></i>
                  <h3 className="font-bold text-[12px] uppercase tracking-wider">Awards</h3>
                </div>
                
                <div className="flex flex-col gap-1">
                  {achievementsData.map((award, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold leading-tight">{award.title}</h4>
                      <div className="italic text-gray-700 flex justify-between">
                        <span>{award.award}</span>
                        <span>{award.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-1 w-full md:w-1/2 flex flex-col gap-4">
              {/* PROJECTS */}
              <section>
                <div className="border-t-2 border-b-2 border-black py-0.5 mb-1 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-code-branch"></i>
                  <h3 className="font-bold text-[12px] uppercase tracking-wider">Projects</h3>
                </div>
                
                <div className="flex flex-col gap-1">
                  {projectsData.slice(0, 5).map((project, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-start mb-0.5">
                        <h4 className="font-bold leading-tight">{project.title}</h4>
                        <span className="italic whitespace-nowrap">{project.year}</span>
                      </div>
                      <p className="leading-snug mb-1">{project.subtitle}</p>
                      {project.badge && project.badge.length > 0 && (
                        <p className="font-semibold text-gray-800">
                          Tech Stack: <span className="font-normal">{project.badge.join(', ')}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* BOTTOM SPAN: SKILLS */}
          <div className="w-full flex flex-col gap-1">
            
            {/* CERTIFICATIONS */}
            <section>
              <div className="border-t-2 border-b-2 border-black py-0.5 mb-1 flex items-center justify-center gap-2">
                <i className="fa-solid fa-certificate"></i>
                <h3 className="font-bold text-[12px] uppercase tracking-wider">Certifications</h3>
              </div>
              <div className="flex flex-wrap justify-center md:justify-between px-4 gap-x-6 gap-y-1">
                <span>• TOPCIT Level 3</span>
                <span>• IBM SkillsBuild: Data Fundamentals</span>
                <span>• Cisco CCNA: Switching, Routing, and Wireless Essentials</span>
              </div>
            </section>

            {/* LANGUAGES */}
            <section>
              <div className="border-t-2 border-b-2 border-black py-0.5 mb-1 flex items-center justify-center gap-2">
                <i className="fa-solid fa-code"></i>
                <h3 className="font-bold text-[12px] uppercase tracking-wider">Languages</h3>
              </div>
              <div className="flex flex-wrap justify-between px-4">
                <span>• HTML/CSS/JS</span>
                <span>• C/C#/C++</span>
                <span>• Java</span>
                <span>• PHP</span>
                <span>• SQL</span>
              </div>
            </section>

            {/* FRAMEWORKS */}
            <section>
              <div className="border-t-2 border-b-2 border-black py-0.5 mb-1 flex items-center justify-center gap-2">
                <i className="fa-solid fa-layer-group"></i>
                <h3 className="font-bold text-[12px] uppercase tracking-wider">Frameworks</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <span>React.js</span> <span className="text-gray-400">|</span> 
                <span>Tailwind CSS</span> <span className="text-gray-400">|</span> 
                <span>Laravel</span> <span className="text-gray-400">|</span>
                <span>Express</span> <span className="text-gray-400">|</span>
                <span>Node.js</span>
              </div>
            </section>

            {/* TOOLS */}
            <section>
              <div className="border-t-2 border-b-2 border-black py-0.5 mb-1 flex items-center justify-center gap-2">
                <i className="fa-solid fa-wrench"></i>
                <h3 className="font-bold text-[12px] uppercase tracking-wider">Tools</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <span>Git & GitHub</span> <span className="text-gray-400">|</span> 
                <span>Figma</span> <span className="text-gray-400">|</span> 
                <span>SQL Server</span> <span className="text-gray-400">|</span>
                <span>Supabase</span>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
