"use client"

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-5 px-7 md:px-24 bg-neutral-800 border-b border-neutral-700">
      <nav className="flex items-center justify-between">
        <a href="/" className="font-semibold text-lg flex items-center mr-10">
          <img src="/lynix.png" alt="lynix" className="h-[50px] w-[50px] mr-3 -mt-1.5" />
          <h3 className='text-4xl font-extrabold'>LYNIX</h3>
        </a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path className="fill-current" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/projects" className="font-semibold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Projects</a>
          <a href="/blog" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Blog</a>
          <a href="/events" className="font-bold text-xl hover:text-cyan-600 transition-colors flex items-center text-neutral-300">Events
            <i className="fa fa-circle text-xs ml-2 text-cyan-700 animate-pulse" aria-hidden="true"></i>
          </a>
          <a href="/about" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">About</a>
          <a href="/contact" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Contact</a>
        </div>
      </nav>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="grid space-y-5 mt-5">
          <li>
            <a href="/projects" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Projects</a>
          </li>
          <li>
            <a href="/blog" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Blog</a>
          </li>
          <li>
            <a href="/events" className="font-bold text-lg hover:text-cyan-600 transition-colors flex items-center text-neutral-400">
              Events
              <i className="fa fa-circle text-xs ml-2 text-cyan-700 animate-pulse" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/about" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">About</a>
          </li>
          <li>
            <a href="/contact" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
