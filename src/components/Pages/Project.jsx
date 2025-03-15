
import{ useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  // Category filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce website with cart functionality, user authentication, and payment integration.",
      image: "/path-to-project-image-1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce-site.com"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS featuring dark mode and responsive design.",
      image: "/path-to-project-image-2.jpg",
      technologies: ["React", "Tailwind CSS"],
      category: "frontend",
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://your-portfolio.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication and real-time updates.",
      image: "/path-to-project-image-3.jpg",
      technologies: ["React", "Firebase", "Redux"],
      category: "fullstack",
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://your-task-app.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data based on user location or search.",
      image: "/path-to-project-image-4.jpg",
      technologies: ["JavaScript", "API", "CSS"],
      category: "frontend",
      githubLink: "https://github.com/yourusername/weather-app",
      liveLink: "https://your-weather-app.com"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, comments, and user profiles.",
      image: "/path-to-project-image-5.jpg",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      githubLink: "https://github.com/yourusername/blog-platform",
      liveLink: "https://your-blog-platform.com"
    },
    {
      id: 6,
      title: "Music Player UI",
      description: "A sleek music player interface with animations and audio controls.",
      image: "/path-to-project-image-6.jpg",
      technologies: ["React", "CSS", "Web Audio API"],
      category: "frontend",
      githubLink: "https://github.com/yourusername/music-player",
      liveLink: "https://your-music-player.com"
    }
  ];

  // Filter categories
  const categories = ['all', 'frontend', 'fullstack', 'backend'];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-3">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-6 text-center text-gray-600 dark:text-gray-300 max-w-2xl">
            Here&apos;s a selection of my recent work. Each project represents different skills and challenges I&apos;ve tackled.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeFilter === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative group h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FaGithub size={18} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;