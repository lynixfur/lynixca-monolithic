import Image from "next/image";
import SmallAlert from "@/components/SmallAlert";

export default function Home() {
    return (
        <>
            <main className="flex justify-center mt-10">
                <div className="mb-16 flex flex-col items-start container">
                    <div className="flex space-x-4 items-center">
                        <img src="/lynix.png" className="w-20 mb-1.5" alt="lynix" />
                        <h1 className="text-5xl font-semibold">My Fursona - Lynix</h1>
                    </div>
                    <p className="text-neutral-400 mt-5">Work in Progress!</p>

                    <br />
                </div>
            </main>
        </>
    );
}
