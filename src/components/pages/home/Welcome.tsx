import NavbarHome from "@/components/nav/NavbarHome";
import Navbar from "@/components/nav/NavbarHome";

export default function Welcome() {
    return (
        <div className="stars-wrapper relative background-div">

            <div className="rounded-md p-4 absolute top-5 left-5 mt-3"  style={{ background: "rgba(255, 255, 0, 0.21)", backdropFilter: "blur(20px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
                <div className="flex">
                    <div className="ml-3">
                        <h3 className="text-lg font-bold text-yellow-800 flex items-center"><i className="fa-solid fa-triangle-exclamation mr-2"></i> Howl Network Outage</h3>
                        <div className="mt-2 text-sm text-yellow-700">
                            <p>
                                With the recent system upgrade and redesign of my site, some servers or services may be temporarily offline. Thank you for your patience!
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <Navbar />
            <h1 className="Block md:hidden text-4xl text-center md:text-left font-bold text-neutral-900 md:text-neutral-100 mt-10">
                Hey, I&apos;m Lynix!
            </h1>
            <div className="flex justify-center">
                <div className="flex md:hidden space-x-5 mt-5">
                    <a href="https://discord.com" aria-label="Discord">
                        <i className="fa-brands fa-discord text-3xl text-neutral-950" />
                    </a>
                    <a href="https://t.me/lynixfur" aria-label="Telegram">
                        <i className="fa-brands fa-telegram text-3xl text-neutral-950" />
                    </a>
                    <a href="https://github.com/lynixfur" aria-label="GitHub">
                        <i className="fa-brands fa-github text-3xl text-neutral-950" />
                    </a>
                    <a href="https://twitter.com/lynixfur" aria-label="Twitter">
                        <i className="fa-brands fa-twitter text-3xl text-neutral-950" />
                    </a>
                </div>
            </div>
            <div id="text" className="hidden md:block w-full md:w-auto absolute md:bottom-0 md:left-0 p-10 md:mb-14 md:rounded-r-2xl" style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(20px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
                <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold text-white">
                    Hey, I&apos;m Lynix!
                </h1>
                <p className="pt-4 text-lg text-white text-left px-1 md:px-0 hidden md:block">
                    As a Canadian developer, cybersecurity instructor, and furry enthusiast, I am passionate about leveraging<br /> IT to create positive change and make the world a better place for everyone.
                </p>
                <p className="text-xs italic mt-1">The fursuit head is not Lynix, it&apos;s Outlaw_Coyote.</p>
                <div className="hidden md:flex space-x-10 mt-5">
                    <a href="https://discord.com" aria-label="Discord">
                        <i className="fa-brands fa-discord text-4xl text-neutral-100" />
                    </a>
                    <a href="https://t.me/lynixfur" aria-label="Telegram">
                        <i className="fa-brands fa-telegram text-4xl text-neutral-100" />
                    </a>
                    <a href="https://github.com/lynixfur" aria-label="GitHub">
                        <i className="fa-brands fa-github text-4xl text-neutral-100" />
                    </a>
                    <a href="https://twitter.com/lynixfur" aria-label="Twitter">
                        <i className="fa-brands fa-twitter text-4xl text-neutral-100" />
                    </a>
                </div>
            </div>
            {/*<div className="overlay absolute inset-0 flex">
                <div className="content flex flex-col justify-center items-center">
                    <h1 className="text-5xl md:text-6xl font-semibold text-neutral-950">
                        Hey, I&apos;m Lynix!
                    </h1>
                    <p className="pt-4 text-lg text-neutral-300 text-center px-4 md:px-0">

                        As a Canadian developer, cybersecurity instructor, and furry enthusiast, I am passionate about leveraging IT<br/> to create positive change and make the world a better place for everyone.
                    </p>
                    <div className="grid gap-5 grid-cols-4 mt-10">
                        <a href="https://discord.com" aria-label="Discord">
                            <i className="fa-brands fa-discord text-4xl text-neutral-400" />
                        </a>
                        <a href="https://t.me/lynixfur" aria-label="Telegram">
                            <i className="fa-brands fa-telegram text-4xl text-neutral-400" />
                        </a>
                        <a href="https://github.com/lynixfur" aria-label="GitHub">
                            <i className="fa-brands fa-github text-4xl text-neutral-400" />
                        </a>
                        <a href="https://twitter.com/lynixfur" aria-label="Twitter">
                            <i className="fa-brands fa-twitter text-4xl text-neutral-400" />
                        </a>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}