import Image from "next/image";
import Navbar from "../components/Navbar";
import SmallAlert from "@/components/APIHealthCheck";
import FE from "@/components/modals/FE";
import { useSearchParams } from "next/navigation";


import Welcome from "@/components/pages/home/Welcome";


export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Welcome />
        <div className="py-4 text-sm md:px-24 text-center">
          <p>Copyright {new Date().getFullYear()} Lynix. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}
