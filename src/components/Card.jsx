import React from "react";

const Card = ({ title, technologies }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-gray-50 border border-gray-200 shadow-md rounded-xl p-4 lg:p-6 hover:shadow-lg transform hover:scale-105 transition duration-300 max-w-sm mx-auto"
    >
      <h2 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-4">{title}</h2>
      <ul className="space-y-2 text-gray-700">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center space-x-2 text-base lg:text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 text-blue-800"
              viewBox="0 0 20 20"
            >
              <path d="M10.293 15.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L11 12.586V4a1 1 0 1 0-2 0v8.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5z" />
            </svg>
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
