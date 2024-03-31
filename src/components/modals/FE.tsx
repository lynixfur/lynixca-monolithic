"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function ordinalSuffix(i: number) {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

export default function FE() {

    const [data, setData] = useState<string[]>([]);
    const [boop, setBoop] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://lynix.ca/api/fursuitapi/valid_tokens');
                const result = await response.json();

                setData(result);
            } catch (error) {
                console.log(data)
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const searchParams = useSearchParams()
    let nfc_tag: string = searchParams.get("nfc") || "Not Available"; // Get NFC Tag from URL

    useEffect(() => {
        console.log("TAG: " + nfc_tag);
        // Check if valid tokens are available
        console.log(data);
        setVisible(data.includes(nfc_tag));
        console.log("DEBUG: " + data.includes(nfc_tag));

        // Fetch boop count from API
        fetch('https://lynix.ca/api/fursuitapi/boop_count')
            .then(response => response.json())
            .then(data => setBoop(data.boop));
    }, [data]);

    if (visible) {
        return (
            <div id="default-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black bg-opacity-80" onClick={() => setVisible(false)}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative rounded-lg shadow bg-neutral-950 border border-neutral-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                            <h3 className="text-xl font-semibold text-white">
                                <img src="/lynix.png" alt="lynix" className="w-14 h-14 rounded-full mb-2" />
                                Hewwo! I&apos;m Lynix! Thanks for meeting me at <br /><strong className="text-cyan-600">Furnal Equinox 2024</strong>
                            </h3>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-neutral-300">
                                Loving Furnal Equinox so far? Thanks for hanging out and chatting earlier. 😊<br /><br />
                                I&apos;m a Canadian fur from Moncton, NB with a passion for cybersecurity and all things techy hence my NFC paws. I am also a volunteer at Furality Inc. as a backend developper!
                                <br /><br /><i>Awoooooooo! You are the <span className="text-cyan-600 font-bold">{ordinalSuffix(boop)}</span> person that visited my website during FE!</i>
                            </p>
                            <p style={{ "fontSize": "12px", "marginTop": "2px" }}>Badge Scanned: {nfc_tag}</p>
                        </div>
                        {/* Modal footer */}
                        <div className="flex items-center p-4 md:p-5 border-gray-200 rounded-b space-x-2">
                            <a href="https://t.me/lynixfur" className="text-white bg-neutral-800 hover:bg-neutral-700 transition-colors focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"><i className="fa-brands fa-telegram"></i> Telegram</a>
                            <button onClick={() => setVisible(false)} className="text-white bg-cyan-700 hover:bg-cyan-800 transition-colors focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"><i className="fa-solid fa-paw"></i> Awooo!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}