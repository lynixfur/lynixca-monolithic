import React, { useState } from 'react';

const ProjectsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-bold text-xl text-neutral-100 flex items-center"
        >
          Projects
          <svg
            className={`-mr-1 ml-1 h-7 w-7 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`z-20 origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ background: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(20px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
        <a
            href="#about-fursona"
            className="text-gray-950 block px-4 py-2 text-md font-semibold hover:bg-white hover:bg-opacity-30 transition-all duration-300"
            role="menuitem"
            tabIndex={-1}
          >
            Software Projects
          </a>
          <a
            href="#about-fursona"
            className="text-gray-950 block px-4 py-2 text-md font-semibold hover:bg-white hover:bg-opacity-30 transition-all duration-300"
            role="menuitem"
            tabIndex={-1}
          >
            Hardware Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDropdown;
