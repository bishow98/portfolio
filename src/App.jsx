// import { useState } from 'react'
// import { useState } from 'react';
// import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
// import { HiOutlineMenu, HiX } from 'react-icons/hi';
// import { Switch } from '@headlessui/react';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutWhole from "./components/Layout/LayoutWhole"
import { useEffect } from "react";

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className={isDarkMode ? 'dark' : ''}>
//       <div className="bg-white dark:bg-gray-900 min-h-screen">
//         {/* Navbar */}
//         <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
//           <div className="text-2xl font-bold text-gray-800 dark:text-white">Bishow Chauhan</div>
//           <div className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
//             <a href="#home" className="hover:text-blue-500">Home</a>
//             <a href="#about" className="hover:text-blue-500">About</a>
//             <a href="#skills" className="hover:text-blue-500">Skills</a>
//             <a href="#projects" className="hover:text-blue-500">Projects</a>
//             <a href="#contact" className="hover:text-blue-500">Contact</a>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Switch
//               checked={isDarkMode}
//               onChange={setIsDarkMode}
//               className={`${
//                 isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
//               } relative inline-flex items-center h-6 rounded-full w-11`}
//             >
//               <span
//                 className={`${
//                   isDarkMode ? 'translate-x-6' : 'translate-x-1'
//                 } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
//               />
//             </Switch>
//             <button
//               className="md:hidden text-gray-800 dark:text-white"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-gray-100 dark:bg-gray-800 flex flex-col space-y-4 px-6 py-4">
//             <a href="#home" className="hover:text-blue-500">Home</a>
//             <a href="#about" className="hover:text-blue-500">About</a>
//             <a href="#skills" className="hover:text-blue-500">Skills</a>
//             <a href="#projects" className="hover:text-blue-500">Projects</a>
//             <a href="#contact" className="hover:text-blue-500">Contact</a>
//           </div>
//         )}

//         {/* Hero Section */}
//         <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center">
//           <img
//             src="./assets/react.svg"
//             alt="Profile"
//             className="w-32 h-32 rounded-full mb-4"
//           />
//           <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
//             Hello, Im Bishow Chauhan
//           </h1>
//           <div className="flex space-x-4 text-gray-600 dark:text-gray-300">
//             <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
//               <FaGithub size={30} />
//             </a>
//             <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin size={30} />
//             </a>
//             <FaReact size={30} />
//           </div>
//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Download CV
//           </button>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="py-12 px-6 bg-gray-100 dark:bg-gray-800">
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
//             My Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Replace with dynamic project rendering */}
//             <div className="bg-white dark:bg-gray-700 shadow-md p-4 rounded-lg">
//               <h3 className="text-xl font-bold text-gray-800 dark:text-white">Project 1</h3>
//               <p className="text-gray-600 dark:text-gray-300">Description of the project.</p>
//               <a
//                 href="https://github.com/yourproject"
//                 target="_blank"
//                 className="text-blue-500 hover:underline"
//               >
//                 View on GitHub
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
//             I am Bishow Chauhan, a passionate developer. I completed my high school at XYZ School and am currently pursuing a degree in Computer Science. I love building modern web applications and continuously improving my skills.
//           </p>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-12 px-6 bg-gray-100 dark:bg-gray-800">
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
//             My Skills
//           </h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(skill => (
//               <span
//                 key={skill}
//                 className="px-4 py-2 bg-blue-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
//             Contact Me
//           </h2>
//           <form className="max-w-md mx-auto space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none"
//               rows="4"
//             />
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Send Message
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default App;



const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Check if user has a theme preference or browser preference
    if (savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWhole/>} />
      </Routes>
      </BrowserRouter>


    </div>
  )
}


// const App = () => {
//   // Check for saved theme preference on initial load
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
    
//     // Check if user has a theme preference or browser preference
//     if (savedTheme === 'dark' || 
//         (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   return (
//     <Router>
//       <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             {/* Add additional routes as needed */}
//             {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
//             {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

export default App;

