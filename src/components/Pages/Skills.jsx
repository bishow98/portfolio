
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiFirebase } from 'react-icons/si';

const Skills = () => {
  // Define your skills with categories
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      ]
    },
    {
      title: "Backend & Others",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 75 },
        { name: "Redux", icon: <SiRedux />, level: 80 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
        { name: "MongoDB", icon: <SiMongodb />, level: 70 },
        { name: "Firebase", icon: <SiFirebase />, level: 80 },
        { name: "Git", icon: <FaGitAlt />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-3">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-6 text-center text-gray-600 dark:text-gray-300 max-w-2xl">
            I&apos;ve worked with a variety of technologies in the web development world.
            Here&apos;s a breakdown of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-blue-600 dark:text-blue-400 text-2xl mr-3">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['REST API', 'GraphQL', 'Webpack', 'SASS', 'Jest', 'Figma', 'Material UI', 'Responsive Design', 'PWA', 'Vercel', 'SEO'].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;