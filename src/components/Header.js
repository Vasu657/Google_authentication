import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { HiMenu, HiX, HiUser, HiLogout } from 'react-icons/hi';

const Header = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-sm">MA</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              My App
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            
            {!user && (
              <Link 
                to="/login" 
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <FcGoogle className="text-lg" />
                <span className="font-medium">Login</span>
              </Link>
            )}
            
            {user && (
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
              </Link>
            )}
          </nav>

          {/* User Menu (Desktop) */}
          {user && (
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <HiUser className="text-white text-sm" />
                </div>
                <span className="text-sm font-medium text-gray-700 max-w-32 truncate">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                <HiLogout className="text-lg" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <HiX className="text-2xl text-gray-700" />
            ) : (
              <HiMenu className="text-2xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4 border-t border-gray-200/50">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {!user && (
              <Link 
                to="/login" 
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <FcGoogle className="text-lg" />
                <span className="font-medium">Login</span>
              </Link>
            )}
            
            {user && (
              <>
                <Link 
                  to="/dashboard" 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                
                <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <HiUser className="text-white text-sm" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user.displayName || user.email}
                  </span>
                </div>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-3 rounded-lg transition-all duration-200 w-full"
                >
                  <HiLogout className="text-lg" />
                  <span className="font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

