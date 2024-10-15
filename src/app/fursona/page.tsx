export default function Home() {
    return (
        <>
            <main>
                <div className="relative isolate overflow-hidden bg-gray-900">
                    <img
                        src="/bg/_DSC3167.webp"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="w-full px-6 py-24 sm:py-32 lg:px-8" style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Lynix
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Meet Lynix, a cosmic wolf from the depths of space.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-20">
                    <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
                        Details
                    </h1>
                    <p className="mt-3 text-lg leading-8 text-gray-300">
                        Learn more about Lynix and it's history.
                    </p>
                    {/* Details */}
                    <div className="my-6">
                    </div>
                    <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
                        Refsheet
                    </h1>
                    <p className="mt-3 text-lg leading-8 text-gray-300">
                        Learn more about Lynix's design to help you draw him accurately.
                    </p>
                    {/* Refsheet */}
                    <div className="my-6">
                    <div className='bg-yellow-600 text-black inline-block px-5 py-3 font-bold rounded'>
                <i className="fa-solid fa-exclamation-triangle mr-2 animate-pulse " /> New Changes — My fursona has some upcoming changes in November 2024, stay tuned!
                </div>
                        <img src="/fursona/lynix-ref-v5.0.png" alt="Lynix Refsheet 5.0" className="max-w-[500px] my-5"/>
                        <h3 className="text-3xl font-bold">Color Palette</h3>
                        <div className="flex space-x-4 items-center my-3">
                            <div className="h-10 w-10 bg-[#520092] border border-neutral-600"></div>
                            <div className="h-10 w-10 bg-[#e6baff] border border-neutral-600"></div>
                            <div className="h-10 w-10 bg-white border border-neutral-600"></div>
                            <div className="h-10 w-10 bg-[#2b2b2b] border border-neutral-600"></div>
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
                        Gallery
                    </h1>
                    <p className="mt-3 text-lg leading-8 text-gray-300">
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                    {/* Gallery */}
                    <div className="">
                    </div>
                </div>
            </main>
        </>
    );
}
