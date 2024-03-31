'use client';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation'


import moment from "moment";
import dynamic from 'next/dynamic';

// Thanks to Christophe for the dynamic import suggestion!
const DynamicMap = dynamic(() => import('@/components/Map'), {
    loading: () => <p>Loading Map...</p>,
    ssr: false,
})

export default function Meetup({ params }: { params: { id: string } }) {

    // Use Effect
    const [meetup, setMeetup]: any = useState([{}]);

    /*useEffect(() => {
        document.title = "Toronto Application - Rent with Lynix";
        fetch(`/api/v2/toronto/${params.id}`)
            .then(response => response.json())
            .then(data => setMeetup(data))
            .catch(error => console.error('Error:', error));
    }, [params.id]);*/

    if (!meetup) return (
        <main className="flex justify-center mt-10">
            <div className="mb-16 flex flex-col items-center justify-center container">
                {/* Loading Spinner */}

                <p className="text-neutral-400 mt-2"><i className="fa-solid fa-spinner animate-spin mr-1"></i> Loading great adventures...</p>
            </div>
        </main>
    );

    return (
        <>
            <main className="flex justify-center mt-10">
                <div className="mb-16 flex flex-col items-start container">
                    <img src="/hotel.jpg" alt={meetup?.name} className="w-full h-96 object-cover object-center rounded-2xl mb-5" />
                    <h1 className="text-4xl font-semibold text-cyan-500">Toronto, ON</h1>
                    <p className="text-neutral-400 mt-2">Join me in my journey of relocating to Grand Toronto Area (GTA), the friendliest and most multicultural city in the world! The home of Fural Equinox, my first furry convention!</p>
                    <div className="flex space-x-3">
                        <a href={meetup?.telegramLink} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                            <i className="fa-brands fa-telegram"></i> Telegram
                        </a>
                        <a href={meetup?.telegramLink} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                            <i className="fa-solid fa-newspaper"></i> Why Furnal Equinox 2024 changed my life?
                        </a>
                    </div>
                    {/* <p className="text-neutral-400 mt-2"><i className="fa-solid fa-clock"></i> {moment(meetup?.start).format('MMMM Do YYYY, h:mm a')} - {moment(meetup?.end).format('MMMM Do YYYY, h:mm a')}</p>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot"></i> {meetup?.location}</p>
                    
                    {meetup?.telegramLink && <a href={meetup?.telegramLink} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                        Join Telegram Channel
                    </a>}
                    <br/>
                    <hr className="w-full border-t border-neutral-700 mt-10 mb-10"/>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                        <div>
                        <h2 className="text-2xl font-semibold">Join this meetup!</h2>
                        <p className="text-neutral-400 mt-2">Signup to attend this event and meet {meetup?.originalCreator} and {meetup?.attendees.length} other furs!</p>

                            <form className="mt-5">
                                <div className="mb-5"> 
                                    <label htmlFor="name" className="block text-neutral-400 mb-1">Your Fursona Name</label>
                                    <input type="text" id="name" className="w-full bg-neutral-800 p-3 outline-none rounded-md border border-neutral-700 text-neutral-200 placeholder-neutral-400" />
                                </div>
                                <button type="submit" className="bg-cyan-800 py-3 px-8 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">Signup</button>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Attending Furs ({meetup?.attendees.length})</h2>

                            <p className="text-neutral-400 mt-2">{meetup?.attendees.length < 1 ? 'No one is attending this meetup yet!' : 'See whos attending the meetup OwO!'}</p>
                            <ul className="mt-5">
                                {meetup?.attendees.map((fur: any, index: number) => (
                                    <li key={index} className="text-neutral-400 text-xl mb-2">{fur?.name}</li>
                                ))}
                            </ul>
                        </div>
                                </div> */}
                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Why move to Greater Toronto Area?
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-400 mt-2">Toronto is one of the city that amazed me as soon as I got off the UP Express torwards Union Station! The city is so vibrant and full of life, and the people are so friendly! I'm looking for a place to stay in the city, and I'm also looking for a job in the tech industry. Toronto Area is a multicultural destination and a landmark of canada with the CN Tower. Night life is a great addition for anyone in IT or a Tech Field as stores and services stays open past 9:00PM. There's also a variety of events to attend year around and you're always on your feets moving! TTC, GO Transit, UP Express are great transportation methods to travel around the city, easier than in Moncton!</p>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            What am I looking for?
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-400 mt-2">
                        - Easy Transportation<br />
                        - Friendlyness and Multiculturalism<br />
                        - Job Opportunities<br />
                        - A place to stay<br />
                        - Events and Activities<br />
                        - A community to join<br />
                        - Furry Community<br />
                    </p>


                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Budget and Expenses
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-spinner animate-spin mr-1"></i> Loading great adventures...</p>


                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Transportation
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full mt-10">
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <h2 className="text-xl font-semibold">GO Transit</h2>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <h2 className="text-xl font-semibold">TTC</h2>
                            </div>
                        </div>
                    </div>
                    <p className="text-neutral-400 mt-5"><i className="fa-solid fa-spinner animate-spin mr-1"></i> Loading great adventures...</p>


                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Work
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-spinner animate-spin mr-1"></i> Loading great adventures...</p>


                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Local Events
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    {/* Store Grid with products of $0.00 CAD  */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full mt-10">
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <h2 className="text-xl font-semibold">Furnal Equinox</h2>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="p-5">
                                <h2 className="text-xl font-semibold">Jinx's Furmeets</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full mt-10">
                        <span className="flex-shrink mr-5 text-cyan-600 font-bold text-3xl">
                            Checklist for Moving
                        </span>
                        <div className="flex-grow border-t border-dashed border-green-900" />
                    </div>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-spinner animate-spin mr-1"></i> Loading great adventures...</p>


                    <hr className="w-full border-t border-dashed border-green-900 mt-10 mb-10" />
                </div>
            </main>
        </>
    );
}