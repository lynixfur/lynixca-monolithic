"use client"

import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [boopCount, setBoopCount] = useState(0);
  const [firstBoopTime, setFirstBoopTime] = useState(0);

  const [squished, setSquished] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const playSound = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  const handleBoop = () => {
    // Only trigger the boop if the user is on the home page
    if (pathname == "/") {
      const now = Date.now();
      setBoopCount((prevCount) => prevCount + 1);

      setSquished(true);
      setTimeout(() => {
        setSquished(false);
      }, 150); // Adjust the time according to your preference

      if (boopCount === 0) {
        setFirstBoopTime(now);
      } else if (now - firstBoopTime <= 10000) {
        if (boopCount + 1 === 10) {
          // Fetch Current Station API https://api.lynix.ca/v1/current-station 
          fetch('https://api.lynix.ca/v1/current-station')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              playSound('https://lynix.ca/union-doorsleft-lynixca-v2.mp3'); // Hard code for now
            })
            .catch((error) => {
              console.error('Error:', error);
              playSound('https://lynix.ca/union-doorsleft-lynixca-v2.mp3'); // Hard code for now
            });

          // Reset the boop count and first boop time
          setBoopCount(0);
          setFirstBoopTime(0);
        }
      } else {
        // If more than 10 seconds have passed since the first boop, reset the boop count and first boop time
        setBoopCount(1);
        setFirstBoopTime(now);
      }
    } else {
      // Send to / page
      window.location.href = "/";
    }
  };

  if (pathname != "/boop_counter") {
    return (
      <header className="py-5 px-7 md:px-24 bg-neutral-950 border-b border-neutral-950">
        <nav className="flex items-center justify-between">
          <div className="font-semibold text-lg flex items-center mr-10">
            <div className='h-[50px] w-[50px] flex items-end justify-center'>
              <img
                src="/lynix.png"
                alt="lynix"
                className={`mr-3 -mt-1.5 ${squished ? 'squished' : ''}`}
                onClick={handleBoop}
              />
            </div>
            <span className="text-cyan-600 font-bold italic text-3xl hidden">Lynix</span>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className="fill-current" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/blog" className="font-semibold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Blog</a>
            <a href="#" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Projects</a>
            <a href="/fursona" className="font-bold text-xl hover:text-cyan-600 transition-colors text-neutral-300">Fursona</a>
            <a href="/store" className="font-bold text-xl hover:text-cyan-600 transition-colors flex items-center text-neutral-300 hidden">Freaked Howls
              <p className='text-sm bg-cyan-900 hover:text-white py-1.5 px-3 rounded-full ml-2'>New!</p>
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
              <a href="/blog" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Blog</a>
            </li>
            <li>
              <a href="/fursona" className="font-bold text-lg hover:text-cyan-600 transition-colors text-neutral-400">Fursona</a>
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
