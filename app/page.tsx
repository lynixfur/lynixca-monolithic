import Image from "next/image";
import Navbar from "../components/nav/NavbarHome";
import FE from "@/components/modals/FE";
import { useSearchParams } from "next/navigation";


import Welcome from "@/components/pages/home/Welcome";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Welcome />
      </main>
    </>
  );
}
