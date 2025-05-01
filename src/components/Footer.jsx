import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:navneetkaur0889@gmail.com"
          className="hover:text-blue-400"
          aria-label="Email"
        >
           <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/navneet-kaur-883755159/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Navneet-kaur-09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <p className="mt-2 text-sm text-gray-400">© {new Date().getFullYear()} Navneet Kaur</p>
    </footer>
  );
};

export default Footer;
