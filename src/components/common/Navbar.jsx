import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  "Home",
  "About",
  "Vision",
  "Speaking",
  "Projects",
  "Impact",
  "Gallery",
  "Contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">
              <span className="text-[#D4AF37]">Oluwaferanmi</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-300 hover:text-[#D4AF37] transition duration-300 font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Book Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex bg-[#D4AF37] text-slate-900 px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Book Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-[#D4AF37] text-lg"
              >
                {link}
              </a>
            </li>
          ))}

          <a
            href="#contact"
            className="bg-[#D4AF37] text-slate-900 px-5 py-2 rounded-full font-semibold"
          >
            Book Me
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;