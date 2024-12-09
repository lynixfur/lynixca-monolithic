"use client"

import moment from "moment";
import { useState } from "react";

export default function Events() {
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    const events = [
        {
            "id": 54,
            "name": "Anthrocon 2025",
            "image": "/AC2025.jpg",
            "startDate": "2025-07-03",
            "endDate": "2025-07-06",
            "location": "Pittsburgh, PA (USA)",
            "confirmed": false
        },
        {
            "id": 53,
            "name": "Anthro New England 2025",
            "image": "/ane2025.jpg",
            "startDate": "2025-01-16",
            "endDate": "2025-01-19",
            "location": "Boston, MA (USA)",
            "confirmed": true
        },
        {
            "id": 2,
            "name": "Furnal Equinox 2025",
            "image": "/events/previews/FE2025-no-text.png",
            "startDate": "2025-04-01",
            "endDate": "2025-04-04",
            "location": "Toronto, ON",
            "confirmed": true
        },
        {
            "id": 1,
            "name": "Canfurence 2025",
            "image": "/events/previews/canfur-2025.png",
            "startDate": "2025-08-01",
            "endDate": "2025-08-04",
            "location": "Ottawa, ON",
            "confirmed": false,
            "cancelled": true
        },
        {
            "id": 3,
            "name": "Furry Weekend Atlanta 2025",
            "image": "/events/previews/fwa25.png",
            "startDate": "2025-05-01",
            "endDate": "2025-05-04",
            "location": "Atlanta, GA (USA)",
            "confirmed": false,
            "cancelled": true
        },
        {
            "id": 4,
            "name": "Smoke in the Smoke (Sept 2024)",
            "image": "/bg/_DSC3167.webp",
            "startDate": "2024-09-14",
            "endDate": "2024-09-14",
            "location": "Toronto, ON",
            "confirmed": true,
            "hasPanels": false,
            "isFurry": true,
            "panels": [],
            "boops": 7
        },
        {
            "id": 4,
            "name": "Canfurence 2024",
            "image": "/events/previews/canfur2024.jpg",
            "startDate": "2024-08-01",
            "endDate": "2024-08-04",
            "location": "Ottawa, ON",
            "confirmed": false
        },
        {
            "id": 5,
            "name": "Furnal Equinox 2024",
            "image": "/2024-Background-Signature.png",
            "startDate": "2024-03-01",
            "endDate": "2024-03-04",
            "location": "Toronto, ON",
            "confirmed": false
        },
        {
            "id": 6,
            "name": "Furality Umbra",
            "image": "/events/previews/umbra.jpeg",
            "startDate": "2024-06-01",
            "endDate": "2024-06-04",
            "location": "VRChat",
            "confirmed": false
        },
        {
            "id": 7,
            "name": "Furality Sylva",
            "image": "/events/previews/sylva.jpg",
            "startDate": "2024-09-01",
            "endDate": "2024-09-04",
            "location": "VRChat",
            "confirmed": false
        },
        {
            "id": 8,
            "name": "Furality Luma Festival",
            "image": "/luma.png",
            "startDate": "2023-12-01",
            "endDate": "2023-12-04",
            "location": "VRChat",
            "confirmed": false
        }
    ];

    const now = moment(); // Current date and time

    const upcomingEvents = events.filter(event => moment(event.startDate).isAfter(now));
    const pastEvents = events.filter(event => moment(event.endDate).isBefore(now));

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            <div className="relative isolate overflow-hidden bg-gray-900">
                <img
                    src="/toronto_lookout.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="w-full px-6 py-24 sm:py-32 lg:px-8" style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Events
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Discover upcoming events in my hometown, along with those I’ll be attending. Stay updated on exciting furry gatherings and local happenings.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Start Filters */}
                    <div className="flex md:w-2/4">
                        <div className="flex rounded-2xl shadow-sm w-full">
                            <div className="relative flex-grow focus-within:z-10">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="mobile-search-candidate"
                                    id="mobile-search-candidate"
                                    className="block w-full rounded-none rounded-l-2xl border-0 py-1.5 pl-10 text-gray-400 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:outline-none sm:hidden bg-neutral-900"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="desktop-search-candidate"
                                    id="desktop-search-candidate"
                                    className="hidden bg-neutral-900 w-full rounded-none rounded-l-2xl border-0 py-1.5 pl-10 text-sm leading-6 text-gray-400 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:outline-none sm:block"
                                    placeholder="Search events or conventions"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="relative -ml-px inline-flex items-center bg-neutral-900 gap-x-1.5 rounded-r-2xl px-3 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-neutral-700 hover:bg-gray-50"
                            >
                                <svg
                                    className="-ml-0.5 h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Sort
                                <svg
                                    className="-mr-1 h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* End Filters */}


                    {searchTerm &&
                        <>
                            <div className="relative mt-10">
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-start">
                                    <span className="bg-neutral-950 pr-3 text-xl font-bold leading-6 text-gray-300">Results</span>
                                </div>
                            </div>

                            {/* Error message */}
                            {filteredEvents.length < 1 &&
                                <div className="mt-10">
                                    <p className="text-neutral-400">There are no events available right now.</p>
                                </div>
                            }

                            {/* Event Results */}
                            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                {filteredEvents.map((event: any) => (
                                    <div key={event.name} className="bg-neutral-900 rounded-2xl relative overflow-hidden flex items-stretch border border-neutral-700">
                                        <img src={event.image} alt="Event Image" className="hidden md:block w-64 object-cover" />
                                        <div className="p-5">
                                            <h2 className="text-2xl font-semibold">{event.name}</h2>
                                            <p className="text-neutral-400 mt-2">{moment(event.startDate).format('MMM D, YYYY')} · {moment(event.endDate).format('MMM D, YYYY')}</p>
                                            <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i> {event.location}</p>
                                            {event.confirmed == true &&
                                                <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4">
                                                    <i className="fa fa-circle text-xs mr-2 text-green-600" aria-hidden="true"></i>
                                                    Confirmed
                                                </p>
                                            }
                                            {event.confirmed == false && event.cancelled != true &&
                                                <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4">
                                                    <i className="fa fa-circle text-xs mr-2 text-cyan-600" aria-hidden="true"></i>
                                                    Upcoming
                                                </p>
                                            }
                                            {event.cancelled == true &&
                                                <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4">
                                                    <i className="fa fa-circle text-xs mr-2 text-red-600" aria-hidden="true"></i>
                                                    Cancelled
                                                </p>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </>
                    }

                    {!searchTerm && <>
                        <div className="relative mt-10">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-start">
                                <span className="bg-neutral-950 pr-3 text-xl font-bold leading-6 text-gray-300">Upcoming Events</span>
                            </div>
                        </div>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            {upcomingEvents.map((event: any) => (
                                <div key={event.name} className="bg-neutral-900 rounded-2xl relative overflow-hidden flex items-stretch border border-neutral-700">
                                    <img src={event.image} alt="Event Image" className="hidden md:block w-64 object-cover" />
                                    <div className="p-5">
                                        <h2 className="text-2xl font-semibold">{event.name}</h2>
                                        <p className="text-neutral-400 mt-2">{moment(event.startDate).format('MMM D, YYYY')} · {moment(event.endDate).format('MMM D, YYYY')}</p>
                                        <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i> {event.location}</p>
                                        {event.confirmed == true &&
                                            <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4">
                                                <i className="fa fa-circle text-xs mr-2 text-green-600" aria-hidden="true"></i>
                                                Confirmed
                                            </p>
                                        }
                                        {event.confirmed == false && event.cancelled != true &&
                                            <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4">
                                                <i className="fa fa-circle text-xs mr-2 text-cyan-600" aria-hidden="true"></i>
                                                Upcoming
                                            </p>
                                        }
                                        {event.cancelled == true &&
                                            <p className="text-neutral-400 mt-2 font-semibold flex items-center space-x-4">
                                                <i className="fa fa-circle text-xs mr-2 text-red-600" aria-hidden="true"></i>
                                                Cancelled
                                            </p>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative mt-10">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-start">
                                <span className="bg-neutral-950 pr-3 text-xl font-bold leading-6 text-gray-300">Past Events</span>
                            </div>
                        </div>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            {pastEvents.map((event: any) => (
                                <div key={event.name} className="bg-neutral-900 rounded-2xl relative overflow-hidden flex items-stretch border border-neutral-700">
                                    <img src={event.image} alt="Event Image" className="hidden md:block w-64 object-cover" />
                                    <div className="p-5">
                                        <h2 className="text-2xl font-semibold">{event.name}</h2>
                                        <p className="text-neutral-400 mt-2">{moment(event.startDate).format('MMM D, YYYY')} · {moment(event.endDate).format('MMM D, YYYY')}</p>
                                        <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot mr-1"></i> {event.location}</p>
                                        <p className="text-neutral-400 mt-2"><i className="fa-solid fa-paw mr-1"></i> {event.boops ? event.boops : 0} Boops</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>}
                </div>
            </div>
        </main>
    );
}
