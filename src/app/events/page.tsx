import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className="flex justify-center mt-10">
                <div className="mb-16 flex flex-col items-start container">
                    <h1 className="text-4xl font-semibold">Events</h1>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-exclamation-triangle mr-1"></i> This page is currently unavailable because the necessary API module is missing.</p>

                    {/* Seach Box */}
                    <div className="mt-5 w-full md:w-1/3 hidden">
                        <input type="text" placeholder="Search for events" className="w-full bg-neutral-800 p-3 outline-none rounded-md border border-neutral-700 text-neutral-200 placeholder-neutral-400" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-5 hidden">
                        <div>
                            <div className="bg-neutral-800 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700">
                                <img src="https://furnalequinox.com/wp-content/uploads/2023/06/2024-Background-Signature.png" alt="Event Image" className="hidden md:block w-64 object-cover" />
                                <div className="p-5">
                                    <h2 className="text-2xl font-semibold">Furnal Equinox 2024</h2>
                                    <p className="text-neutral-400 mt-2">March 13, 2024 · March 18, 2024</p>
                                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i> Toronto, ON</p>
                                    <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4">
                                        <i className="fa fa-circle text-xs mr-2 text-cyan-700 animate-pulse" aria-hidden="true"></i>
                                        This event is starting soon!
                                    </p>
                                    <a href="/event/fe2024" className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                                        More Info
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-neutral-800 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700">
                                <img src="https://media.cdn.furality.online/files/web/bg/furality-umbra-cover.jpg" alt="Event Image" className="hidden md:block w-64 object-cover" />
                                <div className="p-5">
                                    <h2 className="text-2xl font-semibold">Furality Umbra</h2>
                                    <p className="text-neutral-400 mt-2">June 6, 2024 · June 9, 2024</p>
                                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i> VRChat</p>
                                    <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4 opacity-0">
                                        <i className="fa fa-circle text-xs mr-2 text-cyan-700 animate-pulse" aria-hidden="true"></i>
                                        This event is starting soon!
                                    </p>
                                    <a href="/" className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                                        More Info
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
