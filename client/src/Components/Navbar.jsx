import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Podprism.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/login');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-950 p-6 rounded-md z-50">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="PodPrism" className="w-10 h-10 rounded-full" />
            <span className="text-white text-2xl font-bold">PodPrism</span>
          </div>

          {/* Hamburger Button (for small screens) */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu Links (Hidden on smaller screens, shown on large) */}
          <div className={`lg:flex lg:items-center space-x-6 text-white hidden`}>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <Link to="/search" className="hover:text-gray-300">Search</Link>
            <Link to="/favourites" className="hover:text-gray-300">Favourites</Link>
            <Link to="/upload" className="hover:text-gray-300">Upload</Link>
            <button
              onClick={handleLogoutClick}
              className="text-white hover:text-gray-300"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Collapsible Menu for Smaller Screens */}
        {isMenuOpen && (
          <div className="flex flex-col mt-4 space-y-2 lg:hidden text-white">
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <Link to="/search" className="hover:text-gray-300">Search</Link>
            <Link to="/favourites" className="hover:text-gray-300">Favourites</Link>
            <Link to="/upload" className="hover:text-gray-300">Upload</Link>
            <button
              onClick={handleLogoutClick}
              className="text-white hover:text-gray-300"
            >
              Log Out
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
