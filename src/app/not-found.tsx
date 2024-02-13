import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <main className="">
        <h1 className="text-8xl font-bold text-cyan-700">404</h1>
        <h2 className="text-3xl mt-2">Page Not Found</h2>
        <p className="mt-5 text-neutral-400">Sorry, the page you are looking for is not available.</p>

        {/* Go home button */}
        <a href="/" className="mt-10 inline-block bg-cyan-800 py-3 px-8 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
          Return Home
        </a>
        
    </main>
    </>
  );
}
