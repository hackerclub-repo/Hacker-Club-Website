import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Hacker Club. All rights reserved.</p>
        <p>Follow us on social media</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
