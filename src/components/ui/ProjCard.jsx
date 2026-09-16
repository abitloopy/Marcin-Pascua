import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjCard({ image, title, subtitle, year, badge, useModal = false, variant = "hover" }) {
  const [showDetails, setShowDetails] = useState(false);

  const CoverContent = (
    <div className="relative w-full aspect-video sm:aspect-[16/10] flex flex-col justify-end group bg-gray-900 h-full">
      <div className="absolute inset-0 z-0">
        {image?.endsWith(".mp4") ? (
          <video src={image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 p-5 flex items-end justify-between gap-4 mt-auto">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-white mb-1 drop-shadow-md truncate">{title}</h1>
          <p className="text-sm text-gray-200 drop-shadow-md">{year}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[11px] text-white/80 truncate">{badge?.[0]}</span>
          </div>
        </div>
        
        {useModal && (
          <div className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors text-white px-4 py-1.5 rounded-full font-semibold shadow-lg shrink-0">
            <span className="text-sm">See more</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  const DetailsContent = (
    <div className="flex flex-col h-full p-4 bg-white">
      <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4 shrink-0 bg-gray-100">
        {image?.endsWith(".mp4") ? (
          <video src={image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="px-2 pb-1 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 shrink-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">{title}</h1>
            <p className="text-sm text-gray-500 font-medium mt-1">{year}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 overflow-y-auto">{subtitle}</p>
        <div className="flex items-center justify-between mt-auto pt-2 shrink-0">
          <div className="flex flex-wrap gap-2 flex-1 pt-2">
            {badge?.map((item, index) => (
              <div key={index} className="bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        className={`w-full max-w-[600px] relative rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 font-poppins mx-auto flex flex-col overflow-hidden z-10 ${useModal || variant === 'direct' ? 'cursor-pointer' : ''} bg-white h-full ${!useModal && (showDetails || variant === 'direct') ? 'shadow-[0_20px_50px_rgb(0,0,0,0.2)]' : ''}`}
        whileHover={useModal || variant === 'direct' ? { scale: 1.05, zIndex: 40 } : { scale: 1.02, zIndex: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={useModal || variant === 'direct' ? () => setShowDetails(true) : undefined}
        onMouseEnter={!useModal && variant !== 'direct' ? () => setShowDetails(true) : undefined}
        onMouseLeave={!useModal && variant !== 'direct' ? () => setShowDetails(false) : undefined}
      >
        {useModal ? (
          CoverContent
        ) : variant === 'direct' ? (
          <div className="h-full w-full">{DetailsContent}</div>
        ) : (
          <AnimatePresence mode="wait">
            {!showDetails ? (
              <motion.div key="cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full">
                {CoverContent}
              </motion.div>
            ) : (
              <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full">
                {DetailsContent}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>

      {/* Modal (Only active when useModal is true or variant is direct) */}
      {(useModal || variant === 'direct') && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showDetails && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                onClick={() => setShowDetails(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative z-10 w-full max-w-[800px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col font-poppins max-h-[90vh]"
              >
                <div className="relative aspect-video sm:aspect-[21/9] w-full bg-gray-100 shrink-0">
                  {image?.endsWith(".mp4") ? (
                    <video src={image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                  )}
                  <button onClick={() => setShowDetails(false)} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6 sm:p-8 flex flex-col overflow-y-auto">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h1>
                      <p className="text-md text-gray-500 font-medium mt-1">{year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">{subtitle}</p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {badge?.map((item, index) => (
                      <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
                        <span className="text-sm font-semibold text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
