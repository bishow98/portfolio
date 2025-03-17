import myImage from "../../assets/bishowDV.webp"
import mycv from "../../assets/ResumeBishowChauhan.pdf"

// const HeroSection = () => {
//   return (
//     <div className="container mx-auto flex items-center justify-between">
//       <div className="flex-1">
//         <h2 className="text-3xl font-bold text-gray-900">Hello This is <br/> Bishow Chauhan</h2>
//       </div>
//       <div className="">
//         <img src={myImage} alt="Profile" className="h-[400px] rounded-full mt-20"/>
//       </div>

//     </div>
//   )
// }

// export default HeroSection


import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  const personalInfo = {
    name: "Bishow Chauhan",
    title: "FullStack Developer",
    description: "I'm a passionate Fullstack developer with expertise in React, Tailwind CSS, Node, express, mongoDB, and modern JavaScript. I love creating responsive, user-friendly applications that solve real-world problems.",
    cvPath: mycv, 
    githubUrl: "https://github.com/bishow98",
    linkedinUrl: "https://linkedin.com/in/bishow-chauhan-b1a269228",
    profileImage: `${myImage}` 
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              {personalInfo.description}
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              <a 
                href={personalInfo.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={30} />
              </a>
              <a 
                href={personalInfo.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={30} />
              </a>
              <a 
                href={personalInfo.cvPath} 
                download 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-2"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
          
          {/* Right side - Floating Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated blob background */}
              <div className="absolute inset-0 rounded-full bg-blue-400 dark:bg-blue-600 opacity-20 blur-3xl animate-pulse"></div>
              
              {/* Profile image with floating animation */}
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img 
                    src={personalInfo.profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce-slow opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500 rounded-full animate-pulse opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;