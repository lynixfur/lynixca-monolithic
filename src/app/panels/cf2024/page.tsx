"use client"

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation'


import moment from "moment";
import dynamic from 'next/dynamic';

// Thanks to Christophe for the dynamic import suggestion!
const DynamicMap = dynamic(() => import('@/components/Map'), {
    loading: () => <p>Loading Map...</p>,
    ssr: false,
})

export default function Home() {

    // Fetch panels from /events/fe2024/schedule.json
    const [panels, setPanels]: any = useState([]);
    const [fullPanels, setFullPanels] = useState([]); // [Full Schedule]
    const rooms = [
        {
            "id": 1,
            "sortOrder": 10,
            "resourceType": "Room",
            "title": "Ballroom A",
            "roomName": "Ballroom A",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 2,
            "sortOrder": 20,
            "resourceType": "Room",
            "title": "Ballroom B\/C",
            "roomName": "Ballroom B\/C",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 3,
            "sortOrder": 30,
            "resourceType": "Room",
            "title": "Victoria",
            "roomName": "Victoria",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 4,
            "sortOrder": 40,
            "resourceType": "Room",
            "title": "Chaudiere",
            "roomName": "Chaudiere",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 6,
            "sortOrder": 60,
            "resourceType": "Room",
            "title": "Frontenac",
            "roomName": "Frontenac",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 7,
            "sortOrder": 70,
            "resourceType": "Room",
            "title": "Panorama",
            "roomName": "Panorama",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 8,
            "sortOrder": 80,
            "resourceType": "Room",
            "title": "Pinnacle",
            "roomName": "Pinnacle",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 9,
            "sortOrder": 90,
            "resourceType": "Room",
            "title": "Richelieu",
            "roomName": "Richelieu",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 10,
            "sortOrder": 100,
            "resourceType": "Room",
            "title": "York",
            "roomName": "York",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 11,
            "sortOrder": 110,
            "resourceType": "Room",
            "title": "Joliet",
            "roomName": "Juliet",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 12,
            "sortOrder": 120,
            "resourceType": "Room",
            "title": "Bytowne",
            "roomName": "Bytowne",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 13,
            "sortOrder": 130,
            "resourceType": "Room",
            "title": "Cartier",
            "roomName": "Cartier",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 14,
            "sortOrder": 140,
            "resourceType": "Room",
            "title": "LeBreton",
            "roomName": "LeBreton",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        },
        {
            "id": 17,
            "sortOrder": 170,
            "resourceType": "Room",
            "title": "Seignory",
            "roomName": "Seignory",
            "venueName": "Delta Ottawa City Centre",
            "occupancy": null
        }
    ];
    const [filter, setFilter] = useState("All"); // Add filter state
    const [currentPanels, setCurrentPanels] = useState([]); // State to hold currently active panels
    const currentPanelRef: any = useRef(null); // Ref for the current panel card

    useEffect(() => {
        fetch("/events/canfur.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                // Sort the panels by start date using Moment.js
                const sortedPanels = data.sort((a: any, b: any) => {
                    return moment(a.startDate).diff(moment(b.startDate));
                });

                // Set Upcoming Next 3 Panels
                setPanels(sortedPanels.slice(0, 10));



                // Set Full Schedule
                setFullPanels(sortedPanels);

                // Set Rooms
                //setRooms(data.rooms);
            });
    }, []);

    useEffect(() => {
        // Update current active panels when full panels or filter changes
        const now = moment();
        const activePanels = fullPanels.filter((panel: any) => {
            const panelStart = moment(panel.start);
            const panelEnd = moment(panel.end);
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
            <main className="flex justify-center mt-10 md:px-10 px-3">
                <div className="mb-16 flex flex-col items-start container">
                    <div className="bg-red-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-0 my-10">
                        <i className="fa-solid fa-exclamation-triangle mr-2" /> This is not an official convention application, this is just to make it easier to manage the panels during the event!
                    </div>
                    <h1 className="text-4xl font-semibold">Lynix Convention Manager - Canfurence 2024</h1>
                    <p className="text-neutral-400 mt-2 mb-10">LCM lets you organize meetups at the conventions you are attending, and lets you keep track of your schedule.</p>
                    <h1 className="text-3xl font-semibold">Happening Now</h1>
                    {/* Foreach Panel Card */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
                        {currentPanels.map((panel: any, index) => (
                            <div key={index} className="border border-cyan-700 shadow-lg shadow-cyan-700/50 bg-neutral-800 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 mt-5 w-full">
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold">{panel.title}</h2>
                                    <p className="text-neutral-400 mt-2">{moment(panel.start).format('dddd, h:mm:ss a')} - {moment(panel.end).format('h:mm:ss a')}</p>
                                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i>  {rooms.find((room: { id: any; }) => room.id === panel.resourceId) ? rooms.find((room: { id: any; }) => room.id === panel.roomId)?.title : "Loading..."}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <h1 className="text-3xl font-semibold">Full Schedule</h1>
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
                                const panelDay = moment(panel.start).format('dddd');
                                return panelDay === filter;
                            }
                        }).map((panel: any, index) => {
                            // Check if the panel is currently happening
                            const now = moment();
                            const panelStart = moment(panel.start);
                            const panelEnd = moment(panel.end);
                            const isCurrentPanel = now.isBetween(panelStart, panelEnd);

                            return (
                                <div key={index} ref={isCurrentPanel ? currentPanelRef : null} className={`bg-neutral-800 rounded-xl relative overflow-hidden flex items-stretch border mt-5 w-full ${isCurrentPanel ? 'border-cyan-700 shadow-lg shadow-cyan-700/50' : 'border-neutral-700'}`}>
                                    <div className="p-5">
                                        <h2 className="text-xl font-semibold">{panel.title}</h2>
                                        <p className="text-neutral-400 mt-2">{moment(panel.start).format('dddd, h:mm:ss a')} - {moment(panel.end).format('h:mm:ss a')}</p>
                                        <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i>  {rooms.find(room => room.id == panel.resourceId)?.roomName}</p>
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