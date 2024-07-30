import Image from "next/image";
import Navbar from "../components/Navbar";
import SmallAlert from "@/components/SmallAlert";
import FE from "@/components/modals/FE";
import { useSearchParams } from "next/navigation";


import Welcome from "@/components/pages/home/Welcome";
import VirtualReality from "@/components/pages/home/VirtualReality";
import WhoAmI from "@/components/pages/home/WhoAmI";


export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* NFC Component for FE */}
        <FE />


        <Welcome />
        <div className="py-4 text-sm md:px-24">
          <p>Copyright {new Date().getFullYear()} Lynix. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}
