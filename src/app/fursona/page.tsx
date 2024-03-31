import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <div className="w-full" style={{ "background": "url(/toronto_lookout.jpg)", "backgroundSize": "cover", "backgroundPosition": "center" }}>
                    <div className="w-full h-[400px] flex items-center justify-center bg-cyan-950 bg-opacity-80">
                        <div><h1 className="text-5xl font-semibold text-cyan-500 text-center">Lynix</h1>
                            <p className="text-center mt-3 text-neutral-300 text-xl">A Freakhound saving us from cyber attacks.</p></div>
                    </div>
                </div>
                <div className="my-16 flex flex-col items-start container mt-10  md:px-0 px-5">
                    <p className="text-neutral-400"><span className="text-cyan-600 font-semibold">Fursona:</span> A fursona is a personalized animal character created by someone in the furry fandom. Fursonas may be anthropomorphic personas, idealized versions of their owners, fleshed out role-play characters, or simply digital mascots.</p>
                    <br /><p className="text-neutral-400"><span className="text-cyan-600 font-semibold">Fursuit:</span> A fursuit is a costume that represents a person's fursona. Fursuits are often worn to furry conventions, where furries can meet and interact with other members of the furry fandom. Fursuits can be partial, covering only part of the body, or full, covering the entire body.</p>
                    <div className="flex items-center w-full my-5">
                        <span className="flex-shrink text-cyan-600 font-bold text-3xl mr-5">
                            About Lynix
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <div className="bg-red-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 mt-30">
                        <i className="fa-solid fa-exclamation-triangle mr-2" /> WARNING: During Furnal Equinox 2024, Lynix's fursona was slightly alterned with new star patterns and a new tail coloring, please contact lynix for accurate descriptions!
                    </div>
                    <div className="flex md:flex-row flex-col py-8 md:space-x-10">
                        <div className="flex flex-col md:w-1/2 w-full md:py-0 py-8">
                            <img
                                src="/description.png"
                                className="w-[24rem] md:w-[48rem] self-center rounded-2xl"
                            />
                        </div>
                        <div className="md:w-1/2 w-full md:px-0 px-2 flex flex-col">
                            <p className="text-justify leading-8 text-neutral-400">
                                Meet the extraordinary Lynix, a Freakhound like no other. This canine hybrid, a mesmerizing blend of fur and scales, boasts a powerful reptilian tail and eyes that shift with an otherworldly luminescence. Endowed with the ability to breathe even in the airless void of space, Lynix is a true creature of the cosmos. Connected to the vast Freakhound Network, this cybernetic marvel taps into a boundless stream of intelligence, instantly detecting threats both physical and digital. Lynix's unique mind can even simulate real-world events and technological scenarios, preparing this Freakhound for any challenge the universe might throw its way.
                            </p>
                            <div className="flex flex-col pt-8">
                                <span className="text-lg text-justify leading-8 text-neutral-400 font-semibold text-xl">
                                    Fursona Colors
                                </span>
                                <div className="flex flex-col md:flex-row gap-4 pt-4">
                                    <div className="flex flex-col">
                                        <button
                                            className="w-10 h-10 rounded-lg bg-cyan-600 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-10 h-10 rounded-lg bg-blue-800 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-10 h-10 rounded-lg bg-green-600 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-10 h-10 rounded-lg bg-green-700 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-10 h-10 rounded-lg bg-white tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-10 h-10 rounded-lg bg-black tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-full my-5">
                        <span className="flex-shrink text-cyan-600 font-bold text-3xl mr-5">
                            Fursuit
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <div className="flex md:flex-row flex-col py-8 md:space-x-10">
                        <div className="md:w-1/2 w-full md:px-0 px-2 flex flex-col">
                            <p className="text-justify leading-8 text-neutral-400">
                                My fursuit represents my Freakhound fursona in real life! It's a partial fursuit, which means it only covers my head, hands, and feet. The head is the most important part of the fursuit, as it's where the character comes to life. The head is made of foam and fur, and it's designed to look like my fursona's head. The hands and feet are also made of foam and fur, and they're designed to look like my fursona's paws. I love wearing my fursuit because it allows me to bring my fursona to life and interact with other furries in real life. It's a fun and creative way to express myself and connect with other members of the furry fandom but it is not completely finished yet, but it is <span className="text-green-600">66%</span> completed! I can't wait to show it off at conventions and furry events! I plan on commissioning <span className="text-cyan-600 font-semibold">Made Fur You</span> for my full suit!
                            </p>
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="w-full md:w-1/2">
                                    <p className="text-lg text-justify leading-8 text-neutral-400 font-semibold text-xl mt-5">
                                        Partial Suit - <span className="text-green-600">66%</span> Completed
                                    </p>
                                    {/* Progress Bar */}
                                    <div className="w-full bg-neutral-800 rounded-lg overflow-hidden mt-2 h-1">
                                        <div className="bg-green-600 h-1" style={{ width: "66%" }} />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <p className="text-lg text-justify leading-8 text-neutral-400 font-semibold text-xl mt-5">
                                        Full Suit - <span className="text-cyan-600">3%</span> Funded
                                    </p>
                                    {/* Progress Bar */}
                                    <div className="w-full bg-neutral-800 rounded-lg overflow-hidden mt-2 h-1">
                                        <div className="bg-cyan-600 h-1" style={{ width: "3%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:w-1/2 w-full md:py-0 py-8">
                            <img
                                src="/fursuit.jpg"
                                className="w-[24rem] md:w-[48rem] self-center aspect-video object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="flex items-center w-full my-5">
                        <span className="flex-shrink text-cyan-600 font-bold text-3xl mr-5">
                            Credits
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-400">Thanks to <span className="text-cyan-600 font-semibold">DeadDogDrool</span> for making my Reference Sheet! And for both <span className="text-cyan-600 font-semibold">Goatfangs</span>, <span className="text-cyan-600 font-semibold">NordstromKaiju</span> for working on my partial fursuit! Stickers are designed by <span className="text-cyan-600 font-semibold">Remy</span> and <span className="text-cyan-600 font-semibold">KookiesCrafts</span>!</p>

                </div>
                <div className="mb-16 flex flex-col items-start container mt-10  md:px-0 px-5 hidden">
                    <div className="flex items-center w-full">
                        <span className="flex-shrink text-cyan-600 font-bold text-3xl mr-5">
                            Description
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <br /><br />
                    <div className="bg-red-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 my-10 mt-30">
                        <i className="fa-solid fa-exclamation-triangle mr-2" /> WARNING: During Furnal Equinox 2024, Lynix the Freahkound has had a tail redesign, please contact lynix for live tail pictures thank you! The ref sheet may be inaccurate until after the convention!
                    </div>
                    <div className="bg-red-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 my-10 mt-30">
                        <i className="fa-solid fa-exclamation-triangle mr-2" /> WARNING: During Furnal Equinox 2024, Lynix the Freahkound has had a backing and marking redesign, please contact lynix for live tail pictures thank you! The ref sheet may be inaccurate until after the convention!
                    </div>
                    <div className="flex md:flex-row flex-col py-8">
                        <div className="flex flex-col md:w-1/2 w-full md:py-0 py-8 px-8">
                            <img
                                src="/description.png"
                                className="w-[24rem] md:w-[48rem] self-center"
                            />
                        </div>
                        <div className="md:w-1/2 w-full md:px-0 px-8 flex flex-col">
                            <p className="text-lg text-justify leading-8 text-neutral-400">
                                Meet the extraordinary Lynix, a Freakhound like no other. This canine hybrid, a mesmerizing blend of fur and scales, boasts a powerful reptilian tail and eyes that shift with an otherworldly luminescence. Endowed with the ability to breathe even in the airless void of space, Lynix is a true creature of the cosmos. Connected to the vast Freakhound Network, this cybernetic marvel taps into a boundless stream of intelligence, instantly detecting threats both physical and digital. Lynix's unique mind can even simulate real-world events and technological scenarios, preparing this Freakhound for any challenge the universe might throw its way.
                            </p>
                            <div className="flex flex-col pt-8">
                                <span className="text-lg text-justify leading-8 text-neutral-400 font-semibold text-xl">
                                    Colors
                                </span>
                                <div className="flex flex-col md:flex-row gap-4 pt-4">
                                    <div className="flex flex-col">
                                        <button
                                            className="w-16 h-16 rounded-lg bg-cyan-600 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-16 h-16 rounded-lg bg-blue-800 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-16 h-16 rounded-lg bg-green-600 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-16 h-16 rounded-lg bg-green-700 tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-16 h-16 rounded-lg bg-white tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <button
                                            className="w-16 h-16 rounded-lg bg-black tooltip tooltip-bottom transition shadow-md hover:shadow-xl"
                                            data-tip="Click to copy color">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Lore
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-500"><i className="fa-solid fa-triangle-exclamation my-4"></i> No description available for this section.</p>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Fursuit Details
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-500"><i className="fa-solid fa-triangle-exclamation my-4"></i> No description available for this section.</p>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Stickers
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-500"><i className="fa-solid fa-triangle-exclamation my-4"></i> No stickers available.</p>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Gallery
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-500"><i className="fa-solid fa-triangle-exclamation my-4"></i> No artwork available.</p>
                </div>
            </main>
        </>
    );
}
