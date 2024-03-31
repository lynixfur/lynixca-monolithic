"use client";
import Image from "next/image";
import SmallAlert from "@/components/SmallAlert";
import { useEffect, useState } from "react";

export default function Home() {

    // Fetch Boop Count
    const [boop, setBoop] = useState(0);

    // Fetch it each 5 seconds and initially
    useEffect(() => {
        // Initial fetch
        fetch('https://api.lynix.ca/v1/boop_count')
            .then(response => response.text())
            .then(data => setBoop(Number(data)));

        const interval = setInterval(() => {
            fetch('https://api.lynix.ca/v1/boop_count')
                .then(response => response.text())
                .then(data => setBoop(Number(data)));
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <main className="flex h-screen justify-center items-center">
                <div>
                <h1 className="font-semibold text-neutral-500 text-center m-0 p-0" style={{fontSize: "15vw"}}>{boop}</h1>
                <h1 className="font-semibold text-neutral-500 text-center mt-0 pt-0" style={{fontSize: "7vw"}}>Boops</h1>
                </div>
            </main>
        </>
    );
}
