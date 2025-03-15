
import { FaCalendar, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyWriting = () => {
  // Sample blog posts - replace with your actual posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Responsive Website with Tailwind CSS",
      excerpt: "Learn how to create a fully responsive website using Tailwind CSS, the utility-first CSS framework that's changing how developers style their applications.",
      category: "CSS",
      date: "Feb 15, 2025",
      imageUrl: "/path-to-blog-image-1.jpg",
      slug: "responsive-website-tailwind-css"
    },
    {
      id: 2,
      title: "React Hooks Explained: useEffect in Depth",
      excerpt: "A deep dive into React's useEffect hook, exploring common use cases, dependency arrays, and how to handle cleanup functions properly.",
      category: "React",
      date: "Jan 28, 2025",
      imageUrl: "/path-to-blog-image-2.jpg",
      slug: "react-hooks-useeffect-explained"
    },
    {
      id: 3,
      title: "Setting Up a Modern Development Environment",
      excerpt: "A comprehensive guide to setting up a productive development environment with the latest tools and extensions for efficient coding.",
      category: "Development",
      date: "Jan 10, 2025",
      imageUrl: "/path-to-blog-image-3.jpg",
      slug: "modern-development-environment"
    }
  ];

  return (
    <section id="writing" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-3">
            My Writings
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
          <p className="mt-6 text-center text-gray-600 dark:text-gray-300 max-w-2xl">
            I share my knowledge and experiences through articles about web development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm ml-auto">
                    <FaCalendar className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Read More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            View All Articles
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyWriting;