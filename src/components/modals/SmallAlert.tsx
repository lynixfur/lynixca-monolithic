"use client";

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function SmallAlert() {
    const [daysLeft, setDaysLeft] = useState(0);
    const [boop, setBoop] = useState(0);

    const pathname = usePathname();

    useEffect(() => {
        const targetDate = new Date('March 9, 2024');
        const now = new Date();
        const differenceInTime = targetDate.getTime() - now.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        setDaysLeft(differenceInDays);
    }, []);

    // Fetch boop count from API evrey 5 seconds
    useEffect(() => {
        // Initial fetch
        fetch('https://lynix.ca/api/fursuitapi/boop_count')
            .then(response => response.json())
            .then(data => setBoop(data.boop));

        const interval = setInterval(() => {
            fetch('https://lynix.ca/api/fursuitapi/boop_count')
                .then(response => response.json())
                .then(data => setBoop(data.boop));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (pathname != "/boop_counter") {
        return (
            <div>
                {daysLeft > 0 && (
                    <div className="bg-cyan-950 py-2 px-5 font-semibold -ml-1 md:mt-0 md:px-24">
                        <i className="fa-solid fa-calendar mr-2" /> Lynix is going to FE2024 in {daysLeft} days, a new adventure begins in the city of Toronto, ON!
                    </div>
                )}

                {daysLeft < 0 && (
                    <a href="/events/fe2024"><div className="bg-cyan-950 py-2 px-5 font-semibold -ml-1 md:mt-0 md:px-24">
                        <i className="fa-solid fa-paw mr-2" /> FE2024 is ongoing, meet me in downtown Toronto at Harbour Front! Add me on telegram to meet me! @lynixfur
                        <span className="bg-neutral-950 rounded py-1.5 px-3 ml-3">{boop ? boop : 0} Boops</span>
                    </div></a>
                )}
            </div>
        );
    }
}
