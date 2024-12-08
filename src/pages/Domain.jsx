import React from "react";
import Card from "../components/Card";

const domains = [
  {
    title: "Web Development",
    technologies: ["React", "Angular", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Database",
    technologies: ["SQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "App Development",
    technologies: ["Flutter", "React Native"],
  },
  {
    title: "Machine Learning",
    technologies: ["Computer Vision", "TensorFlow", "Prediction Projects"],
  },
];

const DomainPage = () => {
  return (
    <div id="domain" className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Our Expertise Domains
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gray-50"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                {domain.title}
              </h2>
              <ul className="space-y-2 text-gray-700">
                {domain.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2 text-lg font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4 text-blue-800"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM5.97 7.97a.235.235 0 0 0-.02.022l-2.997 2.996-.708-.708 2.997-2.996a.75.75 0 1 1 1.061 1.061l-.333.333zM12 5.25a.75.75 0 0 1 0 1.5H6.707l1.25 1.25a.75.75 0 0 1-1.061 1.061l-2.5-2.5a.75.75 0 0 1 0-1.061l2.5-2.5a.75.75 0 1 1 1.061 1.061L6.707 5.25H12z" />
                    </svg>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainPage;
