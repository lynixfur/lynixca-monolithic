export default function Welcome() {
    return (
        <section>
            <section className="relative overflow-hidden min-h-screen flex justify-center">
                <div className="w-full container flex flex-row justify-center items-center -mt-10">
                    <div className="flex flex-col space-y-2 items-center">
                        <img src="lynix2.png" className="w-32 mb-1.5" alt="lynix" />
                        <h1 className="text-6xl font-semibold text-neutral-100">
                            Hi, I&apos;m Lynix!
                        </h1>
                        <p className="pt-4 text-lg text-neutral-400">
                            I&apos;m a Canadian VR enthusiast, Developer, Cybersecurity Student, and Furry, I&apos;m seeking opportunities to
                            change the world for better for everyone with IT.
                            <br /><br />
                            <span className="text-sm text-cyan-600 hidden">%INFA_STATUS%</span>
                        </p>
                        <div className="grid gap-5 grid-cols-5 mt-2">
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
                            <a href="https://www.linkedin.com/in/anthony-roy-6316a624b/" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin text-4xl text-neutral-400" />
                            </a>
                        </div>

                        <div className="flex items-center">
                            <a href="/" className="mt-10 inline-block text-center bg-cyan-800 py-1.5 px-6 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}