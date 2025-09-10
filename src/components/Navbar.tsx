import { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Simple hide/show based on scroll direction
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      // Always show navbar at the top of the page
      if (currentScrollY <= 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-40 w-full backdrop-blur bg-[rgba(15,15,17,.85)] border-b border-[#24242a] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        boxShadow: !isVisible ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="w-[min(1100px,92%)] mx-auto h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-8 rounded-md border border-[#24242a] transition-all duration-300 group-hover:border-[#6cf0c2] group-hover:shadow-[0_0_10px_rgba(108,240,194,0.3)]"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <span className="font-extrabold tracking-tight text-xl bg-gradient-to-r from-white to-[#b4b4bb] bg-clip-text text-transparent group-hover:from-[#6cf0c2] group-hover:to-[#8aa8ff] transition-all duration-300">
            Rumeth
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-5 text-[#b4b4bb]">
          <li>
            <a
              className="px-3 py-2 rounded-md hover:bg-[#1a1a20] hover:text-[#6cf0c2] transition-all duration-200 relative group"
              href="#projects"
            >
              Projects
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 rounded-md hover:bg-[#1a1a20] hover:text-[#6cf0c2] transition-all duration-200 relative group"
              href="#experience"
            >
              Experience
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 rounded-md hover:bg-[#1a1a20] hover:text-[#6cf0c2] transition-all duration-200 relative group"
              href="#education"
            >
              Education
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 rounded-md hover:bg-[#1a1a20] hover:text-[#6cf0c2] transition-all duration-200 relative group"
              href="#skills"
            >
              Skills
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 rounded-md hover:bg-[#1a1a20] hover:text-[#6cf0c2] transition-all duration-200 relative group"
              href="#achievements"
            >
              Achievements
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
          <li>
            <a
              className="px-4 py-2 rounded-xl border border-transparent bg-gradient-to-r from-[#6cf0c2] to-[#8aa8ff] text-[#0a0a0b] font-semibold shadow-[0_10px_30px_rgba(0,0,0,.35)] hover:shadow-[0_15px_40px_rgba(108,240,194,.4)] hover:scale-105 transition-all duration-300"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button - you can expand this later */}
        <button className="md:hidden p-2 rounded-md hover:bg-[#1a1a20] transition-colors duration-200">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
