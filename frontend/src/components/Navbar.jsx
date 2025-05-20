import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with 3D animated effect */}
          <a
            href="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform transition-transform duration-300 hover:rotate-3 hover:scale-105 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
          >
            Eventify
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
