import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { svgLink } from "../../assets/asset";
import { navRoutes } from "../../utils/constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src={svgLink.logo}
                width={120}
                height={40}
                alt="Logo"
                className="cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navRoutes.map((item, index) => (
              <NavLink to={item.href}>
                <div key={index}>
                  <span
                    className={`text-sm font-medium hover:text-primary transition-colors `}
                  >
                    {item.name}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <IoMdClose /> : <CiMenuFries />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white shadow-lg absolute left-0 w-full transition-all duration-300 ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-5 py-4 space-y-5">
          {navRoutes.map((item, index) => (
            <NavLink to={item.href} key={index}>
              <span
                className={`block text-md font-medium hover:text-primary transition-colors 
                 
                  `}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
