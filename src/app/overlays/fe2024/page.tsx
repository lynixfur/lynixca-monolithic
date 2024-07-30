"use client"
import { useEffect, useState } from "react";
import moment from 'moment-timezone';

export default function LCMOverlay() {

    // Countdown to 13th March 2024 Timer

    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [clock, setClock] = useState('');


    // Each 30 minutes get the weather from Toronto, ON using Openweather API
    const [weather, setWeather] = useState('');
    const [icon, setIcon]: any = useState(null);


    const weatherIcons: any = {
        Clear: 'fa-sun',
        Clouds: 'fa-cloud',
        Snow: 'fa-cloud-showers-heavy',
        Rain: 'fa-cloud-showers-heavy',
        Mist: 'fa-smog',
        // Add more conditions and icons as needed
    };

    useEffect(() => {
        const fetchWeather = async () => {
            //const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto,ca');
            const data = await response.json();
            //(data.weather[0].main);
            // Get Temperature
            setWeather((data.main.temp - 273.15).toFixed().toString());
            if(data.weather[0].main == 'Clear') {
                const currentHour = new Date().getHours();
                const isNight = currentHour >= 18 || currentHour < 6;
                setIcon(isNight ? 'fa-moon' : 'fa-sun');
            } else {
                setIcon(weatherIcons[data.weather[0].main]);
            }
        };

        fetchWeather(); // Fetch weather immediately on component mount

        const intervalId = setInterval(fetchWeather, 30 * 60 * 1000); // Fetch weather every 30 minutes

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);


    useEffect(() => {
        const countdown = setInterval(() => {
            const targetDate = new Date('March 13, 2024');
            const now = new Date();
            const differenceInTime = targetDate.getTime() - now.getTime();

            const differenceInSeconds = Math.floor(differenceInTime / 1000);
            setSecondsLeft(differenceInSeconds % 60);

            const differenceInMinutes = Math.floor(differenceInSeconds / 60);
            setMinutesLeft(differenceInMinutes % 60);

            const differenceInHours = Math.floor(differenceInMinutes / 60);
            setHoursLeft(differenceInHours % 24);

            const differenceInDays = Math.floor(differenceInHours / 24);
            setDaysLeft(differenceInDays);

            // Get current time in Toronto, ON
            const date = moment().tz('America/Toronto');
            const formattedDate = date.format('hh:mma, MMM D');
            setClock(formattedDate);

        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <main >
            <div className="bg-neutral-800 border-b-2 border-neutral-700 p-3 flex items-center space-x-20">
                <div className="flex items-center w-[700px] overflow-hidden">
                    <img src="/lynix.png" alt="lynix" className="h-[50px] w-[50px] mr-3 -mt-1.5" />
                    <div>
                        <h1 className="text-2xl font-bold text-cyan-500">Countdown of Furnal Equinox 2024</h1>
                        <p className="text-xl">Up Next: Blood on the Clocktower (Wed, Mar 6)</p> {/*Lynix's Paws Unboxing (Fri, Mar 8)*/}
                    </div>
                </div>


                {/* Sylva Weather Status */}
                <p className="text-4xl text-neutral-300 flex items-center space-x-4"><i className={`fa-solid ` + icon}></i> <span className="text-2xl font-bold">{weather == null ? <i className="fa-solid fa-spinner animate-spin"></i> : weather + `°C`}</span></p>

                {/* Sylva Localized Time */}
                <p className="text-4xl text-neutral-300 flex items-center space-x-4"><i className="fa-solid fa-clock"></i> <span className="text-2xl font-bold">{clock}</span></p>

                {/* Sylva Localized Time */}
                <p className="text-4xl text-neutral-300 flex items-center space-x-4"><i className="fa-solid fa-users"></i> <span className="text-2xl font-bold">0</span></p>

                {/* Sylva Localized Time */}
                <p className="text-4xl text-neutral-300 items-center space-x-4 hidden"><i className="fa-solid fa-paw"></i> <span className="text-2xl font-bold">1</span></p>
            </div>
            <div className="bg-red-800 text-white text-2xl p-5">
                <i className="fa-solid fa-triangle-exclamation"></i> LCM Module for Streaming is now disabled. No stream will be available at Furnal Equinox 2024.
            </div>
            <div className="bg-orange-800 mt-0.5 text-white text-2xl p-5 hidden">
                <i className="fa-solid fa-triangle-exclamation"></i> Taming the Virtual Jungle presentation have been postponed due to potential bad weather. New date and time will be announced soon.
            </div>

            {/* Countdown Component */}
            <div className="fixed w-full h-screen flex items-center justify-center -mt-[250px]">
                <div className="p-3 bg-black bg-opacity-90 rounded-2xl text-red-300 font-bold">
                    <h1 className="text-6xl animate-pulse">Stream Ending Soon!</h1>
                </div>
            </div>

            {/* Approach Lynix Instructions */}
            <img src="/2024-Badge-Meaning.png" alt="lynix" className="h-[300px] rounded-2xl fixed bottom-20 right-20 hidden" />

            {/* Peeking Lynix */}
            <img src="/lynix.png" alt="lynix" className="h-[300px] rounded-2xl fixed bottom-0 left-20" />
        </main>
    );

}