import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="shadow-sm border-b border-secondary text-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Greeting */}
          <div className="flex items-center space-x-2 text-lg font-small">
            <p>DevSangay</p>
          </div>

          {/* Middle: Menu */}
          <div className="flex space-x-8 font-small">
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#projects" className="hover:text-gray-600">Projects</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
