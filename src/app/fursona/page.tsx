import Image from "next/image";
import SmallAlert from "@/components/SmallAlert";

export default function Home() {
    return (
        <>
            <main className="flex justify-center mt-10">
                <div className="mb-16 flex flex-col items-start container">
                    <SmallAlert />
                    <div className="flex space-x-4 items-center">
                        <img src="/lynix.png" className="w-20 mb-1.5" alt="lynix" />
                        <h1 className="text-5xl font-semibold">My Fursona - Lynix</h1>
                    </div>
                    <p className="text-neutral-400 mt-5">Here&apos;s Lynix! My fursona and mascot of my cybersecurity identity. <br /><br />
                        Lynix is a unique character known as a Freakhound, a canine hybrid with
                        reptilian traits on its tail. Hailing from deep space, Lynix possesses
                        advanced technological knowledge and aids in protecting Earth against cyber
                        attacks. With striking dual-colored eyes (green and blue) and glowing
                        details that respond to its environment and behavior, Lynix is equipped with
                        an embedded implant that enables survival in various conditions, including
                        the ability to breathe in space without oxygen. Supported by the Freakhound
                        Network, Lynix instantly gains intelligence and detects threats.
                        Additionally, Lynix can simulate real-world events and technological
                        scenarios. Apart from its technological expertise, Lynix also takes joy in
                        piloting spacecrafts and planes.<br /><br />
                        <strong>Species:</strong> Freakhound<br />
                        <strong>First Convention:</strong> Furality Luma Festival</p>

                    <br />

                    <p className="mt-3 text-base sm:text-md text-neutral-400">
                        <span className="text-cyan-500 text-md font-bold">What&apos;s a fursona?</span> A fursona
                        is a customized animal character representing someone in the furry fandom,
                        ranging from anthropomorphic personas to roleplay characters or digital
                        mascots.
                    </p>
                    <p className="text-base sm:text-md mt-2 text-neutral-400">
                        <span className="text-cyan-500 text-md  font-bold">What&apos;s a furry?</span> A furry is
                        someone who is a fan or enthusiast of characters that depict animals with
                        human characteristics, such as talking, walking on two legs, and displaying
                        human-like emotions and behaviors.
                    </p>

                    <h1 className="text-4xl font-semibold mt-10 text-cyan-500">Refsheet</h1>
                    <p className="text-neutral-400 mt-2">Lynix is a deep space freakhound with dark blue accents, white body and black floof.</p>
                    <br />
                    <p className="text-neutral-400 mt-2">
                        These colors serve as guiding elements for artists, ensuring the most optimal design alignment for Lynix while maintaining a consistent and cohesive visual identity.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-3">
                        <div className="h-12 w-12 sm:h-16 sm:w-16 bg-black border-2 border-neutral-700"></div>
                        <div className="h-12 w-12 sm:h-16 sm:w-16 bg-neutral-200 border-2 border-neutral-700"></div>
                        <div className="h-12 w-12 sm:h-16 sm:w-16 bg-green-600 border-2 border-neutral-700"></div>
                        <div className="h-12 w-12 sm:h-16 sm:w-16 bg-cyan-600 border-2 border-neutral-700"></div>
                        <div className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-neutral-700" style={{ "backgroundColor": "#025ca9" }}></div>
                    </div>

                    {/* Grid of 2 cols 2 rows */}
                    <div className="grid md:grid-cols-2 gap-5 mt-10 w-full md:w-1/2">
                        <img src="/fursona/ref/VRC5.png" alt="lynix" className="rounded" />
                        <img src="/fursona/ref/VRC2.png" alt="lynix" className="rounded" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 mt-5 w-full md:w-1/2">
                        <img src="/fursona/ref/VRC3.png" alt="lynix" className="rounded" />
                        <img src="/fursona/ref/VRC4.png" alt="lynix" className="rounded" />
                    </div>


                    <h1 className="text-4xl font-semibold mt-10 text-cyan-500">Fursuit Area</h1>
                    <p className="text-neutral-400 mt-2">
                        <strong>Type:</strong> Partial<br />
                        <strong>Artists:</strong> Goatfangs<br />
                        <strong>Status:</strong> Work in Progress (Part 1 of 3)<br />
                        <br />
                        Here are some pictures of my fursuit being made and some pictures of myself wearing it at conventions or events. <br /><br />

                        My fursuit development has started with Goatfangs making me some paws for an upcoming convention in 2024 which is named Furnal Equinox. I&apos;m excited to see the final product and wear it at the convention. As the project evolves more accessories and parts will be added to the suit. Stay tuned for more updates!
                    </p>

                    <div className="bg-neutral-800 p-5 rounded-md mt-5 flex flex-col justify-center items-center">
                        <img src="/fursona/fursuit/PAW_WIP2.png" alt="lynix" className="rounded mt-5 max-w-full md:max-w-[350px] mb-2" />
                        <p className="mt-2 text-sm">This is a WIP Photo of Lynix&apos;s paws being made for FE 2024</p>
                        <p className="font-bold text-cyan-600">Goatfangs - 20 Feb 2024</p>
                    </div>

                    <h1 className="text-4xl font-semibold mt-10 text-cyan-500">Artwork / Gallery</h1>

                    <p className="text-neutral-400 mt-2">
                        Dive into a captivating collection of artwork featuring Lynix, my furry character. <br />
                        From digital masterpieces to playful doodles, witness the creativity and passion of the furry fandom.
                    </p>

                    <p className="mt-10 text-red-700 font-bold">Content Error - Failed to fetch</p>

                </div>
            </main>
        </>
    );
}
