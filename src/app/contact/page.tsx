import Image from "next/image";
import SmallAlert from "@/components/SmallAlert";

export default function Home() {
    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <div className="w-full h-[400px] flex items-center justify-center bg-neutral-900 bg-opacity-80">
                    <div><h1 className="text-5xl font-semibold text-neutral-500 text-center">Contact</h1>
                        <p className="text-center mt-3 text-neutral-300 "></p></div>
                </div>
                <div className="mb-16 flex flex-col items-start container mt-10   md:px-0 px-5">
                    <p className="text-neutral-400 mt-2 flex items-center font-semibold"><i className="mr-5 fa-brands fa-twitter text-4xl ml-1"></i> @lynixfur</p>
                    <p className="text-neutral-400 mt-2 flex items-center font-semibold"><i className="mr-5 fa-brands fa-telegram text-4xl ml-1"></i> @lynixfur</p>
                    <p className="text-neutral-400 mt-2 flex items-center font-semibold"><i className="mr-5 fa-brands fa-discord text-4xl"></i> lynixfur</p>
                    <p className="text-neutral-400 mt-2 flex items-center font-semibold"><i className="mr-5 fa-brands fa-steam text-4xl ml-1"></i> lynixfur</p>
                    <p className="text-neutral-400 mt-2 flex items-center font-semibold"><i className="mr-5 fa-brands fa-github text-4xl ml-1"></i> lynixfur</p>
                    <p className="text-neutral-400 mt-2 flex items-center font-semibold"><i className="mr-5 fa-brands fa-reddit text-4xl ml-1"></i> lynixfur</p>
                    <p className="text-neutral-400 mt-2 flex items-center font-semibold"><i className="mr-5 fa-brands fa-twitch text-4xl ml-1"></i> lynixfur</p>
                </div>
            </main>
        </>
    );
}
