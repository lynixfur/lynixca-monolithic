import Image from "next/image";
import SmallAlert from "@/components/SmallAlert";

export default function Home() {
    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <div className="w-full h-[400px] flex items-center justify-center bg-neutral-900 bg-opacity-80">
                    <div><h1 className="text-5xl font-semibold text-neutral-500 text-center">About Me</h1>
                        <p className="text-center mt-3 text-neutral-300 "></p></div>
                </div>
                <div className="mb-16 flex flex-col items-start container mt-10  md:px-0 px-5">
                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Introduction
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>

                    <div className="flex md:flex-row flex-col py-8">
                        <div className="flex flex-col md:py-0 py-8 px-8">
                            <img
                                src="/fursona/gallery/pfp.png"
                                className="w-[24rem] md:w-[16rem] rounded-full"
                            />
                        </div>
                        <div className="w-full md:px-0 px-8 flex flex-col">
                            <p className="text-lg text-justify leading-8 text-neutral-400">
                                <span className="text-4xl mb-2 font-bold">Hey! I'm Lynix,</span><br /><br /> a cybersecurity student from the Maritimes of Canada with a passion for coding and tech. I'm also a proud member of the furry community, an outdoor lover, and a total VR enthusiast! Besides that, I'm a lifelong learner who thrives on new challenges. I love experimenting with Open Source projects and even building my own Internet of Things (IoT) hardware. Speaking of which, I'm into writing embedded firmware for fun projects! For instance, I created a Fursuit API and some IoT-enabled badges that are currently being beta tested at Furnal Equinox 2024 in Toronto.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Education
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-500"><i className="fa-solid fa-triangle-exclamation my-4"></i> No Information available as of now!</p>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Job History
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-500"><i className="fa-solid fa-triangle-exclamation my-4"></i> No Information available as of now!</p>


                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Attended Conventions
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-500 hidden"><i className="fa-solid fa-calendar my-4"></i> No conventions attended as of now!</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full mt-10">
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="">
                                <img src="/fe.png" className="rounded-t-xl object-cover object-top" />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold">Furnal Equinox 2024</h2>
                                    <p className="text-neutral-400 mt-2 text-sm">Toronto, ON</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="">
                                <img src="/sylva.jpg" className="rounded-t-xl object-cover object-top" />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold">Furality Sylva</h2>
                                    <p className="text-neutral-400 mt-2 text-sm">VRChat</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="">
                                <img src="/luma.png" className="rounded-t-xl object-cover object-top" />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold">Furality Luma Festival</h2>
                                    <p className="text-neutral-400 mt-2 text-sm">VRChat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
