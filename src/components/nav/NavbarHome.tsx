"use client"

import { usePathname } from 'next/navigation'
import { useState } from 'react';

import AboutDropdown from './dropdowns/home/AboutDropdown';
import GalleryDropdown from './dropdowns/home/GalleryDropdown';
import ProjectsDropdown from './dropdowns/home/ProjectsDropdown';

export default function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  if (pathname != "/overlays/fe2024") {
    return (
      <header className="py-5 px-7 md:px-24 bg-[#0c1831] border-[#003978] bg-opacity-0">
        <nav className="flex items-center justify-between">
          <a href="/" className="font-semibold text-lg flex items-center mr-10 opacity-100 md:opacity-0 ">
            <img src="/LynixLogo.svg" alt="lynix" className="w-[75px] mr-3 hidden" />
            <span className="text-neutral-950 font-bold uppercase text-3xl">Lynix</span>
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutral-950 focus:outline-none">
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className="fill-current" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8 mt-3">
            <a href="/blog" className="font-bold text-xl  transition-colors text-neutral-900">Blog</a>
            <ProjectsDropdown />
            <a href="/fursona" className="font-bold text-xl transition-colors text-white hidden">Fursona</a>
            <a href="/events" className="font-bold text-xl transition-colors flex items-center text-neutral-900">Events
              {/*<i className="fa fa-circle text-xs ml-2 text-green-600 hidden" aria-hidden="true"></i>*/}
            </a>

            <GalleryDropdown />
            <AboutDropdown />

            {/* Profile Picture */}
            {/* New Account Feature */}
            <div className="hidden">
              <img src="/fursona/gallery/lynixrender-fixed.png" alt="profile" className="h-10 w-10 rounded-full object-cover object-top shadow-md" />
            </div>


          </div>
        </nav>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="grid space-y-5 mt-5 hidden">
            <li>
              <a href="/projects" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Projects</a>
            </li>
            <li>
              <a href="/fursona" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Fursona</a>
            </li>
            <li>
              <a href="/events" className="font-bold text-lg hover:text-cyan-600 transition-colors flex items-center text-neutral-400">
                Conventions
                {/*<i className="fa fa-circle text-xs ml-2 text-green-600 animate-pulse hidden" aria-hidden="true"></i>*/}
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
}
