import Image from "next/image";
import Navbar from "../components/nav/NavbarHome";
import FE from "@/components/modals/FE";
import { useSearchParams } from "next/navigation";


import Welcome from "@/components/pages/home/Welcome";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* NFC Component for FE */}
        <FE />


        <Welcome />
        <div className="py-4 text-sm md:px-24 hidden">
          <p>Copyright {new Date().getFullYear()} Lynix. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}
