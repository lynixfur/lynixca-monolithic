import { useEffect, useState } from "react";

export default function LCMOverlay() {

    // Countdown to 13th March 2024 Timer

    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const targetDate = new Date('March 13, 2024');
        const now = new Date();
        const differenceInTime = targetDate.getTime() - now.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        setDaysLeft(differenceInDays);
    }, []);

    return (
        <main className="bg-neutral-950">
            <div>
                
            </div>
        </main>
    );

}