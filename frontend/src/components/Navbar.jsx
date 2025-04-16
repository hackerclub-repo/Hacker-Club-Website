import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Hacker Club
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/events" className="hover:text-yellow-400">
            Events
          </Link>
          <Link to="/register" className="hover:text-yellow-400">
            Register
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
          <Link to="/login" className="hover:text-yellow-400">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
