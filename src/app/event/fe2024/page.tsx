"use client"

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation'


// START: Preserve spaces to avoid auto-sorting
//import "leaflet/dist/leaflet.css";

//import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

//import "leaflet-defaulticon-compatibility";

import moment from "moment";

// END: Preserve spaces to avoid auto-sorting
//import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Home() {

    // Fetch panels from /events/fe2024/schedule.json
    const [panels, setPanels]: any = useState([]);
    const [fullPanels, setFullPanels] = useState([]); // [Full Schedule]
    const [rooms, setRooms]: any = useState([]);
    const [filter, setFilter] = useState("All"); // Add filter state
    const [currentPanels, setCurrentPanels] = useState([]); // State to hold currently active panels
    const currentPanelRef: any = useRef(null); // Ref for the current panel card

    useEffect(() => {
        fetch("/events/fe2024/schedule.json")
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
            <main className="">
                <div className="mb-16 flex flex-col items-start">
                    {isDash ? (<><h1 className="text-4xl font-semibold">Lynix Convention Manager</h1>
                        <h3 className="text-neutral-200 mt-2 text-2xl mt-5">Furnal Equinox 2024</h3>
                        <p className="text-neutral-400 mt-2">LCM lets you organize meetups at the conventions you are attending, and lets you keep track of your schedule.</p>

                        <br /><br />
                        <h1 className="text-3xl font-semibold">Live Location</h1>
                        {/*<MapContainer
                            className="mt-5 w-full h-[300px]"
                            preferCanvas={true}
                            center={[51.505, -0.09]}
                            zoom={11}
                            scrollWheelZoom={true}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    Lynix&apos;s current location at FE 2024
                                </Popup>
                            </Marker>
    </MapContainer>*/}
                        <p className="text-red-400 mt-2"><i className="fa-solid fa-triangle-exclamation"></i> Notice: Sharing your live location will share it publicly!</p>
                        {/* Share Location Button */}
                        <button className="mt-5 inline-block bg-cyan-800 py-3 px-8 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                            Share Location
                        </button>
                        <br /><br />
                        <h1 className="text-3xl font-semibold">Upcoming Meetups</h1>
                        <p className="text-neutral-400 mt-2">No meetups found.</p>
                        <br /><br /></>) : <>
                        <h1 className="text-4xl font-semibold">Furnal Equinox 2024</h1>
                        <h3 className="text-neutral-200 mt-2 text-2xl mt-5">Toronto, ON</h3>
                        <p className="text-neutral-400 mt-2">{"Furnal Equinox (often abbreviated as FE) is one of the premier furry conventions in the world, held annually in Toronto, Ontario, Canada.  As Canada's largest furry convention, it's a vibrant hub of creativity, expression, and fun for the furry community."}</p>
                        <div className="flex space-x-3">
                            <div className="py-1.5 px-3 mt-5 rounded-md bg-neutral-800 border border-neutral-700">
                                Boop Count: 0
                            </div>
                            <div className="py-1.5 px-3 mt-5 rounded-md bg-neutral-800 border border-neutral-700">
                                (NFC) Meetup Count: 0
                            </div>
                        </div>
                        <br /><br />

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-14">
                            <div>
                                <h1 className="text-3xl font-semibold">Lynix&apos;s Current Location</h1>
                                <p className="text-neutral-400 mt-2">Current Panel: {"Unauthorized"}</p>
                                <div className="bg-red-900 py-2 px-5 rounded-xl font-semibold -ml-1 md:mt-3 my-10">
                                    <i className="fa-solid fa-warning mr-2" /> You do not have current permission to view lynix&apos;s live location, please contact Lynix.
                                </div>
                                {/*<MapContainer
                                    className="mt-5 w-full h-[300px]"
                                    preferCanvas={true}
                                    center={[43.70011, -79.4163]}
                                    zoom={11}
                                    scrollWheelZoom={true}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[43.70011, -79.4163]}>
                                        <Popup>
                                            Lynix&apos;s current location at FE 2024
                                        </Popup>
                                    </Marker>
</MapContainer>*/}
                            </div>
                            <div>
                                <h1 className="text-3xl font-semibold">Request a Meetup with Lynix</h1>
                                <p className="text-neutral-400 mt-2">Want to meet with me and potentially receive a sticker? Reserve your spot</p>

                                {/* Name Field + Date Time + Location */}
                                <div className="mt-5">
                                    <label className="block text-neutral-400">Your Name</label>
                                    <input type="text" className="w-full bg-neutral-800 rounded-xl p-3 text-neutral-100 mt-1 placeholder-neutral-200" placeholder="Your Name" />

                                    <label className="block text-neutral-400 mt-5">Date & Time</label>
                                    <input type="datetime-local" className="w-full bg-neutral-800 rounded-xl p-3 text-neutral-100 mt-1 " />

                                    <label className="block text-neutral-400 mt-5">Location</label>
                                    <input type="text" className="w-full bg-neutral-800 rounded-xl p-3 text-neutral-100 mt-1 placeholder-neutral-200" placeholder="Location" />

                                    <button className="mt-5 inline-block bg-cyan-800 py-3 px-8 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                                        Request Meetup
                                    </button>

                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </>}
                    <h1 className="text-3xl font-semibold">Current Panels</h1>
                    <p className="text-neutral-400 mt-2">Jump into panels happening now!</p>

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