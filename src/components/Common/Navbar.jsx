// import { useState } from "react";
// import { BsMoonStars, BsSun } from "react-icons/bs";
// import { IoMdClose } from "react-icons/io";
// import { RxHamburgerMenu } from "react-icons/rx";

// import { Link } from "react-router-dom";



// const Navbar = () => {
//   const [toggleTheme, setToggleTheme] = useState(true);
//   const [navDrawerOpen, setnavDrawerOpen] = useState(false);

//   const handleToggle = () =>{
//     setToggleTheme(!toggleTheme);
//   }

//   const handleNavDrawer = () =>{
//     setnavDrawerOpen(!navDrawerOpen);
//   }


//   return (
//     <>
//     <nav className=" w-full flex justify-between items-center px-6 py-4">
//       {/* for the logo or the fullname it should be on left  */}
//       <div>
//         <Link to="/" className="text-2xl font-medium">Mylogo</Link>
//       </div>

//       {/* For the Contents like Home,About,Skills,Projects,Writing,Contact it should be in center*/}
//       <div className="hidden md:flex space-x-4">
//         <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 uppercase ">Home</Link>
//         <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 uppercase ">About</Link>
//         <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 uppercase ">Skills</Link>
//         <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 uppercase ">Writings</Link>
//         <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 uppercase ">Contact</Link>
//       </div>
      


//       {/* toggle of the Image should be at the right side like two color switch mode  */}
//       <div>
//       {
//         toggleTheme? (
//           <button onClick={handleToggle}>
     
//       <BsSun className="h-6 w-6" />
//       </button>
//         ) :
//         (<button onClick={handleToggle}>
          
//           <BsMoonStars className="h-5 w-5"/>
//         </button>)
//       }
//       <button onClick={handleNavDrawer} className="md:hidden pl-3">
//         <RxHamburgerMenu className="h-6 w-6"/>
//       </button>
//       </div>
//     </nav>
   

//     {/* For the mobile menu */}
//     <div 
//     className={`fixed top-0 left-0 w-1/2 sm:w-1/2 md:w-1/3 h-full bg-slate-50 transform transition-transform duration-300 z-50 ${navDrawerOpen? "translate-x-0": "-translate-x-full"}`}
//     >
//       <div className="flex justify-end p-4">
//         <button onClick={handleNavDrawer}>
//           <IoMdClose className="h-5 w-5"/>
//         </button>
//       </div>
//       <div className="p-4 mb-4">
//         <nav className="space-y-3">
//           <Link to="#" className="block text-sm font-medium text-gray-600 hover:text-gray-900  ">Home</Link>
//           <Link to="#" className="block text-sm font-medium text-gray-600 hover:text-gray-900  ">About</Link>
//           <Link to="#" className=" block text-sm font-medium text-gray-600 hover:text-gray-900  ">Skills</Link>
//           <Link to="#" className="block text-sm font-medium text-gray-600 hover:text-gray-900  ">Writings</Link>
//           <Link to="#" className="block text-sm font-medium text-gray-600 hover:text-gray-900  ">Contact</Link>

//         </nav>
//       </div>

//     </div>
    
    
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Check for saved theme preference or use system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : prefersDark;
  });
  
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle theme toggle
  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  // Toggle mobile menu
  const handleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  // Close mobile menu when clicking a link
  const closeNavDrawer = () => {
    setNavDrawerOpen(false);
  };

  // Apply theme changes to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Add shadow to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navDrawerOpen && !e.target.closest(".mobile-menu-container")) {
        setNavDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navDrawerOpen]);

  // Define navigation links to keep them consistent
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Skills", path: "/skills" },
    { title: "Projects", path: "/projects" },
    { title: "Writing", path: "/writing" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="relative z-50">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
            >
              Mylogo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase transition-colors hover:text-blue-600 dark:hover:text-blue-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleToggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isDark ? (
                <BsSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <BsMoonStars className="h-5 w-5 text-gray-700" />
              )}
            </button>
            
            <button 
              onClick={handleNavDrawer} 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
              aria-expanded={navDrawerOpen}
            >
              <RxHamburgerMenu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300" />
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-container fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
            onClick={closeNavDrawer}
          >
            Mylogo
          </Link>
          <button
            onClick={handleNavDrawer}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close mobile menu"
          >
            <IoMdClose className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        
        <div className="py-6">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={closeNavDrawer}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          <div className="mt-6 px-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                handleToggleTheme();
                closeNavDrawer();
              }}
              className="flex items-center space-x-2 px-4 py-2 w-full rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <>
                  <BsSun className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Light Mode</span>
                </>
              ) : (
                <>
                  <BsMoonStars className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;