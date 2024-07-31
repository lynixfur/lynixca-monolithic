"use client"
 
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  if(pathname != "/overlays/fe2024") {
    return (
      <header className="py-5 px-7 md:px-24 bg-neutral-950 border-b border-neutral-950">
        <nav className="flex items-center justify-between">
          <a href="/" className="font-semibold text-lg flex items-center mr-10">
            <img src="/lynix.png" alt="lynix" className="h-[50px] w-[50px] mr-3 -mt-1.5" />
            <span className="text-cyan-600 font-bold italic text-3xl  hidden">Lynix</span>  
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
            <a href="/fursona" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Fursona</a>
            <a href="/events" className="font-bold text-xl hover:text-cyan-600 transition-colors flex items-center text-neutral-300">Conventions
              <i className="fa fa-circle text-xs ml-2 text-green-600 animate-pulse" aria-hidden="true"></i>
            </a>
            <a href="/about" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">About</a>
            <a href="/contact" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Contact</a>

            {/* Profile Picture */}
            {/* New Account Feature */}
            <div className="hidden">
              <img src="/fursona/gallery/lynixrender-fixed.png" alt="profile" className="h-10 w-10 rounded-full object-cover object-top border-2 border-neutral-600" />
            </div>


          </div>
        </nav>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="grid space-y-5 mt-5">
            <li>
              <a href="/projects" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Projects</a>
            </li>
            <li>
              <a href="/fursona" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Fursona</a>
            </li>
            <li>
              <a href="/events" className="font-bold text-lg hover:text-cyan-600 transition-colors flex items-center text-neutral-400">
                Conventions
                <i className="fa fa-circle text-xs ml-2 text-green-600 animate-pulse" aria-hidden="true"></i>
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
