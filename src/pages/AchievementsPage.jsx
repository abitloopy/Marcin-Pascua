import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { achievementsData } from "../data/achievements";
import AchievementCard from "../components/ui/AchievementCard";

export default function AchievementsPage() {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto-play for main gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle hash scrolling for #certificates
  useEffect(() => {
    if (location.hash === '#certificates') {
      setTimeout(() => {
        const element = document.getElementById('certificates');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
  };

  const currentAchievement = achievementsData[currentIndex];

  return (
    <div className="min-h-screen font-poppins">
      
      {/* Beige Top Section */}
      <div className="w-full bg-[#fcfcf9] pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* Intro Heading & Subheading */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-gray-900 font-bold mb-3 leading-tight">
              My Journey & <span className="text-[#637C50]">Milestones</span>
            </h1>
            <p className="text-gray-500 font-medium text-[15px] md:text-base max-w-3xl leading-relaxed mx-auto">
              A visual gallery of the competitions I've joined, the challenges I've conquered, and the recognitions I've received along the way. Every picture tells a story of growth and learning.
            </p>
          </div>

          {/* Main Featured Image Area */}
          <div className="relative w-full max-w-[1000px] mx-auto flex items-center justify-center mb-8">
            
            {/* Outer Left Arrow */}
            <button 
              onClick={handlePrev}
              className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 text-gray-500 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md z-10"
            >
              <i className="fa-solid fa-arrow-left text-sm md:text-base"></i>
            </button>

            <div className="relative w-full aspect-[4/3] md:aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentAchievement.image}
                  alt={currentAchievement.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full object-cover opacity-90"
                />
              </AnimatePresence>
              
              {/* Main Image Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                 <div className="flex items-center gap-3 mb-2">
                    <span className="bg-[#637C50] px-2.5 py-0.5 rounded text-[11px] font-bold tracking-widest uppercase">
                      {currentAchievement.award}
                    </span>
                    <span className="text-gray-300 text-xs md:text-sm font-medium">{currentAchievement.year}</span>
                 </div>
                 <h2 className="text-xl md:text-2xl font-bold mb-1">{currentAchievement.title}</h2>
              </div>
            </div>
            
            {/* Outer Right Arrow */}
            <button 
              onClick={handleNext}
              className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#637C50] text-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#4a5d3c] z-10"
            >
              <i className="fa-solid fa-arrow-right text-sm md:text-base"></i>
            </button>
          </div>

        </div>
      </div>

      {/* Stories Section (White Background) */}
      <div className="w-full bg-white pt-16 pb-20">
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* Blog Cards Section */}
          <div className="w-full">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                Stories & <span className="text-[#637C50]">Experiences</span>
              </h2>
              <p className="text-gray-500 font-medium text-[15px] md:text-base max-w-2xl leading-relaxed">
                Read more about the challenges, the hard work, and the experiences behind every milestone I've reached.
              </p>
            </div>

            <div className="flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto">
              {achievementsData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 group cursor-pointer`}
                  >
                    {/* Card Image */}
                    <div 
                      className="relative w-full md:w-[45%] aspect-video rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                      />
                      {/* Floating Year/Logo */}
                      <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                        <img src={item.logo} alt="Logo" className="w-4 h-4 object-contain" />
                        <span className="text-[11px] font-bold text-[#637C50] tracking-wider uppercase">{item.year}</span>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="w-full md:w-[55%] flex flex-col justify-center text-left">
                      <div className="mb-4 inline-flex">
                        <span className="bg-[#f0f5ed] text-[#637C50] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                          {item.award}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#637C50] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Formal Certificates Section */}
      <div id="certificates" className="w-full bg-gray-50 py-24 px-4 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#637C50] font-bold text-sm tracking-widest uppercase mb-4 block">Continuous Learning</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold tracking-tight">
              Professional Certifications
            </h2>
            <div className="w-24 h-1 bg-[#637C50] mx-auto mt-6 rounded-full opacity-80"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { image: "/topcit.png", pdf: "/topcit-cert.pdf", starred: true },
              { image: "/cert1.png" },
              { image: "/cert2.png" },
              { image: "/cert3.png" },
              { image: "/cert4.png" },
              { image: "/cert5.png" }
            ].map((cert, index) => {
              const certImage = cert.image || cert;
              const certPdf = cert.pdf || null;
              return (
              <div 
                key={index} 
                onClick={() => {
                  if (certPdf) window.open(certPdf, '_blank');
                  else setSelectedImage(certImage);
                }}
                className={`relative bg-white rounded-2xl p-4 shadow-sm border ${cert.starred ? 'border-yellow-400 ring-2 ring-yellow-400/20 bg-yellow-50/10' : 'border-gray-100'} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] flex items-center justify-center overflow-hidden group cursor-pointer`}
              >
                {cert.starred && (
                  <div className="absolute top-3 right-3 bg-gradient-to-br from-yellow-300 to-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md z-10" title="Featured">
                    <i className="fa-solid fa-star text-sm drop-shadow-sm"></i>
                  </div>
                )}
                <img 
                  src={certImage} 
                  alt={`Certificate ${index + 1}`} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                />
              </div>
            )})}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors w-10 h-10 flex items-center justify-center bg-black/50 rounded-full"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
