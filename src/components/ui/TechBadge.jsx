import React from "react";

export default function TechBadge({ name }) {
  const getTechIcon = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes("react")) {
      return <i className="fa-brands fa-react text-[#00D8FE] text-[11px]"></i>;
    }
    if (t.includes("tailwind")) {
      return (
        <svg className="w-3 h-3 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.537,13.382,8.176,12,6.001,12z" />
        </svg>
      );
    }
    if (t.includes("typescript")) {
      return <span className="font-bold text-[8px] bg-[#3178C6] text-white px-1 py-0.2 rounded leading-none">TS</span>;
    }
    if (t.includes("node")) {
      return <i className="fa-brands fa-node-js text-[#339933] text-[11px]"></i>;
    }
    if (t.includes("express")) {
      return <i className="fa-solid fa-server text-gray-700 text-[10px]"></i>;
    }
    if (t.includes("mcp")) {
      return <i className="fa-solid fa-network-wired text-indigo-600 text-[10px]"></i>;
    }
    if (t.includes("supabase")) {
      return (
        <svg className="w-3 h-3 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.001.001A.792.792 0 0 0 2.838 13.6h9.362v8.958a.396.396 0 0 0 .716.233l9.081-12.261.001-.001a.792.792 0 0 0-.636-1.175z" />
        </svg>
      );
    }
    if (t.includes("figma")) {
      return <i className="fa-brands fa-figma text-[#F24E1E] text-[11px]"></i>;
    }
    if (t.includes("computer vision")) {
      return <i className="fa-solid fa-eye text-cyan-600 text-[10px]"></i>;
    }
    if (t.includes("ocr")) {
      return <i className="fa-solid fa-file-lines text-amber-600 text-[10px]"></i>;
    }
    if (t.includes("neural") || t.includes("cnn")) {
      return <i className="fa-solid fa-brain text-pink-600 text-[10px]"></i>;
    }
    if (t.includes("html")) {
      return <i className="fa-brands fa-html5 text-[#E34F26] text-[11px]"></i>;
    }
    if (t.includes("css")) {
      return <i className="fa-brands fa-css3-alt text-[#1572B6] text-[11px]"></i>;
    }
    if (t.includes("javascript")) {
      return <i className="fa-brands fa-js text-[#F7DF1E] text-[11px]"></i>;
    }
    if (t.includes("c#")) {
      return <i className="fa-solid fa-code text-purple-600 text-[10px]"></i>;
    }
    if (t.includes("sql")) {
      return <i className="fa-solid fa-database text-red-600 text-[10px]"></i>;
    }
    if (t.includes("java")) {
      return <i className="fa-brands fa-java text-[#ED8B00] text-[11px]"></i>;
    }
    return <i className="fa-solid fa-layer-group text-gray-500 text-[10px]"></i>;
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#f8f9fa] border border-gray-200/80 text-gray-700 shadow-2xs hover:bg-gray-100 transition-colors leading-normal">
      {getTechIcon(name)}
      <span>{name}</span>
    </span>
  );
}

