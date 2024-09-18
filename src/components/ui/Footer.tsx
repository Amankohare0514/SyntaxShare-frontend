import React from 'react';
import { LinkedIn, GitHub, Instagram , Twitter} from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-transparent dark:text-white text-black py-4 border-t-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">&copy; 2024 Syntax Share. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/aman-kohare-3a0678235/" className="text-gray-400 hover:text-gray-500"><LinkedIn /></a>
          <a href="https://github.com/Amankohare0514" className="text-gray-400 hover:text-gray-500"><GitHub /></a>
          <a href="https://www.instagram.com/aman__0514/" className="text-gray-400 hover:text-gray-500"><Instagram /></a>
          <a href="https://x.com/Aman__0514" className="text-gray-400 hover:text-gray-500"><Twitter /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
