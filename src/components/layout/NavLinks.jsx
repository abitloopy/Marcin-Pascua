import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks({ itemClassName = "text-[#637C50] hover:text-[#A1C680]" }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" }
  ];

  return (
      <nav className="w-full font-poppins flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-center">
        {links.map((link, i) => {
          const isHashLink = link.href.includes("#");
          const className = `font-semibold hover:-translate-y-1 transition-all duration-300 inline-block text-sm md:text-base ${itemClassName}`;

          return (
            <div key={i} className="relative group">
              {isHashLink ? (
                <a href={link.href} className={className}>
                  {link.name}
                </a>
              ) : (
                <Link to={link.href} className={className}>
                  {link.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
  );
}
