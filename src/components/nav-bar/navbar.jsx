import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="shadow-sm border-b border-secondary text-lightGray">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Greeting */}
          <div className="flex items-center space-x-2 text-lg font-small font-bold">
            <p>DevSangay</p>
          </div>

          {/* Middle: Menu */}
          <div className="flex space-x-8 font-small">
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#projects" className="hover:text-gray-600">Projects</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
