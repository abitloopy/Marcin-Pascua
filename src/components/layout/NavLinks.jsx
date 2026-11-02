import React from "react";

export default function NavLinks({ 
  activeSection = "home",
  onNavClick,
  itemClassName = "text-gray-600 hover:text-[#637C50] font-medium",
  activeClassName = "text-[#637C50] font-semibold" 
}) {
  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Contact", href: "mailto:pascua.marcin1@gmail.com", id: "contact" }
  ];

  const handleClick = (e, href) => {
    if (href.startsWith("mailto:")) {
      if (onNavClick) {
        onNavClick(e, href);
      }
      return;
    }

    if (onNavClick) {
      onNavClick(e, href);
    } else {
      e.preventDefault();
      const id = href.replace("#", "");
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="font-poppins flex flex-row items-center gap-6 sm:gap-7 md:gap-8">
      {links.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <div key={link.id} className="relative">
            <a 
              href={link.href} 
              onClick={(e) => handleClick(e, link.href)}
              className={`hover:-translate-y-0.5 transition-all duration-200 inline-block py-1 text-[13.5px] md:text-[14px] tracking-wide cursor-pointer select-none ${
                isActive ? activeClassName : itemClassName
              }`}
            >
              {link.name}
            </a>
          </div>
        );
      })}
    </nav>
  );
}
