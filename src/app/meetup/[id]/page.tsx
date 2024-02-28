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
    const [meetup, setMeetup]: any = useState(null);

    useEffect(() => {
        document.title = "Meetup - Furnal Equinox 2024";
        fetch(`/api/meetup/${params.id}`)
            .then(response => response.json())
            .then(data => setMeetup(data))
            .catch(error => console.error('Error:', error));
    }, [params.id]);

    if(!meetup) return (
        <main className="flex justify-center mt-10">
            <div className="mb-16 flex flex-col items-center justify-center container">
                {/* Loading Spinner */}
                
                <h1 className="font-semibold text-cyan-600 animate-pulse text-4xl text-center"><i className="fa-solid fa-spinner animate-spin"></i><br/><span className='text-xl'>Your meetup will be ready shortly!</span></h1>
            </div>
        </main>
    );

    return (
        <>
            <main className="flex justify-center mt-10">
                <div className="mb-16 flex flex-col items-start container">
                    <img src={meetup?.bannerImage} alt={meetup?.name} className="w-full h-96 object-cover object-center rounded-2xl mb-5" />
                    <h1 className="text-4xl font-semibold text-cyan-500">Meet {meetup?.originalCreator} at {meetup?.name}</h1>
                    <h3 className="text-neutral-200 text-2xl mt-5">Meetup at Furnal Equinox 2024</h3>
                    <p className="text-neutral-400 mt-2">{meetup?.description}</p>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-clock"></i> {moment(meetup?.start).format('MMMM Do YYYY, h:mm a')} - {moment(meetup?.end).format('MMMM Do YYYY, h:mm a')}</p>
                    <p className="text-neutral-400 mt-2"><i className="fa-solid fa-location-dot"></i> {meetup?.location}</p>
                    {/* Telegram Channel */}
                    {meetup?.telegramLink && <a href={meetup?.telegramLink} className="mt-5 inline-block bg-cyan-800 py-2 px-5 rounded-full text-neutral-100 font-semibold hover:bg-cyan-900 transition-colors">
                        Join Telegram Channel
                    </a>}
                    <br/>
                    <hr className="w-full border-t border-neutral-700 mt-10 mb-10"/>
                    {/* gRID 2 COLS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                        <div>
                        <h2 className="text-2xl font-semibold">Join this meetup!</h2>
                        <p className="text-neutral-400 mt-2">Signup to attend this event and meet {meetup?.originalCreator} and {meetup?.attendees.length} other furs!</p>
                        {/* Form with name, prefered meetup time and date */}
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
                            {/* List of attending furs */}
                            <p className="text-neutral-400 mt-2">{meetup?.attendees.length < 1 ? 'No one is attending this meetup yet!' : 'See whos attending the meetup OwO!'}</p>
                            <ul className="mt-5">
                                {meetup?.attendees.map((fur: any, index: number) => (
                                    <li key={index} className="text-neutral-400 text-xl mb-2">{fur?.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>  
                    <hr className="w-full border-t border-neutral-700 mt-10 mb-10"/>
                    <DynamicMap/>
                </div>
            </main>
        </>
    );
}