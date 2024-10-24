import React from 'react';
import { 
  Palette, 
  Code2, 
  Smartphone, 
  Globe, 
  BarChart, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences through thoughtful design.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive and performant websites using modern technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Crafting native and cross-platform mobile applications.',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Driving growth through strategic digital marketing campaigns.',
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Data-driven insights to optimize your digital presence.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with advanced security measures.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business
            thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-indigo-600 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;