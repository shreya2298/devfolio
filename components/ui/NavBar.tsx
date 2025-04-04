"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";

const NavBar = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Adding some offset

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      className="sticky top-0 w-full h-16 shadow-lg backdrop-blur-3xl border-b-2 border-white/10 flex items-center justify-center z-50"
    >
      <div className="flex items-center gap-8">
        {navItems.map(({ name, link }, index) => {
          const isActive = activeSection === link.replace("#", "");

          return (
            <Link
              key={`nav-item-${index}`}
              href={link}
              className={cn(
                "relative transition-all duration-300 ease-in-out group",
                isActive && "scale-110"
              )}
            >
              <span
                className={cn(
                  "text-sm font-extrabold cursor-pointer relative",
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                )}
              >
                {name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple to-red-700 transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
