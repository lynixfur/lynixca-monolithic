"use client"

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation'


import moment from "moment";
import dynamic from 'next/dynamic';

export default function Home() {

    // Fetch panels from /events/fe2024/schedule.json
    const [panels, setPanels]: any = useState([]);
    const [fullPanels, setFullPanels] = useState([]); // [Full Schedule]
    const [rooms, setRooms]: any = useState([]);
    const [filter, setFilter] = useState("All"); // Add filter state
    const [currentPanels, setCurrentPanels] = useState([]); // State to hold currently active panels
    const currentPanelRef: any = useRef(null); // Ref for the current panel card

    useEffect(() => {
        fetch("/events/fe2024/schedule_fri.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                // Set Upcoming Next 3 Panels
                setPanels(data.sessions.slice(0, 10));

                // Set Full Schedule
                setFullPanels(data.sessions);

                // Set Rooms
                setRooms(data.rooms);
            });
    }, []);

    useEffect(() => {
        // Update current active panels when full panels or filter changes
        const now = moment();
        const activePanels = fullPanels.filter((panel: any) => {
            const panelStart = moment(panel.startsAt);
            const panelEnd = moment(panel.endsAt);
            return now.isBetween(panelStart, panelEnd);
        });
        setCurrentPanels(activePanels);
    }, [fullPanels, filter]);


    useEffect(() => {
        // Scroll to the current panel card when filter changes
        if (currentPanelRef.current) {
            currentPanelRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [filter]);

    // Function to handle filter change
    const handleFilterChange = (filterOption: string) => {
        setFilter(filterOption);
    };

    const searchParams = useSearchParams()
    const dash: any = searchParams.get("mode");


    const isDash = dash === 'lcmdash';


    return (
        <>
            <main className="flex justify-center mt-10">
                <div className="mb-16 flex flex-col items-start container">
                    <div className="bg-red-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 my-10">
                        <i className="fa-solid fa-exclamation-triangle mr-2" /> This is not an official convention application, this is just to make it easier to manage the panels during the event!
                    </div>
                    <h1 className="text-4xl font-semibold">Lynix Convention Manager - Furnal Equinox 2024</h1>
                    <p className="text-neutral-400 mt-2">LCM lets you organize meetups at the conventions you are attending, and lets you keep track of your schedule.</p>
                    {/* Foreach Panel Card */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {currentPanels.map((panel: any, index) => (
                            <div key={index} className="bg-neutral-800 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 mt-5 w-full">
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold">{panel.title}</h2>
                                    <p className="text-neutral-400 mt-2">{moment(panel.startsAt).format('dddd, h:mm:ss a')} - {moment(panel.endsAt).format('h:mm:ss a')}</p>
                                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i>  {rooms.find((room: { id: any; }) => room.id === panel.roomId) ? rooms.find((room: { id: any; }) => room.id === panel.roomId).name : "Loading..."}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <h1 className="text-3xl font-semibold mt-10">Full Schedule</h1>
                    <p className="text-neutral-400 mt-2">Explore the full schedule of panels for this weekend!</p>
                    {/* 4 Buttons Thu, Fri, Sat, Sun */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 md:w-auto w-full">
                        <button onClick={() => handleFilterChange("All")} className={`py-3 px-8 rounded-full text-neutral-100 font-semibold transition-colors ${filter === "All" ? "bg-cyan-800 hover:bg-cyan-900" : "bg-neutral-800 hover:bg-cyan-900"}`}>
                            All
                        </button>
                        <button onClick={() => handleFilterChange("Thursday")} className={`py-3 px-8 rounded-full text-neutral-100 font-semibold transition-colors ${filter === "Thursday" ? "bg-cyan-800 hover:bg-cyan-900" : "bg-neutral-800 hover:bg-cyan-900"}`}>
                            Thu
                        </button>
                        <button onClick={() => handleFilterChange("Friday")} className={`py-3 px-8 rounded-full text-neutral-100 font-semibold transition-colors ${filter === "Friday" ? "bg-cyan-800 hover:bg-cyan-900" : "bg-neutral-800 hover:bg-cyan-900"}`}>
                            Fri
                        </button>
                        <button onClick={() => handleFilterChange("Saturday")} className={`py-3 px-8 rounded-full text-neutral-100 font-semibold transition-colors ${filter === "Saturday" ? "bg-cyan-800 hover:bg-cyan-900" : "bg-neutral-800 hover:bg-cyan-900"}`}>
                            Sat
                        </button>
                        <button onClick={() => handleFilterChange("Sunday")} className={`py-3 px-8 rounded-full text-neutral-100 font-semibold transition-colors ${filter === "Sunday" ? "bg-cyan-800 hover:bg-cyan-900" : "bg-neutral-800 hover:bg-cyan-900"}`}>
                            Sun
                        </button>
                    </div>


                    {/* Foreach Panel Card */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {fullPanels.filter((panel: any) => {
                            if (filter === "All") {
                                return true;
                            } else {
                                // Filter by day
                                const panelDay = moment(panel.startsAt).format('dddd');
                                return panelDay === filter;
                            }
                        }).map((panel: any, index) => {
                            // Check if the panel is currently happening
                            const now = moment();
                            const panelStart = moment(panel.startsAt);
                            const panelEnd = moment(panel.endsAt);
                            const isCurrentPanel = now.isBetween(panelStart, panelEnd);

                            return (
                                <div key={index} ref={isCurrentPanel ? currentPanelRef : null} className={`bg-neutral-800 rounded-xl relative overflow-hidden flex items-stretch border mt-5 w-full ${isCurrentPanel ? 'border-cyan-700 shadow-lg shadow-cyan-700/50' : 'border-neutral-700'}`}>
                                    <div className="p-5">
                                        <h2 className="text-xl font-semibold">{panel.title}</h2>
                                        <p className="text-neutral-400 mt-2">{moment(panel.startsAt).format('dddd, h:mm:ss a')} - {moment(panel.endsAt).format('h:mm:ss a')}</p>
                                        <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i>  {rooms.find((room: { id: any; }) => room.id === panel.roomId) ? rooms.find((room: { id: any; }) => room.id === panel.roomId).name : "Loading..."}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </main>
        </>
    );
}