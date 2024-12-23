"use client"

import { useSearchParams } from "next/navigation";

export default function FE() {
  
    const searchParams = useSearchParams()
    let nfc_tag: any = searchParams.get("nfc"); // Get NFC Tag from URL

    if(nfc_tag) {
        nfc_tag = nfc_tag.toLowerCase();
    }

    if(nfc_tag === "cute" || nfc_tag === "cute.paw_left" || nfc_tag === "cute.paw_right" || nfc_tag === "cute_qr") {
        return (
            <div id="default-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black bg-opacity-80">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative rounded-lg shadow bg-neutral-950 border border-neutral-700">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                <h3 className="text-xl font-semibold text-white mt-2">
                    Hewwo! I&apos;m Lynix! Thanks for meeting me at <br/><strong className="text-purple-600">Anthro New England 2025</strong>
                </h3>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-neutral-300">
                    Loving Anthro New England so far? Thanks for hanging out with me!<br/><br/>
                    I&apos;m a Canadian fur from Toronto, ON with a passion for cybersecurity. I am also a volunteer at Canfurence as a backend developper!
                    <br/><br/><i>Awoooooooo!</i>
                </p>
                <p style={{"fontSize": "12px", "marginTop": "2px"}}>Badge Scanned: {nfc_tag}</p>
                </div>
                {/* Modal footer */}
                <div className="flex items-center p-4 md:p-5 border-gray-200 rounded-b space-x-2">
                <a href="https://t.me/lynixfur" className="text-white bg-neutral-800 hover:bg-neutral-700 transition-colors focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"><i className="fa-brands fa-telegram"></i> Telegram</a>
                <a href="https://lynix.ca" className="text-white bg-purple-700 hover:bg-purple-800 transition-colors focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"><i className="fa-solid fa-paw"></i> Awooo!</a>
                </div>
            </div>
            </div>
        </div>       
        )
    } else {
        return null;
    }
}