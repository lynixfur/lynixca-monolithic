"use client";

import React, { useState, useEffect } from 'react';

export default function SmallAlert() {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const targetDate = new Date('August 1, 2024');
        const now = new Date();
        const differenceInTime = targetDate.getTime() - now.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        setDaysLeft(differenceInDays);
    }, []);

    return (
        <>
                        <div className="bg-red-800 py-3 px-5 font-semibold -ml-1 md:mt-0 md:px-24 flex items-center">
                    <i className="fa-solid fa-exclamation-triangle text-2xl mr-3" /> <p>Awoo Network Service Status: Due to a data loss, some services may be temporarily unavailable. Please try again later.</p>
                </div>
        <div className='hidden'>
            {daysLeft > 0 && (
                <div className="bg-cyan-800 py-2 px-5 font-semibold -ml-1 md:mt-0 md:px-24">
                    <i className="fa-solid fa-calendar mr-2" /> Lynix is going to Canfurence 2024 in {daysLeft} days, a new adventure begins in the city of Ottawa, ON!
                </div>
            )}

            {daysLeft < 0 && (
                <div className="bg-green-800 py-2 px-5 font-semibold -ml-1 md:mt-0 md:px-24">
                    <i className="fa-solid fa-paw mr-2" /> Canfurence 2024 is live now, and fun awaits! Join us in Ottawa, ON! Add me on telegram to meet me! @lynixfur
                </div>
            )}
        </div></>
    );
}
