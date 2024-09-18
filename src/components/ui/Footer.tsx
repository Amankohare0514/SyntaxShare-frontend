import React from 'react';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-transparent dark:text-white text-black py-4 border-t-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">&copy; 2024 Syntax Share. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-500"><LinkedIn /></a>
          <a href="#" className="text-gray-400 hover:text-gray-500"><GitHub /></a>
          <a href="#" className="text-gray-400 hover:text-gray-500"><Instagram /></a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
