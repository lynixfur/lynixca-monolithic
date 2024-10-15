import Image from "next/image";
import Navbar from "../components/nav/NavbarHome";

export default function NotFound() {
  return (
    <>
      <main className="relative isolate h-screen">
        <img
          src="/tobee-bg.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="w-full h-full" style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white hidden">404</p><br/>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Page Unavailable
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              It seems the page you’re looking for has been moved or no longer exists.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#" className="text-sm font-semibold leading-7 flex items-center bg-[#5f009d] text-neutral-100 rounded-full px-3 border-2 border-[#aa72d5]">
                <i className="fa-solid fa-house text-xs mr-1"></i> Back to home
              </a>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
