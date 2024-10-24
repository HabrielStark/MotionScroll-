import React from 'react';
import { Users, Briefcase, Award } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '150+' },
  { icon: Briefcase, label: 'Projects Completed', value: '200+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a passionate team of designers and developers dedicated to creating
            exceptional digital experiences that inspire and engage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600 rounded-lg opacity-10"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              To deliver innovative digital solutions that transform businesses and
              enhance user experiences through cutting-edge technology and creative
              design.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;