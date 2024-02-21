import Image from "next/image";
import Navbar from "../components/Navbar";
import SmallAlert from "@/components/SmallAlert";
import FE from "@/components/modals/FE";
import { useSearchParams } from "next/navigation";

export default function Home() {
  return (
    <>
    <main className="">
        <div className="mb-16 flex flex-col items-start">
          <SmallAlert />
          {/* Logo and greetings */}
          <div className="block md:flex items-center mb-5 space-x-0 md:space-x-3">
            <img src="lynix2.png" className="w-20 mb-1.5" alt="lynix" />
            <h1 className="text-6xl font-semibold text-neutral-100">
              Hi, I&apos;m Lynix!
            </h1>
          </div>
          <h2 className="text-3xl text-cyan-600 font-semibold">
            Cybersecurity Student
          </h2>
          <p className="pt-4 text-lg grow text-neutral-400">
            I&apos;m a Canadian VR enthusiast, Developer, Cybersecurity Student, and Furry, I&apos;m seeking opportunities to
            change the world for better for everyone with IT.
            <br /><br />
            <span className="text-sm text-cyan-600 hidden">%INFA_STATUS%</span>
          </p>
          <div className="grid gap-5 grid-cols-5 mt-2">
            <a href="https://discord.com" aria-label="Discord">
              <i className="fa-brands fa-discord text-4xl text-neutral-400" />
            </a>
            <a href="https://t.me/lynixfur" aria-label="Telegram">
              <i className="fa-brands fa-telegram text-4xl text-neutral-400" />
            </a>
            <a href="https://github.com/lynixfur" aria-label="GitHub">
              <i className="fa-brands fa-github text-4xl text-neutral-400" />
            </a>
            <a href="https://twitter.com/lynixfur" aria-label="Twitter">
              <i className="fa-brands fa-twitter text-4xl text-neutral-400" />
            </a>
            <a href="https://www.linkedin.com/in/anthony-roy-6316a624b/" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin text-4xl text-neutral-400" />
            </a>
          </div>

          <div className="grid gap-5 grid-cols-2 mt-5">
              <a href="/" className="mt-10 inline-block text-center bg-cyan-800 py-1.5 px-6 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                Contact Me
              </a>
          </div>
        </div>
        <FE/>
    </main>
    </>
  );
}
