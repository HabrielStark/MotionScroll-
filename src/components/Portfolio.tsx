import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web Design', 'Mobile Apps', 'Branding'];

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800',
    description: 'Modern e-commerce solution with seamless user experience',
  },
  {
    title: 'Fitness App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800',
    description: 'Health tracking application for iOS and Android',
  },
  {
    title: 'Corporate Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800',
    description: 'Complete brand identity design for tech startup',
  },
  {
    title: 'News Portal',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800',
    description: 'Digital news platform with modern interface',
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800',
    description: 'Restaurant delivery service application',
  },
  {
    title: 'Agency Rebrand',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800',
    description: 'Creative agency brand refresh and guidelines',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and see how we help businesses grow through
            innovative digital solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.description}
                  </p>
                  <ExternalLink className="mt-4 w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-lg max-w-3xl w-full p-8" onClick={e => e.stopPropagation()}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;