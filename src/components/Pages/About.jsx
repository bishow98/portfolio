import myImg from "../../assets/bishowDV.webp"
import { FaCode, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with decorative elements */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image with border */}
              <div className="relative z-10 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl transform rotate-3 transition-transform duration-300 hover:rotate-0">
                <img 
                  src={myImg}
                  alt="About Me" 
                  className="w-full h-auto rounded-md"
                />
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-blue-200 dark:bg-blue-900 rounded-lg transform -rotate-3 -translate-x-4 -translate-y-4 z-0"></div>
              
              {/* Experience badges */}
              <div className="absolute -bottom-4 -right-4 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg z-20">
                <span className="font-bold">5+ Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
              Frontend Developer & UI/UX Enthusiast
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a passionate frontend developer with a strong focus on creating intuitive and 
              responsive user interfaces. With a background in design and development, I bridge 
              the gap between aesthetics and functionality to deliver exceptional user experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development began in 2018, and since then, I&apos;ve worked on various 
              projects ranging from small business websites to complex web applications. I&apos;m constantly 
              learning and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                <FaCode className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Clean Code</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Writing maintainable, efficient code</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                <FaLaptopCode className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Responsive Design</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creating seamless experiences across devices</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                <FaUserGraduate className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Continuous Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Always expanding my knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;