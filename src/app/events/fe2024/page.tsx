import moment from "moment";

export default function FE2024() {
    return (
        <>
            <main className="flex justify-center mt-10 md:px-0 px-5">
                <div className="mb-16 flex flex-col items-start container">
                    <img className="w-full h-96 object-cover object-center rounded-2xl mb-5" src="/2024-Background-Signature.png" />
                    <h1 className="text-4xl font-semibold text-cyan-500">Furnal Equinox 2024</h1>
                    <h3 className="text-neutral-200 text-2xl mt-5">Toronto, ON</h3>
                    <p className="text-neutral-400 mt-2">Furnal Equinox is a furry convention that takes place in Toronto, Ontario, Canada. It is a multi-day event that takes place in March.</p>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-clock"></i> {moment(0).format('MMMM Do YYYY, h:mm a')} - {moment(1).format('MMMM Do YYYY, h:mm a')}</p>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot"></i> 1 Harbour Square, Toronto ON</p>
                    {/* Telegram Channel */}
                    <a href={'https://t.me/lynixfur'} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                        Meetup on Telegram
                    </a>
                    <br />
                    <hr className="w-full border-t border-neutral-700 mt-10 mb-10" />
                    {/* gRID 2 COLS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                        <div>
                            <h2 className="text-2xl font-semibold flex items-center">Live Stream</h2>
                            <p className="text-neutral-400 mt-2">Watch lynix live tour around Toronto on March 14th 2024!</p>
                            <iframe
                                src="https://player.twitch.tv/?channel=lynixfur&parent=lynix.ca"
                                allowFullScreen className="pt-5 w-full aspect-video">
                            </iframe>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Pictures and Videos</h2>
                            <p className="text-neutral-400 mt-2">The LCM Vault allows you to download pictures taken by Lynix during FE with tags of your fursona or character!
                            <br/><br/>
                            <strong>Total Size:</strong> 301.48 GB</p>
                            {/* List of attending furs */}
                            <a href={'https://t.me/lynixfur'} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                                Download Pictures
                            </a><br/>
                            <a href={'https://t.me/lynixfur'} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                                Download Videos
                            </a><br/>
                            <a href={'https://t.me/lynixfur'} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                                Download Boop Logs (Filtered)
                            </a>
                        </div>
                    </div>
                    <hr className="w-full border-t border-neutral-700 mt-10 mb-10" />
                </div>
            </main>
        </>
    );

}