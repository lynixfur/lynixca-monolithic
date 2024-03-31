export default function Welcome() {
    return (
        <div className="stars-wrapper relative">
            <div className="stars">
            </div>
            <div className="overlay absolute inset-0 flex items-center justify-center">
                <div className="content flex flex-col justify-center items-center">
                    <img src="lynix2.png" className="w-32 mb-1.5" alt="lynix" />
                    <h1 className="text-5xl md:text-6xl font-semibold text-neutral-100">
                        Hi, I&apos;m Lynix!
                    </h1>
                    <p className="pt-4 text-lg text-neutral-400 text-center px-4 md:px-0">
                        I&apos;m a passionate Canadian cybersecurity analyst, software developer, and furry ready to leverage IT for positive global change.
                    </p>
                    <div className="grid gap-5 grid-cols-5 mt-10">
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
                    <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 text-center">
                        <a href="#about" className="mt-3 md:mt-10 bg-cyan-800 py-3 px-10 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}