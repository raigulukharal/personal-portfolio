import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Hero", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto py-4  flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r mr-36 from-indigo-500 to-pink-500 bg-clip-text text-transparent">
          GS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-lg font-semibold">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-pink-400">{link}</span>
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button (Centered on small screens) */}
        <div className="md:hidden  absolute right-14 -translate-x-1/2 z-10">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black px-6 py-4 space-y-4 text-2xl font-medium z-40">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block hover:text-pink-400 transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
