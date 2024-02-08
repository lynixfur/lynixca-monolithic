import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center">
        <div className="mb-16 flex flex-col items-start">
          <Navbar />
          <div className="bg-cyan-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 my-10">
            <i className="fa-solid fa-bullhorn mr-2" /> Lynix is going to Toronto in daysUntilToronto days! Get ready for the meetup, convention stickers will be provided!
          </div>
          {/* Logo and greetings */}
          <div className="block md:flex items-center mb-5 space-x-0 md:space-x-3">
            <img src="lynix2.png" className="w-20 mb-1.5" alt="lynix" />
            <h1 className="text-6xl font-semibold text-neutral-100">
              Hi, I'm Lynix!
            </h1>
          </div>
          <h2 className="text-3xl text-neutral-300">
            Cybersecurity Student
          </h2>
          <p className="pt-4 text-lg grow text-neutral-400">
            I'm a Canadian old VR enthusiast, Developer, Cybersecurity Student, and Furry, I'm seeking opportunities to
            change the world for better for everyone with IT.
            <br /><br />
            <span className="text-sm text-cyan-600 hidden">%INFA_STATUS%</span>
          </p>
          <div className="grid gap-5 grid-cols-5 mt-8">
            <a href="https://discord.com" aria-label="Discord">
              <i className="fa-brands fa-discord text-4xl text-neutral-400" />
            </a>
            <a href="https://t.me/cyberlynix" aria-label="Telegram">
              <i className="fa-brands fa-telegram text-4xl text-neutral-400" />
            </a>
            <a href="https://github.com/cyberlynix" aria-label="GitHub">
              <i className="fa-brands fa-github text-4xl text-neutral-400" />
            </a>
            <a href="https://twitter.com/cyberlynix" aria-label="Twitter">
              <i className="fa-brands fa-twitter text-4xl text-neutral-400" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-roy-6316a624b/" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin text-4xl text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
