import Navbar from "@/components/nav/NavbarHome";

export default function Welcome() {
    return (
        <div className="stars-wrapper relative background-div flex justify-center items-center">
            <div id="text" className="md:w-auto p-10 md:mb-14 md:rounded-2xl mt-40" style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(20px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
                <h1 className="text-4xl md:text-6xl text-center font-bold text-[#8e1be1]">
                    Hey, I&apos;m Lynix!
                </h1>
                <p className="pt-4 text-lg text-white text-center px-1 md:px-0 hidden md:block">
                ✨ I’m a biotechnological purple wolf based in Downtown Toronto, with a fiery passion for traveling and cybersecurity. <br/> Exploring new horizons and safeguarding the digital world are what drive me every day. ✨
                </p>
                <p className="text-xs text-center italic mt-3">Picture taken by <a className="font-bold" href="https://www.furtrack.com/user/TobeeCoyotee/">TobeeCoyotee</a> at Nuit Blanche 2024 in Downtown Toronto</p>
                <div className="hidden flex items-center items-center">
                <div className="md:flex space-x-5 mt-5">
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