"use client";

import React, { useState, useEffect } from 'react';

export default function SmallAlert() {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const targetDate = new Date('March 13, 2024');
        const now = new Date();
        const differenceInTime = targetDate.getTime() - now.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        setDaysLeft(differenceInDays);
    }, []);

    return (
        <div>
            {daysLeft > 0 && (
                <div className="bg-cyan-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 my-10">
                    <i className="fa-solid fa-bullhorn mr-2" /> Lynix is going to Toronto in {daysLeft} days! Get ready for the meetup, convention stickers will be provided!
                </div>
            )}

            {daysLeft < 0 && (
                <div className="bg-green-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 my-10">
                    <i className="fa-solid fa-paw mr-2" /> The FE2024 is live now, and fun awaits! Join us in Toronto, ON!
                </div>
            )}
        </div>
    );
}
