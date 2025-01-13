import React from 'react';
import { ExternalLink } from 'lucide-react';

const WorkPage = () => {
  const projects = [
    {
      title: "CS50 Final Project",
      description: "A web application developed as part of Harvard's CS50 course",
      technologies: ["Python", "Flask", "SQL", "HTML/CSS"]
    },
    {
      title: "Personal Website",
      description: "A responsive portfolio website built with modern web technologies",
      technologies: ["React", "Tailwind CSS"]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Work</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
              <ExternalLink className="inline-block ml-2 w-4 h-4 text-gray-400" />
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
