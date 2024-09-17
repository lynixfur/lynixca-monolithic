import Image from "next/image";
import Navbar from "../components/nav/NavbarHome";

export default function NotFound() {
  return (
    <>
      <main className="relative isolate h-screen">
        <img
          src="/bg/_DSC3167.webp"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="w-full h-full" style={{ background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white hidden">404</p><br />
            <div className="flex justify-center">
              <img src="/mn.png" />
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Under Maintenance
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              I’m currently redesigning my website with new content and a fresh look. Exciting updates are on the way, so stay tuned for the relaunch!
            </p>
            <div className="mt-10 flex justify-center hidden">
              <a href="#" className="text-sm font-semibold leading-7 flex items-center bg-[#67d9cc] text-neutral-950 rounded-full px-3">
                <i className="fa-solid fa-house text-xs mr-1"></i> Back to home
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
