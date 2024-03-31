import Image from "next/image";

export default function Store() {
    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <div className="w-full h-[400px] flex items-center justify-center bg-neutral-900 bg-opacity-80">
                    <div><h1 className="text-5xl font-semibold text-neutral-500 text-center">Freaked Howls</h1>
                        <p className="text-center mt-3 text-neutral-300 px-5">We specialize in 3D Fursuit Accessories and Electronics for Fursuiters! <br />
                            Our store is currently: <span className="text-cyan-600 font-bold"><i className="fa-solid fa-spinner animate-spin"/></span></p></div>
                </div><br />
                <a href="#" className="hidden"><div className="bg-red-800 py-2 px-5 font-semibold -ml-1 md:mt-0 md:px-24">
                    <i className="fa-solid fa-triangle-exclamation mr-2" /> Due to a printer problem we are not able to print any products at the moment for Freaked Howls, ETA Unkown!
                </div></a>
                <div className="mb-16 flex flex-col items-start container mt-10  md:px-0 px-5">
                    <div className="flex items-center w-full">
                        <span className="flex-shrink text-cyan-600 font-bold text-3xl mr-5">
                            Products
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <br /><br />

                    <p className="text-neutral-500"><i className="fa-solid fa-triangle-exclamation my-4"></i> No products currently listed.</p>

                    {/* Store Grid with products of $0.00 CAD  */}

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full mt-10 hidden">
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10" />
                                <h2 className="text-xl font-semibold">Lynix Cute Stickers V2 (FE2024)</h2>
                                <p className="text-neutral-400 mt-2  h-[120px]">Get yourself a source of freaky cuteness with these stickers that were given out at FE 2024!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$0.00 CAD</p>
                                    <p className="text-red-400">-7 in Stock</p>
                                </div>
                                {/* Buy Button */}
                                <button className="bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Sold Out</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="opacity-0 w-40 rounded-md object-cover object-top  mb-10" />
                                <h2 className="text-xl font-semibold">Lynix Train GO Sticker (FE2025)</h2>
                                <p className="text-neutral-400 mt-2  h-[120px]">Freaky cuteness on a train! Get yourself a sticker to put on your laptop or phone!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$0.00 CAD</p>
                                    <p className="text-green-400">200 in Stock</p>
                                </div>
                                {/* Buy Button */}
                                <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5">Pre-Order</button>
                                <button className="hidden bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="opacity-0 w-40 rounded-md object-cover object-top  mb-10" />
                                <h2 className="text-xl font-semibold">Off you go Sticker (FE2025)</h2>
                                <p className="text-neutral-400 mt-2  h-[120px]">Ever wanted to throw lynix onto a plane and send him off to Toronto? Get yourself a sticker to do just that!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$0.00 CAD</p>
                                    <p className="text-green-400">198 in Stock</p>
                                </div>
                                {/* Buy Button */}
                                <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5">Pre-Order</button>
                                <button className="hidden bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/tinylynix.jpg" className="w-40 rounded-md object-cover object-top bg-neutral-600 mb-5" />
                                <h2 className="text-xl font-semibold">Tiny Lynix</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]">Ever missed lynix at a convention? Get yourself a tiny lynix to keep you company!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$35.00 CAD</p>
                                    <p className="text-green-400">3 in Stock</p>
                                    <p className="text-cyan-400 hidden">Print Failed <i className="fa-solid fa-exlamation-triangle animate-pulse"></i></p>
                                </div>
                                <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5">Purchase</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10 opacity-0" />
                                <h2 className="text-xl font-semibold">Lynix Keychains</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]">Get yourself a source of freaky cuteness with these keychains that will make you howl at midnight while driving your moto!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$15.00 CAD</p>
                                    <p className="text-red-400">0 in Stock</p>
                                </div>
                                <button className="bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10 opacity-0" />
                                <h2 className="text-xl font-semibold">3D Printed Claws</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]">Get yourself a pair of 3D printed claws for your fursuit! These claws are made of a durable plastic and are perfect for any fursuit!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$30.00 CAD</p>
                                    <p className="text-red-400">0 in Stock</p>
                                </div>
                                <button className="bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10 opacity-0" />
                                <h2 className="text-xl font-semibold">3D Fursuit Teeths (Canine)</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]">Are you a fursuiter and want to improve your fursuit? Get yourself a pair of 3D printed teeths for your fursuit head!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$40.00 CAD</p>
                                    <p className="text-red-400">0 in Stock</p>
                                </div>
                                <button className="bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10 opacity-0" />
                                <h2 className="text-xl font-semibold">3D Printed Commission</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]">Get yourself a 3D printed commission of your fursona or anything you'd like!</p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">Starting at $7.50 CAD</p>
                                </div>
                                <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5">Purchase</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10 opacity-0" />
                                <h2 className="text-xl font-semibold">FreakTail</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]"><br />Requires the <strong>Fursuit API</strong></p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$290.00 CAD</p>
                                    <p className="text-red-400">0 in Stock</p>
                                </div>
                                <button className="bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10 opacity-0" />
                                <h2 className="text-xl font-semibold">FreakEyes</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]">Want better visibility and reactive eyes in your fursuit? Get yourself a pair of FreakEyes for your fursuit head! <br />Requires the <strong>Fursuit API</strong></p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$595.00 CAD</p>
                                    <p className="text-green-400">1 in Stock</p>
                                </div>
                                <button className="bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                        <div className="hidden bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <img src="/lynix2.png" className="w-40 rounded-md object-cover object-top  mb-10 opacity-0" />
                                <h2 className="text-xl font-semibold">FreakShock</h2>
                                <p className="text-neutral-400 mt-2 h-[120px]">FreakShock allows you to intensify your VR Gaming experience with a shock collar that will give you a shock when you get hit in the game! <br />Requires the <strong>Freakshock API</strong></p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-cyan-600 text-2xl font-bold">$0.00 CAD</p>
                                    <p className="text-green-400">48 in Stock</p>
                                </div>
                                <button className="bg-neutral-600 text-neutral-900 font-bold px-5 py-3 rounded-2xl mt-5 opacity-50">Unavailable</button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
