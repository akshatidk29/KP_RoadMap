import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center text-lg font-bold">
            <span className="text-white">
              Kamand Prompt, IIT Mandi
            </span>
          </Link>



          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-15 border-t border-gray-800 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Kamand Prompt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
