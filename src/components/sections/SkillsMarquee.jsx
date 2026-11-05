import React from "react";

// Row 1: UI/UX & Frontend Development
const row1 = [
  {
    name: "Figma",
    icon: <i className="fa-brands fa-figma text-[#F24E1E] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "Wireframing",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#637C50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <path d="M13 13h4" />
        <path d="M13 17h4" />
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: <i className="fa-brands fa-react text-[#00D8FE] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "Prototyping",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="7" height="7" rx="1.5" />
        <rect x="15" y="14" width="7" height="7" rx="1.5" />
        <path d="M9 6.5h3.5a3 3 0 0 1 3 3V14" />
        <polyline points="13 11.5 15.5 14 18 11.5" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: <i className="fa-brands fa-js text-[#F7DF1E] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "User Interface (UI) Design",
    icon: <i className="fa-solid fa-palette text-[#E11D48] text-xl sm:text-2xl"></i>,
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.537,13.382,8.176,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: <i className="fa-brands fa-html5 text-[#E34F26] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "CSS3",
    icon: <i className="fa-brands fa-css3-alt text-[#1572B6] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "Git",
    icon: <i className="fa-brands fa-git-alt text-[#F05032] text-2xl sm:text-[28px]"></i>,
  },
];

// Row 2: Backend, Database, Languages & Version Control
const row2 = [
  {
    name: "Node.js",
    icon: <i className="fa-brands fa-node-js text-[#339933] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "Laravel",
    icon: <i className="fa-brands fa-laravel text-[#FF2D20] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "PHP",
    icon: <i className="fa-brands fa-php text-[#777BB4] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "Supabase",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.001.001A.792.792 0 0 0 2.838 13.6h9.362v8.958a.396.396 0 0 0 .716.233l9.081-12.261.001-.001a.792.792 0 0 0-.636-1.175z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
      </svg>
    ),
  },
  {
    name: "SQL Server (SSMS)",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#CC292B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2c4.41 0 8 1.05 8 2s-3.59 2-8 2-8-1.05-8-2 3.59-2 8-2zm8 15c0 .95-3.59 2-8 2s-8-1.05-8-2v-2.12c1.87 1.05 4.77 1.62 8 1.62s6.13-.57 8-1.62V19zm0-4.5c0 .95-3.59 2-8 2s-8-1.05-8-2v-2.12c1.87 1.05 4.77 1.62 8 1.62s6.13-.57 8-1.62V14.5zm0-4.5c0 .95-3.59 2-8 2s-8-1.05-8-2V7.88c1.87 1.05 4.77 1.62 8 1.62s6.13-.57 8-1.62V10z" />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: <i className="fa-brands fa-java text-[#ED8B00] text-2xl sm:text-[28px]"></i>,
  },
  {
    name: "C",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.592 9.196s-.354-3.298-3.627-3.39c-3.274-.09-4.955 2.474-4.955 6.14 0 3.665 1.858 6.597 5.045 6.597 3.184 0 3.538-3.665 3.538-3.665l6.104.365s.36 3.31-2.196 5.836c-2.552 2.524-5.69 2.937-7.876 2.92-2.19-.017-5.226.034-8.16-2.97C1.528 18.019 1.03 15.099 1.03 12.229c0-2.87.556-6.67 4.047-9.55C7.444.72 9.849 0 12.254 0c10.042 0 10.717 9.26 10.717 9.26z" />
      </svg>
    ),
  },
  {
    name: "C#",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#9B4993]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.5 3.5C7.08 3.5 3.5 7.08 3.5 11.5S7.08 19.5 11.5 19.5C14.28 19.5 16.7 18.08 18.1 15.9L15.9 14.4C14.9 15.8 13.3 16.7 11.5 16.7C8.6 16.7 6.3 14.4 6.3 11.5S8.6 6.3 11.5 6.3C13.3 6.3 14.9 7.2 15.9 8.6L18.1 7.1C16.7 4.9 14.28 3.5 11.5 3.5z M19 9h-1v2h-2v1h2v2h-2v1h2v2h1v-2h2v-1h-2v-2h2v-1h-2V9zm0 3v2h-2v-2h2z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: <i className="fa-brands fa-github text-[#181717] text-2xl sm:text-[28px]"></i>,
  },
];

// Repeat rows multiple times to form a completely continuous, gap-free infinite loop on any screen size
const row1Loop = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
const row2Loop = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

function SkillCard({ item }) {
  return (
    <div
      className="relative group/card w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] aspect-square rounded-full bg-white border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center p-2.5 shrink-0 transition-all duration-300 hover:border-[#637C50] hover:shadow-lg hover:-translate-y-1 hover:scale-105 hover:z-30 cursor-pointer select-none"
    >
      <div className="flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110">
        {item.icon}
      </div>

      {/* Floating Tooltip Label (Positioned Above the Icon) */}
      <div className="absolute -top-9.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-950/95 backdrop-blur-xs text-white text-[11px] font-medium rounded-md opacity-0 group-hover/card:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-md z-40 transform translate-y-1 group-hover/card:translate-y-0">
        <span>{item.name}</span>
        {/* Tooltip downward pointer arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-950/95"></span>
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="w-full mt-16 sm:mt-20 md:mt-24 pt-4 flex flex-col items-center font-poppins">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10 px-6 sm:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
          Skills &amp; Technologies
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1.5 font-normal max-w-md mx-auto">
          A toolkit of languages, frameworks, and design software I use to craft functional digital products.
        </p>
      </div>

      {/* Infinite Marquee Track with End-to-End Left & Right Fade Masks */}
      <div className="relative w-full overflow-hidden pt-8 pb-4 sm:pt-10 sm:pb-5 group/marquee">
        {/* Left Fade Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        {/* Right Fade Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        {/* Row 1: Smoothly flowing Left-to-Right */}
        <div className="animate-marquee-right flex gap-3.5 sm:gap-4 md:gap-5 mb-3.5 sm:mb-4">
          {row1Loop.map((skill, index) => (
            <SkillCard key={`row1-${index}`} item={skill} />
          ))}
        </div>

        {/* Row 2: Smoothly flowing Right-to-Left */}
        <div className="animate-marquee-left flex gap-3.5 sm:gap-4 md:gap-5">
          {row2Loop.map((skill, index) => (
            <SkillCard key={`row2-${index}`} item={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
