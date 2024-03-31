"use client"

import moment from "moment";
import { useEffect, useState } from "react";

export default function Blog() {

    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <div className="w-full" style={{ "background": "url(/DSC2399_TekCastPork.jpg)", "backgroundSize": "cover", "backgroundPosition": "center" }}>
                    <div className="w-full h-[400px] flex items-center justify-center bg-cyan-950 bg-opacity-80">
                        <div>
                            <h1 className="text-5xl font-semibold text-cyan-500 text-center">Projects</h1>
                            <p className="text-center mt-3 text-neutral-300 text-xl">A collection of my personal projects and contributions.</p>

                            <p className="text-sm text-center italic mt-5">Background Picture by <a href="https://tekcast.carrd.co/"><span className="font-bold text-green-500 hover:text-green-400 transition-colors">TekCastPork</span></a></p>
                        </div>
                    </div>
                </div>
                <div className="mb-16 flex flex-col items-start container mt-10   md:px-0 px-5">
                    {/* Loading spinner if articles are not loaded */}
                    <p className="text-neutral-400 mt-5 text-2xl"><i className="fa-solid fa-spinner animate-spin"></i></p>

                </div>


            </main>
        </>
    );

}