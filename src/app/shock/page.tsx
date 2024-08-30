'use client';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation'


import moment, { duration } from "moment";
import dynamic from 'next/dynamic';

export default function ShockClient({ params }: { params: { id: string } }) {

    const [pinCode, setPinCode] = useState('');
    const [connecting, setConnecting] = useState(false);
    const [connected, setConnected] = useState(false);
    const [hasConnected, setHasConnected] = useState(false);

    // Shock Values
    const [shockIntensity, setShockIntensity] = useState(0);
    const [shockDuration, setShockDuration] = useState("");
    const [shockCountdown, setShockCountdown] = useState(0);
    const [unleashedMode, setUnleashedMode] = useState(false);


    const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 6 && !isNaN(Number(value))) {
            setPinCode(value);
        }
    }

    const handleConnect = () => {
        console.log('Connecting to the Freakshock Device...');

        setHasConnected(true);

        // Set Connecting
        setConnecting(true);

        // Set Connection Timeout
        setTimeout(() => {
            if(connected) return;

            console.warn('Device is not responding...');
            console.warn('The freakshock device is possibly offline?');
            setConnecting(false);
            setConnected(true);
        }, 5000);
    }

    useEffect(() => {
        if(unleashedMode)
            setShockDuration("Unlimited");
    }, [unleashedMode]);



    return (
        <main className="flex justify-center mt-10">
            <div className="mb-16 flex flex-col items-center justify-center container">
                {/* Loading Spinner */}
                <h1 className="text-4xl font-semibold text-cyan-500">Freakshock Controller</h1>
                <p className="text-neutral-300 mt-3 text-center text-sm">Version v3.1.38</p>
                {connecting && hasConnected && !connected && <p className="text-neutral-400 mt-5"><i className="fa-solid fa-spinner animate-spin mr-1"></i> Connecting to the Freakshock Device...</p>}
                {!connecting && hasConnected && !connected && <p className="text-neutral-400 mt-5"><i className="fa-solid fa-spinner animate-spin mr-1"></i> Device is not responding...</p>}


                {/* Main Card - Auth */}
                {!hasConnected && <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex flex-col items-center justify-center border border-neutral-700 w-1/3 mt-10 min-h-[200px]">
                    <h1 className="text-4xl font-semibold text-neutral-500 text-center mt-5">Enter Auth Code</h1>
                    <p className="text-center mt-3 text-neutral-300 px-5">Please enter the 6-digit code that is displayed on the Freakshock Device.</p><br />
                    <input type="text" className="bg-neutral-800 text-4xl font-bold text-center w-full py-5" placeholder="000000" onChange={handlePinCodeChange} value={pinCode} />
                    <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full my-5" onClick={handleConnect}>Connect</button>
                </div>}

                {connected && <div className='w-full flex flex-col items-center'>
                    {/* Main Card - Controls */}
                    <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex flex-col items-center justify-center border border-neutral-700 w-1/3 mt-10 min-h-[200px]">
                        <h1 className="text-4xl font-semibold text-neutral-500 text-center mt-5">Lynix</h1>
                        <p className="text-center mt-3 text-neutral-300 px-5">Connected Freakhound Devices: 23</p><br />
                        <input type="text" className="bg-neutral-800 text-4xl font-bold text-center w-full py-5" placeholder="0%" />
                        <input type="text" className="bg-neutral-800 text-2xl font-bold text-center w-full py-3 mt-2" placeholder="0 Seconds" value={shockDuration} onChange={(e) => setShockDuration(e.target.value)} />

                        <div className="flex items-center justify-between my-5 space-x-5">
                            <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full">Vibrate</button>
                            <button className="bg-red-600 text-neutral-900 font-bold px-5 py-3 rounded-full text-4xl"><i className="fa-solid fa-bolt-lightning"></i></button>
                            <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full">Beep</button>
                        </div>

                        <hr />

                        <div className="flex items-center justify-between my-5">
                            <input type="number" className="bg-neutral-800 text-xl font-bold text-center py-3 rounded-l-full" placeholder="0" />
                            <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-r-full">Countdown Shock</button>
                        </div>

                        {/* Mode Tick Box */}
                        <div className="flex items-center justify-between my-5 space-x-5">
                            <input type="checkbox" className="w-5 h-5" onChange={() => setUnleashedMode(!unleashedMode)}/>
                            <span className="text-neutral-300">Enable Unleashed Mode (Ignores Duration)</span>
                        </div>
                    </div>
                    {/* Emergency Stop */}
                    <div className="bg-red-900 rounded-xl relative overflow-hidden flex flex-col items-center justify-center border border-red-700 w-1/3 mt-10 min-h-[200px]">
                        <h1 className="text-4xl font-semibold text-red-400 text-center mt-5">Emergency Stop</h1>
                        <p className="text-center mt-3 text-red-300 px-5">This will stop all shock operations immediately.</p><br />
                        <button className="bg-red-500 border-red-300 text-red-950 font-bold px-5 py-3 rounded-full"><i className="fa-solid fa-circle-stop mr-1"></i> Stop</button>
                    </div>
                </div>}

            </div>
        </main>
    );
}