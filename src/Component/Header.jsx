
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import AuthModal from './Auth/AuthModal';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (path) =>
    `hover:text-pink-600 transition-colors duration-200 ${
      currentPath === path ? "text-pink-600 font-bold underline" : isScrolled ? "text-gray-800" : "text-white"
    }`;

  return (
    <>
      <div className="w-full">
        <div className="bg-[url('/banner.jpg')] bg-center bg-cover bg-no-repeat min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full relative">
          <nav className={`text-lg font-pacifico drop-shadow-lg transition-all duration-300 border-b border-white/30 bg-white/30 backdrop-blur-md ${
            isScrolled 
              ? 'fixed top-0 left-0 right-0 z-50 bg-white/90 text-gray-800 border-white' 
              : 'text-gray-800'
          }`}>
            <div className="flex justify-between items-center px-4 py-3 sm:px-6 md:px-8 lg:px-12">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 bg-white shadow-xl rounded-full object-cover border-2 sm:border-4 border-white"
                  src="/logo_2.png"
                  alt="Logo"
                />
              </div>

              
              <button
                className="sm:hidden text-pink-300 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
            
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                  
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                  
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              
              <div className="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-16 font-semibold items-center text-sm lg:text-base">
                <Link className={linkClass("/home")} to="/home">
                  Home
                </Link>
                <Link className={linkClass("/product")} to="/product">
                  Product
                </Link>
                <Link className={linkClass("/contact")} to="/contact">
                  Contact
                </Link>

                <div className="ml-4 lg:ml-8 xl:ml-12 flex items-center space-x-4 lg:space-x-8 xl:space-x-12">
                  <Link className="hover:text-pink-300" to="/liked">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" />
                    </svg>
                  </Link>
                  <Link className="hover:text-pink-300" to="/card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z" />
                    </svg>
                  </Link>
                  {user ? (
                    <>
                      <span className="text-sm">{user.name}</span>
                      <button onClick={logout} className="text-sm bg-pink-600 px-3 py-1 rounded hover:bg-pink-700 text-white">
                        Logout
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => setShowAuthModal(true)}
                      className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
                    >
                      Login / Sign Up
                    </button>
                  )}
                </div>
              </div>
            </div>

            
            {menuOpen && (
              <div className="sm:hidden bg-gray-800 bg-opacity-70 px-4 py-4 space-y-4 font-semibold">
                <Link
                  className={linkClass("/home") + " block"}
                  to="/home"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className={linkClass("/product") + " block"}
                  to="/product"
                  onClick={() => setMenuOpen(false)}
                >
                  Product
                </Link>
                <Link
                  className={linkClass("/contact") + " block"}
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="flex space-x-8 mt-4">
                  <Link className="hover:text-pink-300" to="/liked" onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" />
                    </svg>
                  </Link>
                  <Link className="hover:text-pink-300" to="/card" onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z" />
                    </svg>
                  </Link>
                </div>
                
                {user ? (
                  <div className="mt-4">
                    <span className="text-sm block mb-2">{user.name}</span>
                    <button onClick={logout} className="bg-pink-600 px-3 py-1 rounded hover:bg-pink-700 text-white text-sm">
                      Logout
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => { setShowAuthModal(true); setMenuOpen(false); }}
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors w-full mt-4"
                  >
                    Login / Sign Up
                  </button>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

export default Header;
